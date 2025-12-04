'use client';

import { useEffect, useMemo, createElement, useRef } from 'react';
import { useElementSize } from '@/hooks/use-element-size';
import {
  Tldraw,
  TLBaseShape,
  BaseBoxShapeUtil,
  HTMLContainer,
  type TLShapeId,
  DefaultMinimap,
  useEditor,
} from 'tldraw';
import 'tldraw/tldraw.css';
import { useCanvasStore } from '@/stores/canvas-store';
import { useThemeStore } from '@/stores/theme-store';
import { useI18n } from '@/lib/i18n/use-i18n';
import { HUD } from './HUD'; // Stage 2 Component
import { Dock } from './Dock'; // Dock Component
// 使用自动生成的 registry（从 COMPONENT_MAP 构建，支持 i18n Demo 组件）
import { getComponentEntry } from '@/registry/component-registry';
import { getLocalizedPropValue } from '@/lib/i18n/utils';
import type { MessageKey } from '@/lib/i18n/messages';

// Shape 类型定义
type ComponentCardShape = TLBaseShape<
  'component-card',
  { w: number; h: number; componentId: string }
>;

// 将 hex 颜色转换为 rgba
const hexToRgba = (hex: string, alpha: number) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    return `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${alpha})`;
  }
  return `rgba(139, 92, 246, ${alpha})`;
};

// ADR-002 v2: 物理同源性 - Canvas 不再外部注入 classNames
// 组件内部调用 useTheme() 获取样式，与导出代码走完全相同的代码路径

const ComponentCard = ({ shape }: { shape: ComponentCardShape }) => {
  const component = useCanvasStore((s) =>
    s.components.find((c) => c.id === shape.props.componentId)
  );
  const selectedId = useCanvasStore((s) => s.selectedId);
  const select = useCanvasStore((s) => s.select);
  const { theme, getMergedCssVars } = useThemeStore();
  const { t } = useI18n();
  const isSelected = component?.id === selectedId;

  // 用于测量组件实际渲染高度（使用 ResizeObserver 监听尺寸变化）
  const componentRef = useRef<HTMLDivElement>(null);
  const { height: componentHeight } = useElementSize(componentRef);

  // 获取主题的 primary 颜色用于选中指示器 (优先使用自定义配置)
  const cssVars = getMergedCssVars();
  const primaryColor = cssVars['--primary'] || theme.colors?.['--primary'] || '#8b5cf6';

  if (!component) {
    return (
      <HTMLContainer id={shape.id}>
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-white/30 text-[length:var(--text-sm)]">{t('canvasEmpty')}</span>
        </div>
      </HTMLContainer>
    );
  }

  // 点击处理
  const handlePointerDown = (e: React.PointerEvent) => {
    e.stopPropagation();
    select(component.id);
  };

  // 从 Registry 获取组件
  const entry = getComponentEntry(component.type);

  // 渲染真实组件或 fallback
  const renderComponent = () => {
    let element: React.ReactNode;

    if (entry) {
      // ---------------------------------------------------------------------------
      // ADR-002 v2: 物理同源性 - Canvas 不再外部注入 classNames
      //
      // 核心原则：Canvas 和导出代码走完全相同的代码路径
      // 组件内部调用 useTheme() → 获取主题配置 → 计算样式
      // 不是"计算结果相同"，而是"代码路径相同"
      // ---------------------------------------------------------------------------

      // 合并默认 props 和实例 props（不再注入 classNames）
      const props: Record<string, any> = {
        ...entry.defaultProps,
        ...component.props,
        // ADR-002 v2: 移除 classNames 注入，组件内部自己调用 useTheme()
      };

      // 国际化处理：针对默认文案进行翻译
      entry.props.forEach((propMeta) => {
        props[propMeta.name] = getLocalizedPropValue(props[propMeta.name], propMeta, t);
      });

      // 特殊处理：options 数组的 labelKey 国际化
      if (props.options && Array.isArray(props.options)) {
        props.options = props.options.map((opt: { label: string; value: string; labelKey?: string }) => ({
          ...opt,
          label: opt.labelKey ? t(opt.labelKey as MessageKey) : opt.label,
        }));
      }

      // 特殊处理：items 数组的 labelKey/contentKey 国际化 (用于 Tabs 等组件)
      if (props.items && Array.isArray(props.items)) {
        props.items = props.items.map((item: { label: string; content: string; labelKey?: string; contentKey?: string; [key: string]: unknown }) => ({
          ...item,
          label: item.labelKey ? t(item.labelKey as MessageKey) : item.label,
          content: item.contentKey ? t(item.contentKey as MessageKey) : item.content,
        }));
      }

      return createElement(entry.component, props);
    } else {
      // Fallback: 未注册的组件显示占位符
      return (
        <div
          className="px-4 py-2 rounded border text-[length:var(--text-sm)] font-medium"
          style={{
            background: 'var(--surface-1)',
            borderColor: 'var(--border)',
            color: 'var(--foreground)',
          }}
        >
          {component.label}
        </div>
      );
    }
  };

  return (
    <HTMLContainer id={shape.id}>
      <div
        role="article"
        aria-label={`${component.type} component: ${component.label}`}
        aria-selected={isSelected}
        aria-description={`Click to select and configure this ${component.type} component in the Inspector panel.`}
        data-testid={`canvas-component-${component.id}`}
        data-component-type={component.type}
        data-component-id={component.id}
        className="w-full h-full flex items-center justify-center cursor-pointer"
        style={{ pointerEvents: 'all' }}
        onPointerDown={handlePointerDown}
      >
        {/* 包裹组件和指示器，让指示器跟随组件下沿 */}
        <div className="relative inline-flex flex-col items-center">
          {/* 渲染真实组件，用 ref 测量实际高度 */}
          <div
            ref={componentRef}
            style={{
              // 为使用 w-full 的组件提供明确宽度
              width: ['separator', 'progress', 'slider', 'aspect-ratio', 'scroll-area'].includes(component.type)
                ? `${component.width}px`
                : undefined,
            }}
          >
            {renderComponent()}
          </div>
          {/* 选中指示器 - 使用主题色，基于测量的组件高度定位 */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 h-[2px] transition-all duration-300 ${
              isSelected ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              top: componentHeight > 0 ? `${componentHeight + 8}px` : undefined,
              width: isSelected ? `${Math.min(component.width * 0.6, 80)}px` : '0px',
              background: `linear-gradient(90deg, ${hexToRgba(primaryColor, 0)} 0%, ${primaryColor} 30%, ${primaryColor} 70%, ${hexToRgba(primaryColor, 0)} 100%)`,
              filter: isSelected ? `drop-shadow(0 0 6px ${hexToRgba(primaryColor, 0.8)})` : 'none',
            }}
          />
        </div>
      </div>
    </HTMLContainer>
  );
};

