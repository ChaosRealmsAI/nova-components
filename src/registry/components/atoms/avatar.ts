/**
 * Avatar Component Entry
 */

import { AvatarDemo, avatarBaseConfig } from '@/components/nova-ui/atmos/avatar';
import type { ComponentRegistryEntry } from '../types';

export const avatarEntry: ComponentRegistryEntry = {
  type: 'avatar',
  label: 'Avatar',
  labelKey: 'componentTypeAvatar',
  category: 'atoms',
  component: AvatarDemo,
  baseConfig: avatarBaseConfig,
  props: [
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
      ],
      defaultValue: 'default',
    },
    {
      name: 'fallback',
      type: 'text',
      label: 'Fallback',
      labelKey: 'propFallback',
      defaultValue: 'CN',
    },
    {
      name: 'src',
      type: 'text',
      label: 'Image URL',
      labelKey: 'propImageUrl',
      defaultValue: '',
    },
  ],
  defaultProps: {
    size: 'default',
    fallback: 'CN',
    src: '',
  },
  availableEffects: ['glow'],
};
