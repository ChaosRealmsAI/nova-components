/**
 * DropdownMenu Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'dropdown-menu',
  name: 'DropdownMenu',
  category: 'blocks',
  label: 'Dropdown Menu',
  labelKey: 'componentTypeDropdownMenu',

  files: {
    component: 'index.tsx',
  },

  themeConfigs: [
    { componentName: 'DropdownMenu', configName: 'dropdownMenuConfig' },
  ],

  themeFile: 'components/dropdown-menu.ts',

  cssVars: [
    '--primary',
    '--border',
    '--muted-foreground',
  ],

  dependencies: [],

  exportOptions: {
    customImports: [
      'DropdownMenu',
      'DropdownMenuTrigger',
      'DropdownMenuContent',
      'DropdownMenuItem',
      'DropdownMenuCheckboxItem',
      'DropdownMenuRadioItem',
      'DropdownMenuLabel',
      'DropdownMenuSeparator',
      'DropdownMenuShortcut',
      'DropdownMenuGroup',
      'DropdownMenuPortal',
      'DropdownMenuSub',
      'DropdownMenuSubContent',
      'DropdownMenuSubTrigger',
      'DropdownMenuRadioGroup',
    ],
    extraImports: `import { Button } from '@/components/nova-ui/atmos/button'`,
    customJsx: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-56">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
      <DropdownMenuItem>
        Profile
        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
        Settings
        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuItem variant="destructive">
      Log out
      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
  },

  canvas: {
    size: { width: 140, height: 50 },
    props: [
      {
        name: 'variant',
        type: 'select',
        label: 'Variant',
        labelKey: 'propVariant',
        options: [
          { value: 'default', label: 'Default', labelKey: 'valDefault' },
        ],
        defaultValue: 'default',
      },
      {
        name: 'triggerLabel',
        type: 'text',
        label: 'Trigger Label',
        labelKey: 'propTriggerLabel',
        defaultValue: 'Open Menu',
        defaultValueKey: 'dropdownMenuOpenMenu',
      },
      {
        name: 'accountLabel',
        type: 'text',
        label: 'Account Label',
        labelKey: 'propAccountLabel',
        defaultValue: 'My Account',
        defaultValueKey: 'dropdownMenuMyAccount',
      },
      {
        name: 'profileLabel',
        type: 'text',
        label: 'Profile Label',
        labelKey: 'propProfileLabel',
        defaultValue: 'Profile',
        defaultValueKey: 'dropdownMenuProfile',
      },
      {
        name: 'settingsLabel',
        type: 'text',
        label: 'Settings Label',
        labelKey: 'propSettingsLabel',
        defaultValue: 'Settings',
        defaultValueKey: 'dropdownMenuSettings',
      },
      {
        name: 'logoutLabel',
        type: 'text',
        label: 'Logout Label',
        labelKey: 'propLogoutLabel',
        defaultValue: 'Log out',
        defaultValueKey: 'dropdownMenuLogout',
      },
    ],
    defaultProps: {
      variant: 'default',
      triggerLabel: 'Open Menu',
      accountLabel: 'My Account',
      profileLabel: 'Profile',
      settingsLabel: 'Settings',
      logoutLabel: 'Log out',
    },
    availableEffects: [],
  },
};
