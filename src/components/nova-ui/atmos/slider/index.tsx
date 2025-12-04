'use client';

import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes';

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
  classNames?: {
    base?: string;
    track?: string;
    range?: string;
    thumb?: string;
  };
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

  // L1
  const base = sliderBase();

  // L2: Theme Styles
  const themeStyles = React.useMemo(() => {
    if (!themeConfig) return { root: '', track: '', range: '', thumb: '' };
    
    try {
      // Use tv to handle theme variants and merging within the theme config
      const themeTv = tv(themeConfig as any);
      const slots = themeTv({ size } as any) as any;
      
      return {
        root: slots.base ? slots.base() : '',
        track: slots.track ? slots.track() : '',
        range: slots.range ? slots.range() : '',
        thumb: slots.thumb ? slots.thumb() : '',
      };
    } catch (e) {
      console.warn('Error applying theme styles for Slider:', e);
      return { root: '', track: '', range: '', thumb: '' };
    }
  }, [themeConfig, size]);

  // L3: Merge
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
