/**
 * Sidebar Component Entry
 */

import { SidebarDemo, sidebarAtoms } from '@/components/nova-ui/blocks/sidebar';
import type { ComponentRegistryEntry } from '../types';

export const sidebarEntry: ComponentRegistryEntry = {
  type: 'sidebar',
  label: 'Sidebar',
  labelKey: 'componentTypeSidebar',
  category: 'blocks',
  component: SidebarDemo,
  baseConfig: null,
  atoms: sidebarAtoms,
  props: [
    {
      name: 'variant',
      type: 'select',
      label: 'Variant',
      labelKey: 'propVariant',
      options: [
        { value: 'default', label: 'Default', labelKey: 'valDefault' },
        { value: 'inset', label: 'Inset', labelKey: 'valInset' },
      ],
      defaultValue: 'default',
    },
    {
      name: 'collapsible',
      type: 'select',
      label: 'Collapsible',
      labelKey: 'propCollapsible',
      options: [
        { value: 'none', label: 'None', labelKey: 'valNone' },
        { value: 'icon', label: 'Icon', labelKey: 'valIcon' },
        { value: 'offcanvas', label: 'Offcanvas', labelKey: 'valOffcanvas' },
      ],
      defaultValue: 'none',
    },
    {
      name: 'title',
      type: 'text',
      label: 'App Title',
      labelKey: 'propTitle',
      defaultValue: 'My App',
      defaultValueKey: 'sidebarAppTitle',
    },
  ],
  defaultProps: {
    variant: 'default',
    collapsible: 'none',
    title: 'My App',
  },
  availableEffects: [],
};
