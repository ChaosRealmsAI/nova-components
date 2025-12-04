'use client';

/**
 * Combobox Block
 *
 * 组合框组件，用于从大量选项中搜索和选择。
 *
 * Architecture Notes:
 * - Block 组件，依赖 Atoms: popover, button
 * - 内部使用 cmdk 实现命令面板功能
 *
 * 架构：
 * - L1 (功能层): 静态定义，保证组件功能正常
 * - L2 (主题层): 从 useTheme 获取，控制视觉风格
 * - L3 (实例层): 用户传入的 className/classNames
 *
 * 优先级: L3 > L2 > L1 (通过 twMerge 解决冲突)
 */

import * as React from 'react';
import { Command as CommandPrimitive } from 'cmdk';
import { Check, ChevronsUpDown, Search } from 'lucide-react';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

import { useTheme } from '@/lib/themes';
import { useI18n } from '@/lib/i18n/use-i18n';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/nova-ui/atmos/popover';
import { Button } from '@/components/nova-ui/atmos/button';

// ============================================================================
// 依赖声明
// ============================================================================

export const comboboxAtoms = ['popover', 'button'] as const;

// ============================================================================
// L1: 静态样式定义（功能层）
// ============================================================================

const comboboxBase = tv({
  slots: {
    trigger: 'justify-between',
    content: 'p-0',
    command: 'flex h-full w-full flex-col overflow-hidden rounded-[inherit]',
    inputWrapper: 'flex items-center px-3 border-b',
    searchIcon: 'mr-2 h-4 w-4 shrink-0 opacity-50',
    input: 'flex h-10 w-full bg-transparent py-3 text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 border-none ring-0 outline-none shadow-none focus:ring-0 focus:outline-none focus:shadow-none focus:border-none focus-visible:ring-0 focus-visible:outline-none focus-visible:shadow-none focus-visible:border-none',
    list: 'max-h-[300px] overflow-y-auto overflow-x-hidden',
    empty: 'py-6 text-center text-sm',
    group: 'overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium',
    item: 'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
    separator: '-mx-1 h-px',
    icon: 'ml-2 h-4 w-4 shrink-0 opacity-50',
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
// Types
// ============================================================================

export type ComboboxVariants = VariantProps<typeof comboboxBase>;
export type ComboboxSlots = 'trigger' | 'content' | 'command' | 'inputWrapper' | 'searchIcon' | 'input' | 'list' | 'empty' | 'group' | 'item' | 'separator' | 'icon';
export type ComboboxClassNames = Partial<Record<ComboboxSlots, string>>;

export interface ComboboxProps extends React.ComponentProps<typeof Popover> {}

export interface ComboboxTriggerProps extends Omit<React.ComponentProps<typeof Button>, 'classNames'> {
  classNames?: ComboboxClassNames;
}

export interface ComboboxContentProps extends React.ComponentProps<typeof PopoverContent> {
  classNames?: ComboboxClassNames;
}

export interface ComboboxInputProps extends React.ComponentProps<typeof CommandPrimitive.Input> {
  classNames?: ComboboxClassNames;
}

export interface ComboboxListProps extends React.ComponentProps<typeof CommandPrimitive.List> {
  classNames?: ComboboxClassNames;
}

export interface ComboboxEmptyProps extends React.ComponentProps<typeof CommandPrimitive.Empty> {
  classNames?: ComboboxClassNames;
}

export interface ComboboxGroupProps extends React.ComponentProps<typeof CommandPrimitive.Group> {
  classNames?: ComboboxClassNames;
}

export interface ComboboxItemProps extends React.ComponentProps<typeof CommandPrimitive.Item> {
  classNames?: ComboboxClassNames;
}

// ============================================================================
// Components
// ============================================================================

function Combobox(props: ComboboxProps) {
  return <Popover {...props} />;
}

function ComboboxTrigger({ className, classNames, children, ...props }: ComboboxTriggerProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Combobox;

  // L1: 功能层
  const base = comboboxBase();

  // L2: 主题层
  const themeStyles = React.useMemo(() => ({
    trigger: toClassString(themeConfig?.slots?.trigger),
    icon: toClassString(themeConfig?.slots?.icon),
  }), [themeConfig]);

  // 合并: L1 + L2 + L3
  const triggerClass = twMerge(base.trigger(), themeStyles.trigger, classNames?.trigger, className);
  const iconClass = twMerge(base.icon(), themeStyles.icon, classNames?.icon);

  return (
    <PopoverTrigger asChild>
      <Button
        variant="outline"
        role="combobox"
        className={triggerClass}
        {...props}
      >
        {children}
        <ChevronsUpDown className={iconClass} />
      </Button>
    </PopoverTrigger>
  );
}

function ComboboxContent({ className, classNames, children, ...props }: ComboboxContentProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Combobox;

  // L1: 功能层
  const base = comboboxBase();

  // L2: 主题层
  const themeStyles = React.useMemo(() => ({
    content: toClassString(themeConfig?.slots?.content),
    command: toClassString(themeConfig?.slots?.command),
  }), [themeConfig]);

  // 合并: L1 + L2 + L3
  const contentClass = twMerge(base.content(), themeStyles.content, classNames?.content, className);
  const commandClass = twMerge(base.command(), themeStyles.command, classNames?.command);

  return (
    <PopoverContent
      className={contentClass}
      {...props}
    >
      <CommandPrimitive className={commandClass}>
        {children}
      </CommandPrimitive>
    </PopoverContent>
  );
}

function ComboboxInput({ className, classNames, ...props }: ComboboxInputProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Combobox;

  // L1: 功能层
  const base = comboboxBase();

  // L2: 主题层
  const themeStyles = React.useMemo(() => ({
    inputWrapper: toClassString(themeConfig?.slots?.inputWrapper),
    searchIcon: toClassString(themeConfig?.slots?.searchIcon),
    input: toClassString(themeConfig?.slots?.input),
  }), [themeConfig]);

  // 合并: L1 + L2 + L3
  const inputWrapperClass = twMerge(base.inputWrapper(), themeStyles.inputWrapper, classNames?.inputWrapper);
  const searchIconClass = twMerge(base.searchIcon(), themeStyles.searchIcon, classNames?.searchIcon);
  const inputClass = twMerge(base.input(), themeStyles.input, classNames?.input, className);

  return (
    <div className={inputWrapperClass} data-slot="combobox-input-wrapper">
      <Search className={searchIconClass} />
      <CommandPrimitive.Input className={inputClass} {...props} />
    </div>
  );
}

function ComboboxList({ className, classNames, ...props }: ComboboxListProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Combobox;

  // L1: 功能层
  const base = comboboxBase();

  // L2: 主题层
  const themeStyles = React.useMemo(() => ({
    list: toClassString(themeConfig?.slots?.list),
  }), [themeConfig]);

  // 合并: L1 + L2 + L3
  const listClass = twMerge(base.list(), themeStyles.list, classNames?.list, className);

  return (
    <CommandPrimitive.List className={listClass} {...props} />
  );
}

function ComboboxEmpty({ className, classNames, ...props }: ComboboxEmptyProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Combobox;

  // L1: 功能层
  const base = comboboxBase();

  // L2: 主题层
  const themeStyles = React.useMemo(() => ({
    empty: toClassString(themeConfig?.slots?.empty),
  }), [themeConfig]);

  // 合并: L1 + L2 + L3
  const emptyClass = twMerge(base.empty(), themeStyles.empty, classNames?.empty, className);

  return (
    <CommandPrimitive.Empty className={emptyClass} {...props} />
  );
}

function ComboboxGroup({ className, classNames, ...props }: ComboboxGroupProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Combobox;

  // L1: 功能层
  const base = comboboxBase();

  // L2: 主题层
  const themeStyles = React.useMemo(() => ({
    group: toClassString(themeConfig?.slots?.group),
  }), [themeConfig]);

  // 合并: L1 + L2 + L3
  const groupClass = twMerge(base.group(), themeStyles.group, classNames?.group, className);

  return (
    <CommandPrimitive.Group className={groupClass} {...props} />
  );
}

function ComboboxItem({ className, classNames, children, ...props }: ComboboxItemProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Combobox;

  // L1: 功能层
  const base = comboboxBase();

  // L2: 主题层
  const themeStyles = React.useMemo(() => ({
    item: toClassString(themeConfig?.slots?.item),
  }), [themeConfig]);

  // 合并: L1 + L2 + L3
  const itemClass = twMerge(base.item(), themeStyles.item, classNames?.item, className);

  return (
    <CommandPrimitive.Item className={itemClass} {...props}>
      {children}
    </CommandPrimitive.Item>
  );
}

// ============================================================================
// Demo Component
// ============================================================================

export interface ComboboxDemoProps {
  placeholder?: string;
  emptyMessage?: string;
  groupHeading?: string;
  options?: { value: string; label: string }[];
}

function ComboboxDemo({
  placeholder,
  emptyMessage,
  groupHeading,
  options = [
    { value: "next.js", label: "Next.js" },
    { value: "sveltekit", label: "SvelteKit" },
    { value: "nuxt.js", label: "Nuxt.js" },
    { value: "remix", label: "Remix" },
    { value: "astro", label: "Astro" },
  ],
}: ComboboxDemoProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const { t } = useI18n();

  const displayPlaceholder = placeholder || t('comboboxSelectFramework', 'Select framework...');
  const displayEmptyMessage = emptyMessage || t('comboboxNoFrameworkFound', 'No framework found.');
  const displayGroupHeading = groupHeading || t('comboboxFrameworks', 'Frameworks');

  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <Combobox open={open} onOpenChange={setOpen}>
        <ComboboxTrigger className="w-[200px]">
          {value
            ? options.find((option) => option.value === value)?.label
            : displayPlaceholder}
        </ComboboxTrigger>
        <ComboboxContent className="w-[200px]">
          <ComboboxInput placeholder={displayPlaceholder} />
          <ComboboxList>
            <ComboboxEmpty>{displayEmptyMessage}</ComboboxEmpty>
            <ComboboxGroup heading={displayGroupHeading}>
              {options.map((option) => (
                <ComboboxItem
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <span className={twMerge("mr-2 flex h-4 w-4 items-center justify-center")}>
                    <Check
                      className={twMerge(
                        "h-4 w-4",
                        value === option.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </span>
                  {option.label}
                </ComboboxItem>
              ))}
            </ComboboxGroup>
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}

export {
  Combobox,
  ComboboxTrigger,
  ComboboxContent,
  ComboboxInput,
  ComboboxList,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxItem,
  ComboboxDemo,
};
