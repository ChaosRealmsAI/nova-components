/**
 * Textarea Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'textarea',
  name: 'Textarea',
  category: 'atoms',
  label: 'Textarea',
  labelKey: 'componentTypeTextarea',

  files: {
    component: 'index.tsx',
    config: 'textarea.config.ts',
  },

  themeConfigs: [
    { componentName: 'Textarea', configName: 'textareaConfig' },
  ],

  themeFile: 'components/textarea.ts',

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
    size: { width: 160, height: 80 },
    props: [
      {
        name: 'placeholder',
        type: 'text',
        label: 'Placeholder',
        labelKey: 'propPlaceholder',
        defaultValue: 'Enter your message...',
        defaultValueKey: 'textareaPlaceholder',
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
        name: 'textareaSize',
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
        name: 'disabled',
        type: 'boolean',
        label: 'Disabled',
        labelKey: 'propDisabled',
        defaultValue: false,
      },
    ],
    defaultProps: {
      placeholder: 'Enter your message...',
      variant: 'default',
      textareaSize: 'default',
      disabled: false,
    },
    availableEffects: ['glow'],
  },
};
