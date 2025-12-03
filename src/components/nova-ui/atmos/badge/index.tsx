'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/themes/use-theme';
import { badgeBaseConfig } from './badge.config';

/**
 * Nova Badge
 *
 * Architecture Notes:
 * - Uses `tailwind-variants` with slots for granular theme control.
 * - Exports `badgeBaseConfig` for themes to extend.
 * - Supports `classNames` prop for slot-specific overrides.
 * - ADR-006: 通过 useTheme() 获取主题配置，支持运行时主题切换
 */

export { badgeBaseConfig };

export type BadgeVariants = VariantProps<ReturnType<typeof tv>>;
export type BadgeSlots = keyof typeof badgeBaseConfig.slots;
export type BadgeClassNames = Partial<Record<BadgeSlots, string>>;

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    BadgeVariants {
  asChild?: boolean;
  classNames?: BadgeClassNames;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, classNames, variant, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';

    // ADR-006: 从主题上下文获取 Badge 的样式配置
    const { currentTheme } = useTheme();
    const themeConfig = currentTheme?.components?.Badge;

    // 合并基础配置和主题配置
    const styles = tv({
      extend: badgeBaseConfig,
      ...(themeConfig || {}),
    });

    // 如果提供了 classNames.base，完全使用它（主题烘焙样式）
    // 否则使用内部 variant 样式
    const baseClass = classNames?.base
      ? classNames.base
      : styles({ variant }).base();

    return (
      <Comp
        className={cn(baseClass, className)}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Badge.displayName = 'Badge';

export { Badge };
