/**
 * DatePicker Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'date-picker',
  name: 'Date Picker',
  category: 'blocks',
  label: 'Date Picker',
  labelKey: 'componentTypeDatePicker',

  files: {
    component: 'index.tsx',
    config: 'date-picker.config.ts',
  },

  themeConfigs: [
    { componentName: 'DatePicker', configName: 'datePickerConfig' },
  ],

  themeFile: 'components/date-picker.ts',

  cssVars: [],

  dependencies: ['popover', 'button', 'calendar'],

  exportOptions: {
    noChildren: true,
    customJsx: `<DatePicker />`,
    customImports: ['DatePicker'],
    extraImports: `import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"`,
  },

  canvas: {
    size: { width: 300, height: 60 },
    props: [
      {
        name: 'placeholder',
        type: 'text',
        label: 'Placeholder',
        labelKey: 'propPlaceholder',
        defaultValue: 'Pick a date',
        defaultValueKey: 'datePickerPlaceholder',
      },
    ],
    defaultProps: {
      placeholder: 'Pick a date',
    },
    availableEffects: [],
  },
};
