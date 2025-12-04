import type { MessageKey } from '@/lib/i18n/messages';

// ============================================================================
// 主题相关类型
// ============================================================================

/**
 * 组件样式扩展配置
 * 用于主题覆盖组件的 tailwind-variants 配置
 */
export interface ComponentStyleConfig {
  /** 继承的基础配置（可选，通常在运行时注入） */
  extend?: unknown;
  /** 插槽样式覆盖 */
  slots?: Record<string, string | string[]>;
  /** 变体样式覆盖 */
  variants?: Record<string, Record<string, Record<string, string | string[]>>>;
  /** 颜色配置（用于图表等需要多色的组件） */
  colors?: {
    primary?: string;
    secondary?: string;
    tertiary?: string;
    quaternary?: string;
    quinary?: string;
    [key: string]: string | undefined;
  };
}

/**
 * 主题组件配置
 * 每个组件可以有自己的样式扩展
 */
export interface ThemeComponentsConfig {
  Button?: ComponentStyleConfig;
  Input?: ComponentStyleConfig;
  [key: string]: ComponentStyleConfig | undefined;
}

/** 画布组件尺寸配置 */
export type CanvasSizeConfig = Record<string, { width?: number; height?: number }>;

/** 主题定义 */
export interface ThemeDefinition {
  id: string;
  name: string;
  nameKey?: MessageKey;
  isDark?: boolean;
  cssVars?: Record<string, string>;
  colors?: Record<string, string>;
  /** @deprecated 使用 components 替代 */
  slots?: Record<string, Record<string, string | undefined> | undefined>;
  /** 组件样式扩展配置 */
  components?: ThemeComponentsConfig;
  playgroundGlobalCss?: string;
  /** 画布组件尺寸覆盖（主题切换时重新布局） */
  canvasSizes?: CanvasSizeConfig;
}

// ============================================================================
// 组件相关类型
// ============================================================================

/** 组件类型 */
export type ComponentType =
  // Atoms
  | 'button'
  | 'input'
  | 'login-block'
  | 'alert'
  | 'aspect-ratio'
  | 'avatar'
  | 'badge'
  | 'checkbox'
  | 'kbd'
  | 'label'
  | 'progress'
  | 'radio-group'
  | 'scroll-area'
  | 'separator'
  | 'skeleton'
  | 'slider'
  | 'spinner'
  | 'switch'
  | 'textarea'
  | 'toggle'
  | 'popover'
  | 'tooltip'
  // Blocks
  | 'alert-dialog'
  | 'tabs'
  | 'dropdown-menu'
  | 'select'
  | 'pagination'
  | 'form'
  | 'toggle-group'
  | 'button-group'
  | 'breadcrumb'
  | 'input-group'
  | 'sheet'
  | 'drawer'
  | 'hover-card'
  | 'context-menu'
  | 'data-table'
  | 'date-picker'
  | 'input-otp'
  | 'calendar'
  | 'carousel'
  | 'combobox'
  | 'navigation-menu'
  | 'resizable'
  | 'sonner';

/**
 * 组件类别
 *
 * 层级规则（扁平依赖）：
 * - atoms: 叶子节点，无组件依赖
 * - blocks/sections/templates: 只依赖 atoms，不能互相依赖
 */
export type ComponentCategory = 'atoms' | 'blocks' | 'sections' | 'templates';

/** 组件实例 */
export interface ComponentInstance {
  id: string;
  type: ComponentType;
  category: ComponentCategory;
  label: string;
  labelKey?: MessageKey;
  /**
   * 组合的 atoms 组件 ID 列表
   * - 仅 blocks/sections/templates 使用
   * - atoms 级别此字段为空
   * - 遵循扁平依赖：只引用 atoms，不引用其他 blocks/sections/templates
   */
  atoms?: string[];
  /** 组件 Props (variant, size, children 等) */
  props?: Record<string, unknown>;
  /** 子组件状态覆盖 (用于 blocks/sections/templates 配置内部 atoms) */
  childrenState?: Record<string, Partial<ComponentInstance>>;
  x: number;
  y: number;
  width: number;
  height: number;
  isChild?: boolean;
  parentId?: string;
  childKey?: string;
}
