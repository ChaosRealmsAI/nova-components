/**
 * Calendar Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'calendar',
  name: 'Calendar',
  category: 'blocks',
  label: 'Calendar',
  labelKey: 'componentTypeCalendar',

  files: {
    component: 'index.tsx',
  },

  themeConfigs: [
    { componentName: 'Calendar', configName: 'calendarConfig' },
  ],

  themeFile: 'components/calendar.ts',

  cssVars: [
    '--primary',
    '--primary-foreground',
    '--accent',
    '--accent-foreground',
    '--muted-foreground',
  ],

  dependencies: ['button'],

  exportOptions: {
    noChildren: true,
    customJsx: `<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-md border"
/>`,
    customImports: ['Calendar'],
    extraImports: `import * as React from 'react';

const [date, setDate] = React.useState<Date | undefined>(new Date());`,
  },

  canvas: {
    size: { width: 280, height: 320 },
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
  },
};
