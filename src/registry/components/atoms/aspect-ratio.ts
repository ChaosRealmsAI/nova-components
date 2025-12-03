/**
 * AspectRatio Component Entry
 */

import { AspectRatio, aspectRatioBaseConfig } from '@/components/nova-ui/atmos/aspect-ratio';
import type { ComponentRegistryEntry } from '../types';

export const aspectRatioEntry: ComponentRegistryEntry = {
  type: 'aspect-ratio',
  label: 'Aspect Ratio',
  labelKey: 'componentTypeAspectRatio',
  category: 'atoms',
  component: AspectRatio,
  baseConfig: aspectRatioBaseConfig,
  props: [
    {
      name: 'ratio',
      type: 'select',
      label: 'Ratio',
      labelKey: 'propRatio',
      options: [
        { value: '1/1', label: 'Square (1:1)', labelKey: 'valSquare' },
        { value: '16/9', label: 'Widescreen (16:9)', labelKey: 'valWidescreen' },
        { value: '4/3', label: 'Standard (4:3)', labelKey: 'valStandard' },
        { value: '21/9', label: 'Ultra-wide (21:9)', labelKey: 'valUltrawide' },
      ],
      defaultValue: '16/9',
    },
  ],
  defaultProps: {
    ratio: '16/9',
  },
  availableEffects: [],
};
