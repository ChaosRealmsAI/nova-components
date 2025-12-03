/**
 * Badge Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'badge',
  name: 'Badge',
  category: 'atoms',
  label: 'Badge',
  labelKey: 'componentTypeBadge',

  files: {
    component: 'index.tsx',
    config: 'badge.config.ts',
  },

  themeConfigs: [
    { componentName: 'Badge', configName: 'badgeConfig' },
  ],

  themeFile: 'components/badge.ts',

  cssVars: [
    '--primary',
    '--primary-foreground',
    '--secondary',
    '--secondary-foreground',
    '--destructive',
    '--destructive-foreground',
    '--muted',
    '--muted-foreground',
  ],

  dependencies: [],

  exportOptions: {
    noChildren: false,
  },

  canvas: {
    size: { width: 80, height: 32 },
    props: [
      {
        name: 'variant',
        type: 'select',
        label: 'Variant',
        labelKey: 'propVariant',
        options: [
          { value: 'default', label: 'Default', labelKey: 'valDefault' },
          { value: 'secondary', label: 'Secondary', labelKey: 'valSecondary' },
          { value: 'destructive', label: 'Destructive', labelKey: 'valDestructive' },
          { value: 'outline', label: 'Outline', labelKey: 'valOutline' },
        ],
        defaultValue: 'default',
      },
      {
        name: 'children',
        type: 'text',
        label: 'Text',
        labelKey: 'propText',
        defaultValue: 'Badge',
        defaultValueKey: 'badgeLabelDefault',
      },
    ],
    defaultProps: {
      variant: 'default',
      children: 'Badge',
    },
    availableEffects: ['tilt', 'glow'],
  },
};
