'use client';

import * as React from 'react';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes';
import { useI18n } from '@/lib/i18n/use-i18n';
import { ChevronDown } from 'lucide-react';

/**
 * Nova Collapsible
 *
 * Architecture Notes:
 * - L1 (Functional): Layout, animations, interactive states.
 * - L2 (Thematic): Colors, borders, padding (via variants).
 * - L3 (Instance): User overrides.
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

const collapsibleBase = tv({
  slots: {
    base: 'w-full',
    trigger: 'flex items-center justify-between w-full cursor-pointer select-none',
    content: 'overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down',
  },
});

// ============================================================================
// Types
// ============================================================================

export type CollapsibleVariant = 'default' | 'bordered' | 'ghost';

export interface CollapsibleProps
  extends React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root> {
  classNames?: { base?: string };
  variant?: CollapsibleVariant;
}

export interface CollapsibleTriggerProps
  extends React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Trigger> {
  classNames?: { trigger?: string };
  variant?: CollapsibleVariant;
}

export interface CollapsibleContentProps
  extends React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content> {
  classNames?: { content?: string };
  variant?: CollapsibleVariant;
}

export interface CollapsibleDemoProps extends CollapsibleProps {}

// ============================================================================
// Context for Variant Propagation
// ============================================================================

const CollapsibleContext = React.createContext<{ variant: CollapsibleVariant }>({ variant: 'default' });

// ============================================================================
// Components
// ============================================================================

const Collapsible = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Root>,
  CollapsibleProps
>(({ className, classNames, variant = 'default', ...props }, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Collapsible;

  // L1
  const base = collapsibleBase();

  // L2
  const themeBase = toClassString(themeConfig?.slots?.base);
  const variantBase = toClassString(themeConfig?.variants?.variant?.[variant]?.base);

  // Merge
  const rootClass = twMerge(base.base(), themeBase, variantBase, classNames?.base, className);

  return (
    <CollapsibleContext.Provider value={{ variant }}>
      <CollapsiblePrimitive.Root
        ref={ref}
        data-slot="collapsible"
        className={rootClass}
        {...props}
      />
    </CollapsibleContext.Provider>
  );
});
Collapsible.displayName = 'Collapsible';

const CollapsibleTrigger = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Trigger>,
  CollapsibleTriggerProps
>(({ className, classNames, variant: propVariant, ...props }, ref) => {
  const context = React.useContext(CollapsibleContext);
  const variant = propVariant || context.variant;
  
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Collapsible;

  const base = collapsibleBase();
  const themeTrigger = toClassString(themeConfig?.slots?.trigger);
  const variantTrigger = toClassString(themeConfig?.variants?.variant?.[variant]?.trigger);

  const triggerClass = twMerge(base.trigger(), themeTrigger, variantTrigger, classNames?.trigger, className);

  return (
    <CollapsiblePrimitive.Trigger
      ref={ref}
      data-slot="collapsible-trigger"
      className={triggerClass}
      {...props}
    />
  );
});
CollapsibleTrigger.displayName = 'CollapsibleTrigger';

const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Content>,
  CollapsibleContentProps
>(({ className, classNames, variant: propVariant, ...props }, ref) => {
  const context = React.useContext(CollapsibleContext);
  const variant = propVariant || context.variant;

  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Collapsible;

  const base = collapsibleBase();
  const themeContent = toClassString(themeConfig?.slots?.content);
  const variantContent = toClassString(themeConfig?.variants?.variant?.[variant]?.content);

  const contentClass = twMerge(base.content(), themeContent, variantContent, classNames?.content, className);

  return (
    <CollapsiblePrimitive.Content
      ref={ref}
      data-slot="collapsible-content"
      className={contentClass}
      {...props}
    />
  );
});
CollapsibleContent.displayName = 'CollapsibleContent';

// ============================================================================
// Demo
// ============================================================================

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
      <CollapsibleTrigger className="group">
        <span className="text-sm font-medium">{t('collapsibleClickToExpand', 'Click to expand')}</span>
        <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="pt-2 text-sm text-muted-foreground">
          {t('collapsibleContentDescription', 'This is the collapsible content area. It can contain any content you want.')}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
});
CollapsibleDemo.displayName = 'CollapsibleDemo';

export { Collapsible, CollapsibleTrigger, CollapsibleContent, CollapsibleDemo };