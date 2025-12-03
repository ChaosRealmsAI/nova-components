/**
 * Slider Component Entry
 */

import { Slider, sliderBaseConfig } from '@/components/nova-ui/atmos/slider';
import type { ComponentRegistryEntry } from '../types';

export const sliderEntry: ComponentRegistryEntry = {
  type: 'slider',
  label: 'Slider',
  labelKey: 'componentTypeSlider',
  category: 'atoms',
  component: Slider,
  baseConfig: sliderBaseConfig,
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
      name: 'variant',
      type: 'select',
      label: 'Variant',
      labelKey: 'propVariant',
      options: [
        { value: 'default', label: 'Default', labelKey: 'valDefault' },
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
    variant: 'default',
    disabled: false,
  },
  availableEffects: ['glow'],
};
