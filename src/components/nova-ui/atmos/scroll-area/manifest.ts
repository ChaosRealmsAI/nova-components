/**
 * ScrollArea Component Manifest
 *
 * 单一真相源：定义组件导出所需的所有信息
 * 开发组件时维护此文件，codegen 从这里读取
 */

import type { ComponentManifest } from '@/registry/manifest-types';

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
  },

  canvas: {
    size: { width: 320, height: 280 },
    props: [],
    defaultProps: {},
    availableEffects: [],
  },
};
