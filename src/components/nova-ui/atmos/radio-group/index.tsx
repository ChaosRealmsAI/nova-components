'use client';

import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/themes';
import { radioGroupBaseConfig, radioGroupItemBaseConfig } from './radio-group.config';

/**
 * Nova RadioGroup
 *
 * Architecture Notes:
 * - Uses `tailwind-variants` with slots for granular theme control.
 * - Exports base configs for themes to extend.
 * - Supports `classNames` prop for slot-specific overrides.
 * - ADR-006: 通过 useTheme() 获取主题配置，支持运行时主题切换
 */

// ============================================================================
// RadioGroup (Root)
// ============================================================================

export { radioGroupBaseConfig };

export type RadioGroupVariants = VariantProps<ReturnType<typeof tv>>;
export type RadioGroupSlots = keyof typeof radioGroupBaseConfig.slots;
export type RadioGroupClassNames = Partial<Record<RadioGroupSlots, string>>;

export interface RadioGroupOption {
  label: string;
  value: string;
  labelKey?: string; // i18n key for label (optional, resolved at render time)
}

export interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>,
    RadioGroupVariants {
  classNames?: RadioGroupClassNames;
  options?: RadioGroupOption[]; // Add options prop for data-driven rendering
}

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, classNames, variant, children, options, ...props }, ref) => {
  // ADR-006: 从主题上下文获取 RadioGroup 的样式配置
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.RadioGroup;

  const { base } = tv({
    extend: radioGroupBaseConfig,
    ...(themeConfig || {}),
  })({ variant });
  const baseClass = classNames?.base ? classNames.base : base();

  return (
    <RadioGroupPrimitive.Root
      className={cn(baseClass, className)}
      {...props}
      ref={ref}
    >
      {/* Render children if provided (composition mode) */}
      {children}

      {/* Render options if provided (data-driven mode) and no children */}
      {!children && options && options.map((option: RadioGroupOption) => (
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

export { radioGroupItemBaseConfig };

export type RadioGroupItemVariants = VariantProps<ReturnType<typeof tv>>;
export type RadioGroupItemSlots = keyof typeof radioGroupItemBaseConfig.slots;
export type RadioGroupItemClassNames = Partial<Record<RadioGroupItemSlots, string>>;

export interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
    RadioGroupItemVariants {
  classNames?: RadioGroupItemClassNames;
}

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, classNames, variant, value, ...props }, ref) => {
  // ADR-006: 从主题上下文获取 RadioGroupItem 的样式配置
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.RadioGroupItem;

  const { base, indicator, icon } = tv({
    extend: radioGroupItemBaseConfig,
    ...(themeConfig || {}),
  })({ variant });

  const baseClass = classNames?.base ? classNames.base : base();
  const indicatorClass = classNames?.indicator ? classNames.indicator : indicator();
  const iconClass = classNames?.icon ? classNames.icon : icon();

  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(baseClass, className)}
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