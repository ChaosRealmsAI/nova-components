/**
 * Alert Component Entry
 */

import { AlertDemo } from '@/components/nova-ui/blocks/alert';
import type { ComponentRegistryEntry } from '../types';

export const alertEntry: ComponentRegistryEntry = {
  type: 'alert',
  label: 'Alert',
  labelKey: 'componentTypeAlert',
  category: 'blocks',
  component: AlertDemo,
  baseConfig: null,
  props: [
    {
      name: 'variant',
      type: 'select',
      label: 'Variant',
      labelKey: 'propVariant',
      options: [
        { value: 'default', label: 'Default', labelKey: 'valDefault' },
        { value: 'destructive', label: 'Destructive', labelKey: 'valDestructive' },
      ],
      defaultValue: 'default',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      labelKey: 'propTitle',
      defaultValue: 'Heads up!',
      defaultValueKey: 'alertTitleDefault',
    },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
      labelKey: 'propDescription',
      defaultValue: 'You can add components to your app using the CLI.',
      defaultValueKey: 'alertDescriptionDefault',
    },
  ],
  defaultProps: {
    variant: 'default',
    title: 'Heads up!',
    description: 'You can add components to your app using the CLI.',
  },
  availableEffects: [],
};
