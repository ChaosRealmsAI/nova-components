/**
 * Table Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'table',
  name: 'Table',
  category: 'blocks',
  label: 'Table',
  labelKey: 'componentTypeTable',

  files: {
    component: 'index.tsx',
  },

  themeConfigs: [
    { componentName: 'Table', configName: 'tableConfig' },
  ],

  themeFile: 'components/table.ts',

  cssVars: ['--border', '--muted', '--muted-foreground'],

  dependencies: [],

  exportOptions: {
    noChildren: true,
    customJsx: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">INV002</TableCell>
      <TableCell>Pending</TableCell>
      <TableCell>PayPal</TableCell>
      <TableCell className="text-right">$150.00</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
    customImports: [
      'Table',
      'TableHeader',
      'TableBody',
      'TableFooter',
      'TableHead',
      'TableRow',
      'TableCell',
      'TableCaption',
    ],
  },

  canvas: {
    size: { width: 600, height: 300 },
    props: [],
    defaultProps: {},
    availableEffects: [],
  },
};
