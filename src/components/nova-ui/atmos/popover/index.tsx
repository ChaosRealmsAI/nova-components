'use client';

/**
 * Popover Component
 *
 * 基于 Radix UI Popover 的弹出框组件。
 * 支持主题定制和特效扩展。
 */

import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { tv, type VariantProps } from 'tailwind-variants';
import { useTheme } from '@/lib/themes/use-theme';
import { useI18n } from '@/lib/i18n/use-i18n';
import { popoverBaseConfig } from './popover.config';

// ============================================================================
// Types
// ============================================================================

export type PopoverVariant = 'default';

export interface PopoverProps extends React.ComponentProps<typeof PopoverPrimitive.Root> {}

export interface PopoverContentProps
  extends React.ComponentProps<typeof PopoverPrimitive.Content>,
    VariantProps<ReturnType<typeof tv>> {
  variant?: PopoverVariant;
}

export interface PopoverDemoProps {
  content?: string;
  variant?: PopoverVariant;
}

// ============================================================================
// Popover Root
// ============================================================================

function Popover({ ...props }: PopoverProps) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}

// ============================================================================
// Popover Trigger
// ============================================================================

function PopoverTrigger({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

// ============================================================================
// Popover Anchor
// ============================================================================

function PopoverAnchor({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />;
}

// ============================================================================
// Popover Content
// ============================================================================

function PopoverContent({
  className,
  align = 'center',
  sideOffset = 4,
  variant = 'default',
  ...props
}: PopoverContentProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Popover;

  const styles = tv({
    extend: popoverBaseConfig,
    ...(themeConfig || {}),
  });

  const { content } = styles({ variant });

  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={content({ className })}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}

// ============================================================================
// Popover Demo (for Canvas display) - Interactive Version
// ============================================================================

function PopoverDemo({
  content,
  variant = 'default',
}: PopoverDemoProps) {
  const { currentTheme } = useTheme();
  const { t } = useI18n();
  const themeConfig = currentTheme?.components?.Popover;

  const styles = tv({
    extend: popoverBaseConfig,
    ...(themeConfig || {}),
  });

  const { content: contentClass } = styles({ variant });
  const displayContent = content || t('popoverContentDefault', 'Place content for the popover here.');

  // 交互式 Demo：使用真正的 Radix Popover，不使用 Portal
  return (
    <PopoverPrimitive.Root>
      <PopoverPrimitive.Trigger asChild>
        <button className="px-3 py-1.5 border border-border rounded text-[length:var(--text-sm)] bg-background text-foreground hover:bg-muted transition-colors">
          {t('popoverOpenButton', 'Open Popover')}
        </button>
      </PopoverPrimitive.Trigger>
      {/* 不使用 Portal，直接渲染在 trigger 旁边 */}
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align="center"
        sideOffset={4}
        className={contentClass()}
      >
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none text-[length:var(--text-sm)]">{t('popoverTitle', 'Popover')}</h4>
            <p className="text-[length:var(--text-sm)] text-muted-foreground">{displayContent}</p>
          </div>
        </div>
        <PopoverPrimitive.Arrow className="fill-popover" />
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Root>
  );
}

// ============================================================================
// Exports
// ============================================================================

export {
  Popover,
  PopoverTrigger,
  PopoverAnchor,
  PopoverContent,
  PopoverDemo,
  popoverBaseConfig,
};
