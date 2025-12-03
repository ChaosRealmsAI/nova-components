'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/themes/use-theme';
import { buttonBaseConfig } from './button.config';

/**
 * Nova Button
 *
 * Architecture Notes:
 * - Uses `tailwind-variants` with slots for granular theme control.
 * - Exports `buttonBaseConfig` for themes to extend.
 *
 * ADR-002 v2: 物理同源性
 * - Canvas 和导出代码走完全相同的代码路径
 * - 组件内部调用 useTheme() 获取主题配置，自己计算样式
 * - classNames prop 仅用于用户自定义覆盖，不用于 Canvas 注入
 *
 * ADR-006 v2: 源码即导出
 * - 通过 useTheme() 获取主题配置，支持运行时主题切换
 */

export { buttonBaseConfig };

export type ButtonVariants = VariantProps<ReturnType<typeof tv>>;
export type ButtonSlots = keyof typeof buttonBaseConfig.slots;
export type ButtonClassNames = Partial<Record<ButtonSlots, string>>;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {
  asChild?: boolean;
  /** 用户自定义样式覆盖（ADR-002 v2: 不用于 Canvas 注入） */
  classNames?: ButtonClassNames;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, classNames, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    // ADR-002 v2 + ADR-006 v2: 从主题上下文获取样式配置
    // Canvas 和导出代码都走这条路径，保证物理同源
    //
    // 核心卖点：运行时主题切换
    // - 有 ThemeProvider 时：使用主题配置
    // - 无 ThemeProvider 时：使用 baseConfig（fallback，保证组件可用）
    const themeContext = useTheme();
    const themeConfig = themeContext?.currentTheme?.components?.Button;

    // ADR-008: 组件内部负责 extend，主题配置只覆盖 slots/variants
    const styles = tv({
      extend: buttonBaseConfig,
      ...(themeConfig || {}),
    });

    // ADR-002 v2: 统一计算样式，classNames 仅用于用户额外覆盖
    const baseClass = cn(styles({ variant, size }).base(), classNames?.base);

    return (
      <Comp
        className={cn(baseClass, className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
