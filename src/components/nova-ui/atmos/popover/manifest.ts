/**
 * Popover Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'popover',
  name: 'Popover',
  category: 'atoms',
  label: 'Popover',
  labelKey: 'componentTypePopover',

  files: {
    component: 'index.tsx',
    config: 'popover.config.ts',
  },

  themeConfigs: [
    { componentName: 'Popover', configName: 'popoverConfig' },
  ],

  themeFile: 'components/popover.ts',

  cssVars: [
    '--primary',
    '--background',
    '--border',
  ],

  dependencies: [],

  exportOptions: {
    noChildren: false,
    customJsx: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <p>Popover content here</p>
  </PopoverContent>
</Popover>`,
  },

  canvas: {
    size: { width: 140, height: 70 },
    props: [
      {
        name: 'content',
        type: 'text',
        label: 'Content',
        labelKey: 'propContent',
        defaultValue: 'Place content for the popover here.',
        defaultValueKey: 'popoverContentDefault',
      },
    ],
    defaultProps: {
      content: 'Place content for the popover here.',
    },
    availableEffects: ['spotlight'],
  },
};
