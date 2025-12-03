'use client';

import { create } from 'zustand';
import type { ComponentInstance, ComponentCategory, ComponentType } from '@/types';
import { calculateGroupedLayout } from '@/lib/canvas/auto-layout';
import {
  COMPONENT_REGISTRY,
  getComponentSize,
  type ComponentRegistryEntry,
} from '@/registry/component-registry';
import { MANIFESTS } from '@/registry/manifests';

// ============================================================================
// 组件展示顺序（从 Manifest 自动获取有 canvas 配置的组件）
// ============================================================================

/**
 * 组件展示顺序
 * 按类别和功能分组，便于用户浏览
 */
const COMPONENT_ORDER: string[] = [
  // 交互控件
  'button', 'toggle', 'checkbox', 'switch',
  // 徽章/标签
  'badge', 'kbd',
  // 表单输入
  'input', 'textarea', 'label',
  // 范围控件
  'slider', 'progress', 'radio-group',
  // 状态展示
  'spinner', 'skeleton', 'avatar',
  // 基础容器
  'popover', 'tooltip',
  // 布局
  'separator', 'aspect-ratio', 'scroll-area', 'card', 'collapsible',
  // Blocks
  'alert-dialog', 'tabs', 'dropdown-menu', 'select', 'combobox', 'pagination', 'form', 'table', 'data-table',
  'toggle-group', 'button-group', 'alert', 'breadcrumb', 'input-group',
  'input-otp', 'drawer', 'sheet', 'hover-card', 'context-menu', 'calendar',
  'date-picker', 'carousel', 'chart', 'navigation-menu', 'resizable', 'sonner', 'accordion', 'dialog', 'sidebar',
];

// ============================================================================
// 组件定义生成（基于 Registry 的变体展示）
// ============================================================================

type ComponentDef = Omit<ComponentInstance, 'x' | 'y'>;

/**
 * 从 Registry 生成组件实例
 *
 * 规则：
 * - 每个组件只创建一个实例，使用默认变体
 * - 不展开 variant 和 size
 */
function generateComponentDefinitions(): ComponentDef[] {
  const definitions: ComponentDef[] = [];

  for (const componentType of COMPONENT_ORDER) {
    const entry = COMPONENT_REGISTRY[componentType];
    if (!entry) continue;

    // 从 manifest 获取尺寸（新系统）
    const baseSize = getComponentSize(componentType) || { width: 120, height: 50 };

    // 每个组件只创建一个实例，使用默认变体
    definitions.push(createComponentDef(
      entry,
      componentType as ComponentType,
      baseSize,
      entry.defaultProps.variant as string | undefined,
      0
    ));
  }

  return definitions;
}

/** 创建单个组件定义 */
function createComponentDef(
  entry: ComponentRegistryEntry,
  componentType: ComponentType,
  baseSize: { width: number; height: number },
  variant: string | undefined,
  index: number
): ComponentDef {
  const variantSuffix = variant ? `-${variant}` : '';
  const id = `${componentType}${variantSuffix}-${index + 1}`;

  // 合并默认 props 和变体
  const props = {
    ...entry.defaultProps,
    ...(variant ? { variant } : {}),
  };

  // 生成标签
  const label = variant && variant !== 'default'
    ? `${entry.label} (${variant})`
    : entry.label;

  return {
    id,
    type: componentType,
    category: entry.category,
    label,
    labelKey: entry.labelKey,
    props,
    width: baseSize.width,
    height: baseSize.height,
  };
}

const componentDefinitions = generateComponentDefinitions();

// ============================================================================
// 使用自动布局计算初始组件位置（按组件类型分组）
// ============================================================================

function createInitialComponents(): ComponentInstance[] {
  // 为每个组件添加 category 用于分组布局
  // 使用大类别（atoms/blocks）分组，而不是单个类型
  const layoutItems = componentDefinitions.map((def) => ({
    id: def.id,
    width: def.width,
    height: def.height,
    category: def.category, // 按大类别分组（atoms/blocks）
  }));

  // 宽松布局：充足呼吸感
  const positions = calculateGroupedLayout(layoutItems, {
    startX: 80,
    startY: 80,
    maxRowWidth: 1400,
    gapX: 36,           // 宽松水平间距
    gapY: 44,           // 宽松垂直间距
    categoryGap: 64,    // 类别间充足留白
  });

  // 创建位置映射
  const positionMap = new Map(positions.map((p) => [p.id, p]));

  // 合并定义和位置
  return componentDefinitions.map((def) => {
    const pos = positionMap.get(def.id) || { x: 0, y: 0 };
    return {
      ...def,
      x: pos.x,
      y: pos.y,
    };
  });
}

