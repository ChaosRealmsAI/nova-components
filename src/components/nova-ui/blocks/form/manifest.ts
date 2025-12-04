/**
 * Form Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'form',
  name: 'Form',
  category: 'blocks',
  label: 'Form',
  labelKey: 'componentTypeForm',

  files: {
    component: 'index.tsx',
  },

  themeConfigs: [
    { componentName: 'Form', configName: 'formConfig' },
  ],

  themeFile: 'components/form.ts',

  cssVars: [],

  dependencies: ['label', 'input', 'button'],

  exportOptions: {
    noChildren: true,
    customJsx: `<Form onSubmit={(e) => e.preventDefault()} className="w-full max-w-sm space-y-4">
  <FormItem>
    <FormLabel htmlFor="email">Email</FormLabel>
    <FormControl>
      <Input id="email" type="email" placeholder="Enter your email" />
    </FormControl>
    <FormDescription>We will never share your email.</FormDescription>
  </FormItem>
  <FormItem>
    <FormLabel htmlFor="password">Password</FormLabel>
    <FormControl>
      <Input id="password" type="password" placeholder="Enter your password" />
    </FormControl>
  </FormItem>
  <Button type="submit" className="w-full">Sign In</Button>
</Form>`,
    customImports: ['Form', 'FormItem', 'FormLabel', 'FormControl', 'FormDescription', 'Input', 'Button'],
  },

  canvas: {
    size: { width: 280, height: 200 },
    props: [
      {
        name: 'variant',
        type: 'select',
        label: 'Variant',
        labelKey: 'propVariant',
        options: [
          { value: 'default', label: 'Default', labelKey: 'valDefault' },
          { value: 'inline', label: 'Inline', labelKey: 'valInline' },
        ],
        defaultValue: 'default',
      },
      {
        name: 'emailLabel',
        type: 'text',
        label: 'Email Label',
        labelKey: 'propEmailLabel',
        defaultValue: 'Email',
        defaultValueKey: 'formEmailLabel',
      },
      {
        name: 'passwordLabel',
        type: 'text',
        label: 'Password Label',
        labelKey: 'propPasswordLabel',
        defaultValue: 'Password',
        defaultValueKey: 'formPasswordLabel',
      },
      {
        name: 'submitLabel',
        type: 'text',
        label: 'Submit Label',
        labelKey: 'propSubmitLabel',
        defaultValue: 'Sign In',
        defaultValueKey: 'formSubmitLabel',
      },
      {
        name: 'emailDescription',
        type: 'text',
        label: 'Email Description',
        labelKey: 'propEmailDescription',
        defaultValue: 'We will never share your email.',
        defaultValueKey: 'formEmailDescription',
      },
      {
        name: 'emailPlaceholder',
        type: 'text',
        label: 'Email Placeholder',
        labelKey: 'propEmailPlaceholder',
        defaultValue: 'Enter your email',
        defaultValueKey: 'formEmailPlaceholder',
      },
      {
        name: 'passwordPlaceholder',
        type: 'text',
        label: 'Password Placeholder',
        labelKey: 'propPasswordPlaceholder',
        defaultValue: 'Enter your password',
        defaultValueKey: 'formPasswordPlaceholder',
      },
    ],
    defaultProps: {
      variant: 'default',
      emailLabel: 'Email',
      passwordLabel: 'Password',
      submitLabel: 'Sign In',
      emailDescription: 'We will never share your email.',
      emailPlaceholder: 'Enter your email',
      passwordPlaceholder: 'Enter your password',
    },
    availableEffects: [],
  },
};
