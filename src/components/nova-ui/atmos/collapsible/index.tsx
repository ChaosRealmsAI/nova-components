'use client';

import * as React from 'react';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/themes';
import { useI18n } from '@/lib/i18n/use-i18n';
import { collapsibleBaseConfig } from './collapsible.config';
import { ChevronDown } from 'lucide-react';

/**
 * Nova Collapsible
 *
 * Architecture Notes:
 * - Uses `tailwind-variants` with slots for granular theme control.
 * - Exports `collapsibleBaseConfig` for themes to extend.
 * - Supports `classNames` prop for slot-specific overrides.
 * - ADR-006: 通过 useTheme() 获取主题配置，支持运行时主题切换
 */

export { collapsibleBaseConfig };

export type CollapsibleVariants = VariantProps<ReturnType<typeof tv>>;
export type CollapsibleSlots = keyof typeof collapsibleBaseConfig.slots;
export type CollapsibleClassNames = Partial<Record<CollapsibleSlots, string>>;

// Shared styles hook
const useCollapsibleStyles = (variant?: CollapsibleVariants['variant']) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Collapsible;
  const styles = tv({
    extend: collapsibleBaseConfig,
    ...(themeConfig || {}),
  });
  return styles({ variant });
};

export interface CollapsibleProps
  extends React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root>,
    CollapsibleVariants {
  classNames?: CollapsibleClassNames;
}

const Collapsible = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Root>,
  CollapsibleProps
>(({ className, classNames, variant, ...props }, ref) => {
  const styles = useCollapsibleStyles(variant);
  const baseClass = classNames?.base ? classNames.base : styles.base();

  return (
    <CollapsiblePrimitive.Root
      ref={ref}
      data-slot="collapsible"
      className={cn(baseClass, className)}
      {...props}
    />
  );
});
Collapsible.displayName = 'Collapsible';

export interface CollapsibleTriggerProps
  extends React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Trigger> {
  classNames?: CollapsibleClassNames;
  variant?: CollapsibleVariants['variant'];
}

const CollapsibleTrigger = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Trigger>,
  CollapsibleTriggerProps
>(({ className, classNames, variant, ...props }, ref) => {
  const styles = useCollapsibleStyles(variant);
  const triggerClass = classNames?.trigger ? classNames.trigger : styles.trigger();

  return (
    <CollapsiblePrimitive.Trigger
      ref={ref}
      data-slot="collapsible-trigger"
      className={cn(triggerClass, className)}
      {...props}
    />
  );
});
CollapsibleTrigger.displayName = 'CollapsibleTrigger';

export interface CollapsibleContentProps
  extends React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content> {
  classNames?: CollapsibleClassNames;
  variant?: CollapsibleVariants['variant'];
}

const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Content>,
  CollapsibleContentProps
>(({ className, classNames, variant, ...props }, ref) => {
  const styles = useCollapsibleStyles(variant);
  const contentClass = classNames?.content ? classNames.content : styles.content();

  return (
    <CollapsiblePrimitive.Content
      ref={ref}
      data-slot="collapsible-content"
      className={cn(contentClass, className)}
      {...props}
    />
  );
});
CollapsibleContent.displayName = 'CollapsibleContent';

// Demo component for canvas display
export interface CollapsibleDemoProps extends CollapsibleProps {}

const CollapsibleDemo = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Root>,
  CollapsibleDemoProps
>((props, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { t } = useI18n();

  return (
    <Collapsible
      ref={ref}
      open={isOpen}
      onOpenChange={setIsOpen}
      {...props}
    >
      <CollapsibleTrigger variant={props.variant} className="group">
        <span className="text-sm font-medium">{t('collapsibleClickToExpand', 'Click to expand')}</span>
        <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
      </CollapsibleTrigger>
      <CollapsibleContent variant={props.variant}>
        <div className="pt-2 text-sm text-muted-foreground">
          {t('collapsibleContentDescription', 'This is the collapsible content area. It can contain any content you want.')}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
});
CollapsibleDemo.displayName = 'CollapsibleDemo';

export { Collapsible, CollapsibleTrigger, CollapsibleContent, CollapsibleDemo };
