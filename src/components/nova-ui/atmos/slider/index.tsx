'use client';

import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes';

/**
 * Nova Slider
 *
 * Architecture Notes:
 * - L1 (Functional): Static definition, functional requirements only.
 * - L2 (Theme): Dynamic from useTheme(), visual styles.
 * - L3 (Instance): User provided className/classNames.
 */

// ============================================================================
// Types
// ============================================================================

export type SliderClassNames = Partial<{
  base: string;
  track: string;
  range: string;
  thumb: string;
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
// L1: Static Functional Styles
// ============================================================================

const sliderBase = tv({
  slots: {
    root: 'relative flex touch-none items-center select-none',
    track: 'relative grow overflow-hidden',
    range: 'absolute h-full',
    thumb: 'block shrink-0 focus-visible:outline-none disabled:pointer-events-none',
  },
});

// ============================================================================
// Component
// ============================================================================

export interface SliderProps
  extends Omit<React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>, 'value' | 'defaultValue'> {
  classNames?: SliderClassNames;
  value?: number | number[];
  defaultValue?: number | number[];
  size?: 'default' | 'sm' | 'lg';
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, classNames, size = 'default', value: propValue, defaultValue: propDefaultValue, ...props }, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Slider;

  // L1: Functional Layer
  const base = sliderBase();

  // L2: Theme Layer
  const themeStyles = React.useMemo(() => {
    // Base slots
    const rootSlot = toClassString(themeConfig?.slots?.base);
    const trackSlot = toClassString(themeConfig?.slots?.track);
    const rangeSlot = toClassString(themeConfig?.slots?.range);
    const thumbSlot = toClassString(themeConfig?.slots?.thumb);

    // Size styles
    const sizeRoot = toClassString(themeConfig?.variants?.size?.[size]?.base);
    const sizeTrack = toClassString(themeConfig?.variants?.size?.[size]?.track);
    const sizeRange = toClassString(themeConfig?.variants?.size?.[size]?.range);
    const sizeThumb = toClassString(themeConfig?.variants?.size?.[size]?.thumb);

    return {
      root: twMerge(rootSlot, sizeRoot),
      track: twMerge(trackSlot, sizeTrack),
      range: twMerge(rangeSlot, sizeRange),
      thumb: twMerge(thumbSlot, sizeThumb),
    };
  }, [themeConfig, size]);

  // Merge: L1 + L2 + L3
  const rootClass = twMerge(base.root(), themeStyles.root, classNames?.base, className);
  const trackClass = twMerge(base.track(), themeStyles.track, classNames?.track);
  const rangeClass = twMerge(base.range(), themeStyles.range, classNames?.range);
  const thumbClass = twMerge(base.thumb(), themeStyles.thumb, classNames?.thumb);

  // Value handling
  const value = propValue !== undefined
    ? (Array.isArray(propValue) ? propValue : [propValue])
    : undefined;

  const defaultValue = propDefaultValue !== undefined
    ? (Array.isArray(propDefaultValue) ? propDefaultValue : [propDefaultValue])
    : undefined;

  const renderValues = value || defaultValue || [0];

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={rootClass}
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
