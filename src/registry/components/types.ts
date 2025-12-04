/**
 * Component Registry Types
 *
 * 组件注册表类型定义
 */

import type { ComponentType as ReactComponentType } from 'react';
import type { MessageKey } from '@/lib/i18n/messages';

// ============================================================================
// 变体选项类型
// ============================================================================

/** 组件变体选项 */
export interface VariantOption {
  value: string;
  label: string;
  labelKey?: MessageKey;
}

/** RadioGroup 选项 */
export interface RadioGroupOptionValue {
  value: string;
  label: string;
  labelKey?: string;
}

/** Tabs 项目选项 */
export interface TabItemValue {
  value: string;
  label: string;
  labelKey?: string;
  content: string;
  contentKey?: string;
  disabled?: boolean;
}

/** Select 选项 */
export interface SelectOptionValue {
  value: string;
  label: string;
  labelKey?: string;
  disabled?: boolean;
}

/** Breadcrumb 项目选项 */
export interface BreadcrumbItemValue {
  label: string;
  labelKey?: string;
  href?: string;
  isCurrentPage?: boolean;
}

// ============================================================================
// Props 元数据类型
// ============================================================================

/** 组件 Props 元数据 */
export interface PropMeta {
  name: string;
  type: 'select' | 'text' | 'boolean' | 'number' | 'json';
  label: string;
  labelKey?: MessageKey;
  options?: VariantOption[];
  defaultValue?: string | boolean | number | RadioGroupOptionValue[] | TabItemValue[] | SelectOptionValue[] | BreadcrumbItemValue[];
  defaultValueKey?: MessageKey;
}

// ============================================================================
// 组件注册表 Entry 类型
// ============================================================================

/** 组件注册信息 */
export interface ComponentRegistryEntry {
  type: string;
  label: string;
  labelKey?: MessageKey;
  category: 'atoms' | 'blocks' | 'sections' | 'templates';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: ReactComponentType<any>;
  /** 基础 tv 配置，供主题扩展 */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  baseConfig: any;
  props: PropMeta[];
  defaultProps: Record<string, unknown>;
  /** 可用特效列表 */
  availableEffects: string[];
  /** 依赖的 Atoms 列表（仅 Blocks 使用） */
  atoms?: readonly string[];
  /** 依赖的 Blocks 列表（仅 Blocks 使用） */
  blocks?: readonly string[];
}
