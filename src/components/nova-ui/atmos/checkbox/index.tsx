'use client';

import * as React from 'react';
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/themes';
import { checkboxBaseConfig } from './checkbox.config';

/**
 * Nova Checkbox
 *
 * Architecture Notes:
 * - Uses `tailwind-variants` with slots for granular theme control.
 * - Exports `checkboxBaseConfig` for themes to extend.
 * - Supports `classNames` prop for slot-specific overrides.
 * - ADR-006: 通过 useTheme() 获取主题配置，支持运行时主题切换
 */

export { checkboxBaseConfig };

export type CheckboxVariants = VariantProps<ReturnType<typeof tv>>;
export type CheckboxSlots = keyof typeof checkboxBaseConfig.slots;
export type CheckboxClassNames = Partial<Record<CheckboxSlots, string>>;

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    CheckboxVariants {
  classNames?: CheckboxClassNames;
}

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  ({ className, classNames, variant, size, ...props }, ref) => {
    // ADR-006: 从主题上下文获取 Checkbox 的样式配置
    const { currentTheme } = useTheme();
    const themeConfig = currentTheme?.components?.Checkbox;

    // 合并基础配置和主题配置
    const styles = tv({
      extend: checkboxBaseConfig,
      ...(themeConfig || {}),
    })({ variant, size });

    const baseClass = classNames?.base
      ? classNames.base
      : styles.base();

    const indicatorClass = classNames?.indicator
      ? classNames.indicator
      : styles.indicator();

    const iconClass = classNames?.icon
      ? classNames.icon
      : styles.icon();

    return (
      <CheckboxPrimitive.Root
        ref={ref}
        className={cn(baseClass, className)}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          className={cn(indicatorClass)}
        >
          <CheckIcon className={cn(iconClass)} />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    );
  }
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
