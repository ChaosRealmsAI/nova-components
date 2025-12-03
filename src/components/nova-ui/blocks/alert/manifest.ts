/**
 * Alert Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'alert',
  name: 'Alert',
  category: 'blocks',
  label: 'Alert',
  labelKey: 'componentTypeAlert',

  files: {
    component: 'index.tsx',
    config: 'alert.config.ts',
  },

  themeConfigs: [
    { componentName: 'Alert', configName: 'alertConfig' },
  ],

  themeFile: 'components/alert.ts',

  cssVars: ['--destructive', '--foreground', '--border'],

  dependencies: [],

  exportOptions: {
    noChildren: false,
  },

  canvas: {
    size: { width: 280, height: 80 },
    props: [
      {
        name: 'variant',
        type: 'select',
        label: 'Variant',
        labelKey: 'propVariant',
        options: [
          { value: 'default', label: 'Default', labelKey: 'valDefault' },
          { value: 'destructive', label: 'Destructive', labelKey: 'valDestructive' },
        ],
        defaultValue: 'default',
      },
      {
        name: 'title',
        type: 'text',
        label: 'Title',
        labelKey: 'propTitle',
        defaultValue: 'Heads up!',
        defaultValueKey: 'alertTitleDefault',
      },
      {
        name: 'description',
        type: 'text',
        label: 'Description',
        labelKey: 'propDescription',
        defaultValue: 'You can add components to your app using the CLI.',
        defaultValueKey: 'alertDescriptionDefault',
      },
    ],
    defaultProps: {
      variant: 'default',
      title: 'Heads up!',
      description: 'You can add components to your app using the CLI.',
    },
    availableEffects: [],
  },
};
