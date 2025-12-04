/**
 * ButtonGroup Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'button-group',
  name: 'ButtonGroup',
  category: 'blocks',
  label: 'Button Group',
  labelKey: 'componentTypeButtonGroup',

  files: {
    component: 'index.tsx',
  },

  themeConfigs: [
    { componentName: 'ButtonGroup', configName: 'buttonGroupConfig' },
  ],

  themeFile: 'components/button-group.ts',

  cssVars: [],

  dependencies: ['button'],

  exportOptions: {
    noChildren: true,
    customJsx: `<ButtonGroup>
  <Button>Left</Button>
  <Button>Center</Button>
  <Button>Right</Button>
</ButtonGroup>`,
    customImports: ['ButtonGroup', 'Button'],
  },

  canvas: {
    size: { width: 200, height: 44 },
    props: [
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
          { value: 'default', label: 'Default', labelKey: 'valDefault' },
          { value: 'sm', label: 'Small', labelKey: 'valSmall' },
          { value: 'lg', label: 'Large', labelKey: 'valLarge' },
        ],
        defaultValue: 'default',
      },
      {
        name: 'attached',
        type: 'boolean',
        label: 'Attached',
        labelKey: 'propAttached',
        defaultValue: true,
      },
    ],
    defaultProps: {
      variant: 'default',
      size: 'default',
      attached: true,
    },
    availableEffects: [],
  },
};