class ComponentCardShapeUtil extends BaseBoxShapeUtil<ComponentCardShape> {
  static override type = 'component-card' as const;
  override canEdit = () => false;
  override canResize = () => false;
  override canBind = () => false;
  override canSnap = () => false;
  override canCrop = () => false;
  override canScroll = () => false;

  getDefaultProps(): ComponentCardShape['props'] {
    return { w: 140, h: 50, componentId: '' };
  }

  component(shape: ComponentCardShape) {
    return <ComponentCard shape={shape} />;
  }

  indicator() {
    return null;
  }
}

const shapeUtils = [ComponentCardShapeUtil];

// Minimap 包装组件 - 必须在 Tldraw 内部才能访问 editor context
function MinimapWrapper() {
  const editor = useEditor();
  const { theme, customTokens } = useThemeStore();

  // 使用 theme.id 和 customTokens 作为 key，强制在主题切换或配置变更时重新挂载 minimap
  // 这是因为 tldraw minimap 内部canvas生成后不会自动响应外部 CSS 变量变化
  const minimapKey = `minimap-${theme.id}-${JSON.stringify(customTokens)}`;

  if (!editor) return null;

  return (
    <div className="absolute bottom-6 left-6 z-40 playground-minimap">
      <DefaultMinimap key={minimapKey} />
    </div>
  );
}

