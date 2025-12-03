'use client';

import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/themes';
import { sliderBaseConfig } from './slider.config';

/**
 * Nova Slider
 *
 * Architecture Notes:
 * - Uses `tailwind-variants` with slots for granular theme control.
 * - Exports `sliderBaseConfig` for themes to extend.
 * - Supports `classNames` prop for slot-specific overrides.
 * - ADR-006: 通过 useTheme() 获取主题配置，支持运行时主题切换
 */

export { sliderBaseConfig };

export type SliderVariants = VariantProps<ReturnType<typeof tv>>;
export type SliderSlots = keyof typeof sliderBaseConfig.slots;
export type SliderClassNames = Partial<Record<SliderSlots, string>>;

export interface SliderProps
  extends Omit<React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>, 'value' | 'defaultValue'>,
    SliderVariants {
  classNames?: SliderClassNames;
  value?: number | number[];
  defaultValue?: number | number[];
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, classNames, variant, size, value: propValue, defaultValue: propDefaultValue, ...props }, ref) => {
  // ADR-006: 从主题上下文获取 Slider 的样式配置
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Slider;

  // 合并基础配置和主题配置
  const { base, track, range, thumb } = tv({
    extend: sliderBaseConfig,
    ...(themeConfig || {}),
  })({ variant, size });

  const baseClass = classNames?.base ? classNames.base : base();
  const trackClass = classNames?.track ? classNames.track : track();
  const rangeClass = classNames?.range ? classNames.range : range();
  const thumbClass = classNames?.thumb ? classNames.thumb : thumb();

  // Ensure value and defaultValue are arrays for Radix UI
  const value = propValue !== undefined
    ? (Array.isArray(propValue) ? propValue : [propValue])
    : undefined;

  const defaultValue = propDefaultValue !== undefined
    ? (Array.isArray(propDefaultValue) ? propDefaultValue : [propDefaultValue])
    : undefined;

  // Determine values for rendering thumbs (fallback logic)
  // Note: If both are undefined, Radix defaults to [0] internally for uncontrolled state,
  // but we need to know how many thumbs to render.
  const renderValues = value || defaultValue || [0];

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(baseClass, className)}
      value={value}
      defaultValue={defaultValue}
      {...props}
    >
      <SliderPrimitive.Track className={trackClass}>
        <SliderPrimitive.Range className={rangeClass} />
      </SliderPrimitive.Track>
      {renderValues.map((_, i) => (
        <SliderPrimitive.Thumb key={i} className={thumbClass} />
      ))}
    </SliderPrimitive.Root>
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };