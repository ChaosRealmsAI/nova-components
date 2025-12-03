'use client';

import * as React from 'react';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import { tv } from 'tailwind-variants';
import { useTheme } from '@/lib/themes';
import { aspectRatioBaseConfig } from './aspect-ratio.config';

/**
 * Nova AspectRatio
 *
 * Architecture Notes:
 * - Uses `tailwind-variants` with slots for granular theme control.
 * - Exports `aspectRatioBaseConfig` for themes to extend.
 * - Supports `classNames` prop for slot-specific overrides.
 * - ADR-006: 通过 useTheme() 获取主题配置，支持运行时主题切换
 */

export { aspectRatioBaseConfig };

// ============================================================================
// AspectRatio Component
// ============================================================================

// Ratio string to number mapping
const RATIO_MAP: Record<string, number> = {
  '1/1': 1,
  '16/9': 16 / 9,
  '4/3': 4 / 3,
  '21/9': 21 / 9,
};

type AspectRatioVariantProps = {
  ratio?: keyof typeof aspectRatioBaseConfig.variants.ratio;
};

export interface AspectRatioProps
  extends Omit<React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root>, 'ratio'>,
    AspectRatioVariantProps {
  classNames?: { base?: string };
}

const AspectRatio = React.forwardRef<
  React.ComponentRef<typeof AspectRatioPrimitive.Root>,
  AspectRatioProps
>(({ className, classNames, ratio = '16/9', children, ...props }, ref) => {
  // ADR-006: 从主题上下文获取 AspectRatio 的样式配置
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.AspectRatio;

  const styles = tv({
    extend: aspectRatioBaseConfig,
    ...(themeConfig || {}),
  })({ ratio });
  const numericRatio = RATIO_MAP[ratio] ?? 16 / 9;

  // 默认占位内容 - 显示比例信息
  const defaultContent = (
    <div className="flex size-full items-center justify-center bg-muted text-muted-foreground text-[length:var(--text-sm)] font-mono">
      {ratio}
    </div>
  );

  return (
    <div className={classNames?.base ?? styles.base({ className })}>
      <AspectRatioPrimitive.Root ref={ref} ratio={numericRatio} {...props}>
        {children || defaultContent}
      </AspectRatioPrimitive.Root>
    </div>
  );
});
AspectRatio.displayName = 'AspectRatio';

export { AspectRatio };
