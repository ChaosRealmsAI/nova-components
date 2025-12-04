'use client';

/**
 * Sheet Block
 *
 * 侧边抽屉组件，从屏幕边缘滑入的面板。
 *
 * Architecture Notes:
 * - Block 组件，依赖 Atoms: dialog
 * - 不支持用户可配特效
 * - 提供 4 个方向变体: top, right, bottom, left
 *
 * 架构：
 * - L1 (功能层): 静态定义，保证组件功能正常 (组件外部定义)
 * - L2 (主题层): 从 useTheme 获取，控制视觉风格
 * - L3 (实例层): 用户传入的 className/classNames
 *
 * 优先级: L3 > L2 > L1 (通过 twMerge 解决冲突)
 */

import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes/use-theme';
import { Button } from '@/components/nova-ui/atmos/button';

// ============================================================================
// 依赖声明（用于导出时收集）
// ============================================================================

export const sheetAtoms = ['dialog', 'button'] as const;

// ============================================================================
// L1: 静态样式定义（功能层）
// ============================================================================

const sheetBase = tv({
  slots: {
    overlay: [
      'fixed inset-0 z-50',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    ],
    content: [
      'fixed z-50 flex flex-col shadow-lg',
      'transition ease-in-out',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:duration-300 data-[state=open]:duration-500',
    ],
    close: [
      'absolute top-4 right-4 opacity-70',
      'transition-opacity hover:opacity-100',
      'focus:outline-none',
      'disabled:pointer-events-none',
    ],
    header: 'flex flex-col',
    footer: 'mt-auto flex flex-col',
    title: '',
    description: '',
  },
  variants: {
    side: {
      right: {
        content: [
          'inset-y-0 right-0 h-full w-3/4 sm:max-w-sm',
          'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right',
        ],
      },
      left: {
        content: [
          'inset-y-0 left-0 h-full w-3/4 sm:max-w-sm',
          'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left',
        ],
      },
      top: {
        content: [
          'inset-x-0 top-0 h-auto',
          'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        ],
      },
      bottom: {
        content: [
          'inset-x-0 bottom-0 h-auto',
          'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        ],
      },
    },
  },
  defaultVariants: {
    side: 'right',
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

interface SheetContextValue {
  side: SheetSide;
}

const SheetContext = React.createContext<SheetContextValue>({
  side: 'right',
});

const useSheetContext = () => React.useContext(SheetContext);

// ============================================================================
// Types
// ============================================================================

export type SheetVariants = VariantProps<typeof sheetBase>;
export type SheetSlots = keyof typeof sheetBase.slots;
export type SheetClassNames = Partial<Record<SheetSlots, string>>;
export type SheetSide = NonNullable<SheetVariants['side']>;

export interface SheetProps extends React.ComponentProps<typeof SheetPrimitive.Root> {}

export interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> {
  side?: SheetSide;
  classNames?: SheetClassNames;
}

export interface SheetHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  classNames?: SheetClassNames;
}

export interface SheetFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  classNames?: SheetClassNames;
}

export interface SheetTitleProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title> {
  classNames?: SheetClassNames;
}

export interface SheetDescriptionProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description> {
  classNames?: SheetClassNames;
}

export interface SheetDemoProps {
  title?: string;
  description?: string;
  side?: SheetSide;
  triggerLabel?: string;
}

// ============================================================================
// Sheet Root
// ============================================================================

function Sheet({ ...props }: SheetProps) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

// ============================================================================
// Sheet Trigger
// ============================================================================

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

// ============================================================================
// Sheet Close
// ============================================================================

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

// ============================================================================
// Sheet Portal
// ============================================================================

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

// ============================================================================
// Sheet Overlay
// ============================================================================

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay> & { classNames?: SheetClassNames }
>(({ className, classNames, ...props }, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Sheet;
  
  // L1
  const base = sheetBase();

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.overlay);
    return { slot: slotStyle };
  }, [themeConfig]);

  return (
    <SheetPrimitive.Overlay
      ref={ref}
      data-slot="sheet-overlay"
      className={twMerge(
        base.overlay(),
        themeStyles.slot,
        classNames?.overlay,
        className
      )}
      {...props}
    />
  );
});
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

