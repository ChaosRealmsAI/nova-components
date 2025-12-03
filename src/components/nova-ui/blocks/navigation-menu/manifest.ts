/**
 * NavigationMenu Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'navigation-menu',
  name: 'NavigationMenu',
  category: 'blocks',
  label: 'Navigation Menu',
  labelKey: 'componentTypeNavigationMenu',

  files: {
    component: 'index.tsx',
    config: 'navigation-menu.config.ts',
  },

  themeConfigs: [
    { componentName: 'NavigationMenu', configName: 'navigationMenuConfig' },
  ],

  themeFile: 'components/navigation-menu.ts',

  cssVars: [
    '--primary',
    '--border',
    '--accent',
    '--muted-foreground',
  ],

  dependencies: [],

  exportOptions: {
    noChildren: false,
    customJsx: `<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-4 w-[200px]">
          <li>
            <NavigationMenuLink asChild>
              <a href="#">Introduction</a>
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <a href="#">Documentation</a>
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`,
  },

  canvas: {
    size: { width: 360, height: 60 },
    props: [
      {
        name: 'variant',
        type: 'select',
        label: 'Variant',
        labelKey: 'propVariant',
        options: [
          { value: 'default', label: 'Default', labelKey: 'valDefault' },
        ],
        defaultValue: 'default',
      },
      {
        name: 'gettingStartedLabel',
        type: 'text',
        label: 'Getting Started Label',
        labelKey: 'propGettingStartedLabel',
        defaultValue: 'Getting Started',
        defaultValueKey: 'navigationMenuGettingStarted',
      },
      {
        name: 'componentsLabel',
        type: 'text',
        label: 'Components Label',
        labelKey: 'propComponentsLabel',
        defaultValue: 'Components',
        defaultValueKey: 'navigationMenuComponents',
      },
      {
        name: 'documentationLabel',
        type: 'text',
        label: 'Documentation Label',
        labelKey: 'propDocumentationLabel',
        defaultValue: 'Documentation',
        defaultValueKey: 'navigationMenuDocumentation',
      },
      {
        name: 'introLabel',
        type: 'text',
        label: 'Intro Label',
        labelKey: 'propIntroLabel',
        defaultValue: 'Introduction',
        defaultValueKey: 'navigationMenuIntro',
      },
      {
        name: 'installLabel',
        type: 'text',
        label: 'Install Label',
        labelKey: 'propInstallLabel',
        defaultValue: 'Installation',
        defaultValueKey: 'navigationMenuInstall',
      },
      {
        name: 'usageLabel',
        type: 'text',
        label: 'Usage Label',
        labelKey: 'propUsageLabel',
        defaultValue: 'Usage',
        defaultValueKey: 'navigationMenuUsage',
      },
    ],
    defaultProps: {
      variant: 'default',
      gettingStartedLabel: 'Getting Started',
      componentsLabel: 'Components',
      documentationLabel: 'Documentation',
      introLabel: 'Introduction',
      installLabel: 'Installation',
      usageLabel: 'Usage',
    },
    availableEffects: [],
  },
};
