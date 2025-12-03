'use client';

import * as React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/themes';
import { toggleBaseConfig } from './toggle.config';

/**
 * Nova Toggle
 *
 * Architecture Notes:
 * - Uses `@radix-ui/react-toggle` for accessibility.
 * - Uses `tailwind-variants` with slots for granular theme control.
 * - Exports `toggleBaseConfig` for themes to extend.
 * - Supports `classNames` prop for slot-specific overrides.
 * - ADR-006: 通过 useTheme() 获取主题配置，支持运行时主题切换
 */

export { toggleBaseConfig };

export type ToggleVariants = VariantProps<ReturnType<typeof tv>>;
export type ToggleSlots = keyof typeof toggleBaseConfig.slots;
export type ToggleClassNames = Partial<Record<ToggleSlots, string>>;

export interface ToggleProps
  extends React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>,
    ToggleVariants {
  classNames?: ToggleClassNames;
}

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  ToggleProps
>(({ className, classNames, variant, size, ...props }, ref) => {
  // ADR-006: 从主题上下文获取 Toggle 的样式配置
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Toggle;

  // 合并基础配置和主题配置
  const styles = tv({
    extend: toggleBaseConfig,
    ...(themeConfig || {}),
  });

  const baseClass = classNames?.base
    ? classNames.base
    : styles({ variant, size }).base();

  return (
    <TogglePrimitive.Root
      ref={ref}
      className={cn(baseClass, className)}
      {...props}
    />
  );
});
Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle };
