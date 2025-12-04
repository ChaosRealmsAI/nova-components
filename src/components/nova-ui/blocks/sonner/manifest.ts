/**
 * Sonner Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'sonner',
  name: 'Sonner',
  category: 'blocks',
  label: 'Sonner',
  labelKey: 'componentTypeSonner',

  files: {
    component: 'index.tsx',
  },

  themeConfigs: [
    { componentName: 'Sonner', configName: 'sonnerConfig' },
  ],

  themeFile: 'components/sonner.ts',

  cssVars: [],

  dependencies: [],

  exportOptions: {
    noChildren: true,
    customJsx: `<Toaster />`,
    customImports: ['Toaster'],
  },

  canvas: {
    size: { width: 300, height: 100 },
    props: [],
    defaultProps: {},
    availableEffects: [],
  },
};
