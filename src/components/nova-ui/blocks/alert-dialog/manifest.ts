/**
 * AlertDialog Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'alert-dialog',
  name: 'AlertDialog',
  category: 'blocks',
  label: 'Alert Dialog',
  labelKey: 'componentTypeAlertDialog',

  files: {
    component: 'index.tsx',
    config: 'alert-dialog.config.ts',
  },

  themeConfigs: [
    { componentName: 'AlertDialog', configName: 'alertDialogConfig' },
  ],

  themeFile: 'components/alert-dialog.ts',

  cssVars: ['--background', '--border'],

  dependencies: ['button'],

  exportOptions: {
    noChildren: true,
    customJsx: `<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline">Open Alert</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
    customImports: ['AlertDialog', 'AlertDialogTrigger', 'AlertDialogContent', 'AlertDialogHeader', 'AlertDialogTitle', 'AlertDialogDescription', 'AlertDialogFooter', 'AlertDialogCancel', 'AlertDialogAction', 'Button'],
  },

  canvas: {
    size: { width: 160, height: 60 },
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
        defaultValueKey: 'alertDialogConfirm',
      },
      {
        name: 'cancelLabel',
        type: 'text',
        label: 'Cancel Label',
        labelKey: 'propCancelLabel',
        defaultValue: 'Cancel',
        defaultValueKey: 'alertDialogCancel',
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
  },
};
