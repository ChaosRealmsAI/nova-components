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
    config: 'dropdown-menu.config.ts',
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
    noChildren: false,
    customJsx: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
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
