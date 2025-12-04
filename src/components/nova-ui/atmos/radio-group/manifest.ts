/**
 * RadioGroup Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'radio-group',
  name: 'RadioGroup',
  category: 'atoms',
  label: 'Radio Group',
  labelKey: 'componentTypeRadioGroup',

  files: {
    component: 'index.tsx',
  },

  themeConfigs: [
    { componentName: 'RadioGroup', configName: 'radioGroupConfig' },
    { componentName: 'RadioGroupItem', configName: 'radioGroupItemConfig' },
  ],

  themeFile: 'components/radio-group.ts',

  cssVars: [
    '--primary',
    '--background',
    '--border',
  ],

  dependencies: [],

  exportOptions: {
    noChildren: true,
  },

  canvas: {
    size: { width: 140, height: 100 },
    props: [
      {
        name: 'defaultValue',
        type: 'text',
        label: 'Default Value',
        labelKey: 'propDefaultValue',
        defaultValue: 'option-1',
      },
      {
        name: 'options',
        type: 'json',
        label: 'Options',
        labelKey: 'propOptions',
        defaultValue: [
          { value: 'option-1', label: 'Default', labelKey: 'radioOption1' },
          { value: 'option-2', label: 'Comfortable', labelKey: 'radioOption2' },
          { value: 'option-3', label: 'Compact', labelKey: 'radioOption3' },
        ],
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
      {
        name: 'disabled',
        type: 'boolean',
        label: 'Disabled',
        labelKey: 'propDisabled',
        defaultValue: false,
      },
    ],
    defaultProps: {
      defaultValue: 'option-1',
      variant: 'default',
      disabled: false,
      options: [
        { value: 'option-1', label: 'Default', labelKey: 'radioOption1' },
        { value: 'option-2', label: 'Comfortable', labelKey: 'radioOption2' },
        { value: 'option-3', label: 'Compact', labelKey: 'radioOption3' },
      ],
    },
    availableEffects: ['glow'],
  },
};
