/**
 * AspectRatio Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'aspect-ratio',
  name: 'AspectRatio',
  category: 'atoms',
  label: 'Aspect Ratio',
  labelKey: 'componentTypeAspectRatio',

  files: {
    component: 'index.tsx',
    config: 'aspect-ratio.config.ts',
  },

  themeConfigs: [
    { componentName: 'AspectRatio', configName: 'aspectRatioConfig' },
  ],

  themeFile: 'components/aspect-ratio.ts',

  cssVars: [
    '--border',
    '--muted',
    '--muted-foreground',
    '--primary',
  ],

  dependencies: [],

  exportOptions: {
    noChildren: false,
  },

  canvas: {
    size: { width: 160, height: 90 },
    props: [
      {
        name: 'ratio',
        type: 'select',
        label: 'Ratio',
        labelKey: 'propRatio',
        options: [
          { value: '1/1', label: 'Square (1:1)', labelKey: 'valSquare' },
          { value: '16/9', label: 'Widescreen (16:9)', labelKey: 'valWidescreen' },
          { value: '4/3', label: 'Standard (4:3)', labelKey: 'valStandard' },
          { value: '21/9', label: 'Ultra-wide (21:9)', labelKey: 'valUltrawide' },
        ],
        defaultValue: '16/9',
      },
    ],
    defaultProps: {
      ratio: '16/9',
    },
    availableEffects: [],
  },
};
