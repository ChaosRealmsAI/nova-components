'use client';

import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes';
import { useI18n } from '@/lib/i18n/use-i18n';

/**
 * Nova Tooltip
 *
 * Architecture Notes:
 * - L1 (Functional): Position, animations, z-index.
 * - L2 (Thematic): Colors, spacing, typography, border.
 * - L3 (Instance): User className.
 */

// ============================================================================
// Utils
// ============================================================================

const toClassString = (value: string | string[] | undefined): string => {
  if (!value) return '';
  if (Array.isArray(value)) return value.join(' ');
  return value;
};

// ============================================================================
// L1: Functional Styles
// ============================================================================

const tooltipBase = tv({
  slots: {
    content: [
      'z-50 w-fit overflow-hidden', // structure
      'animate-in fade-in-0 zoom-in-95', // animation
      'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
      'data-[side=bottom]:slide-in-from-top-2',
      'data-[side=left]:slide-in-from-right-2',
      'data-[side=right]:slide-in-from-left-2',
      'data-[side=top]:slide-in-from-bottom-2',
    ],
    arrow: [
      'z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]',
    ],
  },
});

// ============================================================================
// Types
// ============================================================================

export interface TooltipProviderProps extends React.ComponentProps<typeof TooltipPrimitive.Provider> {}

export interface TooltipProps extends React.ComponentProps<typeof TooltipPrimitive.Root> {}

export interface TooltipContentProps
  extends React.ComponentProps<typeof TooltipPrimitive.Content> {
  classNames?: {
    content?: string;
    arrow?: string;
  };
}

export interface TooltipDemoProps {
  content?: string;
}

// ============================================================================
// Components
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

function Tooltip({ ...props }: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

function TooltipTrigger({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

function TooltipContent({
  className,
  classNames,
  sideOffset = 4,
  children,
  ...props
}: TooltipContentProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Tooltip;

  // L1: Functional
  const base = tooltipBase();

  // L2: Theme
  const themeContent = toClassString(themeConfig?.slots?.content);
  const themeArrow = toClassString(themeConfig?.slots?.arrow);

  // Merge
  const contentClass = twMerge(base.content(), themeContent, classNames?.content, className);
  const arrowClass = twMerge(base.arrow(), themeArrow, classNames?.arrow);

  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={contentClass}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className={arrowClass} />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

// ============================================================================
// Demo (Interactive)
// ============================================================================

function TooltipDemo({ content }: TooltipDemoProps) {
  const { t } = useI18n();
  const displayContent = content || t('tooltipContentDefault', 'Tooltip content');

  return (
    <TooltipProvider delayDuration={0}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          <button className="px-3 py-1.5 border border-border rounded text-[length:var(--text-sm)] bg-background text-foreground hover:bg-muted transition-colors">
            {t('tooltipHoverMe', 'Hover me')}
          </button>
        </TooltipPrimitive.Trigger>
        <TooltipContent>
          {displayContent}
        </TooltipContent>
      </TooltipPrimitive.Root>
    </TooltipProvider>
  );
}

export {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipDemo,
};