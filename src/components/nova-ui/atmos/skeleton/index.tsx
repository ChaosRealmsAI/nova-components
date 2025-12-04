'use client';

import * as React from 'react';
import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes';

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
  classNames?: {
    base?: string;
  };
  variant?: 'default' | 'circular' | 'text';
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, classNames, variant = 'default', ...props }, ref) => {
    const { currentTheme } = useTheme();
    const themeConfig = currentTheme?.components?.Skeleton;

    // L1
    const base = skeletonBase();

    // L2: Theme Styles
    const themeStyles = React.useMemo(() => {
      if (!themeConfig) return { base: '' };

      try {
        const themeTv = tv(themeConfig as any);
        const slots = themeTv({ variant } as any) as any;
        return {
          base: slots.base ? slots.base() : '',
        };
      } catch (e) {
        console.warn('Error applying theme styles for Skeleton:', e);
        return { base: '' };
      }
    }, [themeConfig, variant]);

    // L3: Merge
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