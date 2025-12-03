/**
 * Chart Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'chart',
  name: 'Chart',
  category: 'blocks',
  label: 'Chart',
  labelKey: 'componentTypeChart',

  files: {
    component: 'index.tsx',
    config: 'chart.config.ts',
  },

  themeConfigs: [
    { componentName: 'Chart', configName: 'chartConfig' },
  ],

  themeFile: 'components/chart.ts',

  cssVars: ['--background', '--foreground', '--muted', '--muted-foreground', '--border', '--radius'],

  dependencies: [],

  exportOptions: {
    noChildren: true,
    customJsx: `<ChartContainer config={chartConfig} className="min-h-[200px] w-full">
  <BarChart accessibilityLayer data={chartData}>
    <CartesianGrid vertical={false} />
    <XAxis
      dataKey="month"
      tickLine={false}
      tickMargin={10}
      axisLine={false}
      tickFormatter={(value) => value.slice(0, 3)}
    />
    <ChartTooltip content={<ChartTooltipContent />} />
    <ChartLegend content={<ChartLegendContent />} />
    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
  </BarChart>
</ChartContainer>`,
    customImports: [
      'ChartContainer',
      'ChartTooltip',
      'ChartTooltipContent',
      'ChartLegend',
      'ChartLegendContent',
    ],
    extraImports: `import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"`,
  },

  canvas: {
    size: { width: 600, height: 400 },
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
  },
};
