/**
 * Accordion Component Entry
 */

import { AccordionDemo, accordionAtoms } from '@/components/nova-ui/blocks/accordion';
import type { ComponentRegistryEntry } from '../types';

export const accordionEntry: ComponentRegistryEntry = {
  type: 'accordion',
  label: 'Accordion',
  labelKey: 'componentTypeAccordion',
  category: 'blocks',
  component: AccordionDemo,
  baseConfig: null,
  atoms: accordionAtoms,
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
};
