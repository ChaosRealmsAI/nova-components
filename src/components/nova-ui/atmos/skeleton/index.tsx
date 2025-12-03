'use client';

import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/themes';
import { skeletonBaseConfig } from './skeleton.config';

/**
 * Nova Skeleton
 *
 * Architecture Notes:
 * - Uses `tailwind-variants` with slots for granular theme control.
 * - Exports `skeletonBaseConfig` for themes to extend.
 * - Supports `classNames` prop for slot-specific overrides.
 * - ADR-006: 通过 useTheme() 获取主题配置，支持运行时主题切换
 */

export { skeletonBaseConfig };

export type SkeletonVariants = VariantProps<ReturnType<typeof tv>>;
export type SkeletonSlots = keyof typeof skeletonBaseConfig.slots;
export type SkeletonClassNames = Partial<Record<SkeletonSlots, string>>;

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    SkeletonVariants {
  classNames?: SkeletonClassNames;
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, classNames, variant, ...props }, ref) => {
    // ADR-006: 从主题上下文获取 Skeleton 的样式配置
    const { currentTheme } = useTheme();
    const themeConfig = currentTheme?.components?.Skeleton;

    // 合并基础配置和主题配置
    const styles = tv({
      extend: skeletonBaseConfig,
      ...(themeConfig || {}),
    });

    const baseClass = classNames?.base
      ? classNames.base
      : styles({ variant }).base();

    return (
      <div
        className={cn(baseClass, className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Skeleton.displayName = 'Skeleton';

export { Skeleton };
