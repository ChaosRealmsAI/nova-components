'use client';

/**
 * Command Block
 * 命令面板组件
 * 依赖 Atoms: input
 */

import * as React from 'react';
import { Command as CommandPrimitive } from 'cmdk';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/themes/use-theme';
import { Search } from 'lucide-react';
import { commandBaseConfig } from './command.config';

export const commandAtoms = ['input'] as const;
export { commandBaseConfig };

const command = tv(commandBaseConfig);

export type CommandVariants = VariantProps<typeof command>;
export type CommandSlots = keyof typeof commandBaseConfig.slots;
export type CommandClassNames = Partial<Record<CommandSlots, string>>;

export interface CommandDemoProps extends CommandVariants {}

function Command({ className, ...props }: React.ComponentProps<typeof CommandPrimitive>) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Command;
  const styles = command({});
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(styles.root(), themeConfig?.slots?.root, className)}
      {...props}
    />
  );
}

function CommandInput({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Input>) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Command;
  const styles = command({});
  return (
    <div data-slot="command-input-wrapper" className={cn(styles.inputWrapper(), themeConfig?.slots?.inputWrapper)}>
      <Search className="size-4 shrink-0 opacity-50" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(styles.input(), themeConfig?.slots?.input, className)}
        {...props}
      />
    </div>
  );
}

function CommandList({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.List>) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Command;
  const styles = command({});
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(styles.list(), themeConfig?.slots?.list, className)}
      {...props}
    />
  );
}

function CommandEmpty({ ...props }: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Command;
  const styles = command({});
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className={cn(styles.empty(), themeConfig?.slots?.empty)}
      {...props}
    />
  );
}

function CommandGroup({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Group>) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Command;
  const styles = command({});
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(styles.group(), themeConfig?.slots?.group, className)}
      {...props}
    />
  );
}

function CommandSeparator({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Command;
  const styles = command({});
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn(styles.separator(), themeConfig?.slots?.separator, className)}
      {...props}
    />
  );
}

function CommandItem({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Item>) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Command;
  const styles = command({});
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(styles.item(), themeConfig?.slots?.item, className)}
      {...props}
    />
  );
}

function CommandShortcut({ className, ...props }: React.ComponentProps<'span'>) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Command;
  const styles = command({});
  return (
    <span
      data-slot="command-shortcut"
      className={cn(styles.shortcut(), themeConfig?.slots?.shortcut, className)}
      {...props}
    />
  );
}

// Demo Component
function CommandDemo({}: CommandDemoProps) {
  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <Command className="rounded-lg border shadow-md">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}

export { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandSeparator, CommandItem, CommandShortcut, CommandDemo };
