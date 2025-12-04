'use client';

/**
 * Menubar Block
 *
 * 菜单栏组件，用于应用程序顶部导航。
 * 依赖 Atoms: popover, button
 *
 * Architecture:
 * - L1 (功能层): 静态定义，保证组件功能正常
 * - L2 (主题层): 从 useTheme 获取，控制视觉风格
 * - L3 (实例层): 用户传入的 className/classNames
 *
 * 优先级: L3 > L2 > L1 (通过 twMerge 解决冲突)
 */

import * as React from 'react';
import * as MenubarPrimitive from '@radix-ui/react-menubar';
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes';

// ============================================================================
// 依赖声明（用于导出时收集）
// ============================================================================

export const menubarAtoms = [] as const;

// ============================================================================
// L1: 静态样式定义（功能层）
// ============================================================================

const menubarBase = tv({
  slots: {
    root: 'flex h-9 items-center gap-1 rounded-md border p-1',
    trigger: 'flex cursor-default select-none items-center rounded-sm px-2 py-1 text-sm font-medium outline-none',
    content: 'z-50 min-w-[12rem] overflow-hidden rounded-md border p-1 data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
    item: 'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
    label: 'px-2 py-1.5 text-sm font-medium',
    separator: '-mx-1 my-1 h-px',
    shortcut: 'ml-auto text-xs tracking-widest',
    checkboxItem: 'relative flex cursor-default select-none items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    radioItem: 'relative flex cursor-default select-none items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    indicator: 'pointer-events-none absolute left-2 flex size-3.5 items-center justify-center',
    subTrigger: 'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none',
    subContent: 'z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
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

export type MenubarVariants = VariantProps<typeof menubarBase>;
type MenubarBaseSlots = ReturnType<typeof menubarBase>;
export type MenubarSlots = keyof MenubarBaseSlots;
export type MenubarClassNames = Partial<Record<MenubarSlots, string>>;

export interface MenubarProps
  extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root> {
  classNames?: MenubarClassNames;
}

export interface MenubarDemoProps extends MenubarVariants {}

// ============================================================================
// Components
// ============================================================================

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  MenubarProps
>(({ className, classNames, ...props }, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Menubar;

  // L1: 功能层（静态）
  const base = menubarBase();

  // L2: 主题层（用 useMemo 缓存）
  const themeStyles = React.useMemo(
    () => ({
      root: toClassString(themeConfig?.slots?.root),
      trigger: toClassString(themeConfig?.slots?.trigger),
      content: toClassString(themeConfig?.slots?.content),
      item: toClassString(themeConfig?.slots?.item),
      label: toClassString(themeConfig?.slots?.label),
      separator: toClassString(themeConfig?.slots?.separator),
      shortcut: toClassString(themeConfig?.slots?.shortcut),
      checkboxItem: toClassString(themeConfig?.slots?.checkboxItem),
      radioItem: toClassString(themeConfig?.slots?.radioItem),
      indicator: toClassString(themeConfig?.slots?.indicator),
      subTrigger: toClassString(themeConfig?.slots?.subTrigger),
      subContent: toClassString(themeConfig?.slots?.subContent),
    }),
    [themeConfig]
  );

  // 合并: L1 + L2 + L3
  const rootClass = twMerge(
    base.root(),
    themeStyles.root,
    classNames?.root,
    className
  );

  return (
    <MenubarPrimitive.Root
      ref={ref}
      data-slot="menubar"
      className={rootClass}
      {...props}
    />
  );
});
Menubar.displayName = 'Menubar';

// ============================================================================

const MenubarMenu = ({ ...props }: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Menu>) => {
  return <MenubarPrimitive.Menu data-slot="menubar-menu" {...props} />;
};
MenubarMenu.displayName = 'MenubarMenu';

// ============================================================================

const MenubarGroup = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Group>
>(({ ...props }, ref) => {
  return <MenubarPrimitive.Group ref={ref} data-slot="menubar-group" {...props} />;
});
MenubarGroup.displayName = 'MenubarGroup';

// ============================================================================

const MenubarPortal = MenubarPrimitive.Portal;

// ============================================================================

const MenubarRadioGroup = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioGroup>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioGroup>
>(({ ...props }, ref) => {
  return (
    <MenubarPrimitive.RadioGroup
      ref={ref}
      data-slot="menubar-radio-group"
      {...props}
    />
  );
});
MenubarRadioGroup.displayName = 'MenubarRadioGroup';

// ============================================================================

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Menubar;
  const base = menubarBase();

  const themeStyles = React.useMemo(
    () => ({
      trigger: toClassString(themeConfig?.slots?.trigger),
    }),
    [themeConfig]
  );

  const triggerClass = twMerge(base.trigger(), themeStyles.trigger, className);

  return (
    <MenubarPrimitive.Trigger
      ref={ref}
      data-slot="menubar-trigger"
      className={triggerClass}
      {...props}
    />
  );
});
MenubarTrigger.displayName = 'MenubarTrigger';

// ============================================================================

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
  (
    {
      className,
      align = 'start',
      alignOffset = -4,
      sideOffset = 8,
      ...props
    },
    ref
  ) => {
    const { currentTheme } = useTheme();
    const themeConfig = currentTheme?.components?.Menubar;
    const base = menubarBase();

    const themeStyles = React.useMemo(
      () => ({
        content: toClassString(themeConfig?.slots?.content),
      }),
      [themeConfig]
    );

    const contentClass = twMerge(
      base.content(),
      themeStyles.content,
      className
    );

    return (
      <MenubarPortal>
        <MenubarPrimitive.Content
          ref={ref}
          data-slot="menubar-content"
          align={align}
          alignOffset={alignOffset}
          sideOffset={sideOffset}
          className={contentClass}
          {...props}
        />
      </MenubarPortal>
    );
  }
);
MenubarContent.displayName = 'MenubarContent';

