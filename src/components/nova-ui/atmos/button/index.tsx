'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes';

/**
 * Nova Button
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

export type ButtonClassNames = Partial<{
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

/** Button 功能层样式 - 只保留功能必需的样式 */
const buttonBase = tv({
  slots: {
    // 功能必需：flex/grid 布局, 交互状态(disabled), 内部元素(svg) 行为
    base: 'inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:pointer-events-none shrink-0 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
  },
});

// ============================================================================
// Button Component
// ============================================================================

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  classNames?: ButtonClassNames;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, classNames, variant = 'default', size = 'default', asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    const { currentTheme } = useTheme();
    const themeConfig = currentTheme?.components?.Button;

    // L1: 功能层（静态）
    const base = buttonBase();

    // L2: 主题层（用 useMemo 缓存）
    const themeStyles = React.useMemo(() => {
      const baseStyle = toClassString(themeConfig?.slots?.base);
      const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.base);
      const sizeStyle = toClassString(themeConfig?.variants?.size?.[size]?.base);
      return { base: baseStyle, variant: variantStyle, size: sizeStyle };
    }, [themeConfig, variant, size]);

    // 合并: L1 + L2(base) + L2(variant) + L2(size) + L3
    const rootClass = twMerge(
      base.base(),
      themeStyles.base,
      themeStyles.variant,
      themeStyles.size,
      classNames?.base,
      className
    );

    return (
      <Comp
        className={rootClass}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button };