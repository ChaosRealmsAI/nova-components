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
  },

  themeConfigs: [
    { componentName: 'Command', configName: 'commandConfig' },
  ],

  themeFile: 'components/command.ts',

  cssVars: ['--primary', '--border', '--muted-foreground', '--accent', '--accent-foreground'],

  dependencies: [],

  exportOptions: {
    noChildren: true,
    customJsx: `<Command className="rounded-lg border shadow-md max-w-md">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>
        <span>Calendar</span>
      </CommandItem>
      <CommandItem>
        <span>Search Emoji</span>
      </CommandItem>
      <CommandItem>
        <span>Calculator</span>
      </CommandItem>
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
