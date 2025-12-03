/**
 * ContextMenu Component Entry
 */

import { ContextMenuDemo, contextMenuBaseConfig, contextMenuAtoms } from '@/components/nova-ui/blocks/context-menu';
import type { ComponentRegistryEntry } from '../types';

export const contextMenuEntry: ComponentRegistryEntry = {
  type: 'context-menu',
  label: 'Context Menu',
  labelKey: 'componentTypeContextMenu',
  category: 'blocks',
  component: ContextMenuDemo,
  baseConfig: contextMenuBaseConfig,
  atoms: contextMenuAtoms,
  props: [],
  defaultProps: {},
  availableEffects: [],
};
