/**
 * DatePicker Component Entry
 */

import { DatePickerDemo, datePickerBaseConfig, datePickerAtoms } from '@/components/nova-ui/blocks/date-picker';
import type { ComponentRegistryEntry } from '../types';

export const datePickerEntry: ComponentRegistryEntry = {
  type: 'date-picker',
  label: 'Date Picker',
  labelKey: 'componentTypeDatePicker',
  category: 'blocks',
  component: DatePickerDemo,
  baseConfig: datePickerBaseConfig,
  atoms: datePickerAtoms,
  props: [
    {
      name: 'placeholder',
      type: 'text',
      label: 'Placeholder',
      labelKey: 'propPlaceholder',
      defaultValue: 'Pick a date',
    },
  ],
  defaultProps: {
    placeholder: 'Pick a date',
  },
  availableEffects: [],
};
