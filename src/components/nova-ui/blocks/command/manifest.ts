/**
 * Command Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'command',
  name: 'Command',
  category: 'blocks',
  label: 'Command',
  labelKey: 'componentTypeCommand',

  files: {
    component: 'index.tsx',
    config: 'command.config.ts',
  },

  themeConfigs: [
    { componentName: 'Command', configName: 'commandConfig' },
  ],

  themeFile: 'components/command.ts',

  cssVars: ['--primary', '--border', '--muted-foreground'],

  dependencies: [],

  exportOptions: {
    noChildren: true,
    customJsx: `<Command className="rounded-lg border shadow-md">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Search Emoji</CommandItem>
      <CommandItem>Calculator</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,
    customImports: [
      'Command',
      'CommandInput',
      'CommandList',
      'CommandEmpty',
      'CommandGroup',
      'CommandItem',
    ],
  },

  canvas: {
    size: { width: 400, height: 300 },
    props: [],
    defaultProps: {},
    availableEffects: [],
  },
};