// ============================================================================

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Menubar;
  const base = menubarBase();

  const themeStyles = React.useMemo(
    () => ({
      item: toClassString(themeConfig?.slots?.item),
    }),
    [themeConfig]
  );

  const itemClass = twMerge(
    base.item(),
    themeStyles.item,
    inset && 'pl-8',
    className
  );

  return (
    <MenubarPrimitive.Item
      ref={ref}
      data-slot="menubar-item"
      data-inset={inset}
      className={itemClass}
      {...props}
    />
  );
});
MenubarItem.displayName = 'MenubarItem';

// ============================================================================

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Menubar;
  const base = menubarBase();

  const themeStyles = React.useMemo(
    () => ({
      checkboxItem: toClassString(themeConfig?.slots?.checkboxItem),
      indicator: toClassString(themeConfig?.slots?.indicator),
    }),
    [themeConfig]
  );

  const checkboxItemClass = twMerge(
    base.checkboxItem(),
    themeStyles.checkboxItem,
    className
  );
  const indicatorClass = twMerge(base.indicator(), themeStyles.indicator);

  return (
    <MenubarPrimitive.CheckboxItem
      ref={ref}
      data-slot="menubar-checkbox-item"
      className={checkboxItemClass}
      checked={checked}
      {...props}
    >
      <span className={indicatorClass}>
        <MenubarPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  );
});
MenubarCheckboxItem.displayName = 'MenubarCheckboxItem';

// ============================================================================

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Menubar;
  const base = menubarBase();

  const themeStyles = React.useMemo(
    () => ({
      radioItem: toClassString(themeConfig?.slots?.radioItem),
      indicator: toClassString(themeConfig?.slots?.indicator),
    }),
    [themeConfig]
  );

  const radioItemClass = twMerge(
    base.radioItem(),
    themeStyles.radioItem,
    className
  );
  const indicatorClass = twMerge(base.indicator(), themeStyles.indicator);

  return (
    <MenubarPrimitive.RadioItem
      ref={ref}
      data-slot="menubar-radio-item"
      className={radioItemClass}
      {...props}
    >
      <span className={indicatorClass}>
        <MenubarPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  );
});
MenubarRadioItem.displayName = 'MenubarRadioItem';

// ============================================================================

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Menubar;
  const base = menubarBase();

  const themeStyles = React.useMemo(
    () => ({
      label: toClassString(themeConfig?.slots?.label),
    }),
    [themeConfig]
  );

  const labelClass = twMerge(
    base.label(),
    themeStyles.label,
    inset && 'pl-8',
    className
  );

  return (
    <MenubarPrimitive.Label
      ref={ref}
      data-slot="menubar-label"
      data-inset={inset}
      className={labelClass}
      {...props}
    />
  );
});
MenubarLabel.displayName = 'MenubarLabel';

// ============================================================================

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Menubar;
  const base = menubarBase();

  const themeStyles = React.useMemo(
    () => ({
      separator: toClassString(themeConfig?.slots?.separator),
    }),
    [themeConfig]
  );

  const separatorClass = twMerge(
    base.separator(),
    themeStyles.separator,
    className
  );

  return (
    <MenubarPrimitive.Separator
      ref={ref}
      data-slot="menubar-separator"
      className={separatorClass}
      {...props}
    />
  );
});
MenubarSeparator.displayName = 'MenubarSeparator';

// ============================================================================

const MenubarShortcut = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<'span'>
>(({ className, ...props }, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Menubar;
  const base = menubarBase();

  const themeStyles = React.useMemo(
    () => ({
      shortcut: toClassString(themeConfig?.slots?.shortcut),
    }),
    [themeConfig]
  );

  const shortcutClass = twMerge(
    base.shortcut(),
    themeStyles.shortcut,
    className
  );

  return (
    <span
      ref={ref}
      data-slot="menubar-shortcut"
      className={shortcutClass}
      {...props}
    />
  );
});
MenubarShortcut.displayName = 'MenubarShortcut';

// ============================================================================

const MenubarSub = ({ ...props }: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Sub>) => {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />;
};
MenubarSub.displayName = 'MenubarSub';

// ============================================================================

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Menubar;
  const base = menubarBase();

  const themeStyles = React.useMemo(
    () => ({
      subTrigger: toClassString(themeConfig?.slots?.subTrigger),
    }),
    [themeConfig]
  );

  const subTriggerClass = twMerge(
    base.subTrigger(),
    themeStyles.subTrigger,
    inset && 'pl-8',
    className
  );

  return (
    <MenubarPrimitive.SubTrigger
      ref={ref}
      data-slot="menubar-sub-trigger"
      data-inset={inset}
      className={subTriggerClass}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto h-4 w-4" />
    </MenubarPrimitive.SubTrigger>
  );
});
MenubarSubTrigger.displayName = 'MenubarSubTrigger';

// ============================================================================

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Menubar;
  const base = menubarBase();

  const themeStyles = React.useMemo(
    () => ({
      subContent: toClassString(themeConfig?.slots?.subContent),
    }),
    [themeConfig]
  );

  const subContentClass = twMerge(
    base.subContent(),
    themeStyles.subContent,
    className
  );

  return (
    <MenubarPrimitive.SubContent
      ref={ref}
      data-slot="menubar-sub-content"
      className={subContentClass}
      {...props}
    />
  );
});
MenubarSubContent.displayName = 'MenubarSubContent';

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
