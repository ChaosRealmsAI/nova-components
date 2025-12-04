'use client';

/**
 * ContextMenu Block
 *
 * 右键菜单组件，用于显示上下文操作。
 * 依赖 Atoms: popover
 *
 * 架构：
 * - L1 (功能层): 静态定义，保证组件功能正常 (组件外部定义)
 * - L2 (主题层): 从 useTheme 获取，控制视觉风格
 * - L3 (实例层): 用户传入的 className/classNames
 *
 * 优先级: L3 > L2 > L1 (通过 twMerge 解决冲突)
 */

import * as React from 'react';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes/use-theme';
import { useI18n } from '@/lib/i18n/use-i18n';

// ============================================================================
// 依赖声明
// ============================================================================

export const contextMenuAtoms = ['popover'] as const;

// ============================================================================
// L1: 静态样式定义（功能层）
// ============================================================================

const contextMenuBase = tv({
  slots: {
    content:
      'z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
    item:
      'relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
    label: 'px-2 py-1.5 text-sm font-medium',
    separator: '-mx-1 my-1 h-px',
    shortcut: 'ml-auto text-xs tracking-widest opacity-60',
    checkboxItem:
      'relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    radioItem:
      'relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    indicator: 'pointer-events-none absolute left-2 flex size-3.5 items-center justify-center',
    subTrigger:
      'flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
    subContent:
      'z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
    trigger: 'flex items-center justify-center rounded-md border border-dashed p-4 text-sm',
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

export type ContextMenuVariants = VariantProps<typeof contextMenuBase>;
export type ContextMenuSlots = keyof typeof contextMenuBase.slots;
export type ContextMenuClassNames = Partial<Record<ContextMenuSlots, string>>;

export interface ContextMenuDemoProps extends ContextMenuVariants {
  triggerText?: string;
}

// ============================================================================
// ContextMenu Components
// ============================================================================

function ContextMenu({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Root>) {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />;
}

function ContextMenuTrigger({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Trigger>) {
  return (
    <ContextMenuPrimitive.Trigger data-slot="context-menu-trigger" {...props} />
  );
}

function ContextMenuGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Group>) {
  return (
    <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />
  );
}

function ContextMenuPortal({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Portal>) {
  return (
    <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
  );
}

function ContextMenuSub({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Sub>) {
  return <ContextMenuPrimitive.Sub data-slot="context-menu-sub" {...props} />;
}

function ContextMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>) {
  return (
    <ContextMenuPrimitive.RadioGroup
      data-slot="context-menu-radio-group"
      {...props}
    />
  );
}

function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger> & {
  inset?: boolean;
}) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.ContextMenu;
  
  // L1
  const base = contextMenuBase();

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.subTrigger);
    return { slot: slotStyle };
  }, [themeConfig]);

  return (
    <ContextMenuPrimitive.SubTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset}
      className={twMerge(
        base.subTrigger(),
        themeStyles.slot,
        inset && 'pl-8',
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </ContextMenuPrimitive.SubTrigger>
  );
}

function ContextMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubContent>) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.ContextMenu;
  
  // L1
  const base = contextMenuBase();

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.subContent);
    return { slot: slotStyle };
  }, [themeConfig]);

  return (
    <ContextMenuPrimitive.SubContent
      data-slot="context-menu-sub-content"
      className={twMerge(
        base.subContent(),
        themeStyles.slot,
        className
      )}
      {...props}
    />
  );
}

function ContextMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Content>) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.ContextMenu;
  
  // L1
  const base = contextMenuBase();

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.content);
    return { slot: slotStyle };
  }, [themeConfig]);

  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        data-slot="context-menu-content"
        className={twMerge(
          base.content(),
          themeStyles.slot,
          className
        )}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  );
}

function ContextMenuItem({
  className,
  inset,
  variant = 'default',
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Item> & {
  inset?: boolean;
  variant?: 'default' | 'destructive';
}) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.ContextMenu;
  
  // L1
  const base = contextMenuBase();

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.item);
    return { slot: slotStyle };
  }, [themeConfig]);

  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={twMerge(
        base.item(),
        themeStyles.slot,
        inset && 'pl-8',
        variant === 'destructive' &&
          'text-destructive focus:bg-destructive/10 focus:text-destructive',
        className
      )}
      {...props}
    />
  );
}

function ContextMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.ContextMenu;
  
  // L1
  const base = contextMenuBase();

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.checkboxItem);
    const indicatorStyle = toClassString(themeConfig?.slots?.indicator);
    return { slot: slotStyle, indicator: indicatorStyle };
  }, [themeConfig]);

  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      className={twMerge(
        base.checkboxItem(),
        themeStyles.slot,
        className
      )}
      checked={checked}
      {...props}
    >
      <span className={twMerge(base.indicator(), themeStyles.indicator)}>
        <ContextMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  );
}

function ContextMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.ContextMenu;
  
  // L1
  const base = contextMenuBase();

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.radioItem);
    const indicatorStyle = toClassString(themeConfig?.slots?.indicator);
    return { slot: slotStyle, indicator: indicatorStyle };
  }, [themeConfig]);

  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
      className={twMerge(
        base.radioItem(),
        themeStyles.slot,
        className
      )}
      {...props}
    >
      <span className={twMerge(base.indicator(), themeStyles.indicator)}>
        <ContextMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  );
}

function ContextMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Label> & {
  inset?: boolean;
}) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.ContextMenu;
  
  // L1
  const base = contextMenuBase();

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.label);
    return { slot: slotStyle };
  }, [themeConfig]);

  return (
    <ContextMenuPrimitive.Label
      data-slot="context-menu-label"
      data-inset={inset}
      className={twMerge(
        base.label(),
        themeStyles.slot,
        inset && 'pl-8',
        className
      )}
      {...props}
    />
  );
}

function ContextMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Separator>) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.ContextMenu;
  
  // L1
  const base = contextMenuBase();

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.separator);
    return { slot: slotStyle };
  }, [themeConfig]);

  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={twMerge(
        base.separator(),
        themeStyles.slot,
        className
      )}
      {...props}
    />
  );
}

function ContextMenuShortcut({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.ContextMenu;

  // L1
  const base = contextMenuBase();

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.shortcut);
    return { slot: slotStyle };
  }, [themeConfig]);

  return (
    <span
      data-slot="context-menu-shortcut"
      className={twMerge(
        base.shortcut(),
        themeStyles.slot,
        className
      )}
      {...props}
    />
  );
}

// ============================================================================
// Demo Component
// ============================================================================

function ContextMenuDemo({
  triggerText,
}: ContextMenuDemoProps) {
  const base = contextMenuBase();
  const { t } = useI18n();

  const displayTriggerText = triggerText || t('contextMenuTrigger', 'Right click here');

  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <ContextMenu>
        <ContextMenuTrigger className={base.trigger()}>
          {displayTriggerText}
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuItem>
            {t('contextMenuBack', 'Back')}
            <ContextMenuShortcut>Cmd+[</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem disabled>
            {t('contextMenuForward', 'Forward')}
            <ContextMenuShortcut>Cmd+]</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            {t('contextMenuReload', 'Reload')}
            <ContextMenuShortcut>Cmd+R</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>{t('contextMenuMoreTools', 'More Tools')}</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>
                {t('contextMenuSavePageAs', 'Save Page As...')}
                <ContextMenuShortcut>Cmd+S</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>{t('contextMenuCreateShortcut', 'Create Shortcut...')}</ContextMenuItem>
              <ContextMenuItem>{t('contextMenuNameWindow', 'Name Window...')}</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>{t('contextMenuDeveloperTools', 'Developer Tools')}</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem checked>
            {t('contextMenuShowBookmarksBar', 'Show Bookmarks Bar')}
            <ContextMenuShortcut>Cmd+Shift+B</ContextMenuShortcut>
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem>{t('contextMenuShowFullURLs', 'Show Full URLs')}</ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuRadioGroup value="pedro">
            <ContextMenuLabel inset>{t('contextMenuPeople', 'People')}</ContextMenuLabel>
            <ContextMenuSeparator />
            <ContextMenuRadioItem value="pedro">
              Pedro Duarte
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  );
}

// ============================================================================
// Exports
// ============================================================================

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
  ContextMenuDemo,
};