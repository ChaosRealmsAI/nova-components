/**
 * Chart Component Entry
 */

import { ChartDemo, chartBaseConfig, chartAtoms } from '@/components/nova-ui/blocks/chart';
import type { ComponentRegistryEntry } from '../types';

export const chartEntry: ComponentRegistryEntry = {
  type: 'chart',
  label: 'Chart',
  labelKey: 'componentTypeChart',
  category: 'blocks',
  component: ChartDemo,
  baseConfig: chartBaseConfig,
  atoms: chartAtoms,
  props: [
    {
      name: 'showLegend',
      type: 'boolean',
      label: 'Show Legend',
      labelKey: 'propShowLegend',
      defaultValue: true,
    },
    {
      name: 'showTooltip',
      type: 'boolean',
      label: 'Show Tooltip',
      labelKey: 'propShowTooltip',
      defaultValue: true,
    },
    {
      name: 'showGrid',
      type: 'boolean',
      label: 'Show Grid',
      labelKey: 'propShowGrid',
      defaultValue: true,
    },
  ],
  defaultProps: {
    showLegend: true,
    showTooltip: true,
    showGrid: true,
  },
  availableEffects: [],
};
