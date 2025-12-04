/**
 * Sheet Component Entry
 */

import { SheetDemo, sheetAtoms } from '@/components/nova-ui/blocks/sheet';
import type { ComponentRegistryEntry } from '../types';

export const sheetEntry: ComponentRegistryEntry = {
  type: 'sheet',
  label: 'Sheet',
  labelKey: 'componentTypeSheet',
  category: 'blocks',
  component: SheetDemo,
  baseConfig: null,
  atoms: sheetAtoms,
  props: [
    {
      name: 'side',
      type: 'select',
      label: 'Side',
      labelKey: 'propSide',
      options: [
        { value: 'right', label: 'Right', labelKey: 'valRight' },
        { value: 'left', label: 'Left', labelKey: 'valLeft' },
        { value: 'top', label: 'Top', labelKey: 'valTop' },
        { value: 'bottom', label: 'Bottom', labelKey: 'valBottom' },
      ],
      defaultValue: 'right',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      labelKey: 'propTitle',
      defaultValue: 'Edit Profile',
      defaultValueKey: 'sheetTitleDefault',
    },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
      labelKey: 'propDescription',
      defaultValue: 'Make changes to your profile here. Click save when done.',
      defaultValueKey: 'sheetDescriptionDefault',
    },
    {
      name: 'triggerLabel',
      type: 'text',
      label: 'Trigger Label',
      labelKey: 'propTriggerLabel',
      defaultValue: 'Open Sheet',
      defaultValueKey: 'sheetTriggerLabel',
    },
  ],
  defaultProps: {
    side: 'right',
    title: 'Edit Profile',
    description: 'Make changes to your profile here. Click save when done.',
    triggerLabel: 'Open Sheet',
  },
  availableEffects: [],
};
