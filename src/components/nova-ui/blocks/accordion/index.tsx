'use client';

/**
 * Accordion Block
 *
 * 手风琴组件，用于展示可折叠的内容面板。
 *
 * Architecture Notes:
 * - Block 组件，基于 @radix-ui/react-accordion
 * - 不支持用户可配特效
 * - 提供 default 和 bordered 两种样式变体
 */

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from 'lucide-react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/themes/use-theme';
import { useI18n } from '@/lib/i18n/use-i18n';
import { accordionBaseConfig } from './accordion.config';

// ============================================================================
// 依赖声明（用于导出时收集）
// ============================================================================

export const accordionAtoms = [] as const;

export { accordionBaseConfig };

// ============================================================================
// Styles
// ============================================================================

const accordion = tv(accordionBaseConfig);

// ============================================================================
// Types
// ============================================================================

export type AccordionVariants = VariantProps<typeof accordion>;
export type AccordionSlots = keyof typeof accordionBaseConfig.slots;
export type AccordionClassNames = Partial<Record<AccordionSlots, string>>;

export type AccordionSingleProps = AccordionPrimitive.AccordionSingleProps & AccordionVariants & {
  classNames?: AccordionClassNames;
};

export type AccordionMultipleProps = AccordionPrimitive.AccordionMultipleProps & AccordionVariants & {
  classNames?: AccordionClassNames;
};

export type AccordionProps = AccordionSingleProps | AccordionMultipleProps;

export interface AccordionItemProps
  extends React.ComponentProps<typeof AccordionPrimitive.Item> {
  classNames?: AccordionClassNames;
}

export interface AccordionTriggerProps
  extends React.ComponentProps<typeof AccordionPrimitive.Trigger> {
  classNames?: AccordionClassNames;
}

export interface AccordionContentProps
  extends React.ComponentProps<typeof AccordionPrimitive.Content> {
  classNames?: AccordionClassNames;
}

export interface AccordionItemData {
  value: string;
  trigger: string;
  triggerKey?: string;
  content: string;
  contentKey?: string;
  disabled?: boolean;
}

export interface AccordionDemoProps extends AccordionVariants {
  type?: 'single' | 'multiple';
  collapsible?: boolean;
  items?: AccordionItemData[];
}

// ============================================================================
// Accordion Root
// ============================================================================

function Accordion({
  className,
  classNames,
  variant = 'default',
  ...props
}: AccordionProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Accordion;
  const styles = accordion({ variant });

  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn(
        classNames?.root || styles.root(),
        themeConfig?.slots?.root,
        className
      )}
      {...props}
    />
  );
}

// ============================================================================
// Accordion Item
// ============================================================================

function AccordionItem({
  className,
  classNames,
  ...props
}: AccordionItemProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Accordion;
  const styles = accordion({ variant: 'default' });

  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        classNames?.item || styles.item(),
        themeConfig?.slots?.item,
        className
      )}
      {...props}
    />
  );
}

// ============================================================================
// Accordion Trigger
// ============================================================================

function AccordionTrigger({
  className,
  classNames,
  children,
  ...props
}: AccordionTriggerProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Accordion;
  const styles = accordion({ variant: 'default' });

  return (
    <AccordionPrimitive.Header
      data-slot="accordion-header"
      className={cn(styles.header(), themeConfig?.slots?.header)}
    >
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          classNames?.trigger || styles.trigger(),
          themeConfig?.slots?.trigger,
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon
          className={cn(styles.chevron(), themeConfig?.slots?.chevron)}
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

// ============================================================================
// Accordion Content
// ============================================================================

function AccordionContent({
  className,
  classNames,
  children,
  ...props
}: AccordionContentProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Accordion;
  const styles = accordion({ variant: 'default' });

  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={cn(
        classNames?.content || styles.content(),
        themeConfig?.slots?.content,
        className
      )}
      {...props}
    >
      <div className={cn(styles.contentInner(), themeConfig?.slots?.contentInner)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

// ============================================================================
// Accordion Demo (用于画布展示)
// ============================================================================

const defaultItems: AccordionItemData[] = [
  {
    value: 'item-1',
    trigger: 'Is it accessible?',
    triggerKey: 'accordionItem1Trigger',
    content: 'Yes. It adheres to the WAI-ARIA design pattern.',
    contentKey: 'accordionItem1Content',
  },
  {
    value: 'item-2',
    trigger: 'Is it styled?',
    triggerKey: 'accordionItem2Trigger',
    content: 'Yes. It comes with default styles that match your theme.',
    contentKey: 'accordionItem2Content',
  },
  {
    value: 'item-3',
    trigger: 'Is it animated?',
    triggerKey: 'accordionItem3Trigger',
    content: 'Yes. It has smooth open and close animations.',
    contentKey: 'accordionItem3Content',
  },
];

function AccordionDemo({
  variant = 'default',
  type = 'single',
  collapsible = true,
  items = defaultItems,
}: AccordionDemoProps) {
  const { t } = useI18n();

  // Handle type-specific props
  const accordionProps = type === 'single'
    ? { type: 'single' as const, collapsible, defaultValue: items[0]?.value }
    : { type: 'multiple' as const, defaultValue: [items[0]?.value] };

  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <Accordion variant={variant} className="w-full max-w-md" {...accordionProps}>
        {items.map((item) => (
          <AccordionItem key={item.value} value={item.value} disabled={item.disabled}>
            <AccordionTrigger>
              {item.triggerKey ? t(item.triggerKey, item.trigger) : item.trigger}
            </AccordionTrigger>
            <AccordionContent>
              {item.contentKey ? t(item.contentKey, item.content) : item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

// ============================================================================
// Exports
// ============================================================================

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AccordionDemo,
};