// ============================================================================
// Sheet Content
// ============================================================================

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ className, classNames, side = 'right', children, ...props }, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Sheet;
  
  // L1
  const base = sheetBase({ side });

  // L2
  const themeStyles = React.useMemo(() => {
    const contentSlot = toClassString(themeConfig?.slots?.content);
    const closeSlot = toClassString(themeConfig?.slots?.close);
    // @ts-ignore
    const variantContent = toClassString(themeConfig?.variants?.side?.[side]?.content);
    
    return { 
      content: { slot: contentSlot, variant: variantContent },
      close: { slot: closeSlot }
    };
  }, [themeConfig, side]);

  return (
    <SheetContext.Provider value={{ side }}>
      <SheetPortal>
        <SheetOverlay />
        <SheetPrimitive.Content
          ref={ref}
          data-slot="sheet-content"
          data-side={side}
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
          <SheetPrimitive.Close
            className={twMerge(
              base.close(),
              themeStyles.close.slot,
              classNames?.close
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
            <span className="sr-only">Close</span>
          </SheetPrimitive.Close>
        </SheetPrimitive.Content>
      </SheetPortal>
    </SheetContext.Provider>
  );
});
SheetContent.displayName = 'SheetContent';

// ============================================================================
// Sheet Header
// ============================================================================

function SheetHeader({ className, classNames, ...props }: SheetHeaderProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Sheet;
  
  // L1
  const base = sheetBase();

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.header);
    return { slot: slotStyle };
  }, [themeConfig]);

  return (
    <div
      data-slot="sheet-header"
      className={twMerge(
        base.header(),
        themeStyles.slot,
        classNames?.header,
        className
      )}
      {...props}
    />
  );
}

// ============================================================================
// Sheet Footer
// ============================================================================

function SheetFooter({ className, classNames, ...props }: SheetFooterProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Sheet;
  
  // L1
  const base = sheetBase();

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.footer);
    return { slot: slotStyle };
  }, [themeConfig]);

  return (
    <div
      data-slot="sheet-footer"
      className={twMerge(
        base.footer(),
        themeStyles.slot,
        classNames?.footer,
        className
      )}
      {...props}
    />
  );
}

// ============================================================================
// Sheet Title
// ============================================================================

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  SheetTitleProps
>(({ className, classNames, ...props }, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Sheet;
  
  // L1
  const base = sheetBase();

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.title);
    return { slot: slotStyle };
  }, [themeConfig]);

  return (
    <SheetPrimitive.Title
      ref={ref}
      data-slot="sheet-title"
      className={twMerge(
        base.title(),
        themeStyles.slot,
        classNames?.title,
        className
      )}
      {...props}
    />
  );
});
SheetTitle.displayName = SheetPrimitive.Title.displayName;

// ============================================================================
// Sheet Description
// ============================================================================

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  SheetDescriptionProps
>(({ className, classNames, ...props }, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Sheet;
  
  // L1
  const base = sheetBase();

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.description);
    return { slot: slotStyle };
  }, [themeConfig]);

  return (
    <SheetPrimitive.Description
      ref={ref}
      data-slot="sheet-description"
      className={twMerge(
        base.description(),
        themeStyles.slot,
        classNames?.description,
        className
      )}
      {...props}
    />
  );
});
SheetDescription.displayName = SheetPrimitive.Description.displayName;

// ============================================================================
// Sheet Demo (用于画布展示)
// ============================================================================

function SheetDemo({
  title = 'Edit Profile',
  description = 'Make changes to your profile here. Click save when done.',
  side = 'right',
  triggerLabel = 'Open Sheet',
}: SheetDemoProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex items-center justify-center w-full h-full">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline">{triggerLabel}</Button>
        </SheetTrigger>
        <SheetContent side={side}>
          <SheetHeader>
            <SheetTitle>{title}</SheetTitle>
            <SheetDescription>{description}</SheetDescription>
          </SheetHeader>
          <div className="flex-1 p-4">
            <p className="text-muted-foreground text-sm">
              Sheet content goes here.
            </p>
          </div>
          <SheetFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Save changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

// ============================================================================
// Exports
// ============================================================================

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetPortal,
  SheetOverlay,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetDemo,
};