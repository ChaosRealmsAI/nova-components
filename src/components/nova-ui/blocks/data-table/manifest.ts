/**
 * DataTable Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'data-table',
  name: 'Data Table',
  category: 'blocks',
  label: 'Data Table',
  labelKey: 'componentTypeDataTable',

  files: {
    component: 'index.tsx',
  },

  themeConfigs: [
    { componentName: 'DataTable', configName: 'dataTableConfig' },
  ],

  themeFile: 'components/data-table.ts',

  cssVars: [],

  dependencies: [
    'button',
    'checkbox',
    'input',
    'dropdown-menu',
    'table',
  ],

  exportOptions: {
    noChildren: true,
    customJsx: `<DataTable columns={columns} data={data} />`,
    customImports: ['DataTable', 'columns'],
    extraImports: `import { ColumnDef } from "@tanstack/react-table"`,
  },

  canvas: {
    size: { width: 800, height: 600 },
    props: [],
    defaultProps: {},
    availableEffects: [],
  },
};
