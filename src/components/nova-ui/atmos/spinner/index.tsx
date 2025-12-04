'use client';

import * as React from 'react';
import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes';
import { useI18n } from '@/lib/i18n/use-i18n';

/**
 * Nova Spinner
 *
 * Architecture Notes:
 * - L1 (Functional): Static definition, functional requirements only.
 * - L2 (Theme): Dynamic from useTheme(), visual styles.
 * - L3 (Instance): User provided className/classNames.
 */

// ============================================================================
// Types
// ============================================================================

export type SpinnerClassNames = Partial<{
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

const spinnerBase = tv({
  slots: {
    base: 'animate-spin',
  },
});

// ============================================================================
// Component
// ============================================================================

export interface SpinnerProps
  extends Omit<React.SVGAttributes<SVGSVGElement>, 'children'> {
  classNames?: SpinnerClassNames;
  variant?: 'default' | 'secondary' | 'muted';
  size?: 'default' | 'sm' | 'lg' | 'xl';
}

const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(
  ({ className, classNames, variant = 'default', size = 'default', ...props }, ref) => {
    const { currentTheme } = useTheme();
    const { t } = useI18n();
    const themeConfig = currentTheme?.components?.Spinner;

    // L1: Functional Layer
    const base = spinnerBase();

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
      <svg
        ref={ref}
        role="status"
        aria-label={t('spinnerLoading', 'Loading')}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={rootClass}
        {...props}
      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </svg>
    );
  }
);
Spinner.displayName = 'Spinner';

export { Spinner };