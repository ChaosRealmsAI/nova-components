/**
 * Pagination Component Entry
 */

import { PaginationDemo, paginationBaseConfig, paginationAtoms } from '@/components/nova-ui/blocks/pagination';
import type { ComponentRegistryEntry } from '../types';

export const paginationEntry: ComponentRegistryEntry = {
  type: 'pagination',
  label: 'Pagination',
  labelKey: 'componentTypePagination',
  category: 'blocks',
  component: PaginationDemo,
  baseConfig: paginationBaseConfig,
  atoms: paginationAtoms,
  props: [
    {
      name: 'variant',
      type: 'select',
      label: 'Variant',
      labelKey: 'propVariant',
      options: [
        { value: 'default', label: 'Default', labelKey: 'valDefault' },
        { value: 'outline', label: 'Outline', labelKey: 'valOutline' },
      ],
      defaultValue: 'default',
    },
    {
      name: 'totalPages',
      type: 'number',
      label: 'Total Pages',
      labelKey: 'propTotalPages',
      defaultValue: 5,
    },
    {
      name: 'currentPage',
      type: 'number',
      label: 'Current Page',
      labelKey: 'propCurrentPage',
      defaultValue: 1,
    },
    {
      name: 'previousLabel',
      type: 'text',
      label: 'Previous Label',
      labelKey: 'propPreviousLabel',
      defaultValue: 'Previous',
      defaultValueKey: 'paginationPreviousLabel',
    },
    {
      name: 'nextLabel',
      type: 'text',
      label: 'Next Label',
      labelKey: 'propNextLabel',
      defaultValue: 'Next',
      defaultValueKey: 'paginationNextLabel',
    },
  ],
  defaultProps: {
    variant: 'default',
    totalPages: 5,
    currentPage: 1,
    previousLabel: 'Previous',
    nextLabel: 'Next',
  },
  availableEffects: [],
};
