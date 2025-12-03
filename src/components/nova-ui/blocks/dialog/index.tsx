'use client';

/**
 * Dialog Block
 *
 * 对话框组件，用于显示模态内容。
 *
 * Architecture Notes:
 * - Block 组件，基于 @radix-ui/react-dialog
 * - 不支持用户可配特效（通过内部 Atoms 获得）
 * - 提供多种尺寸变体
 */

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/lib/utils';
import { Button } from '@/components/nova-ui/atmos/button';
import { useTheme } from '@/lib/themes/use-theme';
import { useI18n } from '@/lib/i18n/use-i18n';
import { dialogBaseConfig } from './dialog.config';

// ============================================================================
// 依赖声明（用于导出时收集）
// ============================================================================

export const dialogAtoms = ['button'] as const;

export { dialogBaseConfig };

// ============================================================================
// Styles
// ============================================================================

const dialog = tv(dialogBaseConfig);

// ============================================================================
// Types
// ============================================================================

export type DialogVariants = VariantProps<typeof dialog>;
export type DialogSlots = keyof typeof dialogBaseConfig.slots;
export type DialogClassNames = Partial<Record<DialogSlots, string>>;

export interface DialogProps
  extends React.ComponentProps<typeof DialogPrimitive.Root> {}

export interface DialogContentProps
  extends React.ComponentProps<typeof DialogPrimitive.Content>,
    DialogVariants {
  classNames?: DialogClassNames;
  showClose?: boolean;
}

export interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  classNames?: DialogClassNames;
}

export interface DialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  classNames?: DialogClassNames;
}

export interface DialogTitleProps
  extends React.ComponentProps<typeof DialogPrimitive.Title> {}

export interface DialogDescriptionProps
  extends React.ComponentProps<typeof DialogPrimitive.Description> {}

export interface DialogDemoProps extends DialogVariants {
  title?: string;
  description?: string;
  showClose?: boolean;
}

// ============================================================================
// Dialog Root
// ============================================================================

function Dialog({ ...props }: DialogProps) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

// ============================================================================
// Dialog Trigger
// ============================================================================

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

// ============================================================================
// Dialog Portal
// ============================================================================

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

// ============================================================================
// Dialog Close
// ============================================================================

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

// ============================================================================
// Dialog Overlay
// ============================================================================

function DialogOverlay({
  className,
  size = 'default',
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay> & DialogVariants) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Dialog;

  const styles = tv({
    extend: dialogBaseConfig,
    ...(themeConfig || {}),
  });

  const { overlay } = styles({ size });

  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={overlay({ className })}
      {...props}
    />
  );
}

// ============================================================================
// Dialog Content
// ============================================================================

function DialogContent({
  className,
  classNames,
  size = 'default',
  showClose = true,
  children,
  ...props
}: DialogContentProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Dialog;

  const styles = tv({
    extend: dialogBaseConfig,
    ...(themeConfig || {}),
  });

  const { content, close } = styles({ size });

  return (
    <DialogPortal>
      <DialogOverlay size={size} />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        data-size={size}
        className={cn(content({ className: classNames?.content }), className)}
        {...props}
      >
        {children}
        {showClose && (
          <DialogPrimitive.Close
            data-slot="dialog-close-button"
            className={cn(close(), classNames?.close)}
          >
            <XIcon className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

// ============================================================================
// Dialog Header
// ============================================================================

function DialogHeader({ className, classNames, ...props }: DialogHeaderProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Dialog;

  const styles = tv({
    extend: dialogBaseConfig,
    ...(themeConfig || {}),
  });

  const { header } = styles({});

  return (
    <div
      data-slot="dialog-header"
      className={cn(header(), classNames?.header, className)}
      {...props}
    />
  );
}

// ============================================================================
// Dialog Footer
// ============================================================================

function DialogFooter({ className, classNames, ...props }: DialogFooterProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Dialog;

  const styles = tv({
    extend: dialogBaseConfig,
    ...(themeConfig || {}),
  });

  const { footer } = styles({});

  return (
    <div
      data-slot="dialog-footer"
      className={cn(footer(), classNames?.footer, className)}
      {...props}
    />
  );
}

// ============================================================================
// Dialog Title
// ============================================================================

function DialogTitle({ className, ...props }: DialogTitleProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Dialog;

  const styles = tv({
    extend: dialogBaseConfig,
    ...(themeConfig || {}),
  });

  const { title } = styles({});

  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn(title(), className)}
      {...props}
    />
  );
}

// ============================================================================
// Dialog Description
// ============================================================================

function DialogDescription({ className, ...props }: DialogDescriptionProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Dialog;

  const styles = tv({
    extend: dialogBaseConfig,
    ...(themeConfig || {}),
  });

  const { description } = styles({});

  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn(description(), className)}
      {...props}
    />
  );
}

// ============================================================================
// Dialog Demo (用于画布展示)
// ============================================================================

function DialogDemo({
  title,
  description,
  size = 'default',
  showClose = true,
}: DialogDemoProps) {
  const [open, setOpen] = React.useState(false);
  const { t } = useI18n();

  const displayTitle = title || t('dialogTitleDefault', 'Edit Profile');
  const displayDescription = description || t('dialogDescriptionDefault', 'Make changes to your profile here. Click save when you\'re done.');
  const triggerLabel = t('dialogOpenDialog', 'Open Dialog');
  const saveLabel = t('dialogSave', 'Save changes');

  return (
    <div className="flex items-center justify-center w-full h-full">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">
            {triggerLabel}
          </Button>
        </DialogTrigger>
        <DialogContent size={size} showClose={showClose}>
          <DialogHeader>
            <DialogTitle>{displayTitle}</DialogTitle>
            <DialogDescription>{displayDescription}</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="name" className="text-right text-sm">
                {t('dialogNameLabel', 'Name')}
              </label>
              <input
                id="name"
                defaultValue="Pedro Duarte"
                className="col-span-3 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="username" className="text-right text-sm">
                {t('dialogUsernameLabel', 'Username')}
              </label>
              <input
                id="username"
                defaultValue="@peduarte"
                className="col-span-3 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={() => setOpen(false)}>{saveLabel}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ============================================================================
// Exports
// ============================================================================

export {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogDemo,
};
