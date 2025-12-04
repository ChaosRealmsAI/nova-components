'use client';

/**
 * Command Block
 *
 * 命令面板组件，用于快速搜索和执行命令
 *
 * Architecture Notes:
 * - Block 组件，依赖 cmdk 库
 * - 不支持用户可配特效（Block 级别）
 * - 提供搜索、分组、快捷键显示等功能
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
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes';
import { Search } from 'lucide-react';

// ============================================================================
// 依赖声明（用于导出时收集）
// ============================================================================

export const commandAtoms = [] as const;

// ============================================================================
// L1: 静态样式定义（功能层）
// ============================================================================

const commandBase = tv({
  slots: {
    root: 'flex h-full w-full flex-col overflow-hidden',
    inputWrapper: 'flex items-center gap-2 border-b px-3',
    input: 'flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
    list: 'max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto',
    empty: 'py-6 text-center text-sm',
    group: 'overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium',
    separator: '-mx-1 h-px',
    item: 'relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
    shortcut: 'ml-auto text-xs tracking-widest',
  },
  variants: {
    variant: {
      default: {},
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
// Types
// ============================================================================

export type CommandVariants = VariantProps<typeof commandBase>;
export type CommandSlots = keyof typeof commandBase.slots;
export type CommandClassNames = Partial<Record<CommandSlots, string>>;

export interface CommandProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive>,
    CommandVariants {
  classNames?: CommandClassNames;
}

export interface CommandInputProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input> {
  classNames?: CommandClassNames;
}

export interface CommandListProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.List> {
  classNames?: CommandClassNames;
}

export interface CommandEmptyProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty> {
  classNames?: CommandClassNames;
}

export interface CommandGroupProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group> {
  classNames?: CommandClassNames;
}

export interface CommandSeparatorProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator> {
  classNames?: CommandClassNames;
}

export interface CommandItemProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item> {
  classNames?: CommandClassNames;
}

export interface CommandShortcutProps
  extends React.ComponentPropsWithoutRef<'span'> {
  classNames?: CommandClassNames;
}

export interface CommandDemoProps extends CommandVariants {}

// ============================================================================
// Command Root
// ============================================================================

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  CommandProps
>(({ className, classNames, variant = 'default', ...props }, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Command;

  // L1: 功能层
  const base = commandBase({ variant });

  // L2: 主题层
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.root);
    // @ts-ignore - Theme config types might be loose
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.root);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, variant]);

  // L3: 实例层 (className, classNames)

  return (
    <CommandPrimitive
      ref={ref}
      data-slot="command"
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
  );
});
Command.displayName = 'Command';

// ============================================================================
// Command Input
// ============================================================================

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  CommandInputProps
>(({ className, classNames, ...props }, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Command;

  // L1
  const base = commandBase({});

  // L2
  const themeStyles = React.useMemo(() => ({
    wrapper: toClassString(themeConfig?.slots?.inputWrapper),
    input: toClassString(themeConfig?.slots?.input),
  }), [themeConfig]);

  return (
    <div
      data-slot="command-input-wrapper"
      className={twMerge(
        base.inputWrapper(),
        themeStyles.wrapper,
        classNames?.inputWrapper
      )}
    >
      <Search className="size-4 shrink-0 opacity-50" />
      <CommandPrimitive.Input
        ref={ref}
        data-slot="command-input"
        className={twMerge(
          base.input(),
          themeStyles.input,
          classNames?.input,
          className
        )}
        {...props}
      />
    </div>
  );
});
CommandInput.displayName = 'CommandInput';

// ============================================================================
// Command List
// ============================================================================

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  CommandListProps
>(({ className, classNames, ...props }, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Command;

  // L1
  const base = commandBase({});

  // L2
  const themeStyles = React.useMemo(() => ({
    list: toClassString(themeConfig?.slots?.list),
  }), [themeConfig]);

  return (
    <CommandPrimitive.List
      ref={ref}
      data-slot="command-list"
      className={twMerge(
        base.list(),
        themeStyles.list,
        classNames?.list,
        className
      )}
      {...props}
    />
  );
});
CommandList.displayName = 'CommandList';

// ============================================================================
// Command Empty
// ============================================================================

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  CommandEmptyProps
>(({ className, classNames, ...props }, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Command;

  // L1
  const base = commandBase({});

  // L2
  const themeStyles = React.useMemo(() => ({
    empty: toClassString(themeConfig?.slots?.empty),
  }), [themeConfig]);

  return (
    <CommandPrimitive.Empty
      ref={ref}
      data-slot="command-empty"
      className={twMerge(
        base.empty(),
        themeStyles.empty,
        classNames?.empty,
        className
      )}
      {...props}
    />
  );
});
CommandEmpty.displayName = 'CommandEmpty';

// ============================================================================
// Command Group
// ============================================================================

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  CommandGroupProps
>(({ className, classNames, ...props }, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Command;

  // L1
  const base = commandBase({});

  // L2
  const themeStyles = React.useMemo(() => ({
    group: toClassString(themeConfig?.slots?.group),
  }), [themeConfig]);

  return (
    <CommandPrimitive.Group
      ref={ref}
      data-slot="command-group"
      className={twMerge(
        base.group(),
        themeStyles.group,
        classNames?.group,
        className
      )}
      {...props}
    />
  );
});
CommandGroup.displayName = 'CommandGroup';

// ============================================================================
// Command Separator
// ============================================================================

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  CommandSeparatorProps
>(({ className, classNames, ...props }, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Command;

  // L1
  const base = commandBase({});

  // L2
  const themeStyles = React.useMemo(() => ({
    separator: toClassString(themeConfig?.slots?.separator),
  }), [themeConfig]);

  return (
    <CommandPrimitive.Separator
      ref={ref}
      data-slot="command-separator"
      className={twMerge(
        base.separator(),
        themeStyles.separator,
        classNames?.separator,
        className
      )}
      {...props}
    />
  );
});
CommandSeparator.displayName = 'CommandSeparator';

// ============================================================================
// Command Item
// ============================================================================

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  CommandItemProps
>(({ className, classNames, ...props }, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Command;

  // L1
  const base = commandBase({});

  // L2
  const themeStyles = React.useMemo(() => ({
    item: toClassString(themeConfig?.slots?.item),
  }), [themeConfig]);

  return (
    <CommandPrimitive.Item
      ref={ref}
      data-slot="command-item"
      className={twMerge(
        base.item(),
        themeStyles.item,
        classNames?.item,
        className
      )}
      {...props}
    />
  );
});
CommandItem.displayName = 'CommandItem';

// ============================================================================
// Command Shortcut
// ============================================================================

const CommandShortcut = React.forwardRef<
  HTMLSpanElement,
  CommandShortcutProps
>(({ className, classNames, ...props }, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Command;

  // L1
  const base = commandBase({});

  // L2
  const themeStyles = React.useMemo(() => ({
    shortcut: toClassString(themeConfig?.slots?.shortcut),
  }), [themeConfig]);

  return (
    <span
      ref={ref}
      data-slot="command-shortcut"
      className={twMerge(
        base.shortcut(),
        themeStyles.shortcut,
        classNames?.shortcut,
        className
      )}
      {...props}
    />
  );
});
CommandShortcut.displayName = 'CommandShortcut';

// ============================================================================
// Command Demo (用于画布展示)
// ============================================================================

function CommandDemo({ variant = 'default' }: CommandDemoProps) {
  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <Command variant={variant} className="rounded-lg border shadow-md max-w-md w-full">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}

// ============================================================================
// Exports
// ============================================================================

export {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandSeparator,
  CommandItem,
  CommandShortcut,
  CommandDemo,
};
