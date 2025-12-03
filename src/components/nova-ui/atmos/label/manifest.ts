/**
 * Label Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'label',
  name: 'Label',
  category: 'atoms',
  label: 'Label',
  labelKey: 'componentTypeLabel',

  files: {
    component: 'index.tsx',
    config: 'label.config.ts',
  },

  themeConfigs: [
    { componentName: 'Label', configName: 'labelConfig' },
  ],

  themeFile: 'components/label.ts',

  cssVars: [
    '--primary',
    '--foreground',
  ],

  dependencies: [],

  exportOptions: {
    noChildren: false,
  },

  canvas: {
    size: { width: 80, height: 28 },
    props: [
      {
        name: 'children',
        type: 'text',
        label: 'Text',
        labelKey: 'propText',
        defaultValue: 'Label',
        defaultValueKey: 'labelContentDefault',
      },
      {
        name: 'variant',
        type: 'select',
        label: 'Variant',
        labelKey: 'propVariant',
        options: [
          { value: 'default', label: 'Default', labelKey: 'valDefault' },
          { value: 'muted', label: 'Muted', labelKey: 'valMuted' },
          { value: 'error', label: 'Error', labelKey: 'valError' },
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
        ],
        defaultValue: 'default',
      },
    ],
    defaultProps: {
      children: 'Label',
      variant: 'default',
      size: 'default',
    },
    availableEffects: ['tilt', 'glow'],
  },
};
