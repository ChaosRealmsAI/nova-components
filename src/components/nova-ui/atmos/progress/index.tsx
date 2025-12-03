'use client';

import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/themes';
import { progressBaseConfig } from './progress.config';

/**
 * Nova Progress
 *
 * Architecture Notes:
 * - Uses `tailwind-variants` with slots for granular theme control.
 * - Exports `progressBaseConfig` for themes to extend.
 * - Supports `classNames` prop for slot-specific overrides.
 * - ADR-006: 通过 useTheme() 获取主题配置，支持运行时主题切换
 */

export { progressBaseConfig };

export type ProgressVariants = VariantProps<ReturnType<typeof tv>>;
export type ProgressSlots = keyof typeof progressBaseConfig.slots;
export type ProgressClassNames = Partial<Record<ProgressSlots, string>>;

export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
    ProgressVariants {
  classNames?: ProgressClassNames;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, classNames, variant, size, value, max = 100, ...props }, ref) => {
  // ADR-006: 从主题上下文获取 Progress 的样式配置
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Progress;

  // 合并基础配置和主题配置
  const { base, indicator } = tv({
    extend: progressBaseConfig,
    ...(themeConfig || {}),
  })({ variant, size });

  const baseClass = classNames?.base ? classNames.base : base();
  const indicatorClass = classNames?.indicator ? classNames.indicator : indicator();

  // Calculate percentage based on value and max
  const percentage = React.useMemo(() => {
    if (value == null) return 0;
    if (max === 0) return 0;
    const p = (value / max) * 100;
    return Math.min(Math.max(p, 0), 100); // Clamp between 0 and 100
  }, [value, max]);

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(baseClass, className)}
      value={value}
      max={max}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={indicatorClass}
        style={{ transform: `translateX(-${100 - percentage}%)` }}
      />
    </ProgressPrimitive.Root>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };