/**
 * Button Component Entry
 */

import { Button, buttonBaseConfig } from '@/components/nova-ui/atmos/button';
import type { ComponentRegistryEntry } from '../types';

export const buttonEntry: ComponentRegistryEntry = {
  type: 'button',
  label: 'Button',
  labelKey: 'componentTypeButton',
  category: 'atoms',
  component: Button,
  baseConfig: buttonBaseConfig,
  props: [
    {
      name: 'variant',
      type: 'select',
      label: 'Variant',
      labelKey: 'propVariant',
      options: [
        { value: 'default', label: 'Default', labelKey: 'valDefault' },
        { value: 'destructive', label: 'Destructive', labelKey: 'valDestructive' },
        { value: 'outline', label: 'Outline', labelKey: 'valOutline' },
        { value: 'secondary', label: 'Secondary', labelKey: 'valSecondary' },
        { value: 'ghost', label: 'Ghost', labelKey: 'valGhost' },
        { value: 'link', label: 'Link', labelKey: 'valLink' },
      ],
      defaultValue: buttonBaseConfig.defaultVariants.variant,
    },
    {
      name: 'size',
      type: 'select',
      label: 'Size',
      labelKey: 'propSize',
      options: [
        { value: 'default', label: 'Default', labelKey: 'valDefault' },
        { value: 'sm', label: 'Small', labelKey: 'valSmall' },
        { value: 'lg', label: 'Large', labelKey: 'valLarge' },
        { value: 'icon', label: 'Icon', labelKey: 'valIcon' },
      ],
      defaultValue: buttonBaseConfig.defaultVariants.size,
    },
    {
      name: 'children',
      type: 'text',
      label: 'Text',
      labelKey: 'propText',
      defaultValue: 'Click me',
      defaultValueKey: 'buttonLabelDefault',
    },
    {
      name: 'disabled',
      type: 'boolean',
      label: 'Disabled',
      labelKey: 'propDisabled',
      defaultValue: false,
    },
  ],
  defaultProps: {
    variant: 'default',
    size: 'default',
    children: 'Click me',
    disabled: false,
  },
  availableEffects: ['tilt', 'glow', 'ripple', 'border-beam', 'shimmer', 'cosmic-background'],
};
