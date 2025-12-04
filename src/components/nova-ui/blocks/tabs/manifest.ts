/**
 * Tabs Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'tabs',
  name: 'Tabs',
  category: 'blocks',
  label: 'Tabs',
  labelKey: 'componentTypeTabs',

  files: {
    component: 'index.tsx',
  },

  themeConfigs: [
    { componentName: 'Tabs', configName: 'tabsConfig' },
  ],

  themeFile: 'components/tabs.ts',

  cssVars: [
    '--primary',
    '--primary-foreground',
  ],

  dependencies: [],

  exportOptions: {
    noChildren: true,
    customJsx: `<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>`,
    customImports: ['Tabs', 'TabsList', 'TabsTrigger', 'TabsContent'],
  },

  canvas: {
    size: { width: 280, height: 140 },
    props: [
      {
        name: 'variant',
        type: 'select',
        label: 'Variant',
        labelKey: 'propVariant',
        options: [
          { value: 'default', label: 'Default', labelKey: 'valDefault' },
          { value: 'underline', label: 'Underline', labelKey: 'valUnderline' },
        ],
        defaultValue: 'default',
      },
      {
        name: 'items',
        type: 'json',
        label: 'Items',
        labelKey: 'propItems',
        defaultValue: [
          { value: 'tab1', label: 'Account', labelKey: 'tabsTab1Label', content: 'Make changes to your account here.', contentKey: 'tabsTab1Content' },
          { value: 'tab2', label: 'Password', labelKey: 'tabsTab2Label', content: 'Change your password here.', contentKey: 'tabsTab2Content' },
          { value: 'tab3', label: 'Settings', labelKey: 'tabsTab3Label', content: 'Manage your settings here.', contentKey: 'tabsTab3Content' },
        ],
      },
    ],
    defaultProps: {
      variant: 'default',
      items: [
        { value: 'tab1', label: 'Account', labelKey: 'tabsTab1Label', content: 'Make changes to your account here.', contentKey: 'tabsTab1Content' },
        { value: 'tab2', label: 'Password', labelKey: 'tabsTab2Label', content: 'Change your password here.', contentKey: 'tabsTab2Content' },
        { value: 'tab3', label: 'Settings', labelKey: 'tabsTab3Label', content: 'Manage your settings here.', contentKey: 'tabsTab3Content' },
      ],
    },
    availableEffects: [],
  },
};
