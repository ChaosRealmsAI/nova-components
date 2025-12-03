/**
 * ToggleGroup Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'toggle-group',
  name: 'ToggleGroup',
  category: 'blocks',
  label: 'Toggle Group',
  labelKey: 'componentTypeToggleGroup',

  files: {
    component: 'index.tsx',
    config: 'toggle-group.config.ts',
  },

  themeConfigs: [
    { componentName: 'ToggleGroup', configName: 'toggleGroupConfig' },
  ],

  themeFile: 'components/toggle-group.ts',

  cssVars: [],

  dependencies: ['toggle'],

  exportOptions: {
    noChildren: true,
    customJsx: `<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold" aria-label="Toggle bold">
    <Bold className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Toggle italic">
    <Italic className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline" aria-label="Toggle underline">
    <Underline className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`,
    customImports: ['ToggleGroup', 'ToggleGroupItem'],
    extraImports: `import { Bold, Italic, Underline } from 'lucide-react';`,
  },

  canvas: {
    size: { width: 140, height: 44 },
    props: [
      {
        name: 'variant',
        type: 'select',
        label: 'Variant',
        labelKey: 'propVariant',
        options: [
          { value: 'default', label: 'Default', labelKey: 'valDefault' },
          { value: 'outline', label: 'Outline', labelKey: 'valOutline' },
        ],
        defaultValue: 'default',
      },
      {
        name: 'size',
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
          { value: 'single', label: 'Single', labelKey: 'valSingle' },
          { value: 'multiple', label: 'Multiple', labelKey: 'valMultiple' },
        ],
        defaultValue: 'multiple',
      },
    ],
    defaultProps: {
      variant: 'default',
      size: 'default',
      type: 'multiple',
    },
    availableEffects: [],
  },
};
