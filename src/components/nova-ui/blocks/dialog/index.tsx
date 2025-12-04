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
 *
 * 架构：
 * - L1 (功能层): 静态定义，保证组件功能正常
 * - L2 (主题层): 从 useTheme 获取，控制视觉风格
 * - L3 (实例层): 用户传入的 className/classNames
 *
 * 优先级: L3 > L2 > L1 (通过 twMerge 解决冲突)
 */

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { Button } from '@/components/nova-ui/atmos/button';
import { useTheme } from '@/lib/themes/use-theme';
import { useI18n } from '@/lib/i18n/use-i18n';

// ============================================================================ 
// 依赖声明（用于导出时收集）
// ============================================================================ 

export const dialogAtoms = ['button'] as const;

// ============================================================================ 
// L1: 静态样式定义（功能层）
// ============================================================================ 

const dialogBase = tv({
  slots: {
    overlay: [
      'fixed inset-0 z-50 bg-black/50',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    ],
    content: [
      'fixed top-[50%] left-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%]',
      'gap-4 duration-200',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
    ],
    header: 'flex flex-col gap-2 text-center sm:text-left',
    title: 'leading-none tracking-tight',
    description: '',
    footer: 'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
    close: [
      'absolute right-4 top-4 opacity-70 transition-opacity',
      'hover:opacity-100 focus:outline-none disabled:pointer-events-none',
    ],
  },
  variants: {
    size: {
      sm: { content: 'max-w-sm' },
      default: { content: 'max-w-lg' },
      lg: { content: 'max-w-2xl' },
      xl: { content: 'max-w-4xl' },
      full: { content: 'max-w-[calc(100%-2rem)]' },
    },
  },
  defaultVariants: {
    size: 'default',
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
// Context
// ============================================================================ 

interface DialogContextValue {
  size: DialogVariants['size'];
}

const DialogContext = React.createContext<DialogContextValue>({
  size: 'default',
});

const useDialogContext = () => React.useContext(DialogContext);

// ============================================================================ 
// Types
// ============================================================================ 

export type DialogVariants = VariantProps<typeof dialogBase>;
export type DialogSlots = keyof typeof dialogBase.slots;
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
  extends React.ComponentProps<typeof DialogPrimitive.Title> {
  classNames?: DialogClassNames;
}

export interface DialogDescriptionProps
  extends React.ComponentProps<typeof DialogPrimitive.Description> {
  classNames?: DialogClassNames;
}

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
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  const { size } = useDialogContext();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Dialog;

  // L1
  const base = dialogBase({ size });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.overlay);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.size?.[size]?.overlay);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, size]);

  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={twMerge(
        base.overlay(),
        themeStyles.slot,
        themeStyles.variant,
        className
      )}
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

  // L1
  const base = dialogBase({ size });

  // L2
  const themeStyles = React.useMemo(() => {
    const contentSlot = toClassString(themeConfig?.slots?.content);
    const closeSlot = toClassString(themeConfig?.slots?.close);
    // @ts-ignore
    const variantContent = toClassString(themeConfig?.variants?.size?.[size]?.content);
    // @ts-ignore
    const variantClose = toClassString(themeConfig?.variants?.size?.[size]?.close);
    
    return { 
      content: { slot: contentSlot, variant: variantContent },
      close: { slot: closeSlot, variant: variantClose }
    };
  }, [themeConfig, size]);

  return (
    <DialogContext.Provider value={{ size }}>
      <DialogPortal>
        <DialogOverlay />
        <DialogPrimitive.Content
          data-slot="dialog-content"
          data-size={size}
          className={twMerge(
            base.content(),
            themeStyles.content.slot,
            themeStyles.content.variant,
            classNames?.content,
            className
          )}
          {...props}
        >
          {children}
          {showClose && (
            <DialogPrimitive.Close
              data-slot="dialog-close-button"
              className={twMerge(
                base.close(),
                themeStyles.close.slot,
                themeStyles.close.variant,
                classNames?.close
              )}
            >
              <XIcon className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
          )}
        </DialogPrimitive.Content>
      </DialogPortal>
    </DialogContext.Provider>
  );
}

// ============================================================================ 
// Dialog Header
// ============================================================================ 

function DialogHeader({ className, classNames, ...props }: DialogHeaderProps) {
  const { size } = useDialogContext();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Dialog;

  // L1
  const base = dialogBase({ size });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.header);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.size?.[size]?.header);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, size]);

  return (
    <div
      data-slot="dialog-header"
      className={twMerge(
        base.header(),
        themeStyles.slot,
        themeStyles.variant,
        classNames?.header,
        className
      )}
      {...props}
    />
  );
}

// ============================================================================ 
// Dialog Footer
// ============================================================================ 

function DialogFooter({ className, classNames, ...props }: DialogFooterProps) {
  const { size } = useDialogContext();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Dialog;

  // L1
  const base = dialogBase({ size });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.footer);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.size?.[size]?.footer);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, size]);

  return (
    <div
      data-slot="dialog-footer"
      className={twMerge(
        base.footer(),
        themeStyles.slot,
        themeStyles.variant,
        classNames?.footer,
        className
      )}
      {...props}
    />
  );
}

// ============================================================================ 
// Dialog Title
// ============================================================================ 

function DialogTitle({ className, classNames, ...props }: DialogTitleProps) {
  const { size } = useDialogContext();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Dialog;

  // L1
  const base = dialogBase({ size });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.title);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.size?.[size]?.title);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, size]);

  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={twMerge(
        base.title(),
        themeStyles.slot,
        themeStyles.variant,
        classNames?.title,
        className
      )}
      {...props}
    />
  );
}

// ============================================================================ 
// Dialog Description
// ============================================================================ 

function DialogDescription({ className, classNames, ...props }: DialogDescriptionProps) {
  const { size } = useDialogContext();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Dialog;

  // L1
  const base = dialogBase({ size });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.description);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.size?.[size]?.description);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, size]);

  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={twMerge(
        base.description(),
        themeStyles.slot,
        themeStyles.variant,
        classNames?.description,
        className
      )}
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