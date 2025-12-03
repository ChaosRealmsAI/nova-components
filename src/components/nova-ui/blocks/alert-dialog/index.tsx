'use client';

/**
 * AlertDialog Block
 *
 * 警告对话框组件，用于需要用户确认的危险操作。
 *
 * Architecture Notes:
 * - Block 组件，依赖 Atoms: dialog, button
 * - 不支持用户可配特效（通过内部 Atoms 获得）
 * - 提供 default 和 destructive 两种语义变体
 */

import * as React from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { tv, type VariantProps } from 'tailwind-variants';
import { Button } from '@/components/nova-ui/atmos/button';
import { useTheme } from '@/lib/themes/use-theme';
import { useI18n } from '@/lib/i18n/use-i18n';
import { alertDialogBaseConfig } from './alert-dialog.config';

// ============================================================================
// 依赖声明（用于导出时收集）
// ============================================================================

export const alertDialogAtoms = ['button', 'dialog'] as const;

export { alertDialogBaseConfig };

// ============================================================================
// Types
// ============================================================================

export type AlertDialogVariants = VariantProps<ReturnType<typeof tv>>;
export type AlertDialogSlots = keyof typeof alertDialogBaseConfig.slots;
export type AlertDialogClassNames = Partial<Record<AlertDialogSlots, string>>;

export interface AlertDialogProps
  extends React.ComponentProps<typeof AlertDialogPrimitive.Root> {}

export interface AlertDialogContentProps
  extends React.ComponentProps<typeof AlertDialogPrimitive.Content> {
  variant?: 'default' | 'destructive';
}

export interface AlertDialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  classNames?: AlertDialogClassNames;
}

export interface AlertDialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  classNames?: AlertDialogClassNames;
}

export interface AlertDialogTitleProps
  extends React.ComponentProps<typeof AlertDialogPrimitive.Title> {}

export interface AlertDialogDescriptionProps
  extends React.ComponentProps<typeof AlertDialogPrimitive.Description> {}

export interface AlertDialogActionProps
  extends React.ComponentProps<typeof AlertDialogPrimitive.Action> {
  variant?: 'default' | 'destructive';
}

export interface AlertDialogCancelProps
  extends React.ComponentProps<typeof AlertDialogPrimitive.Cancel> {}

export interface AlertDialogDemoProps {
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive';
  confirmLabel?: string;
  cancelLabel?: string;
}

// ============================================================================
// AlertDialog Root
// ============================================================================

function AlertDialog({ ...props }: AlertDialogProps) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />;
}

// ============================================================================
// AlertDialog Trigger
// ============================================================================

function AlertDialogTrigger({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>) {
  return <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />;
}

// ============================================================================
// AlertDialog Portal
// ============================================================================

function AlertDialogPortal({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Portal>) {
  return <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />;
}

// ============================================================================
// AlertDialog Overlay
// ============================================================================

function AlertDialogOverlay({
  className,
  variant = 'default',
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Overlay> & { variant?: 'default' | 'destructive' }) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.AlertDialog;

  const styles = tv({
    extend: alertDialogBaseConfig,
    ...(themeConfig || {}),
  });

  const { overlay } = styles({ variant });

  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={overlay({ className })}
      {...props}
    />
  );
}

// ============================================================================
// AlertDialog Content
// ============================================================================

function AlertDialogContent({
  className,
  variant = 'default',
  ...props
}: AlertDialogContentProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.AlertDialog;

  const styles = tv({
    extend: alertDialogBaseConfig,
    ...(themeConfig || {}),
  });

  const { content } = styles({ variant });

  return (
    <AlertDialogPortal>
      <AlertDialogOverlay variant={variant} />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        data-variant={variant}
        className={content({ className })}
        {...props}
      />
    </AlertDialogPortal>
  );
}

// ============================================================================
// AlertDialog Header
// ============================================================================

function AlertDialogHeader({ className, classNames, variant = 'default', ...props }: AlertDialogHeaderProps & { variant?: 'default' | 'destructive' }) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.AlertDialog;

  const styles = tv({
    extend: alertDialogBaseConfig,
    ...(themeConfig || {}),
  });

  const { header } = styles({ variant });

  return (
    <div
      data-slot="alert-dialog-header"
      className={header({ className: classNames?.header || className })}
      {...props}
    />
  );
}

