'use client';

import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes';

/**
 * Nova Separator
 *
 * Architecture Notes:
 * - L1 (Functional): Static definition via `tv`, handles layout.
 * - L2 (Theme): Dynamic from `useTheme`, handles visual styles.
 * - L3 (Instance): User overrides via `className`/`classNames`.
 */

// ============================================================================
// Utils
// ============================================================================

const toClassString = (value: string | string[] | undefined): string => {
  if (!value) return '';
  if (Array.isArray(value)) return value.join(' ');
  return value;
};

// ============================================================================
// L1: Functional Layer (Static)
// ============================================================================

const separatorBase = tv({
  slots: {
    base: 'shrink-0',
  },
  variants: {
    orientation: {
      horizontal: { base: 'h-[1px] w-full' },
      vertical: { base: 'h-full w-[1px]' },
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

// ============================================================================
// Component
// ============================================================================

export type SeparatorSlots = keyof typeof separatorBase.slots;
export type SeparatorClassNames = Partial<Record<SeparatorSlots, string>>;

export interface SeparatorProps
  extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {
  classNames?: SeparatorClassNames;
  orientation?: 'horizontal' | 'vertical';
}

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(
  (
    { className, classNames, orientation = 'horizontal', decorative = true, ...props },
    ref
  ) => {
    const { currentTheme } = useTheme();
    const themeConfig = currentTheme?.components?.Separator;

    // L1: Functional Layer
    const base = separatorBase({ orientation });

    // L2: Theme Layer
    const themeStyles = React.useMemo(() => {
       const baseL2 = [
         toClassString(themeConfig?.slots?.base),
         toClassString(themeConfig?.variants?.orientation?.[orientation]?.base)
       ].join(' ');
       return { base: baseL2 };
    }, [themeConfig, orientation]);

    // Merge: L1 + L2 + L3
    const baseClass = twMerge(base.base(), themeStyles.base, classNames?.base, className);

    return (
      <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={baseClass}
        {...props}
      />
    );
  }
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };