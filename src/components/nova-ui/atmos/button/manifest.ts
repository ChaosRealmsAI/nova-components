/**
 * Button Component Manifest
 *
 * 单一数据源：导出配置 + 画布配置
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  // 身份信息
  type: 'button',
  name: 'Button',
  category: 'atoms',
  label: 'Button',
  labelKey: 'componentTypeButton',

  // 导出配置
  files: {
    component: 'index.tsx',
  },

  themeConfigs: [
    { componentName: 'Button', configName: 'buttonConfig' },
  ],

  themeFile: 'components/button.ts',

  cssVars: [
    '--primary',
    '--primary-foreground',
    '--secondary',
    '--secondary-foreground',
    '--destructive',
    '--destructive-foreground',
    '--muted',
    '--muted-foreground',
    '--accent',
    '--accent-foreground',
  ],

  dependencies: [],

  exportOptions: {
    noChildren: false,
  },

  // 画布配置
  canvas: {
    size: { width: 100, height: 44 },
    props: [
      {
        name: 'variant',
        type: 'select',
        label: 'Variant',
        labelKey: 'propVariant',
        options: [
          { value: 'default', label: 'Default', labelKey: 'valDefault' },
          { value: 'destructive', label: 'Destructive', labelKey: 'valDestructive' },
          { value: 'outline', label: 'Outline', labelKey: 'valOutline' },
          { value: 'secondary', label: 'Secondary', labelKey: 'valSecondary' },
          { value: 'ghost', label: 'Ghost', labelKey: 'valGhost' },
          { value: 'link', label: 'Link', labelKey: 'valLink' },
        ],
        defaultValue: 'default',
      },
      {
        name: 'size',
        type: 'select',
        label: 'Size',
        labelKey: 'propSize',
        options: [
          { value: 'default', label: 'Default', labelKey: 'valDefault' },
          { value: 'sm', label: 'Small', labelKey: 'valSmall' },
          { value: 'lg', label: 'Large', labelKey: 'valLarge' },
          { value: 'icon', label: 'Icon', labelKey: 'valIcon' },
        ],
        defaultValue: 'default',
      },
      {
        name: 'children',
        type: 'text',
        label: 'Text',
        labelKey: 'propText',
        defaultValue: 'Click me',
        defaultValueKey: 'buttonLabelDefault',
      },
      {
        name: 'disabled',
        type: 'boolean',
        label: 'Disabled',
        labelKey: 'propDisabled',
        defaultValue: false,
      },
    ],
    defaultProps: {
      variant: 'default',
      size: 'default',
      children: 'Click me',
      disabled: false,
    },
    availableEffects: ['tilt', 'glow', 'ripple', 'border-beam', 'shimmer', 'cosmic-background'],
  },
};
