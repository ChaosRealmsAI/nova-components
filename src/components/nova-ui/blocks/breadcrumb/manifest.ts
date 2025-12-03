/**
 * Breadcrumb Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'breadcrumb',
  name: 'Breadcrumb',
  category: 'blocks',
  label: 'Breadcrumb',
  labelKey: 'componentTypeBreadcrumb',

  files: {
    component: 'index.tsx',
    config: 'breadcrumb.config.ts',
  },

  themeConfigs: [
    { componentName: 'Breadcrumb', configName: 'breadcrumbConfig' },
  ],

  themeFile: 'components/breadcrumb.ts',

  cssVars: ['--muted-foreground', '--foreground'],

  dependencies: [],

  exportOptions: {
    noChildren: false,
  },

  canvas: {
    size: { width: 280, height: 40 },
    props: [
      {
        name: 'items',
        type: 'json',
        label: 'Items',
        labelKey: 'propItems',
        defaultValue: [
          { label: 'Home', labelKey: 'breadcrumbHome', href: '#' },
          { label: 'Components', labelKey: 'breadcrumbComponents', href: '#' },
          { label: 'Breadcrumb', labelKey: 'breadcrumbCurrent', isCurrentPage: true },
        ],
      },
    ],
    defaultProps: {
      items: [
        { label: 'Home', labelKey: 'breadcrumbHome', href: '#' },
        { label: 'Components', labelKey: 'breadcrumbComponents', href: '#' },
        { label: 'Breadcrumb', labelKey: 'breadcrumbCurrent', isCurrentPage: true },
      ],
    },
    availableEffects: [],
  },
};
