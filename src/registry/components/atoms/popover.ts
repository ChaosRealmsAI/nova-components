/**
 * Popover Component Entry
 */

import { Popover } from '@/components/nova-ui/atmos/popover';
import type { ComponentRegistryEntry } from '../types';

export const popoverEntry: ComponentRegistryEntry = {
  type: 'popover',
  label: 'Popover',
  labelKey: 'componentTypePopover',
  category: 'atoms',
  component: Popover,
  baseConfig: null,
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
  defaultProps: {},
  availableEffects: ['spotlight'],
};