'use client';

/**
 * ContextMenu Block
 *
 * 右键菜单组件，用于显示上下文操作。
 * 依赖 Atoms: popover
 */

import * as React from 'react';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/themes/use-theme';
import { useI18n } from '@/lib/i18n/use-i18n';
import { contextMenuBaseConfig } from './context-menu.config';

// ============================================================================
// 依赖声明
// ============================================================================

export const contextMenuAtoms = ['popover'] as const;

export { contextMenuBaseConfig };

// ============================================================================
// Styles
// ============================================================================

const contextMenu = tv(contextMenuBaseConfig);

// ============================================================================
// Types
// ============================================================================

export type ContextMenuVariants = VariantProps<typeof contextMenu>;
export type ContextMenuSlots = keyof typeof contextMenuBaseConfig.slots;
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
  const styles = contextMenu({ variant: 'default' });

  return (
    <ContextMenuPrimitive.SubTrigger
      data-slot="context-menu-sub-trigger"
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
  const styles = contextMenu({ variant: 'default' });

  return (
    <ContextMenuPrimitive.SubContent
      data-slot="context-menu-sub-content"
      className={cn(
        styles.subContent(),
        themeConfig?.slots?.subContent,
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
  const styles = contextMenu({ variant: 'default' });

  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        data-slot="context-menu-content"
        className={cn(
          styles.content(),
          themeConfig?.slots?.content,
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
  const styles = contextMenu({ variant: 'default' });

  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        styles.item(),
        themeConfig?.slots?.item,
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
  const styles = contextMenu({ variant: 'default' });

  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      className={cn(
        styles.checkboxItem(),
        themeConfig?.slots?.checkboxItem,
        className
      )}
      checked={checked}
      {...props}
    >
      <span className={styles.indicator()}>
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
  const styles = contextMenu({ variant: 'default' });

  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
      className={cn(
        styles.radioItem(),
        themeConfig?.slots?.radioItem,
        className
      )}
      {...props}
    >
      <span className={styles.indicator()}>
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
  const styles = contextMenu({ variant: 'default' });

  return (
    <ContextMenuPrimitive.Label
      data-slot="context-menu-label"
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

function ContextMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Separator>) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.ContextMenu;
  const styles = contextMenu({ variant: 'default' });

  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={cn(
        styles.separator(),
        themeConfig?.slots?.separator,
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
  const styles = contextMenu({ variant: 'default' });

  return (
    <span
      data-slot="context-menu-shortcut"
      className={cn(styles.shortcut(), className)}
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
  const styles = contextMenu({ variant: 'default' });
  const { t } = useI18n();

  const displayTriggerText = triggerText || t('contextMenuTrigger', 'Right click here');

  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <ContextMenu>
        <ContextMenuTrigger className={styles.trigger()}>
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
