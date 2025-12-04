/**
 * Accordion Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'accordion',
  name: 'Accordion',
  category: 'blocks',
  label: 'Accordion',
  labelKey: 'componentTypeAccordion',

  files: {
    component: 'index.tsx',
  },

  themeConfigs: [
    { componentName: 'Accordion', configName: 'accordionConfig' },
  ],

  themeFile: 'components/accordion.ts',

  cssVars: [
    '--border',
    '--foreground',
    '--muted-foreground',
  ],

  dependencies: [],

  exportOptions: {
    noChildren: true,
    customJsx: `<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles that match your theme.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Is it animated?</AccordionTrigger>
    <AccordionContent>
      Yes. It has smooth open and close animations.
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
    customImports: ['Accordion', 'AccordionItem', 'AccordionTrigger', 'AccordionContent'],
  },

  canvas: {
    size: { width: 400, height: 260 },
    props: [
      {
        name: 'variant',
        type: 'select',
        label: 'Variant',
        labelKey: 'propVariant',
        options: [
          { value: 'default', label: 'Default', labelKey: 'valDefault' },
          { value: 'bordered', label: 'Bordered', labelKey: 'valBordered' },
        ],
        defaultValue: 'default',
      },
      {
        name: 'type',
        type: 'select',
        label: 'Type',
        labelKey: 'propType',
        options: [
          { value: 'single', label: 'Single', labelKey: 'valSingle' },
          { value: 'multiple', label: 'Multiple', labelKey: 'valMultiple' },
        ],
        defaultValue: 'single',
      },
      {
        name: 'collapsible',
        type: 'boolean',
        label: 'Collapsible',
        labelKey: 'propCollapsible',
        defaultValue: true,
      },
    ],
    defaultProps: {
      variant: 'default',
      type: 'single',
      collapsible: true,
    },
    availableEffects: [],
  },
};
