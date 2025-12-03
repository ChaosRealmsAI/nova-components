/**
 * DropdownMenu Component Entry
 */

import { DropdownMenuDemo, dropdownMenuBaseConfig, dropdownMenuAtoms } from '@/components/nova-ui/blocks/dropdown-menu';
import type { ComponentRegistryEntry } from '../types';

export const dropdownMenuEntry: ComponentRegistryEntry = {
  type: 'dropdown-menu',
  label: 'Dropdown Menu',
  labelKey: 'componentTypeDropdownMenu',
  category: 'blocks',
  component: DropdownMenuDemo,
  baseConfig: dropdownMenuBaseConfig,
  atoms: dropdownMenuAtoms,
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
};
