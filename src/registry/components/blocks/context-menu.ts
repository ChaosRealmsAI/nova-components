/**
 * ContextMenu Component Entry
 */

import { ContextMenuDemo, contextMenuAtoms } from '@/components/nova-ui/blocks/context-menu';
import type { ComponentRegistryEntry } from '../types';

export const contextMenuEntry: ComponentRegistryEntry = {
  type: 'context-menu',
  label: 'Context Menu',
  labelKey: 'componentTypeContextMenu',
  category: 'blocks',
  component: ContextMenuDemo,
  baseConfig: null,
  atoms: contextMenuAtoms,
  props: [],
  defaultProps: {},
  availableEffects: [],
};
