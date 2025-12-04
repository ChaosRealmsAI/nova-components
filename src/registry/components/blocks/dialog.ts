/**
 * Dialog Component Entry
 */

import { DialogDemo, dialogAtoms } from '@/components/nova-ui/blocks/dialog';
import type { ComponentRegistryEntry } from '../types';

export const dialogEntry: ComponentRegistryEntry = {
  type: 'dialog',
  label: 'Dialog',
  labelKey: 'componentTypeDialog',
  category: 'blocks',
  component: DialogDemo,
  baseConfig: null,
  atoms: dialogAtoms,
  props: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      labelKey: 'propTitle',
      defaultValue: 'Edit Profile',
      defaultValueKey: 'dialogTitleDefault',
    },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
      labelKey: 'propDescription',
      defaultValue: 'Make changes to your profile here.',
      defaultValueKey: 'dialogDescriptionDefault',
    },
    {
      name: 'size',
      type: 'select',
      label: 'Size',
      labelKey: 'propSize',
      options: [
        { value: 'sm', label: 'Small', labelKey: 'valSmall' },
        { value: 'default', label: 'Default', labelKey: 'valDefault' },
        { value: 'lg', label: 'Large', labelKey: 'valLarge' },
        { value: 'xl', label: 'Extra Large', labelKey: 'valExtraLarge' },
        { value: 'full', label: 'Full', labelKey: 'valFull' },
      ],
      defaultValue: 'default',
    },
    {
      name: 'showClose',
      type: 'boolean',
      label: 'Show Close Button',
      labelKey: 'propShowClose',
      defaultValue: true,
    },
  ],
  defaultProps: {
    title: 'Edit Profile',
    description: 'Make changes to your profile here.',
    size: 'default',
    showClose: true,
  },
  availableEffects: [],
};
