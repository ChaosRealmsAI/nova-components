/**
 * Menubar Component Entry
 */

import { MenubarDemo, menubarAtoms } from '@/components/nova-ui/blocks/menubar';
import type { ComponentRegistryEntry } from '../types';

export const menubarEntry: ComponentRegistryEntry = {
  type: 'menubar',
  label: 'Menubar',
  labelKey: 'componentTypeMenubar',
  category: 'blocks',
  component: MenubarDemo,
  baseConfig: null,
  atoms: menubarAtoms,
  props: [],
  defaultProps: {},
  availableEffects: [],
};
