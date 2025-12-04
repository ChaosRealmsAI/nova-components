/**
 * Collapsible Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'collapsible',
  name: 'Collapsible',
  category: 'atoms',
  label: 'Collapsible',
  labelKey: 'componentTypeCollapsible',

  files: {
    component: 'index.tsx',
  },

  themeConfigs: [
    { componentName: 'Collapsible', configName: 'collapsibleConfig' },
  ],

  themeFile: 'components/collapsible.ts',

  cssVars: [
    '--primary',
    '--muted',
    '--muted-foreground',
    '--border',
  ],

  dependencies: [],

  exportOptions: {
    noChildren: true,
    customJsx: `<Collapsible>
  <CollapsibleTrigger>Click to expand</CollapsibleTrigger>
  <CollapsibleContent>
    <p>Collapsible content goes here.</p>
  </CollapsibleContent>
</Collapsible>`,
    customImports: ['Collapsible', 'CollapsibleTrigger', 'CollapsibleContent'],
  },

  canvas: {
    size: { width: 240, height: 80 },
    props: [
      {
        name: 'variant',
        type: 'select',
        label: 'Variant',
        labelKey: 'propVariant',
        options: [
          { value: 'default', label: 'Default', labelKey: 'valDefault' },
          { value: 'bordered', label: 'Bordered', labelKey: 'valBordered' },
          { value: 'ghost', label: 'Ghost', labelKey: 'valGhost' },
        ],
        defaultValue: 'default',
      },
    ],
    defaultProps: {
      variant: 'default',
    },
    availableEffects: [],
  },
};
