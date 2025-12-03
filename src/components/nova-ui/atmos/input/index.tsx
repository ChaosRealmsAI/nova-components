'use client';

import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/themes';
import { inputBaseConfig } from './input.config';

/**
 * Nova Input
 *
 * Architecture Notes:
 * - Uses `tailwind-variants` with slots for granular theme control.
 * - Exports `inputBaseConfig` for themes to extend.
 * - Supports `classNames` prop for slot-specific overrides.
 * - ADR-006: 通过 useTheme() 获取主题配置，支持运行时主题切换
 */

export { inputBaseConfig };

export type InputVariants = VariantProps<ReturnType<typeof tv>>;
export type InputSlots = keyof typeof inputBaseConfig.slots;
export type InputClassNames = Partial<Record<InputSlots, string>>;

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    InputVariants {
  classNames?: InputClassNames;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, classNames, variant, inputSize, type, ...props }, ref) => {
    // ADR-006: 从主题上下文获取 Input 的样式配置
    const { currentTheme } = useTheme();
    const themeConfig = currentTheme?.components?.Input;

    // 合并基础配置和主题配置
    const styles = tv({
      extend: inputBaseConfig,
      ...(themeConfig || {}),
    });

    const baseClass = classNames?.base
      ? classNames.base
      : styles({ variant, inputSize }).base();

    // Filter out children to prevent "void element with children" error
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { children, ...rest } = props as any;

    return (
      <input
        type={type}
        className={cn(baseClass, className)}
        ref={ref}
        {...rest}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
