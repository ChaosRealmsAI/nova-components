/**
 * AlertDialog Component Entry
 */

import { AlertDialogDemo, alertDialogBaseConfig, alertDialogAtoms } from '@/components/nova-ui/blocks/alert-dialog';
import type { ComponentRegistryEntry } from '../types';

export const alertDialogEntry: ComponentRegistryEntry = {
  type: 'alert-dialog',
  label: 'Alert Dialog',
  labelKey: 'componentTypeAlertDialog',
  category: 'blocks',
  component: AlertDialogDemo,
  baseConfig: alertDialogBaseConfig,
  atoms: alertDialogAtoms,
  props: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      labelKey: 'propTitle',
      defaultValue: 'Are you absolutely sure?',
      defaultValueKey: 'alertDialogTitleDefault',
    },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
      labelKey: 'propDescription',
      defaultValue: 'This action cannot be undone.',
      defaultValueKey: 'alertDialogDescriptionDefault',
    },
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
      name: 'confirmLabel',
      type: 'text',
      label: 'Confirm Label',
      labelKey: 'propConfirmLabel',
      defaultValue: 'Continue',
    },
    {
      name: 'cancelLabel',
      type: 'text',
      label: 'Cancel Label',
      labelKey: 'propCancelLabel',
      defaultValue: 'Cancel',
    },
  ],
  defaultProps: {
    title: 'Are you absolutely sure?',
    description: 'This action cannot be undone.',
    variant: 'default',
    confirmLabel: 'Continue',
    cancelLabel: 'Cancel',
  },
  availableEffects: [],
};
