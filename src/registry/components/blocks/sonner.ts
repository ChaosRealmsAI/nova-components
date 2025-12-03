/**
 * Sonner Component Entry
 */

import { SonnerDemo, sonnerBaseConfig, sonnerAtoms } from '@/components/nova-ui/blocks/sonner';
import type { ComponentRegistryEntry } from '../types';

export const sonnerEntry: ComponentRegistryEntry = {
  type: 'sonner',
  label: 'Sonner',
  labelKey: 'componentTypeSonner',
  category: 'blocks',
  component: SonnerDemo,
  baseConfig: sonnerBaseConfig,
  atoms: sonnerAtoms,
  props: [],
  defaultProps: {},
  availableEffects: [],
};
