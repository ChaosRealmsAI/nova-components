/**
 * Dialog Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'dialog',
  name: 'Dialog',
  category: 'blocks',
  label: 'Dialog',
  labelKey: 'componentTypeDialog',

  files: {
    component: 'index.tsx',
  },

  themeConfigs: [
    { componentName: 'Dialog', configName: 'dialogConfig' },
  ],

  themeFile: 'components/dialog.ts',

  cssVars: ['--background', '--border', '--foreground', '--muted-foreground'],

  dependencies: ['button'],

  exportOptions: {
    noChildren: true,
    customJsx: `<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Edit Profile</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile here. Click save when you're done.
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">Name</Label>
        <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="username" className="text-right">Username</Label>
        <Input id="username" defaultValue="@peduarte" className="col-span-3" />
      </div>
    </div>
    <DialogFooter>
      <Button type="submit">Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
    customImports: ['Dialog', 'DialogTrigger', 'DialogContent', 'DialogHeader', 'DialogTitle', 'DialogDescription', 'DialogFooter', 'Button', 'Input', 'Label'],
  },

  canvas: {
    size: { width: 160, height: 60 },
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
  },
};
