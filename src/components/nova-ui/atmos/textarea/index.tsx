'use client';

import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes';

/**
 * Nova Textarea
 *
 * Architecture Notes:
 * - L1 (Functional): Static definition, functional requirements only.
 * - L2 (Theme): Dynamic from useTheme(), visual styles.
 * - L3 (Instance): User provided className/classNames.
 */

// ============================================================================
// Types
// ============================================================================

export type TextareaClassNames = Partial<{
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

const textareaBase = tv({
  slots: {
    base: 'flex w-full resize-y focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  },
});

// ============================================================================
// Component
// ============================================================================

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  classNames?: TextareaClassNames;
  variant?: 'default' | 'filled';
  textareaSize?: 'default' | 'sm' | 'lg';
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, classNames, variant = 'default', textareaSize = 'default', ...props }, ref) => {
    const { currentTheme } = useTheme();
    const themeConfig = currentTheme?.components?.Textarea;

    // L1: Functional Layer
    const base = textareaBase();

    // L2: Theme Layer
    const themeStyles = React.useMemo(() => {
      const baseStyle = toClassString(themeConfig?.slots?.base);
      const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.base);
      const sizeStyle = toClassString(themeConfig?.variants?.textareaSize?.[textareaSize]?.base);

      return {
        base: baseStyle,
        variant: variantStyle,
        size: sizeStyle
      };
    }, [themeConfig, variant, textareaSize]);

    // Merge: L1 + L2 (Base + Variant + Size) + L3
    const rootClass = twMerge(
      base.base(),
      themeStyles.base,
      themeStyles.variant,
      themeStyles.size,
      classNames?.base,
      className
    );

    // Destructure children from props since textarea doesn't use children prop
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { children, ...rest } = props as React.TextareaHTMLAttributes<HTMLTextAreaElement> & { children?: React.ReactNode };

    return (
      <textarea
        className={rootClass}
        ref={ref}
        {...rest}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
