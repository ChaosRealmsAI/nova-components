/**
 * Slider Component Entry
 */

import { Slider } from '@/components/nova-ui/atmos/slider';
import type { ComponentRegistryEntry } from '../types';

export const sliderEntry: ComponentRegistryEntry = {
  type: 'slider',
  label: 'Slider',
  labelKey: 'componentTypeSlider',
  category: 'atoms',
  component: Slider,
  baseConfig: null,
  props: [
    {
      name: 'value',
      type: 'number',
      label: 'Value',
      labelKey: 'propValue',
      defaultValue: 50,
    },
    {
      name: 'min',
      type: 'number',
      label: 'Min',
      labelKey: 'propMin',
      defaultValue: 0,
    },
    {
      name: 'max',
      type: 'number',
      label: 'Max',
      labelKey: 'propMax',
      defaultValue: 100,
    },
    {
      name: 'step',
      type: 'number',
      label: 'Step',
      labelKey: 'propStep',
      defaultValue: 1,
    },
    {
      name: 'size',
      type: 'select',
      label: 'Size',
      labelKey: 'propSize',
      options: [
        { value: 'default', label: 'Default', labelKey: 'valDefault' },
        { value: 'sm', label: 'Small', labelKey: 'valSmall' },
        { value: 'lg', label: 'Large', labelKey: 'valLarge' },
      ],
      defaultValue: 'default',
    },
    {
      name: 'disabled',
      type: 'boolean',
      label: 'Disabled',
      labelKey: 'propDisabled',
      defaultValue: false,
    },
  ],
  defaultProps: {
    value: 50,
    min: 0,
    max: 100,
    step: 1,
    size: 'default',
    disabled: false,
  },
  availableEffects: ['glow'],
};