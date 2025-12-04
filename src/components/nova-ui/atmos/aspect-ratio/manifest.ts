/**
 * AspectRatio Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'aspect-ratio',
  name: 'AspectRatio',
  category: 'atoms',
  label: 'Aspect Ratio',
  labelKey: 'componentTypeAspectRatio',

  files: {
    component: 'index.tsx',
  },

  themeConfigs: [
    { componentName: 'AspectRatio', configName: 'aspectRatioConfig' },
  ],

  themeFile: 'components/aspect-ratio.ts',

  cssVars: [
    '--border',
    '--muted',
    '--muted-foreground',
    '--primary',
  ],

  dependencies: [],

  exportOptions: {
    noChildren: false,
    customJsx: `<AspectRatio ratio="16/9">
  <img
    src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
    alt="Photo by Drew Beamer"
    className="h-full w-full object-cover rounded-md"
  />
</AspectRatio>`,
  },

  canvas: {
    size: { width: 320, height: 200 },
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
      // We don't pass children here for simple canvas testing, relying on defaultContent in component
      // OR we could pass an image. The component defaults to a placeholder if no children.
    },
    availableEffects: [],
  },
};
