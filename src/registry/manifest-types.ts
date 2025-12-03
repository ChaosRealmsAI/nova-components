/**
 * Component Manifest Types
 *
 * 定义组件清单的类型结构
 * 每个组件的 manifest.ts 都遵循此类型
 *
 * 这是组件的单一数据源（Single Source of Truth）
 * 包含：导出配置 + 画布配置
 */

import type { ComponentCategory } from '@/types';
import type { MessageKey } from '@/lib/i18n/messages';

// ============================================================================
// 主题配置类型
// ============================================================================

/**
 * 主题配置映射
 */
export interface ThemeConfigMapping {
  /** 组件名（如 ScrollArea, ScrollBar） */
  componentName: string;
  /** 配置变量名（如 scrollAreaConfig） */
  configName: string;
}

// ============================================================================
// 画布配置类型
// ============================================================================

/** 组件变体选项 */
export interface VariantOption {
  value: string;
  label: string;
  labelKey?: MessageKey;
}

/** 组件 Props 元数据 */
export interface PropMeta {
  name: string;
  type: 'select' | 'text' | 'boolean' | 'number' | 'json';
  label: string;
  labelKey?: MessageKey;
  options?: VariantOption[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultValue?: any;
  defaultValueKey?: MessageKey;
}

/** 画布展示配置 */
export interface CanvasConfig {
  /** 组件在画布中的默认尺寸 */
  size: {
    width: number;
    height: number;
  };
  /** 组件可编辑的 Props */
  props: PropMeta[];
  /** Props 默认值 */
  defaultProps: Record<string, unknown>;
  /** 可用特效列表 */
  availableEffects?: string[];
}

// ============================================================================
// 组件清单
// ============================================================================

/**
 * 组件清单 - 单一数据源
 */
export interface ComponentManifest {
  /** 组件类型标识（kebab-case，如 scroll-area） */
  type: string;

  /** 组件名（PascalCase，如 ScrollArea） */
  name: string;

  /** 组件类别 */
  category: ComponentCategory;

  /** 组件标签（用于画布抽屉显示，可选，默认使用 name） */
  label?: string;

  /** 组件标签的 i18n key */
  labelKey?: MessageKey;

  // --------------------------------------------------------------------------
  // 导出配置
  // --------------------------------------------------------------------------

  /** 源码文件路径（相对于组件目录） */
  files: {
    /** 主组件文件 */
    component: string;
    /** 配置文件 */
    config?: string;
  };

  /** 需要导出的主题配置 */
  themeConfigs: ThemeConfigMapping[];

  /** 主题配置所在文件（相对于 themes/{themeId}/） */
  themeFile: string;

  /** 使用的 CSS 变量列表 */
  cssVars: string[];

  /** 依赖的其他组件类型 */
  dependencies: string[];

  /** 导出选项 */
  exportOptions?: {
    /** 是否不需要 children（使用默认内容） */
    noChildren?: boolean;
    /** 自定义 JSX 模板（用于复合组件如 InputOTP） */
    customJsx?: string;
    /** 自定义导入列表（配合 customJsx 使用，如 ['InputOTP', 'InputOTPGroup'] ） */
    customImports?: string[];
    /** 额外的导入语句（如第三方库 lucide-react） */
    extraImports?: string;
  };

  // --------------------------------------------------------------------------
  // 画布配置
  // --------------------------------------------------------------------------

  /** 画布展示配置（可选，不配置则不在画布显示） */
  canvas?: CanvasConfig;
}

/**
 * 组件清单注册表
 */
export type ManifestRegistry = Record<string, ComponentManifest>;
