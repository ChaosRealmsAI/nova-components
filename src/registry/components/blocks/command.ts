/**
 * Command Component Entry
 */

import { CommandDemo, commandAtoms } from '@/components/nova-ui/blocks/command';
import type { ComponentRegistryEntry } from '../types';

export const commandEntry: ComponentRegistryEntry = {
  type: 'command',
  label: 'Command',
  labelKey: 'componentTypeCommand',
  category: 'blocks',
  component: CommandDemo,
  baseConfig: null,
  atoms: commandAtoms,
  props: [],
  defaultProps: {},
  availableEffects: [],
};
