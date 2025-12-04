'use client';

import * as React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes';

/**
 * Nova Toggle
 *
 * Architecture Notes:
 * - L1 (Functional): Static definition, functional requirements only.
 * - L2 (Theme): Dynamic from useTheme(), visual styles.
 * - L3 (Instance): User provided className/classNames.
 */

// ============================================================================
// Types
// ============================================================================

export type ToggleClassNames = Partial<{
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

const toggleBase = tv({
  slots: {
    base: 'inline-flex items-center justify-center disabled:pointer-events-none focus-visible:outline-none',
  },
});

// ============================================================================
// Component
// ============================================================================

export interface ToggleProps
  extends React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> {
  classNames?: ToggleClassNames;
  variant?: 'default' | 'outline';
  size?: 'default' | 'sm' | 'lg';
}

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  ToggleProps
>(({ className, classNames, variant = 'default', size = 'default', ...props }, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Toggle;

  // L1: Functional Layer
  const base = toggleBase();

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
    <TogglePrimitive.Root
      ref={ref}
      className={rootClass}
      {...props}
    />
  );
});
Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle };
