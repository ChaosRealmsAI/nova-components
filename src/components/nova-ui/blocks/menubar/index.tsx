'use client';

/**
 * Menubar Block
 *
 * 菜单栏组件，用于应用程序顶部导航。
 * 依赖 Atoms: popover, button
 */

import * as React from 'react';
import * as MenubarPrimitive from '@radix-ui/react-menubar';
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/themes/use-theme';
import { menubarBaseConfig } from './menubar.config';

// ============================================================================
// 依赖声明
// ============================================================================

export const menubarAtoms = ['popover', 'button'] as const;

export { menubarBaseConfig };

// ============================================================================
// Styles
// ============================================================================

const menubar = tv(menubarBaseConfig);

// ============================================================================
// Types
// ============================================================================

export type MenubarVariants = VariantProps<typeof menubar>;
export type MenubarSlots = keyof typeof menubarBaseConfig.slots;

export interface MenubarDemoProps extends MenubarVariants {}

// ============================================================================
// Components
// ============================================================================

function Menubar({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Root>) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Menubar;
  const styles = menubar();
  return (
    <MenubarPrimitive.Root
      data-slot="menubar"
      className={cn(styles.root(), themeConfig?.slots?.root, className)}
      {...props}
    />
  );
}

function MenubarMenu({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu data-slot="menubar-menu" {...props} />;
}

function MenubarGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Group>) {
  return <MenubarPrimitive.Group data-slot="menubar-group" {...props} />;
}

function MenubarPortal({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
  return <MenubarPrimitive.Portal data-slot="menubar-portal" {...props} />;
}

function MenubarRadioGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
  return (
    <MenubarPrimitive.RadioGroup data-slot="menubar-radio-group" {...props} />
  );
}

function MenubarTrigger({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Trigger>) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Menubar;
  const styles = menubar();
  return (
    <MenubarPrimitive.Trigger
      data-slot="menubar-trigger"
      className={cn(styles.trigger(), themeConfig?.slots?.trigger, className)}
      {...props}
    />
  );
}

function MenubarContent({
  className,
  align = 'start',
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Content>) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Menubar;
  const styles = menubar();
  return (
    <MenubarPortal>
      <MenubarPrimitive.Content
        data-slot="menubar-content"
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(styles.content(), themeConfig?.slots?.content, className)}
        {...props}
      />
    </MenubarPortal>
  );
}

function MenubarItem({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Item> & {
  inset?: boolean;
}) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Menubar;
  const styles = menubar();
  return (
    <MenubarPrimitive.Item
      data-slot="menubar-item"
      data-inset={inset}
      className={cn(
        styles.item(),
        themeConfig?.slots?.item,
        inset && 'pl-8',
        className
      )}
      {...props}
    />
  );
}

function MenubarCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.CheckboxItem>) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Menubar;
  const styles = menubar();
  return (
    <MenubarPrimitive.CheckboxItem
      data-slot="menubar-checkbox-item"
      className={cn(
        styles.checkboxItem(),
        themeConfig?.slots?.checkboxItem,
        className
      )}
      checked={checked}
      {...props}
    >
      <span
        className={cn(styles.indicator(), themeConfig?.slots?.indicator)}
      >
        <MenubarPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  );
}

function MenubarRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioItem>) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Menubar;
  const styles = menubar();
  return (
    <MenubarPrimitive.RadioItem
      data-slot="menubar-radio-item"
      className={cn(
        styles.radioItem(),
        themeConfig?.slots?.radioItem,
        className
      )}
      {...props}
    >
      <span
        className={cn(styles.indicator(), themeConfig?.slots?.indicator)}
      >
        <MenubarPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  );
}

function MenubarLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Label> & {
  inset?: boolean;
}) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Menubar;
  const styles = menubar();
  return (
    <MenubarPrimitive.Label
      data-slot="menubar-label"
      data-inset={inset}
      className={cn(
        styles.label(),
        themeConfig?.slots?.label,
        inset && 'pl-8',
        className
      )}
      {...props}
    />
  );
}

function MenubarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Separator>) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Menubar;
  const styles = menubar();
  return (
    <MenubarPrimitive.Separator
      data-slot="menubar-separator"
      className={cn(
        styles.separator(),
        themeConfig?.slots?.separator,
        className
      )}
      {...props}
    />
  );
}

function MenubarShortcut({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Menubar;
  const styles = menubar();
  return (
    <span
      data-slot="menubar-shortcut"
      className={cn(
        styles.shortcut(),
        themeConfig?.slots?.shortcut,
        className
      )}
      {...props}
    />
  );
}

function MenubarSub({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Sub>) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />;
}

function MenubarSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubTrigger> & {
  inset?: boolean;
}) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Menubar;
  const styles = menubar();
  return (
    <MenubarPrimitive.SubTrigger
      data-slot="menubar-sub-trigger"
      data-inset={inset}
      className={cn(
        styles.subTrigger(),
        themeConfig?.slots?.subTrigger,
        inset && 'pl-8',
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto h-4 w-4" />
    </MenubarPrimitive.SubTrigger>
  );
}

function MenubarSubContent({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubContent>) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Menubar;
  const styles = menubar();
  return (
    <MenubarPrimitive.SubContent
      data-slot="menubar-sub-content"
      className={cn(
        styles.subContent(),
        themeConfig?.slots?.subContent,
        className
      )}
      {...props}
    />
  );
}

// ============================================================================
// Demo
// ============================================================================

function MenubarDemo({}: MenubarDemoProps) {
  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>Cmd+T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              New Window <MenubarShortcut>Cmd+N</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Print... <MenubarShortcut>Cmd+P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Undo <MenubarShortcut>Cmd+Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Redo <MenubarShortcut>Shift+Cmd+Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Find</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Search the web</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Find...</MenubarItem>
                <MenubarItem>Find Next</MenubarItem>
                <MenubarItem>Find Previous</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>Cut</MenubarItem>
            <MenubarItem>Copy</MenubarItem>
            <MenubarItem>Paste</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem checked>Show Toolbar</MenubarCheckboxItem>
            <MenubarCheckboxItem>Show Statusbar</MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarItem>
              Zoom In <MenubarShortcut>Cmd++</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Zoom Out <MenubarShortcut>Cmd+-</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}

// ============================================================================
// Exports
// ============================================================================

export {
  Menubar,
  MenubarPortal,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarSeparator,
  MenubarLabel,
  MenubarItem,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarDemo,
};
