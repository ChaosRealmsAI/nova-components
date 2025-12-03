'use client';

/**
 * Tooltip Component
 *
 * 基于 Radix UI Tooltip 的提示框组件。
 * 支持主题定制和特效扩展。
 */

import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { tv, type VariantProps } from 'tailwind-variants';
import { useTheme } from '@/lib/themes/use-theme';
import { useI18n } from '@/lib/i18n/use-i18n';
import { tooltipBaseConfig } from './tooltip.config';

// ============================================================================
// Types
// ============================================================================

export type TooltipVariant = 'default';

export interface TooltipProviderProps extends React.ComponentProps<typeof TooltipPrimitive.Provider> {}

export interface TooltipProps extends React.ComponentProps<typeof TooltipPrimitive.Root> {}

export interface TooltipContentProps
  extends React.ComponentProps<typeof TooltipPrimitive.Content>,
    VariantProps<ReturnType<typeof tv>> {
  variant?: TooltipVariant;
}

export interface TooltipDemoProps {
  content?: string;
  variant?: TooltipVariant;
}

// ============================================================================
// Tooltip Provider
// ============================================================================

function TooltipProvider({
  delayDuration = 0,
  ...props
}: TooltipProviderProps) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
}

// ============================================================================
// Tooltip Root
// ============================================================================

function Tooltip({ ...props }: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

// ============================================================================
// Tooltip Trigger
// ============================================================================

function TooltipTrigger({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

// ============================================================================
// Tooltip Content
// ============================================================================

function TooltipContent({
  className,
  sideOffset = 4,
  variant = 'default',
  children,
  ...props
}: TooltipContentProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Tooltip;

  const styles = tv({
    extend: tooltipBaseConfig,
    ...(themeConfig || {}),
  });

  const { content, arrow } = styles({ variant });

  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={content({ className })}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className={arrow()} />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

// ============================================================================
// Tooltip Demo (for Canvas display) - Interactive Version
// ============================================================================

function TooltipDemo({
  content,
  variant = 'default',
}: TooltipDemoProps) {
  const { currentTheme } = useTheme();
  const { t } = useI18n();
  const themeConfig = currentTheme?.components?.Tooltip;

  const styles = tv({
    extend: tooltipBaseConfig,
    ...(themeConfig || {}),
  });

  const { content: contentClass, arrow } = styles({ variant });
  const displayContent = content || t('tooltipContentDefault', 'Tooltip content');

  // 交互式 Demo：使用真正的 Radix Tooltip，不使用 Portal
  return (
    <TooltipProvider delayDuration={0}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          <button className="px-3 py-1.5 border border-border rounded text-[length:var(--text-sm)] bg-background text-foreground hover:bg-muted transition-colors">
            {t('tooltipHoverMe', 'Hover me')}
          </button>
        </TooltipPrimitive.Trigger>
        {/* 不使用 Portal，直接渲染在 trigger 旁边 */}
        <TooltipPrimitive.Content
          data-slot="tooltip-content"
          sideOffset={4}
          className={contentClass()}
        >
          {displayContent}
          <TooltipPrimitive.Arrow className={arrow()} />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipProvider>
  );
}

// ============================================================================
// Exports
// ============================================================================

export {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipDemo,
  tooltipBaseConfig,
};
