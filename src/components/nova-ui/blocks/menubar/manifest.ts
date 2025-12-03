/**
 * Menubar Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'menubar',
  name: 'Menubar',
  category: 'blocks',
  label: 'Menubar',
  labelKey: 'componentTypeMenubar',

  files: {
    component: 'index.tsx',
    config: 'menubar.config.ts',
  },

  themeConfigs: [
    { componentName: 'Menubar', configName: 'menubarConfig' },
  ],

  themeFile: 'components/menubar.ts',

  cssVars: ['--primary', '--border'],

  dependencies: [],

  exportOptions: {
    noChildren: true,
    customJsx: `<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New Tab <MenubarShortcut>Cmd+T</MenubarShortcut></MenubarItem>
      <MenubarItem>New Window <MenubarShortcut>Cmd+N</MenubarShortcut></MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Share</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print... <MenubarShortcut>Cmd+P</MenubarShortcut></MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Edit</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>Undo <MenubarShortcut>Cmd+Z</MenubarShortcut></MenubarItem>
      <MenubarItem>Redo <MenubarShortcut>Shift+Cmd+Z</MenubarShortcut></MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Cut</MenubarItem>
      <MenubarItem>Copy</MenubarItem>
      <MenubarItem>Paste</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`,
    customImports: [
      'Menubar',
      'MenubarMenu',
      'MenubarTrigger',
      'MenubarContent',
      'MenubarItem',
      'MenubarSeparator',
      'MenubarShortcut',
    ],
  },

  canvas: {
    size: { width: 300, height: 40 },
    props: [],
    defaultProps: {},
    availableEffects: [],
  },
};
