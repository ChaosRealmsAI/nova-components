'use client';

import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes';

/**
 * Nova Progress
 *
 * Architecture Notes:
 * - L1 (Functional): Static definition, functional requirements only.
 * - L2 (Theme): Dynamic from useTheme(), visual styles.
 * - L3 (Instance): User provided className/classNames.
 */

// ============================================================================
// Types
// ============================================================================

export type ProgressClassNames = Partial<{
  base: string;
  indicator: string;
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
// L1: Static Styles (Functional Layer)
// ============================================================================

const progressBase = tv({
  slots: {
    base: 'relative w-full overflow-hidden', // Functional: positioning + overflow
    indicator: 'h-full w-full flex-1 transition-all', // Functional: layout + transition
  },
});

// ============================================================================
// Component
// ============================================================================

export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  classNames?: ProgressClassNames;
  variant?: 'default';
  size?: 'default' | 'sm' | 'lg' | 'xl';
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, classNames, variant = 'default', size = 'default', value, max = 100, ...props }, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Progress;

  // L1: Functional Layer
  const base = progressBase();

  // L2: Theme Layer
  const themeStyles = React.useMemo(() => {
    const baseStyle = toClassString(themeConfig?.slots?.base);
    const indicatorStyle = toClassString(themeConfig?.slots?.indicator);
    
    const variantBase = toClassString(themeConfig?.variants?.variant?.[variant]?.base);
    const variantIndicator = toClassString(themeConfig?.variants?.variant?.[variant]?.indicator);
    
    const sizeBase = toClassString(themeConfig?.variants?.size?.[size]?.base);
    const sizeIndicator = toClassString(themeConfig?.variants?.size?.[size]?.indicator);

    return {
      base: twMerge(baseStyle, variantBase, sizeBase),
      indicator: twMerge(indicatorStyle, variantIndicator, sizeIndicator),
    };
  }, [themeConfig, variant, size]);

  // Merge: L1 + L2 + L3
  const rootClass = twMerge(
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

  // Calculate percentage based on value and max
  const percentage = React.useMemo(() => {
    if (value == null) return 0;
    if (max === 0) return 0;
    const p = (value / max) * 100;
    return Math.min(Math.max(p, 0), 100); // Clamp between 0 and 100
  }, [value, max]);

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={rootClass}
      value={value}
      max={max}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={indicatorClass}
        style={{ transform: `translateX(-${100 - percentage}%)` }}
      />
    </ProgressPrimitive.Root>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
