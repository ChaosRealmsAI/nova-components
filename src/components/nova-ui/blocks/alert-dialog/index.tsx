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
 *
 * 架构：
 * - L1 (功能层): 静态定义，保证组件功能正常 (组件外部定义)
 * - L2 (主题层): 从 useTheme 获取，控制视觉风格
 * - L3 (实例层): 用户传入的 className/classNames
 *
 * 优先级: L3 > L2 > L1 (通过 twMerge 解决冲突)
 */

import * as React from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { Button } from '@/components/nova-ui/atmos/button';
import { useTheme } from '@/lib/themes/use-theme';
import { useI18n } from '@/lib/i18n/use-i18n';

// ============================================================================
// 依赖声明（用于导出时收集）
// ============================================================================

export const alertDialogAtoms = ['button', 'dialog'] as const;

// ============================================================================
// L1: 静态样式定义（功能层）
// ============================================================================

const alertDialogBase = tv({
  slots: {
    overlay: [
      'fixed inset-0 z-50',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    ],
    content: [
      'fixed top-[50%] left-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%]',
      'gap-4 p-6 shadow-lg duration-200',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
    ],
    header: 'flex flex-col gap-2 text-center sm:text-left',
    title: 'leading-none font-semibold',
    description: '',
    footer: 'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
  },
  variants: {
    variant: {
      default: {
        content: '',
        title: '',
      },
      destructive: {
        content: 'border-destructive',
        title: 'text-destructive',
      },
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
// Context
// ============================================================================

interface AlertDialogContextValue {
  variant: AlertDialogContentProps['variant'];
}

const AlertDialogContext = React.createContext<AlertDialogContextValue>({
  variant: 'default',
});

const useAlertDialogContext = () => React.useContext(AlertDialogContext);

// ============================================================================
// Types
// ============================================================================

export type AlertDialogVariants = VariantProps<typeof alertDialogBase>;
export type AlertDialogSlots = keyof typeof alertDialogBase.slots;
export type AlertDialogClassNames = Partial<Record<AlertDialogSlots, string>>;

export interface AlertDialogProps
  extends React.ComponentProps<typeof AlertDialogPrimitive.Root> {}

export interface AlertDialogContentProps
  extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content> {
  variant?: 'default' | 'destructive';
  classNames?: AlertDialogClassNames;
}

export interface AlertDialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  classNames?: AlertDialogClassNames;
}

export interface AlertDialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  classNames?: AlertDialogClassNames;
}

export interface AlertDialogTitleProps
  extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title> {
  classNames?: AlertDialogClassNames;
}

export interface AlertDialogDescriptionProps
  extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description> {
  classNames?: AlertDialogClassNames;
}

export interface AlertDialogActionProps
  extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action> {
  variant?: 'default' | 'destructive';
}

export interface AlertDialogCancelProps
  extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel> {}

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

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => {
  const { variant } = useAlertDialogContext();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.AlertDialog;
  
  // L1
  const base = alertDialogBase({ variant });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.overlay);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.overlay);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, variant]);

  return (
    <AlertDialogPrimitive.Overlay
      ref={ref}
      data-slot="alert-dialog-overlay"
      className={twMerge(
        base.overlay(),
        themeStyles.slot,
        themeStyles.variant,
        className
      )}
      {...props}
    />
  );
});
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

// ============================================================================
// AlertDialog Content
// ============================================================================

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  AlertDialogContentProps
>(({ className, classNames, variant = 'default', children, ...props }, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.AlertDialog;
  
  // L1
  const base = alertDialogBase({ variant });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.content);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.content);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, variant]);

  return (
    <AlertDialogContext.Provider value={{ variant }}>
      <AlertDialogPortal>
        <AlertDialogOverlay />
        <AlertDialogPrimitive.Content
          ref={ref}
          data-slot="alert-dialog-content"
          data-variant={variant}
          className={twMerge(
            base.content(),
            themeStyles.slot,
            themeStyles.variant,
            classNames?.content,
            className
          )}
          {...props}
        >
          {children}
        </AlertDialogPrimitive.Content>
      </AlertDialogPortal>
    </AlertDialogContext.Provider>
  );
});
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

// ============================================================================
// AlertDialog Header
// ============================================================================

function AlertDialogHeader({
  className,
  classNames,
  ...props
}: AlertDialogHeaderProps) {
  const { variant } = useAlertDialogContext();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.AlertDialog;
  
  // L1
  const base = alertDialogBase({ variant });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.header);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.header);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, variant]);

  return (
    <div
      data-slot="alert-dialog-header"
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
// AlertDialog Footer
// ============================================================================

function AlertDialogFooter({
  className,
  classNames,
  ...props
}: AlertDialogFooterProps) {
  const { variant } = useAlertDialogContext();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.AlertDialog;
  
  // L1
  const base = alertDialogBase({ variant });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.footer);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.footer);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, variant]);

  return (
    <div
      data-slot="alert-dialog-footer"
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
// AlertDialog Title
// ============================================================================

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  AlertDialogTitleProps
>(({ className, classNames, ...props }, ref) => {
  const { variant } = useAlertDialogContext();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.AlertDialog;
  
  // L1
  const base = alertDialogBase({ variant });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.title);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.title);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, variant]);

  return (
    <AlertDialogPrimitive.Title
      ref={ref}
      data-slot="alert-dialog-title"
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
});
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

// ============================================================================
// AlertDialog Description
// ============================================================================

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  AlertDialogDescriptionProps
>(({ className, classNames, ...props }, ref) => {
  const { variant } = useAlertDialogContext();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.AlertDialog;
  
  // L1
  const base = alertDialogBase({ variant });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.description);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.description);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, variant]);

  return (
    <AlertDialogPrimitive.Description
      ref={ref}
      data-slot="alert-dialog-description"
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
});
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;

// ============================================================================
// AlertDialog Action (Confirm Button)
// ============================================================================

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  AlertDialogActionProps
>(({ className, variant: propVariant, children, ...props }, ref) => {
  const { variant: contextVariant } = useAlertDialogContext();
  // Use explicit prop if provided, otherwise infer from context
  const buttonVariant = propVariant || (contextVariant === 'destructive' ? 'destructive' : 'default');

  return (
    <AlertDialogPrimitive.Action asChild ref={ref} {...props}>
      <Button variant={buttonVariant} className={className}>
        {children}
      </Button>
    </AlertDialogPrimitive.Action>
  );
});
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

// ============================================================================
// AlertDialog Cancel
// ============================================================================

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  AlertDialogCancelProps
>(({ className, children, ...props }, ref) => {
  return (
    <AlertDialogPrimitive.Cancel asChild ref={ref} {...props}>
      <Button variant="outline" className={className}>
        {children}
      </Button>
    </AlertDialogPrimitive.Cancel>
  );
});
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

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
            <AlertDialogAction>{displayConfirmLabel}</AlertDialogAction>
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