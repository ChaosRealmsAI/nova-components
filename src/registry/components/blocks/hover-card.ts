/**
 * HoverCard Component Entry
 */

import { HoverCardDemo } from '@/components/nova-ui/blocks/hover-card';
import type { ComponentRegistryEntry } from '../types';

export const hoverCardEntry: ComponentRegistryEntry = {
  type: 'hover-card',
  label: 'Hover Card',
  labelKey: 'componentTypeHoverCard',
  category: 'blocks',
  component: HoverCardDemo,
  baseConfig: null,
  props: [
    {
      name: 'triggerText',
      type: 'text',
      label: 'Trigger Text',
      labelKey: 'propTriggerText',
      defaultValue: '@nextjs',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      labelKey: 'propTitle',
      defaultValue: 'Next.js',
    },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
      labelKey: 'propDescription',
      defaultValue: 'The React Framework for the Web.',
    },
  ],
  defaultProps: {
    triggerText: '@nextjs',
    title: 'Next.js',
    description: 'The React Framework for the Web.',
  },
  availableEffects: [],
};
