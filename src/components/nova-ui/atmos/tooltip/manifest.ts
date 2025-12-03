/**
 * Tooltip Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'tooltip',
  name: 'Tooltip',
  category: 'atoms',
  label: 'Tooltip',
  labelKey: 'componentTypeTooltip',

  files: {
    component: 'index.tsx',
    config: 'tooltip.config.ts',
  },

  themeConfigs: [
    { componentName: 'Tooltip', configName: 'tooltipConfig' },
  ],

  themeFile: 'components/tooltip.ts',

  cssVars: [
    '--primary',
    '--foreground',
    '--background',
  ],

  dependencies: [],

  exportOptions: {
    noChildren: false,
    customJsx: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Tooltip text</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`,
  },

  canvas: {
    size: { width: 140, height: 70 },
    props: [
      {
        name: 'content',
        type: 'text',
        label: 'Content',
        labelKey: 'propContent',
        defaultValue: 'Tooltip content',
        defaultValueKey: 'tooltipContentDefault',
      },
    ],
    defaultProps: {
      content: 'Tooltip content',
    },
    availableEffects: [],
  },
};
