/**
 * DataTable Component Entry
 */

import { DataTableDemo, dataTableAtoms } from '@/components/nova-ui/blocks/data-table';
import type { ComponentRegistryEntry } from '../types';

export const dataTableEntry: ComponentRegistryEntry = {
  type: 'data-table',
  label: 'Data Table',
  labelKey: 'componentTypeDataTable',
  category: 'blocks',
  component: DataTableDemo,
  baseConfig: null,
  atoms: dataTableAtoms,
  props: [],
  defaultProps: {},
  availableEffects: [],
};
