/**
 * Tabs Component Entry
 */

import { TabsDemo, tabsAtoms } from '@/components/nova-ui/blocks/tabs';
import type { ComponentRegistryEntry } from '../types';

export const tabsEntry: ComponentRegistryEntry = {
  type: 'tabs',
  label: 'Tabs',
  labelKey: 'componentTypeTabs',
  category: 'blocks',
  component: TabsDemo,
  baseConfig: null,
  atoms: tabsAtoms,
  props: [
    {
      name: 'variant',
      type: 'select',
      label: 'Variant',
      labelKey: 'propVariant',
      options: [
        { value: 'default', label: 'Default', labelKey: 'valDefault' },
        { value: 'underline', label: 'Underline', labelKey: 'valUnderline' },
      ],
      defaultValue: 'default',
    },
    {
      name: 'items',
      type: 'json',
      label: 'Items',
      labelKey: 'propItems',
      defaultValue: [
        { value: 'tab1', label: 'Account', labelKey: 'tabsTab1Label', content: 'Make changes to your account here.', contentKey: 'tabsTab1Content' },
        { value: 'tab2', label: 'Password', labelKey: 'tabsTab2Label', content: 'Change your password here.', contentKey: 'tabsTab2Content' },
        { value: 'tab3', label: 'Settings', labelKey: 'tabsTab3Label', content: 'Manage your settings here.', contentKey: 'tabsTab3Content' },
      ],
    },
  ],
  defaultProps: {
    variant: 'default',
    items: [
      { value: 'tab1', label: 'Account', labelKey: 'tabsTab1Label', content: 'Make changes to your account here.', contentKey: 'tabsTab1Content' },
      { value: 'tab2', label: 'Password', labelKey: 'tabsTab2Label', content: 'Change your password here.', contentKey: 'tabsTab2Content' },
      { value: 'tab3', label: 'Settings', labelKey: 'tabsTab3Label', content: 'Manage your settings here.', contentKey: 'tabsTab3Content' },
    ],
  },
  availableEffects: [],
};
