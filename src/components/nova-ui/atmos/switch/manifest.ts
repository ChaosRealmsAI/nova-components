/**
 * Switch Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'switch',
  name: 'Switch',
  category: 'atoms',
  label: 'Switch',
  labelKey: 'componentTypeSwitch',

  files: {
    component: 'index.tsx',
  },

  themeConfigs: [
    { componentName: 'Switch', configName: 'switchConfig' },
  ],

  themeFile: 'components/switch.ts',

  cssVars: [
    '--primary',
    '--background',
    '--accent',
  ],

  dependencies: [],

  exportOptions: {
    noChildren: true,
  },

  canvas: {
    size: { width: 52, height: 28 },
    props: [
      {
        name: 'checked',
        type: 'boolean',
        label: 'Checked',
        labelKey: 'propChecked',
        defaultValue: false,
      },
      {
        name: 'disabled',
        type: 'boolean',
        label: 'Disabled',
        labelKey: 'propDisabled',
        defaultValue: false,
      },
      {
        name: 'size',
        type: 'select',
        label: 'Size',
        labelKey: 'propSize',
        options: [
          { value: 'default', label: 'Default', labelKey: 'valDefault' },
        ],
        defaultValue: 'default',
      },
      {
        name: 'variant',
        type: 'select',
        label: 'Variant',
        labelKey: 'propVariant',
        options: [
          { value: 'default', label: 'Default', labelKey: 'valDefault' },
        ],
        defaultValue: 'default',
      },
    ],
    defaultProps: {
      checked: false,
      disabled: false,
      size: 'default',
      variant: 'default',
    },
    availableEffects: ['glow', 'ripple'],
  },
};
