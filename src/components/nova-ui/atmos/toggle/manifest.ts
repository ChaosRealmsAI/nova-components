/**
 * Toggle Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'toggle',
  name: 'Toggle',
  category: 'atoms',
  label: 'Toggle',
  labelKey: 'componentTypeToggle',

  files: {
    component: 'index.tsx',
    config: 'toggle.config.ts',
  },

  themeConfigs: [
    { componentName: 'Toggle', configName: 'toggleConfig' },
  ],

  themeFile: 'components/toggle.ts',

  cssVars: [
    '--primary',
    '--primary-foreground',
  ],

  dependencies: [],

  exportOptions: {
    noChildren: false,
  },

  canvas: {
    size: { width: 44, height: 44 },
    props: [
      {
        name: 'pressed',
        type: 'boolean',
        label: 'Pressed',
        labelKey: 'propPressed',
        defaultValue: false,
      },
      {
        name: 'variant',
        type: 'select',
        label: 'Variant',
        labelKey: 'propVariant',
        options: [
          { value: 'default', label: 'Default', labelKey: 'valDefault' },
          { value: 'outline', label: 'Outline', labelKey: 'valOutline' },
        ],
        defaultValue: 'default',
      },
      {
        name: 'size',
        type: 'select',
        label: 'Size',
        labelKey: 'propSize',
        options: [
          { value: 'sm', label: 'Small', labelKey: 'valSmall' },
          { value: 'default', label: 'Default', labelKey: 'valDefault' },
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
      {
        name: 'children',
        type: 'text',
        label: 'Text',
        labelKey: 'propText',
        defaultValue: 'B',
      },
    ],
    defaultProps: {
      pressed: false,
      variant: 'default',
      size: 'default',
      disabled: false,
      children: 'B',
    },
    availableEffects: ['glow'],
  },
};
