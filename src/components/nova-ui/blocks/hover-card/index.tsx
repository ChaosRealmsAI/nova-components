'use client';

/**
 * HoverCard Block
 *
 * 悬浮卡片组件，用于在鼠标悬停时显示额外信息。
 *
 * Architecture Notes:
 * - Block 组件，依赖 Atoms: popover
 * - 不支持用户可配特效（通过内部 Atoms 获得）
 *
 * 架构：
 * - L1 (功能层): 静态定义，保证组件功能正常
 * - L2 (主题层): 从 useTheme 获取，控制视觉风格
 * - L3 (实例层): 用户传入的 className/classNames
 *
 * 优先级: L3 > L2 > L1 (通过 twMerge 解决冲突)
 */

import * as React from 'react';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes/use-theme';
import { useI18n } from '@/lib/i18n/use-i18n';

// ============================================================================ 
// Styles
// ============================================================================ 

const hoverCardConfig = {
  slots: {
    root: '',
    trigger: 'cursor-pointer',
    content:
      'z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  },
  variants: {
    variant: {
      default: {
        root: '',
        trigger: '',
        content: '',
      },
    },
  },
  defaultVariants: {
    variant: 'default' as const,
  },
} as const;

const hoverCard = tv(hoverCardConfig);

// ============================================================================ 
// Utils
// ============================================================================ 

const toClassString = (value: string | string[] | undefined): string => {
  if (!value) return '';
  if (Array.isArray(value)) return value.join(' ');
  return value;
};

// ============================================================================ 
// Context
// ============================================================================ 

interface HoverCardContextValue {
  variant: HoverCardVariants['variant'];
}

const HoverCardContext = React.createContext<HoverCardContextValue>({
  variant: 'default',
});

const useHoverCardContext = () => React.useContext(HoverCardContext);

// ============================================================================ 
// Types
// ============================================================================ 

export type HoverCardVariants = VariantProps<typeof hoverCard>;
export type HoverCardSlots = keyof typeof hoverCardConfig.slots;
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

function HoverCard({
  variant = 'default',
  ...props
}: HoverCardProps) {
  return (
    <HoverCardContext.Provider value={{ variant }}>
      <HoverCardPrimitive.Root data-slot="hover-card" {...props} />
    </HoverCardContext.Provider>
  );
}

// ============================================================================ 
// HoverCard Trigger
// ============================================================================ 

function HoverCardTrigger({
  className,
  classNames,
  ...props
}: HoverCardTriggerProps) {
  const { variant } = useHoverCardContext();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.HoverCard;
  
  // L1
  const styles = hoverCard({ variant });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.trigger);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.trigger);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, variant]);

  return (
    <HoverCardPrimitive.Trigger
      data-slot="hover-card-trigger"
      className={twMerge(
        styles.trigger(),
        themeStyles.slot,
        themeStyles.variant,
        classNames?.trigger,
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
  const { variant } = useHoverCardContext();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.HoverCard;
  
  // L1
  const styles = hoverCard({ variant });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.content);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.content);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, variant]);

  return (
    <HoverCardPrimitive.Portal>
      <HoverCardPrimitive.Content
        data-slot="hover-card-content"
        align={align}
        sideOffset={sideOffset}
        className={twMerge(
          styles.content(),
          themeStyles.slot,
          themeStyles.variant,
          classNames?.content,
          className
        )}
        {...props}
      />
    </HoverCardPrimitive.Portal>
  );
}

// ============================================================================ 
// Demo Component
// ============================================================================ 

function HoverCardDemo({
  variant = 'default',
  triggerText,
  title,
  description,
}: HoverCardDemoProps) {
  const { t } = useI18n();
  const displayTrigger = triggerText || '@nextjs';
  const displayTitle = title || 'Next.js';
  const displayDesc = description || t('hoverCardDescDefault', 'The React Framework for the Web. Used by some of the world\'s largest companies.');

  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <HoverCard variant={variant}>
        <HoverCardTrigger asChild>
          <a
            href="#"
            className="text-sm font-medium underline underline-offset-4"
          >
            {displayTrigger}
          </a>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">{displayTitle}</h4>
              <p className="text-sm text-muted-foreground">{displayDesc}</p>
              <div className="flex items-center pt-2">
                <span className="text-xs text-muted-foreground">
                  {t('hoverCardJoined', 'Joined December 2021')}
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
