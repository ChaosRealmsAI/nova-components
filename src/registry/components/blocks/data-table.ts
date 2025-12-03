/**
 * DataTable Component Entry
 */

import { DataTableDemo, dataTableBaseConfig, dataTableAtoms } from '@/components/nova-ui/blocks/data-table';
import type { ComponentRegistryEntry } from '../types';

export const dataTableEntry: ComponentRegistryEntry = {
  type: 'data-table',
  label: 'Data Table',
  labelKey: 'componentTypeDataTable',
  category: 'blocks',
  component: DataTableDemo,
  baseConfig: dataTableBaseConfig,
  atoms: dataTableAtoms,
  props: [],
  defaultProps: {},
  availableEffects: [],
};
