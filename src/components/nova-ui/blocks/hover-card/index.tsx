'use client';

/**
 * HoverCard Block
 *
 * 悬浮卡片组件，用于在鼠标悬停时显示额外信息。
 *
 * Architecture Notes:
 * - Block 组件，依赖 Atoms: popover
 * - 不支持用户可配特效（通过内部 Atoms 获得）
 */

import * as React from 'react';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/themes/use-theme';
import { hoverCardBaseConfig } from './hover-card.config';

// ============================================================================
// 依赖声明（用于导出时收集）
// ============================================================================

export const hoverCardAtoms = ['popover'] as const;

export { hoverCardBaseConfig };

// ============================================================================
// Styles
// ============================================================================

const hoverCard = tv(hoverCardBaseConfig);

// ============================================================================
// Types
// ============================================================================

export type HoverCardVariants = VariantProps<typeof hoverCard>;
export type HoverCardSlots = keyof typeof hoverCardBaseConfig.slots;
export type HoverCardClassNames = Partial<Record<HoverCardSlots, string>>;

export interface HoverCardProps
  extends React.ComponentProps<typeof HoverCardPrimitive.Root>,
    HoverCardVariants {
  classNames?: HoverCardClassNames;
}

export interface HoverCardTriggerProps
  extends React.ComponentProps<typeof HoverCardPrimitive.Trigger> {
  classNames?: HoverCardClassNames;
}

export interface HoverCardContentProps
  extends React.ComponentProps<typeof HoverCardPrimitive.Content> {
  classNames?: HoverCardClassNames;
}

export interface HoverCardDemoProps extends HoverCardVariants {
  triggerText?: string;
  title?: string;
  description?: string;
}

// ============================================================================
// HoverCard Root
// ============================================================================

function HoverCard({ ...props }: HoverCardProps) {
  return <HoverCardPrimitive.Root data-slot="hover-card" {...props} />;
}

// ============================================================================
// HoverCard Trigger
// ============================================================================

function HoverCardTrigger({
  className,
  classNames,
  ...props
}: HoverCardTriggerProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.HoverCard;
  const styles = hoverCard({ variant: 'default' });

  return (
    <HoverCardPrimitive.Trigger
      data-slot="hover-card-trigger"
      className={cn(
        classNames?.trigger || styles.trigger(),
        themeConfig?.slots?.trigger,
        className
      )}
      {...props}
    />
  );
}

// ============================================================================
// HoverCard Content
// ============================================================================

function HoverCardContent({
  className,
  classNames,
  align = 'center',
  sideOffset = 4,
  ...props
}: HoverCardContentProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.HoverCard;
  const styles = hoverCard({ variant: 'default' });

  return (
    <HoverCardPrimitive.Portal>
      <HoverCardPrimitive.Content
        data-slot="hover-card-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          classNames?.content || styles.content(),
          themeConfig?.slots?.content,
          className
        )}
        {...props}
      />
    </HoverCardPrimitive.Portal>
  );
}

// ============================================================================
// Demo Component (for Canvas display)
// ============================================================================

function HoverCardDemo({
  variant = 'default',
  triggerText = '@nextjs',
  title = 'Next.js',
  description = 'The React Framework for the Web. Used by some of the world\'s largest companies.',
}: HoverCardDemoProps) {
  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <HoverCard>
        <HoverCardTrigger asChild>
          <a
            href="#"
            className="text-sm font-medium underline underline-offset-4"
          >
            {triggerText}
          </a>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">{title}</h4>
              <p className="text-sm text-muted-foreground">{description}</p>
              <div className="flex items-center pt-2">
                <span className="text-xs text-muted-foreground">
                  Joined December 2021
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}

// ============================================================================
// Exports
// ============================================================================

export {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  HoverCardDemo,
};
