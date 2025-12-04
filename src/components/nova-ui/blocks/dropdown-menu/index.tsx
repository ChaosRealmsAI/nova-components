'use client';

/**
 * DropdownMenu Block
 *
 * 下拉菜单组件，用于显示一组操作选项。
 *
 * Architecture Notes:
 * - L1 (Functional): Static definition, functional requirements only.
 * - L2 (Theme): Dynamic from useTheme(), visual styles.
 * - L3 (Instance): User provided className/classNames.
 *
 * 优先级: L3 > L2 > L1 (通过 twMerge 解决冲突)
 */

import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes/use-theme';

// ============================================================================
// Utils
// ============================================================================

const toClassString = (value: string | string[] | undefined): string => {
  if (!value) return '';
  if (Array.isArray(value)) return value.join(' ');
  return value;
};

// ============================================================================
// L1: 静态样式定义（功能层）
// ============================================================================

const dropdownMenuBase = tv({
  slots: {
    content:
      'z-50 min-w-[8rem] overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
    item:
      'relative flex cursor-default items-center gap-2 outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
    label: '',
    separator: '-mx-1 my-1 h-px',
    shortcut: 'ml-auto',
    checkboxItem:
      'relative flex cursor-default items-center gap-2 outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    radioItem:
      'relative flex cursor-default items-center gap-2 outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    indicator: 'pointer-events-none absolute flex items-center justify-center',
    subTrigger:
      'flex cursor-default items-center gap-2 outline-hidden select-none',
    subContent:
      'z-50 min-w-[8rem] overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  },
});

// ============================================================================
// Types
// ============================================================================

export type DropdownMenuVariants = VariantProps<typeof dropdownMenuBase>;
export type DropdownMenuSlots = keyof typeof dropdownMenuBase.slots;
export type DropdownMenuClassNames = Partial<Record<DropdownMenuSlots, string>>;

export interface DropdownMenuContentProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.Content> {
  classNames?: DropdownMenuClassNames;
  variant?: 'default';
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

export interface DropdownMenuDemoProps {
  variant?: 'default';
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

  // L1
  const base = dropdownMenuBase();

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.content);
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.content);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, variant]);

  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={twMerge(
          base.content(),
          themeStyles.slot,
          themeStyles.variant,
          classNames?.content,
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

  // L1
  const base = dropdownMenuBase();

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.item);
    const variantStyle = toClassString(themeConfig?.variants?.variant?.default?.item);
    const destructiveStyle = variant === 'destructive'
      ? toClassString(themeConfig?.variants?.variant?.destructive?.item)
      : '';
    return { slot: slotStyle, variant: variantStyle, destructive: destructiveStyle };
  }, [themeConfig, variant]);

  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={twMerge(
        base.item(),
        themeStyles.slot,
        themeStyles.variant,
        variant === 'destructive' && themeStyles.destructive,
        inset && 'pl-8',
        classNames?.item,
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

  // L1
  const base = dropdownMenuBase();

  // L2
  const themeStyles = React.useMemo(() => ({
    checkboxItem: toClassString(themeConfig?.slots?.checkboxItem),
    indicator: toClassString(themeConfig?.slots?.indicator),
  }), [themeConfig]);

  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={twMerge(
        base.checkboxItem(),
        themeStyles.checkboxItem,
        classNames?.checkboxItem,
        className
      )}
      checked={checked}
      {...props}
    >
      <span className={twMerge(base.indicator(), themeStyles.indicator, classNames?.indicator)}>
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

  // L1
  const base = dropdownMenuBase();

  // L2
  const themeStyles = React.useMemo(() => ({
    radioItem: toClassString(themeConfig?.slots?.radioItem),
    indicator: toClassString(themeConfig?.slots?.indicator),
  }), [themeConfig]);

  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={twMerge(
        base.radioItem(),
        themeStyles.radioItem,
        classNames?.radioItem,
        className
      )}
      {...props}
    >
      <span className={twMerge(base.indicator(), themeStyles.indicator, classNames?.indicator)}>
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

  // L1
  const base = dropdownMenuBase();

  // L2
  const themeStyles = React.useMemo(() => ({
    label: toClassString(themeConfig?.slots?.label),
  }), [themeConfig]);

  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={twMerge(
        base.label(),
        themeStyles.label,
        inset && 'pl-8',
        classNames?.label,
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

  // L1
  const base = dropdownMenuBase();

  // L2
  const themeStyles = React.useMemo(() => ({
    separator: toClassString(themeConfig?.slots?.separator),
  }), [themeConfig]);

  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={twMerge(
        base.separator(),
        themeStyles.separator,
        classNames?.separator,
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

  // L1
  const base = dropdownMenuBase();

  // L2
  const themeStyles = React.useMemo(() => ({
    shortcut: toClassString(themeConfig?.slots?.shortcut),
  }), [themeConfig]);

  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={twMerge(
        base.shortcut(),
        themeStyles.shortcut,
        classNames?.shortcut,
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

  // L1
  const base = dropdownMenuBase();

  // L2
  const themeStyles = React.useMemo(() => ({
    subTrigger: toClassString(themeConfig?.slots?.subTrigger),
  }), [themeConfig]);

  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={twMerge(
        base.subTrigger(),
        themeStyles.subTrigger,
        inset && 'pl-8',
        classNames?.subTrigger,
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

  // L1
  const base = dropdownMenuBase();

  // L2
  const themeStyles = React.useMemo(() => ({
    subContent: toClassString(themeConfig?.slots?.subContent),
  }), [themeConfig]);

  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={twMerge(
        base.subContent(),
        themeStyles.subContent,
        classNames?.subContent,
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
