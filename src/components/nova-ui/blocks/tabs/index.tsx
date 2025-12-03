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
 */

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/themes/use-theme';
import { tabsBaseConfig } from './tabs.config';

// ============================================================================
// 依赖声明（用于导出时收集）
// ============================================================================

export const tabsAtoms = ['button'] as const;

export { tabsBaseConfig };

// ============================================================================
// Styles
// ============================================================================

const tabs = tv(tabsBaseConfig);

// ============================================================================
// Types
// ============================================================================

export type TabsVariants = VariantProps<typeof tabs>;
export type TabsSlots = keyof typeof tabsBaseConfig.slots;
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
  const tabsThemeConfig = currentTheme?.components?.Tabs;
  const styles = tabs({ variant });

  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn(
        classNames?.root || styles.root(),
        tabsThemeConfig?.slots?.root,
        className
      )}
      {...props}
    />
  );
}

// ============================================================================
// Tabs List
// ============================================================================

function TabsList({
  className,
  classNames,
  variant = 'default',
  ...props
}: TabsListProps) {
  const { currentTheme } = useTheme();
  const tabsThemeConfig = currentTheme?.components?.Tabs;
  const styles = tabs({ variant });

  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        classNames?.list || styles.list(),
        tabsThemeConfig?.slots?.list,
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
  variant = 'default',
  ...props
}: TabsTriggerProps) {
  const { currentTheme } = useTheme();
  const tabsThemeConfig = currentTheme?.components?.Tabs;
  const styles = tabs({ variant });

  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        classNames?.trigger || styles.trigger(),
        tabsThemeConfig?.slots?.trigger,
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
  const { currentTheme } = useTheme();
  const tabsThemeConfig = currentTheme?.components?.Tabs;
  const styles = tabs({ variant: 'default' });

  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn(
        classNames?.content || styles.content(),
        tabsThemeConfig?.slots?.content,
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
        <TabsList variant={variant}>
          {items.map((item) => (
            <TabsTrigger
              key={item.value}
              value={item.value}
              variant={variant}
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
