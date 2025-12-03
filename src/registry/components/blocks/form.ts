/**
 * Form Component Entry
 */

import { FormDemo, formBaseConfig, formAtoms } from '@/components/nova-ui/blocks/form';
import type { ComponentRegistryEntry } from '../types';

export const formEntry: ComponentRegistryEntry = {
  type: 'form',
  label: 'Form',
  labelKey: 'componentTypeForm',
  category: 'blocks',
  component: FormDemo,
  baseConfig: formBaseConfig,
  atoms: formAtoms,
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
};
