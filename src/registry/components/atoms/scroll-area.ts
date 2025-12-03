/**
 * ScrollArea Component Entry
 */

import { ScrollArea, scrollAreaBaseConfig } from '@/components/nova-ui/atmos/scroll-area';
import type { ComponentRegistryEntry } from '../types';

export const scrollAreaEntry: ComponentRegistryEntry = {
  type: 'scroll-area',
  label: 'Scroll Area',
  labelKey: 'componentTypeScrollArea',
  category: 'atoms',
  component: ScrollArea,
  baseConfig: scrollAreaBaseConfig,
  props: [],
  defaultProps: {},
  availableEffects: [],
};
