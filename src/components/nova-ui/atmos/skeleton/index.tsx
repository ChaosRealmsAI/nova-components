'use client';

import * as React from 'react';
import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes';

/**
 * Nova Skeleton
 *
 * Architecture Notes:
 * - L1 (Functional): Static definition, functional requirements only.
 * - L2 (Theme): Dynamic from useTheme(), visual styles.
 * - L3 (Instance): User provided className/classNames.
 */

// ============================================================================
// Types
// ============================================================================

export type SkeletonClassNames = Partial<{
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
// L1: Static Functional Styles
// ============================================================================

const skeletonBase = tv({
  slots: {
    base: 'animate-pulse w-full h-full',
  },
});

// ============================================================================
// Component
// ============================================================================

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  classNames?: SkeletonClassNames;
  variant?: 'default' | 'circular' | 'text';
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, classNames, variant = 'default', ...props }, ref) => {
    const { currentTheme } = useTheme();
    const themeConfig = currentTheme?.components?.Skeleton;

    // L1: Functional Layer
    const base = skeletonBase();

    // L2: Theme Layer
    const themeStyles = React.useMemo(() => {
      const baseSlot = toClassString(themeConfig?.slots?.base);
      const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.base);

      return {
        base: twMerge(baseSlot, variantStyle),
      };
    }, [themeConfig, variant]);

    // Merge: L1 + L2 + L3
    const baseClass = twMerge(base.base(), themeStyles.base, classNames?.base, className);

    return (
      <div
        className={baseClass}
        ref={ref}
        {...props}
      />
    );
  }
);
Skeleton.displayName = 'Skeleton';

export { Skeleton };
