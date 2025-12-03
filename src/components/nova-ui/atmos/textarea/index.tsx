'use client';

import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/themes';
import { textareaBaseConfig } from './textarea.config';

/**
 * Nova Textarea
 *
 * Architecture Notes:
 * - Uses `tailwind-variants` with slots for granular theme control.
 * - Exports `textareaBaseConfig` for themes to extend.
 * - Supports `classNames` prop for slot-specific overrides.
 * - ADR-006: 通过 useTheme() 获取主题配置，支持运行时主题切换
 */

export { textareaBaseConfig };

export type TextareaVariants = VariantProps<ReturnType<typeof tv>>;
export type TextareaSlots = keyof typeof textareaBaseConfig.slots;
export type TextareaClassNames = Partial<Record<TextareaSlots, string>>;

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>,
    TextareaVariants {
  classNames?: TextareaClassNames;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, classNames, variant, textareaSize, ...props }, ref) => {
    // ADR-006: 从主题上下文获取 Textarea 的样式配置
    const { currentTheme } = useTheme();
    const themeConfig = currentTheme?.components?.Textarea;

    // 合并基础配置和主题配置
    const styles = tv({
      extend: textareaBaseConfig,
      ...(themeConfig || {}),
    });

    // Destructure children from props since textarea doesn't use children prop
    const { children, ...rest } = props as React.TextareaHTMLAttributes<HTMLTextAreaElement> & { children?: React.ReactNode };

    const baseClass = classNames?.base
      ? classNames.base
      : styles({ variant, textareaSize }).base();

    return (
      <textarea
        className={cn(baseClass, className)}
        ref={ref}
        {...rest}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
