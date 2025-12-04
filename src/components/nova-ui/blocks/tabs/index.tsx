'use client';

/**
 * Tabs Block
 *
 * 标签页切换组件，用于在多个面板之间切换显示内容。
 *
 * Architecture Notes:
 * - Block 组件，依赖 Atoms: button（TabsTrigger 在样式上类似 Button）
 * - 不支持用户可配特效（通过内部 Atoms 获得）
 * - 提供 default 和 underline 两种样式变体
 *
 * 架构：
 * - L1 (功能层): 静态定义，保证组件功能正常
 * - L2 (主题层): 从 useTheme 获取，控制视觉风格
 * - L3 (实例层): 用户传入的 className/classNames
 *
 * 优先级: L3 > L2 > L1 (通过 twMerge 解决冲突)
 */

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes';

// ============================================================================
// 依赖声明（用于导出时收集）
// ============================================================================

export const tabsAtoms = ['button'] as const;

// ============================================================================
// L1: 静态样式定义（功能层）
// ============================================================================

const tabsBase = tv({
  slots: {
    root: 'flex flex-col',
    list: 'inline-flex items-center justify-center',
    trigger: 'inline-flex items-center justify-center whitespace-nowrap disabled:pointer-events-none disabled:opacity-50',
    content: 'outline-none',
  },
  variants: {
    variant: {
      default: {
        trigger: 'transition-all',
      },
      underline: {
        list: 'w-full justify-start rounded-none bg-transparent p-0',
        trigger: 'rounded-none bg-transparent shadow-none transition-none data-[state=active]:bg-transparent data-[state=active]:shadow-none',
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

interface TabsContextValue {
  variant: TabsVariants['variant'];
}

const TabsContext = React.createContext<TabsContextValue>({
  variant: 'default',
});

const useTabsContext = () => React.useContext(TabsContext);

// ============================================================================
// Types
// ============================================================================

export type TabsVariants = VariantProps<typeof tabsBase>;
export type TabsSlots = keyof typeof tabsBase.slots;
export type TabsClassNames = Partial<Record<TabsSlots, string>>;

export interface TabsProps
  extends React.ComponentProps<typeof TabsPrimitive.Root>,
    TabsVariants {
  classNames?: TabsClassNames;
}

export interface TabsListProps
  extends React.ComponentProps<typeof TabsPrimitive.List> {
  variant?: TabsVariants['variant'];
  classNames?: TabsClassNames;
}

export interface TabsTriggerProps
  extends React.ComponentProps<typeof TabsPrimitive.Trigger> {
  variant?: TabsVariants['variant'];
  classNames?: TabsClassNames;
}

export interface TabsContentProps
  extends React.ComponentProps<typeof TabsPrimitive.Content> {
  classNames?: TabsClassNames;
}

export interface TabItem {
  value: string;
  label: string;
  labelKey?: string; // i18n key for label
  content: React.ReactNode;
  contentKey?: string; // i18n key for content
  disabled?: boolean;
}

export interface TabsDemoProps extends TabsVariants {
  items?: TabItem[];
}

// ============================================================================
// Tabs Root
// ============================================================================

function Tabs({
  className,
  classNames,
  variant = 'default',
  ...props
}: TabsProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Tabs;
  
  // L1: 功能层
  const base = tabsBase({ variant });

  // L2: 主题层
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.root);
    // @ts-ignore - Theme config types might be loose
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.root);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, variant]);

  // L3: 实例层 (className, classNames)

  return (
    <TabsContext.Provider value={{ variant }}>
      <TabsPrimitive.Root
        data-slot="tabs"
        data-variant={variant}
        className={twMerge(
          base.root(),
          themeStyles.slot,
          themeStyles.variant,
          classNames?.root,
          className
        )}
        {...props}
      />
    </TabsContext.Provider>
  );
}

// ============================================================================
// Tabs List
// ============================================================================

function TabsList({
  className,
  classNames,
  variant: propVariant,
  ...props
}: TabsListProps) {
  const context = useTabsContext();
  const variant = propVariant || context.variant || 'default';
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Tabs;
  
  // L1
  const base = tabsBase({ variant });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.list);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.list);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, variant]);

  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={twMerge(
        base.list(),
        themeStyles.slot,
        themeStyles.variant,
        classNames?.list,
        className
      )}
      {...props}
    />
  );
}

// ============================================================================
// Tabs Trigger
// ============================================================================

function TabsTrigger({
  className,
  classNames,
  variant: propVariant,
  ...props
}: TabsTriggerProps) {
  const context = useTabsContext();
  const variant = propVariant || context.variant || 'default';
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Tabs;
  
  // L1
  const base = tabsBase({ variant });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.trigger);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.trigger);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, variant]);

  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={twMerge(
        base.trigger(),
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
// Tabs Content
// ============================================================================

function TabsContent({
  className,
  classNames,
  ...props
}: TabsContentProps) {
  const { variant } = useTabsContext();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Tabs;
  
  // L1
  const base = tabsBase({ variant });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.content);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.content);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, variant]);

  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={twMerge(
        base.content(),
        themeStyles.slot,
        themeStyles.variant,
        classNames?.content,
        className
      )}
      {...props}
    />
  );
}

// ============================================================================
// Tabs Demo (用于画布展示)
// ============================================================================

const defaultItems: TabItem[] = [
  {
    value: 'tab1',
    label: 'Account',
    content: 'Make changes to your account here.',
  },
  {
    value: 'tab2',
    label: 'Password',
    content: 'Change your password here.',
  },
  {
    value: 'tab3',
    label: 'Settings',
    content: 'Manage your settings here.',
  },
];

function TabsDemo({
  variant = 'default',
  items = defaultItems,
}: TabsDemoProps) {
  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <Tabs defaultValue={items[0]?.value} variant={variant} className="w-full max-w-md">
        <TabsList>
          {items.map((item) => (
            <TabsTrigger
              key={item.value}
              value={item.value}
              disabled={item.disabled}
            >
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {items.map((item) => (
          <TabsContent key={item.value} value={item.value} className="p-4">
            <p className="text-sm text-muted-foreground">{item.content}</p>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

// ============================================================================
// Exports
// ============================================================================

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsDemo,
};