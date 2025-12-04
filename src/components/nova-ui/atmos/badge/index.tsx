'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes';

/**
 * Nova Badge
 *
 * 纯净组件，只依赖外部库，不依赖项目内部文件。
 *
 * 架构：
 * - L1 (功能层): 静态定义，保证组件功能正常
 * - L2 (主题层): 从 useTheme 获取，控制视觉风格
 * - L3 (实例层): 用户传入的 className/classNames
 *
 * 优先级: L3 > L2 > L1 (通过 twMerge 解决冲突)
 */

// ============================================================================
// Types
// ============================================================================

export type BadgeClassNames = Partial<{
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
// L1: 静态样式定义（功能层）- 在组件外部定义
// ============================================================================

/** Badge 功能层样式 - 只保留功能必需的样式 */
const badgeBase = tv({
  slots: {
    // 功能必需：inline-flex 布局 + 居中对齐
    base: 'inline-flex items-center',
  },
});

// ============================================================================
// Badge Component
// ============================================================================

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
  classNames?: BadgeClassNames;
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, classNames, variant = 'default', asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';

    const { currentTheme } = useTheme();
    const themeConfig = currentTheme?.components?.Badge;

    // L1: 功能层（静态）
    const base = badgeBase();

    // L2: 主题层（用 useMemo 缓存）
    const themeStyles = React.useMemo(() => {
      const baseStyle = toClassString(themeConfig?.slots?.base);
      const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.base);
      return { base: baseStyle, variant: variantStyle };
    }, [themeConfig, variant]);

    // 合并: L1 + L2(base) + L2(variant) + L3
    const rootClass = twMerge(
      base.base(),
      themeStyles.base,
      themeStyles.variant,
      classNames?.base,
      className
    );

    return (
      <Comp
        ref={ref}
        data-slot="badge"
        className={rootClass}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Badge.displayName = 'Badge';

export { Badge };
