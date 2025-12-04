/**
 * Kbd Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'kbd',
  name: 'Kbd',
  category: 'atoms',
  label: 'Kbd',
  labelKey: 'componentTypeKbd',

  files: {
    component: 'index.tsx',
  },

  themeConfigs: [
    { componentName: 'Kbd', configName: 'kbdConfig' },
  ],

  themeFile: 'components/kbd.ts',

  cssVars: [
    '--primary',
    '--muted',
    '--muted-foreground',
    '--border',
    '--foreground',
  ],

  dependencies: [],

  exportOptions: {
    noChildren: false,
  },

  canvas: {
    size: { width: 48, height: 28 },
    props: [
      {
        name: 'children',
        type: 'text',
        label: 'Key',
        labelKey: 'propKey',
        defaultValue: '⌘',
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
    ],
    defaultProps: {
      children: '⌘',
      size: 'default',
      variant: 'default',
    },
    availableEffects: [],
  },
};
