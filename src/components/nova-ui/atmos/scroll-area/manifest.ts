/**
 * ScrollArea Component Manifest
 *
 * 单一真相源：定义组件导出所需的所有信息
 * 开发组件时维护此文件，codegen 从这里读取
 */

import type { ComponentManifest } from '@/registry/manifest-types';

// ============================================================================
// Demo Data（演示数据）
// ============================================================================

/** 数据项类型 */
export interface ScrollAreaItem {
  id: string;
  text: string;
}

/** 默认演示数据 */
export const DEMO_ITEMS: ScrollAreaItem[] = [
  { id: '01', text: 'System initialization' },
  { id: '02', text: 'Loading modules' },
  { id: '03', text: 'Connecting to server' },
  { id: '04', text: 'Authenticating user' },
  { id: '05', text: 'Fetching data' },
  { id: '06', text: 'Processing request' },
  { id: '07', text: 'Updating cache' },
  { id: '08', text: 'Syncing state' },
  { id: '09', text: 'Rendering view' },
  { id: '10', text: 'Task completed' },
  { id: '11', text: 'Idle mode' },
  { id: '12', text: 'Waiting for input' },
];

/** 默认演示标题 */
export const DEMO_HEADER = 'ITEMS';

// ============================================================================
// Manifest
// ============================================================================

export const manifest: ComponentManifest = {
  // 组件标识
  type: 'scroll-area',
  name: 'ScrollArea',
  category: 'atoms',
  label: 'Scroll Area',
  labelKey: 'componentTypeScrollArea',

  // 源码文件（相对于组件目录）
  files: {
    component: 'index.tsx',
    config: 'scroll-area.config.ts',
  },

  // 需要导出的主题配置（组件名 → 配置名）
  themeConfigs: [
    { componentName: 'ScrollArea', configName: 'scrollAreaConfig' },
    { componentName: 'ScrollBar', configName: 'scrollBarConfig' },
  ],

  // 主题配置所在文件（相对于 themes/{themeId}/）
  themeFile: 'components/scroll-area.ts',

  // 使用的 CSS 变量（用于验证主题 tokens 完整性）
  cssVars: [
    '--muted',
    '--muted-foreground',
    '--border',
    '--primary',
    '--background',
    '--foreground',
  ],

  // 依赖的其他组件
  dependencies: [],

  // 导出选项
  exportOptions: {
    noChildren: true,  // 使用默认内容，不需要传 children
    customJsx: `<ScrollArea
      header="ITEMS"
      items={[
        { id: '01', text: 'System initialization' },
        { id: '02', text: 'Loading modules' },
        { id: '03', text: 'Connecting to server' },
        { id: '04', text: 'Authenticating user' },
        { id: '05', text: 'Fetching data' },
        { id: '06', text: 'Processing request' },
        { id: '07', text: 'Updating cache' },
        { id: '08', text: 'Syncing state' },
        { id: '09', text: 'Rendering view' },
        { id: '10', text: 'Task completed' },
        { id: '11', text: 'Idle mode' },
        { id: '12', text: 'Waiting for input' },
      ]}
    />`,
  },

  canvas: {
    size: { width: 320, height: 280 },
    props: [],
    defaultProps: {
      items: DEMO_ITEMS,
      header: DEMO_HEADER,
    },
    availableEffects: [],
  },
};
