'use client';

import * as React from 'react';
import * as LabelPrimitive from "@radix-ui/react-label";
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes';

/**
 * Nova Label
 *
 * Architecture Notes:
 * - L1 (Functional): Static definition, functional requirements only.
 * - L2 (Theme): Dynamic from useTheme(), visual styles.
 * - L3 (Instance): User provided className/classNames.
 */

// ============================================================================
// Types
// ============================================================================

export type LabelClassNames = Partial<{
  base: string;
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

const labelBase = tv({
  slots: {
    base: 'flex items-center leading-none select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
  },
});

// ============================================================================
// Component
// ============================================================================

export interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  classNames?: LabelClassNames;
  variant?: 'default' | 'muted' | 'error';
  size?: 'default' | 'sm' | 'lg';
}

const Label = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, LabelProps>(
  ({ className, classNames, variant = 'default', size = 'default', ...props }, ref) => {
    const { currentTheme } = useTheme();
    const themeConfig = currentTheme?.components?.Label;

    // L1: Functional Layer
    const base = labelBase();

    // L2: Theme Layer
    const themeStyles = React.useMemo(() => {
      const baseStyle = toClassString(themeConfig?.slots?.base);
      const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.base);
      const sizeStyle = toClassString(themeConfig?.variants?.size?.[size]?.base);

      return {
        base: baseStyle,
        variant: variantStyle,
        size: sizeStyle
      };
    }, [themeConfig, variant, size]);

    // Merge: L1 + L2 (Base + Variant + Size) + L3
    const rootClass = twMerge(
      base.base(),
      themeStyles.base,
      themeStyles.variant,
      themeStyles.size,
      classNames?.base,
      className
    );

    return (
      <LabelPrimitive.Root
        ref={ref}
        className={rootClass}
        {...props}
      />
    );
  }
);
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };