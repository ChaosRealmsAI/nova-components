'use client';

/**
 * Combobox Block
 *
 * 组合框组件，用于从大量选项中搜索和选择。
 *
 * Architecture Notes:
 * - Block 组件，依赖 Atoms: popover, button
 * - 内部使用 cmdk 实现命令面板功能
 */

import * as React from 'react';
import { Command as CommandPrimitive } from 'cmdk';
import { Check, ChevronsUpDown, Search } from 'lucide-react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/themes/use-theme';
import { useI18n } from '@/lib/i18n/use-i18n';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/nova-ui/atmos/popover';
import { Button } from '@/components/nova-ui/atmos/button';
import { comboboxBaseConfig } from './combobox.config';

// ============================================================================
// 依赖声明
// ============================================================================

export const comboboxAtoms = ['popover', 'button'] as const;

export { comboboxBaseConfig };

// ============================================================================
// Styles
// ============================================================================

const combobox = tv(comboboxBaseConfig);

// ============================================================================
// Types
// ============================================================================

export type ComboboxVariants = VariantProps<typeof combobox>;
export type ComboboxSlots = keyof typeof comboboxBaseConfig.slots;
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
  const styles = combobox({});

  return (
    <PopoverTrigger asChild>
      <Button
        variant="outline"
        role="combobox"
        className={cn(
          styles.trigger(),
          themeConfig?.slots?.trigger,
          classNames?.trigger,
          className
        )}
        {...props}
      >
        {children}
        <ChevronsUpDown className={cn(styles.icon(), themeConfig?.slots?.icon)} />
      </Button>
    </PopoverTrigger>
  );
}

function ComboboxContent({ className, classNames, children, ...props }: ComboboxContentProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Combobox;
  const styles = combobox({});

  return (
    <PopoverContent
      className={cn(styles.content(), themeConfig?.slots?.content, classNames?.content, className)}
      {...props}
    >
      <CommandPrimitive
        className={cn(styles.command(), themeConfig?.slots?.command, classNames?.command)}
      >
        {children}
      </CommandPrimitive>
    </PopoverContent>
  );
}

function ComboboxInput({ className, classNames, ...props }: ComboboxInputProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Combobox;
  const styles = combobox({});

  return (
    <div
      className={cn(
        styles.inputWrapper(),
        themeConfig?.slots?.inputWrapper,
        classNames?.inputWrapper
      )}
      data-slot="combobox-input-wrapper"
    >
      <Search className={cn(styles.searchIcon(), themeConfig?.slots?.searchIcon)} />
      <CommandPrimitive.Input
        className={cn(
          styles.input(),
          themeConfig?.slots?.input,
          classNames?.input,
          className
        )}
        {...props}
      />
    </div>
  );
}

function ComboboxList({ className, classNames, ...props }: ComboboxListProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Combobox;
  const styles = combobox({});

  return (
    <CommandPrimitive.List
      className={cn(styles.list(), themeConfig?.slots?.list, classNames?.list, className)}
      {...props}
    />
  );
}

function ComboboxEmpty({ className, classNames, ...props }: ComboboxEmptyProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Combobox;
  const styles = combobox({});

  return (
    <CommandPrimitive.Empty
      className={cn(styles.empty(), themeConfig?.slots?.empty, classNames?.empty, className)}
      {...props}
    />
  );
}

function ComboboxGroup({ className, classNames, ...props }: ComboboxGroupProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Combobox;
  const styles = combobox({});

  return (
    <CommandPrimitive.Group
      className={cn(styles.group(), themeConfig?.slots?.group, classNames?.group, className)}
      {...props}
    />
  );
}

function ComboboxItem({ className, classNames, children, ...props }: ComboboxItemProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Combobox;
  const styles = combobox({});

  return (
    <CommandPrimitive.Item
      className={cn(styles.item(), themeConfig?.slots?.item, classNames?.item, className)}
      {...props}
    >
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
                  <span className={cn("mr-2 flex h-4 w-4 items-center justify-center")}>
                    <Check
                      className={cn(
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
