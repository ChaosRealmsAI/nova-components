'use client';

import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/themes';
import { switchBaseConfig } from './switch.config';

/**
 * Nova Switch
 *
 * Architecture Notes:
 * - Uses `tailwind-variants` with slots for granular theme control.
 * - Exports `switchBaseConfig` for themes to extend.
 * - Supports `classNames` prop for slot-specific overrides.
 * - ADR-006: 通过 useTheme() 获取主题配置，支持运行时主题切换
 */

export { switchBaseConfig };

export type SwitchVariants = VariantProps<ReturnType<typeof tv>>;
export type SwitchSlots = keyof typeof switchBaseConfig.slots;
export type SwitchClassNames = Partial<Record<SwitchSlots, string>>;

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>,
    SwitchVariants {
  classNames?: SwitchClassNames;
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, classNames, variant, size, ...props }, ref) => {
  // ADR-006: 从主题上下文获取 Switch 的样式配置
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Switch;

  // 合并基础配置和主题配置
  const { base, thumb } = tv({
    extend: switchBaseConfig,
    ...(themeConfig || {}),
  })({ variant, size });

  const baseClass = classNames?.base ? classNames.base : base();
  const thumbClass = classNames?.thumb ? classNames.thumb : thumb();

  return (
    <SwitchPrimitive.Root
      className={cn(baseClass, className)}
      {...props}
      ref={ref}
    >
      <SwitchPrimitive.Thumb className={thumbClass} />
    </SwitchPrimitive.Root>
  );
});
Switch.displayName = SwitchPrimitive.Root.displayName;

export { Switch };