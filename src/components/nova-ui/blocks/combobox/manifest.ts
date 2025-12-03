import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'combobox',
  name: 'Combobox',
  category: 'blocks',
  label: 'Combobox',
  labelKey: 'componentTypeCombobox',

  files: {
    component: 'index.tsx',
    config: 'combobox.config.ts',
  },

  themeConfigs: [
    { componentName: 'Combobox', configName: 'comboboxConfig' },
  ],

  themeFile: 'components/combobox.ts',

  cssVars: [],

  dependencies: ['popover', 'button'],

  exportOptions: {
    noChildren: true,
    customJsx: `<Combobox>
  <ComboboxTrigger className="w-[200px]">Select framework...</ComboboxTrigger>
  <ComboboxContent className="w-[200px]">
    <ComboboxInput placeholder="Search framework..." />
    <ComboboxList>
      <ComboboxEmpty>No framework found.</ComboboxEmpty>
      <ComboboxGroup heading="Frameworks">
        <ComboboxItem value="next.js">Next.js</ComboboxItem>
        <ComboboxItem value="sveltekit">SvelteKit</ComboboxItem>
        <ComboboxItem value="nuxt.js">Nuxt.js</ComboboxItem>
        <ComboboxItem value="remix">Remix</ComboboxItem>
        <ComboboxItem value="astro">Astro</ComboboxItem>
      </ComboboxGroup>
    </ComboboxList>
  </ComboboxContent>
</Combobox>`,
    customImports: [
      'Combobox',
      'ComboboxTrigger',
      'ComboboxContent',
      'ComboboxInput',
      'ComboboxList',
      'ComboboxEmpty',
      'ComboboxGroup',
      'ComboboxItem',
    ],
  },

  canvas: {
    size: { width: 240, height: 60 },
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
  },
};
