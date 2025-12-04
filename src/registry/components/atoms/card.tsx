/**
 * Card Component Entry
 *
 * 纯净组件，演示内容通过 CardDemo 组件渲染
 */

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/nova-ui/atmos/card';
import type { ComponentRegistryEntry } from '../types';

// CardDemo: 用于画布渲染的演示组件
const CardDemo = (props: React.ComponentProps<typeof Card>) => (
  <Card {...props}>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Card description goes here.</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm">Card content area.</p>
    </CardContent>
    <CardFooter>
      <p className="text-xs text-muted-foreground">Footer</p>
    </CardFooter>
  </Card>
);
CardDemo.displayName = 'CardDemo';

export const cardEntry: ComponentRegistryEntry = {
  type: 'card',
  label: 'Card',
  labelKey: 'componentTypeCard',
  category: 'atoms',
  component: CardDemo,
  baseConfig: null, // 纯槽位模式，无 baseConfig
  props: [
    {
      name: 'variant',
      type: 'select',
      label: 'Variant',
      labelKey: 'propVariant',
      options: [
        { value: 'default', label: 'Default', labelKey: 'valDefault' },
        { value: 'outline', label: 'Outline', labelKey: 'valOutline' },
        { value: 'ghost', label: 'Ghost', labelKey: 'valGhost' },
        { value: 'elevated', label: 'Elevated', labelKey: 'valElevated' },
      ],
      defaultValue: 'default',
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
      ],
      defaultValue: 'default',
    },
  ],
  defaultProps: {
    variant: 'default',
    size: 'default',
  },
  availableEffects: ['glow'],
};
