/**
 * Component Registry - 自动生成
 *
 * 从 Manifest + ComponentMap 自动构建完整的组件注册表
 * 不需要手动维护！
 */

import type { ComponentType as ReactComponentType } from 'react';
import { MANIFESTS } from './manifests';
import { COMPONENT_MAP } from './component-map';
import type { PropMeta, VariantOption } from './manifest-types';
import type { MessageKey } from '@/lib/i18n/messages';

// ============================================================================
// 类型定义
// ============================================================================

/** 组件注册信息 */
export interface ComponentRegistryEntry {
  type: string;
  label: string;
  labelKey?: MessageKey;
  category: 'atoms' | 'blocks' | 'sections' | 'templates';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: ReactComponentType<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  baseConfig: any;
  props: PropMeta[];
  defaultProps: Record<string, unknown>;
  availableEffects: string[];
  /** 依赖的 Atoms 列表（仅 Blocks 使用） */
  atoms?: readonly string[];
}

// ============================================================================
// 自动构建 Registry
// ============================================================================

function buildRegistry(): Record<string, ComponentRegistryEntry> {
  const registry: Record<string, ComponentRegistryEntry> = {};

  for (const [type, manifest] of Object.entries(MANIFESTS)) {
    // 跳过没有 canvas 配置的组件
    if (!manifest.canvas) continue;

    // 获取组件引用
    const componentEntry = COMPONENT_MAP[type];
    if (!componentEntry) {
      console.warn(`[Registry] Component "${type}" has canvas config but no component map entry`);
      continue;
    }

    // 构建 registry entry
    registry[type] = {
      type: manifest.type,
      label: manifest.label || manifest.name,
      labelKey: manifest.labelKey,
      category: manifest.category,
      component: componentEntry.component,
      baseConfig: componentEntry.baseConfig,
      props: manifest.canvas.props,
      defaultProps: manifest.canvas.defaultProps,
      availableEffects: manifest.canvas.availableEffects || [],
      atoms: manifest.dependencies.length > 0 ? manifest.dependencies : undefined,
    };
  }

  return registry;
}

// ============================================================================
// 导出
// ============================================================================

/** 自动生成的组件注册表 */
export const COMPONENT_REGISTRY = buildRegistry();

/**
 * 获取组件注册信息
 */
export function getComponentEntry(type: string): ComponentRegistryEntry | undefined {
  return COMPONENT_REGISTRY[type];
}

/**
 * 获取所有已注册组件类型
 */
export function getRegisteredTypes(): string[] {
  return Object.keys(COMPONENT_REGISTRY);
}

/**
 * 检查组件是否已注册
 */
export function isComponentRegistered(type: string): boolean {
  return type in COMPONENT_REGISTRY;
}

/**
 * 获取画布组件尺寸（从 manifest 读取）
 */
export function getComponentSize(type: string): { width: number; height: number } | undefined {
  const manifest = MANIFESTS[type];
  return manifest?.canvas?.size;
}

/**
 * 获取按顺序排列的组件类型列表（有 canvas 配置的）
 */
export function getCanvasComponentTypes(): string[] {
  return Object.keys(MANIFESTS).filter(type => MANIFESTS[type].canvas);
}

// Re-export types for convenience
export type { PropMeta, VariantOption };
