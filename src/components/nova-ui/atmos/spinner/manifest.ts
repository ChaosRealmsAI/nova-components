/**
 * Spinner Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'spinner',
  name: 'Spinner',
  category: 'atoms',
  label: 'Spinner',
  labelKey: 'componentTypeSpinner',

  files: {
    component: 'index.tsx',
    config: 'spinner.config.ts',
  },

  themeConfigs: [
    { componentName: 'Spinner', configName: 'spinnerConfig' },
  ],

  themeFile: 'components/spinner.ts',

  cssVars: [
    '--primary',
    '--secondary',
    '--muted-foreground',
  ],

  dependencies: [],

  exportOptions: {
    noChildren: true,
  },

  canvas: {
    size: { width: 48, height: 48 },
    props: [
      {
        name: 'variant',
        type: 'select',
        label: 'Variant',
        labelKey: 'propVariant',
        options: [
          { value: 'default', label: 'Default', labelKey: 'valDefault' },
          { value: 'secondary', label: 'Secondary', labelKey: 'valSecondary' },
          { value: 'muted', label: 'Muted', labelKey: 'valMuted' },
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
          { value: 'xl', label: 'Extra Large', labelKey: 'valExtraLarge' },
        ],
        defaultValue: 'default',
      },
    ],
    defaultProps: {
      variant: 'default',
      size: 'default',
    },
    availableEffects: ['glow'],
  },
};
