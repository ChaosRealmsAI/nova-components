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
  },

  themeConfigs: [
    { componentName: 'Popover', configName: 'popoverConfig' },
  ],

  themeFile: 'components/popover.ts',

  cssVars: [
    '--primary',
    '--background',
    '--border',
    '--foreground',
    '--muted',
    '--muted-foreground',
  ],

  dependencies: ['@radix-ui/react-popover'],

  exportOptions: {
    customJsx: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="grid gap-4">
      <div className="space-y-2">
        <h4 className="font-medium leading-none">Dimensions</h4>
        <p className="text-sm text-muted-foreground">
          Set the dimensions for the layer.
        </p>
      </div>
    </div>
  </PopoverContent>
</Popover>`,
  },

  canvas: {
    size: { width: 400, height: 300 }, // Increased size to allow popover to open comfortably
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