/**
 * Input Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'input',
  name: 'Input',
  category: 'atoms',
  label: 'Input',
  labelKey: 'componentTypeInput',

  files: {
    component: 'index.tsx',
    config: 'input.config.ts',
  },

  themeConfigs: [
    { componentName: 'Input', configName: 'inputConfig' },
  ],

  themeFile: 'components/input.ts',

  cssVars: [
    '--primary',
    '--foreground',
    '--border',
    '--muted-foreground',
  ],

  dependencies: [],

  exportOptions: {
    noChildren: true,
  },

  canvas: {
    size: { width: 160, height: 40 },
    props: [
      {
        name: 'placeholder',
        type: 'text',
        label: 'Placeholder',
        labelKey: 'propPlaceholder',
        defaultValue: 'Enter text...',
        defaultValueKey: 'inputPlaceholder',
      },
      {
        name: 'variant',
        type: 'select',
        label: 'Variant',
        labelKey: 'propVariant',
        options: [
          { value: 'default', label: 'Default', labelKey: 'valDefault' },
          { value: 'filled', label: 'Filled', labelKey: 'valFilled' },
        ],
        defaultValue: 'default',
      },
      {
        name: 'inputSize',
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
        name: 'type',
        type: 'select',
        label: 'Type',
        labelKey: 'propType',
        options: [
          { value: 'text', label: 'Text', labelKey: 'valText' },
          { value: 'password', label: 'Password', labelKey: 'valPassword' },
          { value: 'email', label: 'Email', labelKey: 'valEmail' },
          { value: 'number', label: 'Number', labelKey: 'valNumber' },
        ],
        defaultValue: 'text',
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
      placeholder: 'Enter text...',
      variant: 'default',
      inputSize: 'default',
      type: 'text',
      disabled: false,
    },
    availableEffects: ['tilt', 'glow'],
  },
};
