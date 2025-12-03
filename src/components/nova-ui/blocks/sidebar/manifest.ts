/**
 * Sidebar Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'sidebar',
  name: 'Sidebar',
  category: 'blocks',
  label: 'Sidebar',
  labelKey: 'componentTypeSidebar',

  files: {
    component: 'index.tsx',
    config: 'sidebar.config.ts',
  },

  themeConfigs: [
    { componentName: 'Sidebar', configName: 'sidebarConfig' },
  ],

  themeFile: 'components/sidebar.ts',

  cssVars: [
    '--sidebar-width',
    '--sidebar-background',
    '--sidebar-foreground',
    '--sidebar-border',
    '--sidebar-accent',
    '--sidebar-accent-foreground',
  ],

  dependencies: ['button', 'separator'],

  exportOptions: {
    noChildren: true,
    customJsx: `<SidebarProvider>
  <Sidebar>
    <SidebarHeader>
      <div className="flex items-center gap-2 px-2">
        <span className="font-semibold">My App</span>
      </div>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Main</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton active>
              Dashboard
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>
              Settings
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
      <div className="px-2 py-1 text-sm">User</div>
    </SidebarFooter>
  </Sidebar>
</SidebarProvider>`,
    customImports: ['SidebarProvider', 'Sidebar', 'SidebarHeader', 'SidebarContent', 'SidebarFooter', 'SidebarGroup', 'SidebarGroupLabel', 'SidebarMenu', 'SidebarMenuItem', 'SidebarMenuButton'],
  },

  canvas: {
    size: { width: 600, height: 400 },
    props: [
      {
        name: 'variant',
        type: 'select',
        label: 'Variant',
        labelKey: 'propVariant',
        options: [
          { value: 'default', label: 'Default', labelKey: 'valDefault' },
          { value: 'inset', label: 'Inset', labelKey: 'valInset' },
        ],
        defaultValue: 'default',
      },
      {
        name: 'collapsible',
        type: 'select',
        label: 'Collapsible',
        labelKey: 'propCollapsible',
        options: [
          { value: 'none', label: 'None', labelKey: 'valNone' },
          { value: 'icon', label: 'Icon', labelKey: 'valIcon' },
          { value: 'offcanvas', label: 'Offcanvas', labelKey: 'valOffcanvas' },
        ],
        defaultValue: 'none',
      },
      {
        name: 'title',
        type: 'text',
        label: 'App Title',
        labelKey: 'propTitle',
        defaultValue: 'My App',
        defaultValueKey: 'sidebarAppTitle',
      },
    ],
    defaultProps: {
      variant: 'default',
      collapsible: 'none',
      title: 'My App',
    },
    availableEffects: [],
  },
};
