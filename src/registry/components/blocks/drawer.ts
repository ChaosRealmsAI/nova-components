/**
 * Drawer Component Entry
 */

import { DrawerDemo } from '@/components/nova-ui/blocks/drawer';
import type { ComponentRegistryEntry } from '../types';

export const drawerEntry: ComponentRegistryEntry = {
  type: 'drawer',
  label: 'Drawer',
  labelKey: 'componentTypeDrawer',
  category: 'blocks',
  component: DrawerDemo,
  baseConfig: null,
  props: [
    {
      name: 'direction',
      type: 'select',
      label: 'Direction',
      labelKey: 'propDirection',
      options: [
        { value: 'bottom', label: 'Bottom', labelKey: 'valBottom' },
        { value: 'top', label: 'Top', labelKey: 'valTop' },
        { value: 'left', label: 'Left', labelKey: 'valLeft' },
        { value: 'right', label: 'Right', labelKey: 'valRight' },
      ],
      defaultValue: 'bottom',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      labelKey: 'propTitle',
      defaultValue: 'Drawer Title',
      defaultValueKey: 'drawerTitleDefault',
    },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
      labelKey: 'propDescription',
      defaultValue: 'This is a drawer panel that slides in from the edge of the screen.',
      defaultValueKey: 'drawerDescriptionDefault',
    },
    {
      name: 'triggerLabel',
      type: 'text',
      label: 'Trigger Label',
      labelKey: 'propTriggerLabel',
      defaultValue: 'Open Drawer',
      defaultValueKey: 'drawerOpenTrigger',
    },
    {
      name: 'closeLabel',
      type: 'text',
      label: 'Close Label',
      labelKey: 'propCloseLabel',
      defaultValue: 'Close',
      defaultValueKey: 'drawerCloseLabel',
    },
  ],
  defaultProps: {
    direction: 'bottom',
    title: 'Drawer Title',
    description: 'This is a drawer panel that slides in from the edge of the screen.',
    triggerLabel: 'Open Drawer',
    closeLabel: 'Close',
  },
  availableEffects: [],
};
