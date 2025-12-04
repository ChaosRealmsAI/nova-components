/**
 * Sheet Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'sheet',
  name: 'Sheet',
  category: 'blocks',
  label: 'Sheet',
  labelKey: 'componentTypeSheet',

  files: {
    component: 'index.tsx',
  },

  themeConfigs: [
    { componentName: 'Sheet', configName: 'sheetConfig' },
  ],

  themeFile: 'components/sheet.ts',

  cssVars: ['--background', '--border'],

  dependencies: [],

  exportOptions: {
    noChildren: false,
  },

  canvas: {
    size: { width: 160, height: 60 },
    props: [
      {
        name: 'side',
        type: 'select',
        label: 'Side',
        labelKey: 'propSide',
        options: [
          { value: 'right', label: 'Right', labelKey: 'valRight' },
          { value: 'left', label: 'Left', labelKey: 'valLeft' },
          { value: 'top', label: 'Top', labelKey: 'valTop' },
          { value: 'bottom', label: 'Bottom', labelKey: 'valBottom' },
        ],
        defaultValue: 'right',
      },
      {
        name: 'title',
        type: 'text',
        label: 'Title',
        labelKey: 'propTitle',
        defaultValue: 'Edit Profile',
        defaultValueKey: 'sheetTitleDefault',
      },
      {
        name: 'description',
        type: 'text',
        label: 'Description',
        labelKey: 'propDescription',
        defaultValue: 'Make changes to your profile here. Click save when done.',
        defaultValueKey: 'sheetDescriptionDefault',
      },
      {
        name: 'triggerLabel',
        type: 'text',
        label: 'Trigger Label',
        labelKey: 'propTriggerLabel',
        defaultValue: 'Open Sheet',
        defaultValueKey: 'sheetTriggerLabel',
      },
    ],
    defaultProps: {
      side: 'right',
      title: 'Edit Profile',
      description: 'Make changes to your profile here. Click save when done.',
      triggerLabel: 'Open Sheet',
    },
    availableEffects: [],
  },
};
