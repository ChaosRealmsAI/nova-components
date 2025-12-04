'use client';

import * as React from 'react';
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";
import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes';

/**
 * Nova Checkbox
 *
 * Architecture Notes:
 * - L1 (Functional): Static definition, functional requirements only.
 * - L2 (Theme): Dynamic from useTheme(), visual styles.
 * - L3 (Instance): User provided className/classNames.
 *
 * 优先级: L3 > L2 > L1 (通过 twMerge 解决冲突)
 */

// ============================================================================
// Types
// ============================================================================

export type CheckboxClassNames = Partial<{
  base: string;
  indicator: string;
  icon: string;
}>;

// ============================================================================
// Utils
// ============================================================================

const toClassString = (value: string | string[] | undefined): string => {
  if (!value) return '';
  if (Array.isArray(value)) return value.join(' ');
  return value;
};

// ============================================================================
// L1: 静态样式定义（功能层）
// ============================================================================

const checkboxBase = tv({
  slots: {
    base: 'peer shrink-0 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
    indicator: 'flex items-center justify-center',
    icon: '',
  },
});

// ============================================================================
// Component
// ============================================================================

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  variant?: 'default' | 'destructive';
  size?: 'default' | 'sm' | 'lg';
  classNames?: CheckboxClassNames;
}

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  ({ className, classNames, variant = 'default', size = 'default', ...props }, ref) => {
    const { currentTheme } = useTheme();
    const themeConfig = currentTheme?.components?.Checkbox;

    // L1: Functional Layer
    const base = checkboxBase();

    // L2: Theme Layer
    const themeStyles = React.useMemo(() => {
      // Base slots
      const baseSlot = toClassString(themeConfig?.slots?.base);
      const indicatorSlot = toClassString(themeConfig?.slots?.indicator);
      const iconSlot = toClassString(themeConfig?.slots?.icon);

      // Variant styles
      const variantBase = toClassString(themeConfig?.variants?.variant?.[variant]?.base);
      const variantIndicator = toClassString(themeConfig?.variants?.variant?.[variant]?.indicator);
      const variantIcon = toClassString(themeConfig?.variants?.variant?.[variant]?.icon);

      // Size styles
      const sizeBase = toClassString(themeConfig?.variants?.size?.[size]?.base);
      const sizeIndicator = toClassString(themeConfig?.variants?.size?.[size]?.indicator);
      const sizeIcon = toClassString(themeConfig?.variants?.size?.[size]?.icon);

      return {
        base: twMerge(baseSlot, variantBase, sizeBase),
        indicator: twMerge(indicatorSlot, variantIndicator, sizeIndicator),
        icon: twMerge(iconSlot, variantIcon, sizeIcon),
      };
    }, [themeConfig, variant, size]);

    // Merge: L1 + L2 + L3
    const baseClass = twMerge(
      base.base(),
      themeStyles.base,
      classNames?.base,
      className
    );

    const indicatorClass = twMerge(
      base.indicator(),
      themeStyles.indicator,
      classNames?.indicator
    );

    const iconClass = twMerge(
      base.icon(),
      themeStyles.icon,
      classNames?.icon
    );

    return (
      <CheckboxPrimitive.Root
        ref={ref}
        className={baseClass}
        {...props}
      >
        <CheckboxPrimitive.Indicator className={indicatorClass}>
          <CheckIcon className={iconClass} />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    );
  }
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
