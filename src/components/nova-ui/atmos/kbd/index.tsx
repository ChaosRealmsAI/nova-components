'use client';

import * as React from 'react';
import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes';

/**
 * Nova Kbd
 *
 * Architecture Notes:
 * - L1 (Functional): Static definition, functional requirements only.
 * - L2 (Theme): Dynamic from useTheme(), visual styles.
 * - L3 (Instance): User provided className/classNames.
 */

// ============================================================================
// Types
// ============================================================================

export type KbdClassNames = Partial<{
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

const kbdBase = tv({
  slots: {
    base: 'pointer-events-none inline-flex items-center justify-center select-none',
  },
});

// ============================================================================
// Component
// ============================================================================

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  classNames?: KbdClassNames;
  variant?: 'default' | 'outline';
  size?: 'default' | 'sm' | 'lg';
}

const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ className, classNames, variant = 'default', size = 'default', ...props }, ref) => {
    const { currentTheme } = useTheme();
    const themeConfig = currentTheme?.components?.Kbd;

    // L1: Functional Layer
    const base = kbdBase();

    // L2: Theme Layer
    const themeStyles = React.useMemo(() => {
      const baseStyle = toClassString(themeConfig?.slots?.base);
      const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.base);
      const sizeStyle = toClassString(themeConfig?.variants?.size?.[size]?.base);

      return {
        base: twMerge(baseStyle, variantStyle, sizeStyle),
      };
    }, [themeConfig, variant, size]);

    // Merge: L1 + L2 + L3
    const rootClass = twMerge(
      base.base(),
      themeStyles.base,
      classNames?.base,
      className
    );

    return (
      <kbd
        ref={ref}
        className={rootClass}
        {...props}
      />
    );
  }
);
Kbd.displayName = 'Kbd';

export { Kbd };