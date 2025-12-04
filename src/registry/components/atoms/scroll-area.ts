/**
 * ScrollArea Component Entry
 */

import { ScrollArea } from '@/components/nova-ui/atmos/scroll-area';
import { DEMO_ITEMS, DEMO_HEADER } from '@/components/nova-ui/atmos/scroll-area/manifest';
import type { ComponentRegistryEntry } from '../types';

export const scrollAreaEntry: ComponentRegistryEntry = {
  type: 'scroll-area',
  label: 'Scroll Area',
  labelKey: 'componentTypeScrollArea',
  category: 'atoms',
  component: ScrollArea,
  baseConfig: null, // 纯槽位模式，无 baseConfig
  props: [],
  defaultProps: {
    items: DEMO_ITEMS,
    header: DEMO_HEADER,
  },
  availableEffects: [],
};
