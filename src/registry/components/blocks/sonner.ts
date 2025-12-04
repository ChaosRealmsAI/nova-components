/**
 * Sonner Component Entry
 */

import { SonnerDemo, sonnerAtoms } from '@/components/nova-ui/blocks/sonner';
import type { ComponentRegistryEntry } from '../types';

export const sonnerEntry: ComponentRegistryEntry = {
  type: 'sonner',
  label: 'Sonner',
  labelKey: 'componentTypeSonner',
  category: 'blocks',
  component: SonnerDemo,
  baseConfig: null,
  atoms: sonnerAtoms,
  props: [],
  defaultProps: {},
  availableEffects: [],
};
