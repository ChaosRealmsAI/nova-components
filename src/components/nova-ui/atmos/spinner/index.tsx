'use client';

import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/themes';
import { useI18n } from '@/lib/i18n/use-i18n';
import { spinnerBaseConfig } from './spinner.config';

/**
 * Nova Spinner
 *
 * Architecture Notes:
 * - Uses `tailwind-variants` with slots for granular theme control.
 * - Exports `spinnerBaseConfig` for themes to extend.
 * - Supports `classNames` prop for slot-specific overrides.
 * - Uses inline SVG for maximum theme customization.
 * - ADR-006: 通过 useTheme() 获取主题配置，支持运行时主题切换
 */

export { spinnerBaseConfig };

export type SpinnerVariants = VariantProps<ReturnType<typeof tv>>;
export type SpinnerSlots = keyof typeof spinnerBaseConfig.slots;
export type SpinnerClassNames = Partial<Record<SpinnerSlots, string>>;

export interface SpinnerProps
  extends Omit<React.SVGAttributes<SVGSVGElement>, 'children'>,
    SpinnerVariants {
  classNames?: SpinnerClassNames;
}

const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(
  ({ className, classNames, variant, size, ...props }, ref) => {
    // ADR-006: 从主题上下文获取 Spinner 的样式配置
    const { currentTheme } = useTheme();
    const { t } = useI18n();
    const themeConfig = currentTheme?.components?.Spinner;

    // 合并基础配置和主题配置
    const styles = tv({
      extend: spinnerBaseConfig,
      ...(themeConfig || {}),
    });

    const baseClass = classNames?.base
      ? classNames.base
      : styles({ variant, size }).base();

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
        className={cn(baseClass, className)}
        {...props}
      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </svg>
    );
  }
);
Spinner.displayName = 'Spinner';

export { Spinner };
