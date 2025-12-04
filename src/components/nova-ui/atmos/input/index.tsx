'use client';

import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes';

/**
 * Nova Input
 *
 * Architecture Notes:
 * - L1 (Functional): Static definition, functional requirements only.
 * - L2 (Theme): Dynamic from useTheme(), visual styles.
 * - L3 (Instance): User provided className/classNames.
 */

// ============================================================================
// Types
// ============================================================================

export type InputClassNames = Partial<{
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

const inputBase = tv({
  slots: {
    base: 'flex w-full file:border-0 file:bg-transparent focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  },
});

// ============================================================================
// Component
// ============================================================================

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  classNames?: InputClassNames;
  variant?: 'default' | 'filled';
  inputSize?: 'default' | 'sm' | 'lg';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, classNames, variant = 'default', inputSize = 'default', type, ...props }, ref) => {
    const { currentTheme } = useTheme();
    const themeConfig = currentTheme?.components?.Input;

    // L1: Functional Layer
    const base = inputBase();

    // L2: Theme Layer
    const themeStyles = React.useMemo(() => {
      const baseStyle = toClassString(themeConfig?.slots?.base);
      const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.base);
      const sizeStyle = toClassString(themeConfig?.variants?.inputSize?.[inputSize]?.base);
      
      return { 
        base: baseStyle, 
        variant: variantStyle,
        size: sizeStyle
      };
    }, [themeConfig, variant, inputSize]);

    // Merge: L1 + L2 (Base + Variant + Size) + L3
    const rootClass = twMerge(
      base.base(), 
      themeStyles.base, 
      themeStyles.variant,
      themeStyles.size,
      classNames?.base, 
      className
    );

    // Filter out children to prevent "void element with children" error
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { children, ...rest } = props as any;

    return (
      <input
        type={type}
        className={rootClass}
        ref={ref}
        {...rest}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };