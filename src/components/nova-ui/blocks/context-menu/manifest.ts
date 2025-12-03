/**
 * ContextMenu Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'context-menu',
  name: 'ContextMenu',
  category: 'blocks',
  label: 'Context Menu',
  labelKey: 'componentTypeContextMenu',

  files: {
    component: 'index.tsx',
    config: 'context-menu.config.ts',
  },

  themeConfigs: [
    { componentName: 'ContextMenu', configName: 'contextMenuConfig' },
  ],

  themeFile: 'components/context-menu.ts',

  cssVars: ['--primary', '--border'],

  dependencies: [],

  exportOptions: {
    noChildren: false,
  },

  canvas: {
    size: { width: 140, height: 70 },
    props: [
      {
        name: 'triggerText',
        type: 'text',
        label: 'Trigger Text',
        labelKey: 'propTriggerText',
        defaultValue: 'Right click here',
        defaultValueKey: 'contextMenuTrigger',
      },
    ],
    defaultProps: {
      triggerText: 'Right click here',
    },
    availableEffects: [],
  },
};
