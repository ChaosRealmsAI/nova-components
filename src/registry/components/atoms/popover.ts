/**
 * Popover Component Entry
 */

import { PopoverDemo, popoverBaseConfig } from '@/components/nova-ui/atmos/popover';
import type { ComponentRegistryEntry } from '../types';

export const popoverEntry: ComponentRegistryEntry = {
  type: 'popover',
  label: 'Popover',
  labelKey: 'componentTypePopover',
  category: 'atoms',
  component: PopoverDemo,
  baseConfig: popoverBaseConfig,
  props: [
    {
      name: 'content',
      type: 'text',
      label: 'Content',
      labelKey: 'propContent',
      defaultValue: 'Place content for the popover here.',
      defaultValueKey: 'popoverContentDefault',
    },
  ],
  defaultProps: {
    content: 'Place content for the popover here.',
  },
  availableEffects: ['spotlight'],
};
