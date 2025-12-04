'use client';

import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes';

/**
 * Nova Switch
 *
 * Architecture Notes:
 * - L1 (Functional): Static definition via `tv`, handles layout and mechanics.
 * - L2 (Theme): Dynamic from `useTheme`, handles visual styles (shapes, colors, sizes).
 * - L3 (Instance): User overrides via `className`/`classNames`.
 */

// ============================================================================
// Types
// ============================================================================

export type SwitchVariants = VariantProps<typeof switchBase>;
export type SwitchSlots = keyof typeof switchBase.slots;
export type SwitchClassNames = Partial<Record<SwitchSlots, string>>;

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

const switchBase = tv({
  slots: {
    base: 'peer inline-flex shrink-0 cursor-pointer items-center',
    thumb: 'pointer-events-none block transition-transform',
  },
  variants: {
    // Sizes might affect layout, but here they are mostly handled in L2.
    // We keep variants definition empty here as `tv` types depend on it if we want validation?
    // Actually, Button example didn't have variants in L1 `tv`.
    // But `SwitchVariants` type comes from `tv`.
    // If we want `variant` and `size` props to be typed, we might need to define them here 
    // OR manually define the props.
    // Button manual defined `variant` and `size` in `ButtonProps`.
    // I will follow Button pattern.
  },
});

// ============================================================================
// Component
// ============================================================================

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
  classNames?: SwitchClassNames;
  variant?: 'default';
  size?: 'default' | 'sm' | 'lg';
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, classNames, variant = 'default', size = 'default', ...props }, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Switch;

  // L1: Functional Layer
  const base = switchBase();

  // L2: Theme Layer
  const themeStyles = React.useMemo(() => {
    // Base Slot L2
    const baseL2 = [
      toClassString(themeConfig?.slots?.base),
      toClassString(themeConfig?.variants?.variant?.[variant]?.base),
      toClassString(themeConfig?.variants?.size?.[size]?.base)
    ].join(' ');

    // Thumb Slot L2
    const thumbL2 = [
      toClassString(themeConfig?.slots?.thumb),
      toClassString(themeConfig?.variants?.variant?.[variant]?.thumb),
      toClassString(themeConfig?.variants?.size?.[size]?.thumb)
    ].join(' ');

    return { base: baseL2, thumb: thumbL2 };
  }, [themeConfig, variant, size]);

  // Merge: L1 + L2 + L3
  const baseClass = twMerge(base.base(), themeStyles.base, classNames?.base, className);
  const thumbClass = twMerge(base.thumb(), themeStyles.thumb, classNames?.thumb);

  return (
    <SwitchPrimitive.Root
      className={baseClass}
      {...props}
      ref={ref}
    >
      <SwitchPrimitive.Thumb className={thumbClass} />
    </SwitchPrimitive.Root>
  );
});
Switch.displayName = SwitchPrimitive.Root.displayName;

export { Switch };