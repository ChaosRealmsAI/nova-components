/**
 * ScrollArea Component Entry
 *
 * 注意：ScrollArea 使用 i18n Demo 组件
 * - 画布渲染：使用 ScrollAreaDemo（在 component-map.tsx 定义，使用 i18n）
 * - 演示数据：由 Demo 组件内部通过 useI18n 获取本地化文本
 * - 导出代码：使用 manifest.ts 中的静态英文数据
 */

import { ScrollArea } from '@/components/nova-ui/atmos/scroll-area';
import type { ComponentRegistryEntry } from '../types';

export const scrollAreaEntry: ComponentRegistryEntry = {
  type: 'scroll-area',
  label: 'Scroll Area',
  labelKey: 'componentTypeScrollArea',
  category: 'atoms',
  component: ScrollArea,
  baseConfig: null, // 纯槽位模式，无 baseConfig
  props: [],
  // 演示数据由 ScrollAreaDemo (component-map.tsx) 使用 i18n 提供
  // 不再需要静态 defaultProps
  defaultProps: {},
  availableEffects: [],
};
