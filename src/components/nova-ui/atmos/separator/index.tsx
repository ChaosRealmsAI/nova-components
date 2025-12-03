'use client';

import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/themes';
import { separatorBaseConfig } from './separator.config';

/**
 * Nova Separator
 *
 * Architecture Notes:
 * - Uses `tailwind-variants` with slots for granular theme control.
 * - Exports `separatorBaseConfig` for themes to extend.
 * - Supports `classNames` prop for slot-specific overrides.
 * - ADR-006: 通过 useTheme() 获取主题配置，支持运行时主题切换
 */

export { separatorBaseConfig };

export type SeparatorVariants = VariantProps<ReturnType<typeof tv>>;
export type SeparatorSlots = keyof typeof separatorBaseConfig.slots;
export type SeparatorClassNames = Partial<Record<SeparatorSlots, string>>;

export interface SeparatorProps
  extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>,
    SeparatorVariants {
  classNames?: SeparatorClassNames;
}

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(
  (
    { className, classNames, style, orientation = 'horizontal', decorative = true, ...props },
    ref
  ) => {
    // ADR-006: 从主题上下文获取 Separator 的样式配置
    const { currentTheme } = useTheme();
    const themeConfig = currentTheme?.components?.Separator;

    // 合并基础配置和主题配置
    const styles = tv({
      extend: separatorBaseConfig,
      ...(themeConfig || {}),
    });

    const baseClass = classNames?.base
      ? classNames.base
      : styles({ orientation }).base();

    return (
      <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={cn(baseClass, className)}
        style={{
          backgroundColor: 'var(--border)',
          ...style,
        }}
        {...props}
      />
    );
  }
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };