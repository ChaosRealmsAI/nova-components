'use client';

import * as React from 'react';
import { tv } from 'tailwind-variants';
import { useTheme } from '@/lib/themes';
import { kbdBaseConfig } from './kbd.config';

/**
 * Nova Kbd
 *
 * Architecture Notes:
 * - Uses `tailwind-variants` with slots for granular theme control.
 * - Exports `kbdBaseConfig` for themes to extend.
 * - Supports `classNames` prop for slot-specific overrides.
 * - ADR-006: 通过 useTheme() 获取主题配置，支持运行时主题切换
 */

export { kbdBaseConfig };

// ============================================================================
// Kbd Component
// ============================================================================

type KbdVariantProps = {
  size?: keyof typeof kbdBaseConfig.variants.size;
  variant?: keyof typeof kbdBaseConfig.variants.variant;
};

export interface KbdProps
  extends React.HTMLAttributes<HTMLElement>,
    KbdVariantProps {
  classNames?: { base?: string };
}

const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ className, classNames, size, variant, ...props }, ref) => {
    // ADR-006: 从主题上下文获取 Kbd 的样式配置
    const { currentTheme } = useTheme();
    const themeConfig = currentTheme?.components?.Kbd;

    const styles = tv({
      extend: kbdBaseConfig,
      ...(themeConfig || {}),
    })({ size, variant });

    return (
      <kbd
        ref={ref}
        className={classNames?.base ?? styles.base({ className })}
        {...props}
      />
    );
  }
);
Kbd.displayName = 'Kbd';

export { Kbd };
