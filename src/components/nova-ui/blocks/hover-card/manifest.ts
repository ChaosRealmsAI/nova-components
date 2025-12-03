/**
 * HoverCard Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'hover-card',
  name: 'HoverCard',
  category: 'blocks',
  label: 'Hover Card',
  labelKey: 'componentTypeHoverCard',

  files: {
    component: 'index.tsx',
    config: 'hover-card.config.ts',
  },

  themeConfigs: [
    { componentName: 'HoverCard', configName: 'hoverCardConfig' },
  ],

  themeFile: 'components/hover-card.ts',

  cssVars: ['--border', '--background'],

  dependencies: [],

  exportOptions: {
    noChildren: false,
  },

  canvas: {
    size: { width: 160, height: 70 },
    props: [
      {
        name: 'triggerText',
        type: 'text',
        label: 'Trigger Text',
        labelKey: 'propTriggerText',
        defaultValue: 'Hover me',
        defaultValueKey: 'hoverCardTrigger',
      },
      {
        name: 'title',
        type: 'text',
        label: 'Title',
        labelKey: 'propTitle',
        defaultValue: 'Title',
        defaultValueKey: 'hoverCardTitle',
      },
      {
        name: 'description',
        type: 'text',
        label: 'Description',
        labelKey: 'propDescription',
        defaultValue: 'Description text appears here.',
        defaultValueKey: 'hoverCardDescription',
      },
    ],
    defaultProps: {
      triggerText: 'Hover me',
      title: 'Title',
      description: 'Description text appears here.',
    },
    availableEffects: [],
  },
};
