'use client';

import * as React from 'react';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes';

/**
 * Nova AspectRatio
 *
 * Architecture Notes:
 * - L1 (Functional): Static definition, functional requirements only.
 * - L2 (Theme): Dynamic from useTheme(), visual styles.
 * - L3 (Instance): User provided className/classNames.
 */

// ============================================================================
// Types
// ============================================================================

export type AspectRatioClassNames = Partial<{
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

// Ratio string to number mapping
const RATIO_MAP: Record<string, number> = {
  '1/1': 1,
  '16/9': 16 / 9,
  '4/3': 4 / 3,
  '21/9': 21 / 9,
};

// ============================================================================
// L1: Static Functional Styles
// ============================================================================

const aspectRatioBase = tv({
  slots: {
    base: 'relative w-full flex-1 overflow-hidden',
  },
});

// ============================================================================
// Component
// ============================================================================

export interface AspectRatioProps
  extends Omit<React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root>, 'ratio'> {
  classNames?: AspectRatioClassNames;
  ratio?: '1/1' | '16/9' | '4/3' | '21/9';
}

const AspectRatio = React.forwardRef<
  React.ComponentRef<typeof AspectRatioPrimitive.Root>,
  AspectRatioProps
>(({ className, classNames, ratio = '16/9', children, ...props }, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.AspectRatio;

  // L1: Functional Layer
  const base = aspectRatioBase();

  // L2: Theme Layer
  const themeStyles = React.useMemo(() => {
    const baseSlot = toClassString(themeConfig?.slots?.base);
    const ratioStyle = toClassString(themeConfig?.variants?.ratio?.[ratio]?.base);

    return {
      base: twMerge(baseSlot, ratioStyle),
    };
  }, [themeConfig, ratio]);

  // Merge: L1 + L2 + L3
  const baseClass = twMerge(base.base(), themeStyles.base, classNames?.base, className);

  // Numeric ratio for Radix
  const numericRatio = RATIO_MAP[ratio] ?? 16 / 9;

  // Default placeholder content
  const defaultContent = (
    <div className="flex size-full items-center justify-center bg-muted text-muted-foreground text-[length:var(--text-sm)] font-mono">
      {ratio}
    </div>
  );

  return (
    <div className={baseClass}>
      <AspectRatioPrimitive.Root ref={ref} ratio={numericRatio} {...props}>
        {children || defaultContent}
      </AspectRatioPrimitive.Root>
    </div>
  );
});
AspectRatio.displayName = 'AspectRatio';

export { AspectRatio };
