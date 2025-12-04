'use client';

import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes';

/**
 * Nova RadioGroup
 *
 * Architecture Notes:
 * - L1 (Functional): Static definition via `tv`, handles layout and mechanics.
 * - L2 (Theme): Dynamic from `useTheme`, handles visual styles.
 * - L3 (Instance): User overrides via `className`/`classNames`.
 */

// ============================================================================
// Utils
// ============================================================================

const toClassString = (value: string | string[] | undefined): string => {
  if (!value) return '';
  if (Array.isArray(value)) return value.join(' ');
  return value;
};

// ============================================================================
// L1: Functional Layer (Static)
// ============================================================================

const radioGroupBase = tv({
  slots: {
    base: 'grid',
  },
});

const radioGroupItemBase = tv({
  slots: {
    base: 'aspect-square items-center justify-center text-current',
    indicator: 'flex items-center justify-center',
    icon: 'fill-current',
  },
});

// ============================================================================
// RadioGroup (Root)
// ============================================================================

export type RadioGroupSlots = keyof typeof radioGroupBase.slots;
export type RadioGroupClassNames = Partial<Record<RadioGroupSlots, string>>;

export interface RadioGroupOption {
  label: string;
  value: string;
  labelKey?: string;
}

export interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  classNames?: RadioGroupClassNames;
  options?: RadioGroupOption[];
  variant?: 'default';
}

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, classNames, variant = 'default', children, options, ...props }, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.RadioGroup;

  // L1: Functional Layer
  const base = radioGroupBase();

  // L2: Theme Layer
  const themeStyles = React.useMemo(() => {
    const baseL2 = [
      toClassString(themeConfig?.slots?.base),
      toClassString(themeConfig?.variants?.variant?.[variant]?.base)
    ].join(' ');
    return { base: baseL2 };
  }, [themeConfig, variant]);

  // Merge: L1 + L2 + L3
  const baseClass = twMerge(base.base(), themeStyles.base, classNames?.base, className);

  return (
    <RadioGroupPrimitive.Root
      className={baseClass}
      {...props}
      ref={ref}
    >
      {children}
      {!children && options && options.map((option) => (
        <div key={option.value} className="flex items-center space-x-2">
          <RadioGroupItem value={option.value} id={option.value} />
          <label
            htmlFor={option.value}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground"
          >
            {option.label}
          </label>
        </div>
      ))}
    </RadioGroupPrimitive.Root>
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

// ============================================================================
// RadioGroupItem
// ============================================================================

export type RadioGroupItemSlots = keyof typeof radioGroupItemBase.slots;
export type RadioGroupItemClassNames = Partial<Record<RadioGroupItemSlots, string>>;

export interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  classNames?: RadioGroupItemClassNames;
  variant?: 'default';
  size?: 'default' | 'sm' | 'lg';
}

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, classNames, variant = 'default', size = 'default', value, ...props }, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.RadioGroupItem;

  // L1: Functional Layer
  const base = radioGroupItemBase();

  // L2: Theme Layer
  const themeStyles = React.useMemo(() => {
    const baseL2 = [
      toClassString(themeConfig?.slots?.base),
      toClassString(themeConfig?.variants?.variant?.[variant]?.base),
      toClassString(themeConfig?.variants?.size?.[size]?.base)
    ].join(' ');

    const indicatorL2 = [
      toClassString(themeConfig?.slots?.indicator),
      toClassString(themeConfig?.variants?.variant?.[variant]?.indicator),
      toClassString(themeConfig?.variants?.size?.[size]?.indicator)
    ].join(' ');

    const iconL2 = [
      toClassString(themeConfig?.slots?.icon),
      toClassString(themeConfig?.variants?.variant?.[variant]?.icon),
      toClassString(themeConfig?.variants?.size?.[size]?.icon)
    ].join(' ');

    return { base: baseL2, indicator: indicatorL2, icon: iconL2 };
  }, [themeConfig, variant, size]);

  // Merge: L1 + L2 + L3
  const baseClass = twMerge(base.base(), themeStyles.base, classNames?.base, className);
  const indicatorClass = twMerge(base.indicator(), themeStyles.indicator, classNames?.indicator);
  const iconClass = twMerge(base.icon(), themeStyles.icon, classNames?.icon);

  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={baseClass}
      value={value}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className={indicatorClass}>
        <Circle className={iconClass} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };