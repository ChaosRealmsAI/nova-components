/**
 * Card Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'card',
  name: 'Card',
  category: 'atoms',
  label: 'Card',
  labelKey: 'componentTypeCard',

  files: {
    component: 'index.tsx',
    config: 'card.config.ts',
  },

  themeConfigs: [
    { componentName: 'Card', configName: 'cardConfig' },
  ],

  themeFile: 'components/card.ts',

  cssVars: [
    '--card',
    '--card-foreground',
    '--border',
    '--primary',
    '--muted-foreground',
  ],

  dependencies: [],

  exportOptions: {
    noChildren: true,
    customJsx: `<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content area.</p>
  </CardContent>
  <CardFooter>
    <p>Card footer</p>
  </CardFooter>
</Card>`,
    customImports: ['Card', 'CardHeader', 'CardTitle', 'CardDescription', 'CardContent', 'CardFooter'],
  },

  canvas: {
    size: { width: 280, height: 200 },
    props: [
      {
        name: 'variant',
        type: 'select',
        label: 'Variant',
        labelKey: 'propVariant',
        options: [
          { value: 'default', label: 'Default', labelKey: 'valDefault' },
          { value: 'outline', label: 'Outline', labelKey: 'valOutline' },
          { value: 'ghost', label: 'Ghost', labelKey: 'valGhost' },
          { value: 'elevated', label: 'Elevated', labelKey: 'valElevated' },
        ],
        defaultValue: 'default',
      },
      {
        name: 'size',
        type: 'select',
        label: 'Size',
        labelKey: 'propSize',
        options: [
          { value: 'sm', label: 'Small', labelKey: 'valSm' },
          { value: 'default', label: 'Default', labelKey: 'valDefault' },
          { value: 'lg', label: 'Large', labelKey: 'valLg' },
        ],
        defaultValue: 'default',
      },
    ],
    defaultProps: {
      variant: 'default',
      size: 'default',
    },
    availableEffects: [],
  },
};
