/**
 * Select Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'select',
  name: 'Select',
  category: 'blocks',
  label: 'Select',
  labelKey: 'componentTypeSelect',

  files: {
    component: 'index.tsx',
    config: 'select.config.ts',
  },

  themeConfigs: [
    { componentName: 'Select', configName: 'selectConfig' },
  ],

  themeFile: 'components/select.ts',

  cssVars: ['--primary', '--border'],

  dependencies: [],

  exportOptions: {
    noChildren: false,
  },

  canvas: {
    size: { width: 180, height: 50 },
    props: [
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
      {
        name: 'size',
        type: 'select',
        label: 'Size',
        labelKey: 'propSize',
        options: [
          { value: 'default', label: 'Default', labelKey: 'valDefault' },
          { value: 'sm', label: 'Small', labelKey: 'valSmall' },
        ],
        defaultValue: 'default',
      },
      {
        name: 'placeholder',
        type: 'text',
        label: 'Placeholder',
        labelKey: 'propPlaceholder',
        defaultValue: 'Select an option',
        defaultValueKey: 'selectPlaceholder',
      },
      {
        name: 'options',
        type: 'json',
        label: 'Options',
        labelKey: 'propOptions',
        defaultValue: [
          { value: 'apple', label: 'Apple', labelKey: 'selectOptionApple' },
          { value: 'banana', label: 'Banana', labelKey: 'selectOptionBanana' },
          { value: 'orange', label: 'Orange', labelKey: 'selectOptionOrange' },
          { value: 'grape', label: 'Grape', labelKey: 'selectOptionGrape', disabled: true },
        ],
      },
    ],
    defaultProps: {
      variant: 'default',
      size: 'default',
      placeholder: 'Select an option',
      options: [
        { value: 'apple', label: 'Apple', labelKey: 'selectOptionApple' },
        { value: 'banana', label: 'Banana', labelKey: 'selectOptionBanana' },
        { value: 'orange', label: 'Orange', labelKey: 'selectOptionOrange' },
        { value: 'grape', label: 'Grape', labelKey: 'selectOptionGrape', disabled: true },
      ],
    },
    availableEffects: [],
  },
};
