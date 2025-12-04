/**
 * Separator Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'separator',
  name: 'Separator',
  category: 'atoms',
  label: 'Separator',
  labelKey: 'componentTypeSeparator',

  files: {
    component: 'index.tsx',
  },

  themeConfigs: [
    { componentName: 'Separator', configName: 'separatorConfig' },
  ],

  themeFile: 'components/separator.ts',

  cssVars: [
    '--border',
    '--primary',
  ],

  dependencies: [],

  exportOptions: {
    noChildren: true,
  },

  canvas: {
    size: { width: 160, height: 8 },
    props: [
      {
        name: 'orientation',
        type: 'select',
        label: 'Orientation',
        labelKey: 'propOrientation',
        options: [
          { value: 'horizontal', label: 'Horizontal', labelKey: 'valHorizontal' },
          { value: 'vertical', label: 'Vertical', labelKey: 'valVertical' },
        ],
        defaultValue: 'horizontal',
      },
      {
        name: 'decorative',
        type: 'boolean',
        label: 'Decorative',
        labelKey: 'propDecorative',
        defaultValue: true,
      },
    ],
    defaultProps: {
      orientation: 'horizontal',
      decorative: true,
    },
    availableEffects: [],
  },
};