const initialComponents = createInitialComponents();

// 基础尺寸映射：用于主题切换时恢复原始尺寸
const baseSizesByType = new Map<string, { width: number; height: number }>();
for (const def of componentDefinitions) {
  if (!baseSizesByType.has(def.type)) {
    baseSizesByType.set(def.type, { width: def.width, height: def.height });
  }
}

// ============================================================================
// Store 类型定义
// ============================================================================

/** 尺寸修正映射：组件类型 -> { width, height } */
export type SizeOverrides = Record<string, { width?: number; height?: number }>;

interface CanvasStore {
  // UI State
  showAboutModal: boolean;
  toggleAboutModal: () => void;
  showPreviewModal: boolean;
  togglePreviewModal: () => void;
  inspectorMode: 'component' | 'theme_config';
  setInspectorMode: (mode: 'component' | 'theme_config') => void;

  // Selection State
  selectedId: string | null;
  select: (id: string | null) => void;

  // Content State
  components: ComponentInstance[];
  filter: 'all' | ComponentCategory;
  setFilter: (filter: 'all' | ComponentCategory) => void;
  updateComponent: (id: string, updates: Partial<ComponentInstance>) => void;

  // Layout
  /** 重新计算所有组件的位置（主题切换时调用） */
  relayout: (sizeOverrides?: SizeOverrides) => void;

  // Props
  updateComponentProp: (id: string, propName: string, value: unknown) => void;
}

// ============================================================================
// Store 实现
// ============================================================================

export const useCanvasStore = create<CanvasStore>()((set) => ({
  // UI State
  showAboutModal: false,
  toggleAboutModal: () => set((state) => ({ showAboutModal: !state.showAboutModal })),
  showPreviewModal: false,
  togglePreviewModal: () => set((state) => ({ showPreviewModal: !state.showPreviewModal })),
  inspectorMode: 'component',
  setInspectorMode: (mode) => set({ inspectorMode: mode }),

  // Selection State
  selectedId: null,
  select: (id) => set({ selectedId: id, inspectorMode: id ? 'component' : 'component' }),

  // Content State
  components: initialComponents,
  filter: 'all',
  setFilter: (filter) => set({ filter }),
  updateComponent: (id, updates) =>
    set((state) => ({
      components: state.components.map((c) =>
        c.id === id ? { ...c, ...updates } : c
      ),
    })),

  // Layout
  relayout: (sizeOverrides) =>
    set((state) => {
      // 计算每个组件的有效尺寸
      // 优先级：主题 canvasSizes > 基础尺寸（componentDefinitions）
      const layoutItems = state.components.map((comp) => {
        const override = sizeOverrides?.[comp.type];
        const baseSize = baseSizesByType.get(comp.type);
        return {
          id: comp.id,
          width: override?.width ?? baseSize?.width ?? comp.width,
          height: override?.height ?? baseSize?.height ?? comp.height,
          category: comp.category, // 按大类别分组（atoms/blocks）
        };
      });

      // 重新计算布局（宽松布局）
      const positions = calculateGroupedLayout(layoutItems, {
        startX: 80,
        startY: 80,
        maxRowWidth: 1400,
        gapX: 36,
        gapY: 44,
        categoryGap: 64,
      });

      // 创建位置映射
      const positionMap = new Map(positions.map((p) => [p.id, p]));

      // 更新组件位置和尺寸
      return {
        components: state.components.map((comp) => {
          const pos = positionMap.get(comp.id);
          const override = sizeOverrides?.[comp.type];
          const baseSize = baseSizesByType.get(comp.type);
          if (!pos) return comp;
          return {
            ...comp,
            x: pos.x,
            y: pos.y,
            width: override?.width ?? baseSize?.width ?? comp.width,
            height: override?.height ?? baseSize?.height ?? comp.height,
          };
        }),
      };
    }),

  // Props
  updateComponentProp: (id, propName, value) =>
    set((state) => ({
      components: state.components.map((c) => {
        if (c.id !== id) return c;
        const newProps = { ...c.props, [propName]: value };
        // 同步 label 字段 (用于 Canvas 显示)
        const newLabel = propName === 'children' && typeof value === 'string' ? value : c.label;
        return { ...c, props: newProps, label: newLabel };
      }),
    })),
}));