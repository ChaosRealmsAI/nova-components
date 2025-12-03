'use client';

/**
 * DropdownMenu Block
 *
 * 下拉菜单组件，用于显示一组操作选项。
 *
 * Architecture Notes:
 * - Block 组件，依赖 Atoms: popover, button
 * - 不支持用户可配特效（通过内部 Atoms 获得）
 */

import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/themes/use-theme';
import { dropdownMenuBaseConfig } from './dropdown-menu.config';

// ============================================================================
// 依赖声明（用于导出时收集）
// ============================================================================

export const dropdownMenuAtoms = ['popover', 'button'] as const;

export { dropdownMenuBaseConfig };

// ============================================================================
// Styles
// ============================================================================

const dropdownMenu = tv(dropdownMenuBaseConfig);

// ============================================================================
// Types
// ============================================================================

export type DropdownMenuVariants = VariantProps<typeof dropdownMenu>;
export type DropdownMenuSlots = keyof typeof dropdownMenuBaseConfig.slots;
export type DropdownMenuClassNames = Partial<Record<DropdownMenuSlots, string>>;

export interface DropdownMenuContentProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.Content>,
    DropdownMenuVariants {
  classNames?: DropdownMenuClassNames;
}

export interface DropdownMenuItemProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.Item> {
  inset?: boolean;
  variant?: 'default' | 'destructive';
  classNames?: DropdownMenuClassNames;
}

export interface DropdownMenuCheckboxItemProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem> {
  classNames?: DropdownMenuClassNames;
}

export interface DropdownMenuRadioItemProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem> {
  classNames?: DropdownMenuClassNames;
}

export interface DropdownMenuLabelProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.Label> {
  inset?: boolean;
  classNames?: DropdownMenuClassNames;
}

export interface DropdownMenuSeparatorProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.Separator> {
  classNames?: DropdownMenuClassNames;
}

export interface DropdownMenuShortcutProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  classNames?: DropdownMenuClassNames;
}

export interface DropdownMenuSubTriggerProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> {
  inset?: boolean;
  classNames?: DropdownMenuClassNames;
}

export interface DropdownMenuSubContentProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.SubContent> {
  classNames?: DropdownMenuClassNames;
}

export interface DropdownMenuDemoProps extends DropdownMenuVariants {
  triggerLabel?: string;
  accountLabel?: string;
  profileLabel?: string;
  settingsLabel?: string;
  logoutLabel?: string;
}

// ============================================================================
// DropdownMenu Root
// ============================================================================

function DropdownMenu(props: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
}

// ============================================================================
// DropdownMenu Trigger
// ============================================================================

function DropdownMenuTrigger(props: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return <DropdownMenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />;
}

// ============================================================================
// DropdownMenu Portal
// ============================================================================

function DropdownMenuPortal(props: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />;
}

// ============================================================================
// DropdownMenu Content
// ============================================================================

function DropdownMenuContent({
  className,
  classNames,
  sideOffset = 4,
  variant = 'default',
  ...props
}: DropdownMenuContentProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.DropdownMenu;
  const styles = dropdownMenu({ variant });

  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          classNames?.content || styles.content(),
          themeConfig?.slots?.content,
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

// ============================================================================
// DropdownMenu Group
// ============================================================================

function DropdownMenuGroup(props: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />;
}

// ============================================================================
// DropdownMenu Item
// ============================================================================

function DropdownMenuItem({
  className,
  classNames,
  inset,
  variant = 'default',
  ...props
}: DropdownMenuItemProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.DropdownMenu;
  const styles = dropdownMenu({ variant: 'default' });

  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        classNames?.item || styles.item(),
        themeConfig?.slots?.item,
        inset && 'pl-8',
        variant === 'destructive' && [
          'text-destructive focus:bg-destructive/10 focus:text-destructive',
          'dark:focus:bg-destructive/20',
          '*:[svg]:!text-destructive',
        ],
        className
      )}
      {...props}
    />
  );
}

// ============================================================================
// DropdownMenu CheckboxItem
// ============================================================================

function DropdownMenuCheckboxItem({
  className,
  classNames,
  children,
  checked,
  ...props
}: DropdownMenuCheckboxItemProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.DropdownMenu;
  const styles = dropdownMenu({ variant: 'default' });

  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        classNames?.checkboxItem || styles.checkboxItem(),
        themeConfig?.slots?.checkboxItem,
        className
      )}
      checked={checked}
      {...props}
    >
      <span className={cn(styles.indicator(), themeConfig?.slots?.indicator)}>
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
}

// ============================================================================
// DropdownMenu RadioGroup
// ============================================================================

function DropdownMenuRadioGroup(props: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return <DropdownMenuPrimitive.RadioGroup data-slot="dropdown-menu-radio-group" {...props} />;
}

// ============================================================================
// DropdownMenu RadioItem
// ============================================================================

function DropdownMenuRadioItem({
  className,
  classNames,
  children,
  ...props
}: DropdownMenuRadioItemProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.DropdownMenu;
  const styles = dropdownMenu({ variant: 'default' });

  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        classNames?.radioItem || styles.radioItem(),
        themeConfig?.slots?.radioItem,
        className
      )}
      {...props}
    >
      <span className={cn(styles.indicator(), themeConfig?.slots?.indicator)}>
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
}

// ============================================================================
// DropdownMenu Label
// ============================================================================

function DropdownMenuLabel({
  className,
  classNames,
  inset,
  ...props
}: DropdownMenuLabelProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.DropdownMenu;
  const styles = dropdownMenu({ variant: 'default' });

  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        classNames?.label || styles.label(),
        themeConfig?.slots?.label,
        inset && 'pl-8',
        className
      )}
      {...props}
    />
  );
}

// ============================================================================
// DropdownMenu Separator
// ============================================================================

function DropdownMenuSeparator({
  className,
  classNames,
  ...props
}: DropdownMenuSeparatorProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.DropdownMenu;
  const styles = dropdownMenu({ variant: 'default' });

  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn(
        classNames?.separator || styles.separator(),
        themeConfig?.slots?.separator,
        className
      )}
      {...props}
    />
  );
}

// ============================================================================
// DropdownMenu Shortcut
// ============================================================================

function DropdownMenuShortcut({
  className,
  classNames,
  ...props
}: DropdownMenuShortcutProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.DropdownMenu;
  const styles = dropdownMenu({ variant: 'default' });

  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        classNames?.shortcut || styles.shortcut(),
        themeConfig?.slots?.shortcut,
        className
      )}
      {...props}
    />
  );
}

// ============================================================================
// DropdownMenu Sub
// ============================================================================

function DropdownMenuSub(props: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />;
}

// ============================================================================
// DropdownMenu SubTrigger
// ============================================================================

function DropdownMenuSubTrigger({
  className,
  classNames,
  inset,
  children,
  ...props
}: DropdownMenuSubTriggerProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.DropdownMenu;
  const styles = dropdownMenu({ variant: 'default' });

  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        classNames?.subTrigger || styles.subTrigger(),
        themeConfig?.slots?.subTrigger,
        inset && 'pl-8',
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  );
}

// ============================================================================
// DropdownMenu SubContent
// ============================================================================

function DropdownMenuSubContent({
  className,
  classNames,
  ...props
}: DropdownMenuSubContentProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.DropdownMenu;
  const styles = dropdownMenu({ variant: 'default' });

  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        classNames?.subContent || styles.subContent(),
        themeConfig?.slots?.subContent,
        className
      )}
      {...props}
    />
  );
}

// ============================================================================
// DropdownMenu Demo (用于画布展示)
// ============================================================================

function DropdownMenuDemo({
  variant = 'default',
  triggerLabel = 'Open Menu',
  accountLabel = 'My Account',
  profileLabel = 'Profile',
  settingsLabel = 'Settings',
  logoutLabel = 'Log out',
}: DropdownMenuDemoProps) {
  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            {triggerLabel}
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent variant={variant}>
          <DropdownMenuLabel>{accountLabel}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              {profileLabel}
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              {settingsLabel}
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            {logoutLabel}
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

// ============================================================================
// Exports
// ============================================================================

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuDemo,
};
