/**
 * NavigationMenu Component Entry
 */

import { NavigationMenuDemo, navigationMenuAtoms } from '@/components/nova-ui/blocks/navigation-menu';
import type { ComponentRegistryEntry } from '../types';

export const navigationMenuEntry: ComponentRegistryEntry = {
  type: 'navigation-menu',
  label: 'Navigation Menu',
  labelKey: 'componentTypeNavigationMenu',
  category: 'blocks',
  component: NavigationMenuDemo,
  baseConfig: null,
  atoms: navigationMenuAtoms,
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
};
