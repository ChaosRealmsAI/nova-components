/**
 * Pagination Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'pagination',
  name: 'Pagination',
  category: 'blocks',
  label: 'Pagination',
  labelKey: 'componentTypePagination',

  files: {
    component: 'index.tsx',
    config: 'pagination.config.ts',
  },

  themeConfigs: [
    { componentName: 'Pagination', configName: 'paginationConfig' },
  ],

  themeFile: 'components/pagination.ts',

  cssVars: [],

  dependencies: ['button'],

  exportOptions: {
    noChildren: true,
    customJsx: `<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious label="Previous" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink isActive>1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink>2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink>3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext label="Next" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`,
    customImports: ['Pagination', 'PaginationContent', 'PaginationItem', 'PaginationLink', 'PaginationPrevious', 'PaginationNext', 'PaginationEllipsis'],
  },

  canvas: {
    size: { width: 320, height: 50 },
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
  },
};
