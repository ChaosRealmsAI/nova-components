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
 *
 * 架构：
 * - L1 (功能层): 静态定义，保证组件功能正常
 * - L2 (主题层): 从 useTheme 获取，控制视觉风格
 * - L3 (实例层): 用户传入的 className/classNames
 *
 * 优先级: L3 > L2 > L1 (通过 twMerge 解决冲突)
 */

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from 'lucide-react';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes/use-theme';
import { useI18n } from '@/lib/i18n/use-i18n';

// ============================================================================
// 依赖声明（用于导出时收集）
// ============================================================================

export const accordionAtoms = [] as const;

// ============================================================================
// L1: 静态样式定义（功能层）
// ============================================================================

const accordionBase = tv({
  slots: {
    root: 'w-full',
    item: 'border-b',
    header: 'flex',
    trigger: 'flex flex-1 items-center justify-between font-medium transition-all [&[data-state=open]>svg]:rotate-180',
    chevron: 'shrink-0 transition-transform duration-200',
    content: 'overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
    contentInner: 'pb-4 pt-0',
  },
  variants: {
    variant: {
      default: {},
      bordered: {
        root: 'border rounded-lg',
        item: 'border-b last:border-b-0 px-4',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

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

interface AccordionContextValue {
  variant: AccordionVariants['variant'];
}

const AccordionContext = React.createContext<AccordionContextValue>({
  variant: 'default',
});

const useAccordionContext = () => React.useContext(AccordionContext);

// ============================================================================
// Types
// ============================================================================

export type AccordionVariants = VariantProps<typeof accordionBase>;
export type AccordionSlots = keyof typeof accordionBase.slots;
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
  
  // L1
  const base = accordionBase({ variant });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.root);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.root);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, variant]);

  return (
    <AccordionContext.Provider value={{ variant }}>
      <AccordionPrimitive.Root
        data-slot="accordion"
        className={twMerge(
          base.root(),
          themeStyles.slot,
          themeStyles.variant,
          classNames?.root,
          className
        )}
        {...props}
      />
    </AccordionContext.Provider>
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
  const { variant } = useAccordionContext();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Accordion;
  
  // L1
  const base = accordionBase({ variant });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.item);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.item);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, variant]);

  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={twMerge(
        base.item(),
        themeStyles.slot,
        themeStyles.variant,
        classNames?.item,
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
  const { variant } = useAccordionContext();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Accordion;
  
  // L1
  const base = accordionBase({ variant });

  // L2
  const themeStyles = React.useMemo(() => {
    const headerSlot = toClassString(themeConfig?.slots?.header);
    const triggerSlot = toClassString(themeConfig?.slots?.trigger);
    const chevronSlot = toClassString(themeConfig?.slots?.chevron);
    
    // @ts-ignore
    const variantHeader = toClassString(themeConfig?.variants?.variant?.[variant]?.header);
    // @ts-ignore
    const variantTrigger = toClassString(themeConfig?.variants?.variant?.[variant]?.trigger);
    // @ts-ignore
    const variantChevron = toClassString(themeConfig?.variants?.variant?.[variant]?.chevron);

    return { 
      header: { slot: headerSlot, variant: variantHeader },
      trigger: { slot: triggerSlot, variant: variantTrigger },
      chevron: { slot: chevronSlot, variant: variantChevron },
    };
  }, [themeConfig, variant]);

  return (
    <AccordionPrimitive.Header
      data-slot="accordion-header"
      className={twMerge(
        base.header(),
        themeStyles.header.slot,
        themeStyles.header.variant
      )}
    >
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={twMerge(
          base.trigger(),
          themeStyles.trigger.slot,
          themeStyles.trigger.variant,
          classNames?.trigger,
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon
          className={twMerge(
            base.chevron(),
            themeStyles.chevron.slot,
            themeStyles.chevron.variant,
            classNames?.chevron
          )}
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
  const { variant } = useAccordionContext();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Accordion;
  
  // L1
  const base = accordionBase({ variant });

  // L2
  const themeStyles = React.useMemo(() => {
    const contentSlot = toClassString(themeConfig?.slots?.content);
    const innerSlot = toClassString(themeConfig?.slots?.contentInner);
    
    // @ts-ignore
    const variantContent = toClassString(themeConfig?.variants?.variant?.[variant]?.content);
    // @ts-ignore
    const variantInner = toClassString(themeConfig?.variants?.variant?.[variant]?.contentInner);

    return { 
      content: { slot: contentSlot, variant: variantContent },
      inner: { slot: innerSlot, variant: variantInner },
    };
  }, [themeConfig, variant]);

  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={twMerge(
        base.content(),
        themeStyles.content.slot,
        themeStyles.content.variant,
        classNames?.content,
        className
      )}
      {...props}
    >
      <div className={twMerge(
        base.contentInner(),
        themeStyles.inner.slot,
        themeStyles.inner.variant,
        classNames?.contentInner
      )}>
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