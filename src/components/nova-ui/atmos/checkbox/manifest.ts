/**
 * Checkbox Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'checkbox',
  name: 'Checkbox',
  category: 'atoms',
  label: 'Checkbox',
  labelKey: 'componentTypeCheckbox',

  files: {
    component: 'index.tsx',
    config: 'checkbox.config.ts',
  },

  themeConfigs: [
    { componentName: 'Checkbox', configName: 'checkboxConfig' },
  ],

  themeFile: 'components/checkbox.ts',

  cssVars: [
    '--primary',
    '--primary-foreground',
    '--background',
    '--border',
  ],

  dependencies: [],

  exportOptions: {
    noChildren: true,
  },

  canvas: {
    size: { width: 32, height: 32 },
    props: [
      {
        name: 'checked',
        type: 'boolean',
        label: 'Checked',
        labelKey: 'propChecked',
        defaultValue: false,
      },
      {
        name: 'variant',
        type: 'select',
        label: 'Variant',
        labelKey: 'propVariant',
        options: [
          { value: 'default', label: 'Default', labelKey: 'valDefault' },
          { value: 'destructive', label: 'Destructive', labelKey: 'valDestructive' },
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
      {
        name: 'disabled',
        type: 'boolean',
        label: 'Disabled',
        labelKey: 'propDisabled',
        defaultValue: false,
      },
    ],
    defaultProps: {
      checked: false,
      variant: 'default',
      size: 'default',
      disabled: false,
    },
    availableEffects: ['glow', 'ripple'],
  },
};
