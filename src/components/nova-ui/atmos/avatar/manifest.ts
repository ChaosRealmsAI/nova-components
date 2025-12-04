/**
 * Avatar Component Manifest
 *
 * 单一真相源：定义组件导出所需的所有信息
 * 开发组件时维护此文件，codegen 从这里读取
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  // 组件标识
  type: 'avatar',
  name: 'Avatar',
  category: 'atoms',
  label: 'Avatar',
  labelKey: 'componentTypeAvatar',

  // 源码文件（相对于组件目录）
  files: {
    component: 'index.tsx',
  },

  // 需要导出的主题配置（组件名 → 配置名）
  themeConfigs: [
    { componentName: 'Avatar', configName: 'avatarConfig' },
    { componentName: 'AvatarFallback', configName: 'avatarFallbackConfig' },
  ],

  // 主题配置所在文件（相对于 themes/{themeId}/）
  themeFile: 'components/avatar.ts',

  // 使用的 CSS 变量（用于验证主题 tokens 完整性）
  cssVars: [
    '--primary',
    '--primary-foreground',
    '--muted',
    '--muted-foreground',
    '--accent',
    '--secondary',
  ],

  // 依赖的其他组件
  dependencies: [],

  // 导出选项
  exportOptions: {
    noChildren: false,
    customJsx: `<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`,
  },

  canvas: {
    size: { width: 48, height: 48 },
    props: [
      {
        name: 'size',
        type: 'select',
        label: 'Size',
        labelKey: 'propSize',
        options: [
          { value: 'sm', label: 'Small', labelKey: 'valSmall' },
          { value: 'default', label: 'Default', labelKey: 'valDefault' },
          { value: 'lg', label: 'Large', labelKey: 'valLarge' },
          { value: 'xl', label: 'Extra Large', labelKey: 'valExtraLarge' },
        ],
        defaultValue: 'default',
      },
      {
        name: 'fallback',
        type: 'text',
        label: 'Fallback',
        labelKey: 'propFallback',
        defaultValue: 'CN',
      },
      {
        name: 'src',
        type: 'text',
        label: 'Image URL',
        labelKey: 'propImageUrl',
        defaultValue: '',
      },
    ],
    defaultProps: {
      size: 'default',
      fallback: 'CN',
      src: '',
    },
    availableEffects: ['glow'],
  },
};
