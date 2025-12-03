/**
 * Calendar Component Entry
 */

import { CalendarDemo, calendarBaseConfig, calendarAtoms } from '@/components/nova-ui/blocks/calendar';
import type { ComponentRegistryEntry } from '../types';

export const calendarEntry: ComponentRegistryEntry = {
  type: 'calendar',
  label: 'Calendar',
  labelKey: 'componentTypeCalendar',
  category: 'blocks',
  component: CalendarDemo,
  baseConfig: calendarBaseConfig,
  atoms: calendarAtoms,
  props: [
    {
      name: 'variant',
      type: 'select',
      label: 'Variant',
      labelKey: 'propVariant',
      options: [
        { value: 'default', label: 'Default', labelKey: 'valDefault' },
      ],
      defaultValue: 'default',
    },
  ],
  defaultProps: {
    variant: 'default',
  },
  availableEffects: [],
};
