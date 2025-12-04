/**
 * Breadcrumb Component Entry
 */

import { BreadcrumbDemo } from '@/components/nova-ui/blocks/breadcrumb';
import type { ComponentRegistryEntry } from '../types';

export const breadcrumbEntry: ComponentRegistryEntry = {
  type: 'breadcrumb',
  label: 'Breadcrumb',
  labelKey: 'componentTypeBreadcrumb',
  category: 'blocks',
  component: BreadcrumbDemo,
  baseConfig: null,
  props: [
    {
      name: 'items',
      type: 'json',
      label: 'Items',
      labelKey: 'propItems',
      defaultValue: [
        { label: 'Home', labelKey: 'breadcrumbHome', href: '#' },
        { label: 'Components', labelKey: 'breadcrumbComponents', href: '#' },
        { label: 'Breadcrumb', labelKey: 'breadcrumbCurrent', isCurrentPage: true },
      ],
    },
  ],
  defaultProps: {
    items: [
      { label: 'Home', labelKey: 'breadcrumbHome', href: '#' },
      { label: 'Components', labelKey: 'breadcrumbComponents', href: '#' },
      { label: 'Breadcrumb', labelKey: 'breadcrumbCurrent', isCurrentPage: true },
    ],
  },
  availableEffects: [],
};