export function Canvas() {
  // 订阅 customTokens 以便自定义变量改变时重新渲染背景和网格
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { theme, customTokens, getMergedCssVars } = useThemeStore();
  const cssVars = getMergedCssVars();
  const bgColor = cssVars['--background'] || theme.colors?.['--background'] || '#030712';
  const primaryColor = cssVars['--primary'] || theme.colors?.['--primary'] || '#8b5cf6';

  // 将 hex 颜色转换为 rgba
  const hexToRgba = (hex: string, alpha: number) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      return `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${alpha})`;
    }
    return `rgba(139, 92, 246, ${alpha})`;
  };

  const dotColor = hexToRgba(primaryColor, 0.15);

  // 同步 Store 组件到 Tldraw Editor
  // 这是一个内部组件，必须在 Tldraw 上下文中使用
  function ShapeSyncEffect() {
    const editor = useEditor();

    // 分别订阅 components 和 filter，避免在选择器中创建新数组引用
    const allComponents = useCanvasStore((s) => s.components);
    const filter = useCanvasStore((s) => s.filter);
    const relayout = useCanvasStore((s) => s.relayout);

    // 订阅主题 ID 和 canvasSizes，用于触发 relayout
    const themeId = useThemeStore((s) => s.theme.id);
    const canvasSizes = useThemeStore((s) => s.theme.canvasSizes);

    // 使用 useMemo 稳定过滤后的数组引用，只在 allComponents 或 filter 变化时重新计算
    const components = useMemo(() => {
      if (filter === 'all') return allComponents;
      return allComponents.filter((c) => c.category === filter);
    }, [allComponents, filter]);

    // 初始化标记，用于首次 zoomToFit
    const hasInitialized = useRef(false);
    const lastThemeId = useRef(themeId);

    // 主题切换时触发 relayout
    useEffect(() => {
      if (lastThemeId.current !== themeId) {
        lastThemeId.current = themeId;
        // 延迟执行，确保主题 CSS 变量已经更新
        requestAnimationFrame(() => {
          // 传递主题的 canvasSizes 配置，用于调整组件尺寸
          relayout(canvasSizes);
          // 保持当前缩放级别，不自动 zoomToFit
        });
      }
    }, [themeId, canvasSizes, relayout, editor]);

    // 监听组件列表、筛选器和设备变体的变化
    useEffect(() => {
      if (!editor) return;

      // 1. 获取当前应该显示的组件 ID 集合
      const validComponentIds = new Set(components.map((c) => c.id));

      // 2. 获取当前画布上所有的组件形状
      const currentPageShapes = editor.getCurrentPageShapes();
      const existingComponentShapes = currentPageShapes.filter(
        (s) => s.type === 'component-card'
      ) as unknown as ComponentCardShape[];

      // 3. 删除多余的形状
      const shapesToDelete = existingComponentShapes
        .filter((shape) => !validComponentIds.has(shape.props.componentId))
        .map((shape) => shape.id);

      if (shapesToDelete.length > 0) {
        // 先解锁要删除的形状，因为 isLocked 会阻止删除
        shapesToDelete.forEach((shapeId) => {
          const shape = editor.getShape(shapeId as TLShapeId);
          if (shape?.isLocked) {
            editor.updateShape({ id: shapeId as TLShapeId, type: shape.type, isLocked: false });
          }
        });
        editor.deleteShapes(shapesToDelete);
      }

      // 4. 创建缺失的形状或更新现有的
      components.forEach((comp) => {
        const shapeId = `shape:${comp.id}` as TLShapeId;
        const existingShape = editor.getShape(shapeId);

        if (!existingShape) {
          // 如果形状不存在，创建它
          editor.createShape({
            id: shapeId,
            type: 'component-card',
            x: comp.x,
            y: comp.y,
            isLocked: true,
            props: {
              w: comp.width,
              h: comp.height,
              componentId: comp.id,
            },
          });
        } else {
          // 如果形状存在，仅在位置/大小发生实质变化时更新
          const currentProps = existingShape.props as ComponentCardShape['props'];
          if (
            Math.abs(existingShape.x - comp.x) > 1 ||
            Math.abs(existingShape.y - comp.y) > 1 ||
            currentProps.w !== comp.width ||
            currentProps.h !== comp.height
          ) {
            editor.updateShape({
              id: shapeId,
              type: 'component-card',
              x: comp.x,
              y: comp.y,
              props: {
                w: comp.width,
                h: comp.height,
                componentId: comp.id,
              },
            });
          }
        }
      });

      // 首次加载时设置 100% 缩放，组件以原始尺寸显示
      if (!hasInitialized.current && components.length > 0) {
        hasInitialized.current = true;
        // 延迟执行，确保 shapes 已经创建完成
        requestAnimationFrame(() => {
          // 重置为 100% 缩放，组件显示原始尺寸
          editor.resetZoom();
        });
      }
    }, [editor, components, filter]); // 依赖 components 和 filter

    return null;
  }

  return (
    <main
      role="main"
      aria-label="Component Design Canvas - Visual workspace for designing and previewing UI components"
      data-testid="canvas-main"
      className="playground-main w-full h-full relative flex flex-col"
    >
      {/* Canvas Layer (Flex Grow) */}
      {/*
        注意：不再展开 theme.colors 作为内联样式！
        CSS 变量由 PlaygroundThemeProvider 注入到 :root，
        内联样式会覆盖 :root 的定义，导致自定义配置无法生效。
        只设置 Tldraw 特定的背景相关样式。
      */}
      <section
        role="region"
        aria-label="Interactive Canvas - Pan, zoom, and click on components to select them"
        data-testid="canvas-region"
        className="flex-1 relative overflow-hidden"
        style={{
          '--tl-background': bgColor,
          '--tl-bg': bgColor,
          background: bgColor,
        } as React.CSSProperties}
      >
        <Tldraw
          shapeUtils={shapeUtils}
          hideUi
          inferDarkMode={false}
          options={{ maxPages: 1 }}
          components={{ ContextMenu: null }}
        >
          {/* HUD 需要访问 Editor Context，所以移到这里 */}
          <HUD />
          <MinimapWrapper />
          <ShapeSyncEffect />
          
          {/* Dock Floating over Canvas - Moved inside Tldraw to access useEditor */}
          <Dock />
        </Tldraw>

        <style>{`
          .tl-background {
            background: ${bgColor} !important;
            background-image: radial-gradient(circle at 1px 1px, ${dotColor} 1px, transparent 1px) !important;
            background-size: 20px 20px !important;
          }
          .tl-canvas {
            background: transparent !important;
          }
          /* 学习目的：隐藏 tldraw 水印 */
          .tl-watermark_SEE-LICENSE,
          [class*="watermark"] {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
          }
        `}</style>
      </section>
    </main>
  );
}
