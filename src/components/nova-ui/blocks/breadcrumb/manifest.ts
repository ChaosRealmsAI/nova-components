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
  },

  themeConfigs: [
    { componentName: 'Breadcrumb', configName: 'breadcrumbConfig' },
  ],

  themeFile: 'components/breadcrumb.ts',

  cssVars: ['--muted-foreground', '--foreground'],

  dependencies: [],

  exportOptions: {
    customImports: ['Breadcrumb', 'BreadcrumbList', 'BreadcrumbItem', 'BreadcrumbLink', 'BreadcrumbPage', 'BreadcrumbSeparator', 'BreadcrumbEllipsis'],
    extraImports: `import { Slash } from "lucide-react"`,
    customJsx: `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>
      <Slash className="h-4 w-4" />
    </BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>
      <Slash className="h-4 w-4" />
    </BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
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
