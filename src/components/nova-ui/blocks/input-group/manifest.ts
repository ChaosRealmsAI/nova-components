/**
 * InputGroup Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'input-group',
  name: 'InputGroup',
  category: 'blocks',
  label: 'Input Group',
  labelKey: 'componentTypeInputGroup',

  files: {
    component: 'index.tsx',
    config: 'input-group.config.ts',
  },

  themeConfigs: [
    { componentName: 'InputGroup', configName: 'inputGroupConfig' },
  ],

  themeFile: 'components/input-group.ts',

  cssVars: [],

  dependencies: ['input', 'button'],

  exportOptions: {
    noChildren: true,
    customJsx: `<InputGroup
  placeholder="Enter text..."
  buttonLabel="Search"
/>`,
    customImports: ['InputGroup'],
  },

  canvas: {
    size: { width: 260, height: 44 },
    props: [
      {
        name: 'variant',
        type: 'select',
        label: 'Variant',
        labelKey: 'propVariant',
        options: [
          { value: 'default', label: 'Default', labelKey: 'valDefault' },
          { value: 'attached', label: 'Attached', labelKey: 'valAttached' },
        ],
        defaultValue: 'attached',
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
        name: 'placeholder',
        type: 'text',
        label: 'Placeholder',
        labelKey: 'propPlaceholder',
        defaultValue: 'Enter text...',
        defaultValueKey: 'inputGroupPlaceholder',
      },
      {
        name: 'buttonLabel',
        type: 'text',
        label: 'Button Label',
        labelKey: 'propButtonLabel',
        defaultValue: 'Search',
        defaultValueKey: 'inputGroupButtonLabel',
      },
    ],
    defaultProps: {
      variant: 'attached',
      size: 'default',
      placeholder: 'Enter text...',
      buttonLabel: 'Search',
    },
    availableEffects: [],
  },
};
