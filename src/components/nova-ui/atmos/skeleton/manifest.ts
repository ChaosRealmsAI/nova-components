/**
 * Skeleton Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'skeleton',
  name: 'Skeleton',
  category: 'atoms',
  label: 'Skeleton',
  labelKey: 'componentTypeSkeleton',

  files: {
    component: 'index.tsx',
  },

  themeConfigs: [
    { componentName: 'Skeleton', configName: 'skeletonConfig' },
  ],

  themeFile: 'components/skeleton.ts',

  cssVars: [],

  dependencies: [],

  exportOptions: {
    noChildren: true,
    customJsx: `<Skeleton className="w-[100px] h-[20px] rounded-full" />`,
  },

  canvas: {
    size: { width: 140, height: 48 },
    props: [
      {
        name: 'variant',
        type: 'select',
        label: 'Variant',
        labelKey: 'propVariant',
        options: [
          { value: 'default', label: 'Default', labelKey: 'valDefault' },
          { value: 'circular', label: 'Circular', labelKey: 'valCircular' },
          { value: 'text', label: 'Text', labelKey: 'valText' },
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