// ============================================================================
// AlertDialog Footer
// ============================================================================

function AlertDialogFooter({ className, classNames, variant = 'default', ...props }: AlertDialogFooterProps & { variant?: 'default' | 'destructive' }) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.AlertDialog;

  const styles = tv({
    extend: alertDialogBaseConfig,
    ...(themeConfig || {}),
  });

  const { footer } = styles({ variant });

  return (
    <div
      data-slot="alert-dialog-footer"
      className={footer({ className: classNames?.footer || className })}
      {...props}
    />
  );
}

// ============================================================================
// AlertDialog Title
// ============================================================================

function AlertDialogTitle({ className, variant = 'default', ...props }: AlertDialogTitleProps & { variant?: 'default' | 'destructive' }) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.AlertDialog;

  const styles = tv({
    extend: alertDialogBaseConfig,
    ...(themeConfig || {}),
  });

  const { title } = styles({ variant });

  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={title({ className })}
      {...props}
    />
  );
}

// ============================================================================
// AlertDialog Description
// ============================================================================

function AlertDialogDescription({ className, variant = 'default', ...props }: AlertDialogDescriptionProps & { variant?: 'default' | 'destructive' }) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.AlertDialog;

  const styles = tv({
    extend: alertDialogBaseConfig,
    ...(themeConfig || {}),
  });

  const { description } = styles({ variant });

  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={description({ className })}
      {...props}
    />
  );
}

// ============================================================================
// AlertDialog Action (Confirm Button)
// ============================================================================

function AlertDialogAction({
  className,
  variant = 'default',
  children,
  ...props
}: AlertDialogActionProps) {
  return (
    <AlertDialogPrimitive.Action asChild {...props}>
      <Button variant={variant === 'destructive' ? 'destructive' : 'default'} className={className}>
        {children}
      </Button>
    </AlertDialogPrimitive.Action>
  );
}

// ============================================================================
// AlertDialog Cancel
// ============================================================================

function AlertDialogCancel({ className, children, ...props }: AlertDialogCancelProps) {
  return (
    <AlertDialogPrimitive.Cancel asChild {...props}>
      <Button variant="outline" className={className}>
        {children}
      </Button>
    </AlertDialogPrimitive.Cancel>
  );
}

// ============================================================================
// AlertDialog Demo (用于画布展示)
// ============================================================================

function AlertDialogDemo({
  title,
  description,
  variant = 'default',
  confirmLabel,
  cancelLabel,
}: AlertDialogDemoProps) {
  const [open, setOpen] = React.useState(false);
  const { t } = useI18n();

  const displayTitle = title || t('alertDialogTitleDefault', 'Are you absolutely sure?');
  const displayDescription = description || t('alertDialogDescriptionDefault', 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.');
  const displayConfirmLabel = confirmLabel || t('alertDialogConfirm', 'Continue');
  const displayCancelLabel = cancelLabel || t('alertDialogCancel', 'Cancel');
  const triggerLabel = variant === 'destructive'
    ? t('alertDialogDeleteAccount', 'Delete Account')
    : t('alertDialogOpenAlert', 'Open Alert');

  return (
    <div className="flex items-center justify-center w-full h-full">
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
          <Button variant={variant === 'destructive' ? 'destructive' : 'outline'}>
            {triggerLabel}
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent variant={variant}>
          <AlertDialogHeader>
            <AlertDialogTitle>{displayTitle}</AlertDialogTitle>
            <AlertDialogDescription>{displayDescription}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{displayCancelLabel}</AlertDialogCancel>
            <AlertDialogAction variant={variant}>{displayConfirmLabel}</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

// ============================================================================
// Exports
// ============================================================================

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogDemo,
};
