/**
 * Progress Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'progress',
  name: 'Progress',
  category: 'atoms',
  label: 'Progress',
  labelKey: 'componentTypeProgress',

  files: {
    component: 'index.tsx',
  },

  themeConfigs: [
    { componentName: 'Progress', configName: 'progressConfig' },
  ],

  themeFile: 'components/progress.ts',

  cssVars: [
    '--primary',
  ],

  dependencies: [],

  exportOptions: {
    noChildren: true,
  },

  canvas: {
    size: { width: 160, height: 24 },
    props: [
      {
        name: 'value',
        type: 'number',
        label: 'Value',
        labelKey: 'propValue',
        defaultValue: 50,
      },
      {
        name: 'max',
        type: 'number',
        label: 'Max',
        labelKey: 'propMax',
        defaultValue: 100,
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
      value: 50,
      max: 100,
      variant: 'default',
    },
    availableEffects: ['glow', 'ripple'],
  },
};
