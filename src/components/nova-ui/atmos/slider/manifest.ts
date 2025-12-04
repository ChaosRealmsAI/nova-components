/**
 * Slider Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'slider',
  name: 'Slider',
  category: 'atoms',
  label: 'Slider',
  labelKey: 'componentTypeSlider',

  files: {
    component: 'index.tsx',
  },

  themeConfigs: [
    { componentName: 'Slider', configName: 'sliderConfig' },
  ],

  themeFile: 'components/slider.ts',

  cssVars: [
    '--primary',
    '--background',
    '--accent',
  ],

  dependencies: [],

  exportOptions: {
    noChildren: true,
    customJsx: `<Slider defaultValue={[50]} max={100} step={1} />`,
  },

  canvas: {
    size: { width: 160, height: 32 },
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
  },
};