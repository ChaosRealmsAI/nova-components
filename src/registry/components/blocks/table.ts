/**
 * Table Component Entry
 */

import { TableDemo, tableAtoms } from '@/components/nova-ui/blocks/table';
import type { ComponentRegistryEntry } from '../types';

export const tableEntry: ComponentRegistryEntry = {
  type: 'table',
  label: 'Table',
  labelKey: 'componentTypeTable',
  category: 'blocks',
  component: TableDemo,
  baseConfig: null,
  atoms: tableAtoms,
  props: [],
  defaultProps: {},
  availableEffects: [],
};
