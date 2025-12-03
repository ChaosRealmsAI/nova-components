'use client';

import * as React from 'react';
import * as LabelPrimitive from "@radix-ui/react-label";
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/themes';
import { labelBaseConfig } from './label.config';

/**
 * Nova Label
 *
 * Architecture Notes:
 * - Uses `tailwind-variants` with slots for granular theme control.
 * - Exports `labelBaseConfig` for themes to extend.
 * - Supports `classNames` prop for slot-specific overrides.
 * - ADR-006: 通过 useTheme() 获取主题配置，支持运行时主题切换
 */

export { labelBaseConfig };

export type LabelVariants = VariantProps<ReturnType<typeof tv>>;
export type LabelSlots = keyof typeof labelBaseConfig.slots;
export type LabelClassNames = Partial<Record<LabelSlots, string>>;

export interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    LabelVariants {
  classNames?: LabelClassNames;
}

const Label = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, LabelProps>(
  ({ className, classNames, variant, size, ...props }, ref) => {
    // ADR-006: 从主题上下文获取 Label 的样式配置
    const { currentTheme } = useTheme();
    const themeConfig = currentTheme?.components?.Label;

    // 合并基础配置和主题配置
    const styles = tv({
      extend: labelBaseConfig,
      ...(themeConfig || {}),
    });

    const baseClass = classNames?.base
      ? classNames.base
      : styles({ variant, size }).base();

    return (
      <LabelPrimitive.Root
        ref={ref}
        className={cn(baseClass, className)}
        {...props}
      />
    );
  }
);
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
