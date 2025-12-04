/**
 * Combobox Component Entry
 */

import { ComboboxDemo, comboboxAtoms } from '@/components/nova-ui/blocks/combobox';
import type { ComponentRegistryEntry } from '../types';

export const comboboxEntry: ComponentRegistryEntry = {
  type: 'combobox',
  label: 'Combobox',
  labelKey: 'componentTypeCombobox',
  category: 'blocks',
  component: ComboboxDemo,
  baseConfig: null,
  atoms: comboboxAtoms,
  props: [
    {
      name: 'placeholder',
      type: 'text',
      label: 'Placeholder',
      labelKey: 'propPlaceholder',
      defaultValue: 'Select framework...',
      defaultValueKey: 'comboboxSelectFramework',
    },
    {
      name: 'emptyMessage',
      type: 'text',
      label: 'Empty Message',
      labelKey: 'propEmptyMessage',
      defaultValue: 'No framework found.',
      defaultValueKey: 'comboboxNoFrameworkFound',
    },
    {
      name: 'groupHeading',
      type: 'text',
      label: 'Group Heading',
      labelKey: 'propGroupHeading',
      defaultValue: 'Frameworks',
      defaultValueKey: 'comboboxFrameworks',
    },
    {
      name: 'options',
      type: 'json',
      label: 'Options',
      labelKey: 'propOptions',
      defaultValue: [
        { value: 'next.js', label: 'Next.js' },
        { value: 'sveltekit', label: 'SvelteKit' },
        { value: 'nuxt.js', label: 'Nuxt.js' },
        { value: 'remix', label: 'Remix' },
        { value: 'astro', label: 'Astro' },
      ],
    },
  ],
  defaultProps: {
    placeholder: 'Select framework...',
    emptyMessage: 'No framework found.',
    groupHeading: 'Frameworks',
    options: [
      { value: 'next.js', label: 'Next.js' },
      { value: 'sveltekit', label: 'SvelteKit' },
      { value: 'nuxt.js', label: 'Nuxt.js' },
      { value: 'remix', label: 'Remix' },
      { value: 'astro', label: 'Astro' },
    ],
  },
  availableEffects: [],
};
