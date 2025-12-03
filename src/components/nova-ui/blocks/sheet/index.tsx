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
 */

import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/themes/use-theme';
import { Button } from '@/components/nova-ui/atmos/button';
import { sheetBaseConfig } from './sheet.config';

// ============================================================================
// 依赖声明（用于导出时收集）
// ============================================================================

export const sheetAtoms = ['dialog', 'button'] as const;

export { sheetBaseConfig };

// ============================================================================
// Types
// ============================================================================

export type SheetVariants = VariantProps<ReturnType<typeof tv>>;
export type SheetSlots = keyof typeof sheetBaseConfig.slots;
export type SheetClassNames = Partial<Record<SheetSlots, string>>;
export type SheetSide = 'top' | 'right' | 'bottom' | 'left';

export interface SheetProps extends React.ComponentProps<typeof SheetPrimitive.Root> {}

export interface SheetContentProps
  extends React.ComponentProps<typeof SheetPrimitive.Content> {
  side?: SheetSide;
  classNames?: SheetClassNames;
}

export interface SheetHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface SheetFooterProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface SheetTitleProps extends React.ComponentProps<typeof SheetPrimitive.Title> {}
export interface SheetDescriptionProps extends React.ComponentProps<typeof SheetPrimitive.Description> {}

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

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Sheet;

  const styles = tv({
    extend: sheetBaseConfig,
    ...(themeConfig || {}),
  });

  const { overlay } = styles({});

  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(overlay(), className)}
      {...props}
    />
  );
}

// ============================================================================
// Sheet Content
// ============================================================================

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ className, classNames, side = 'right', children, ...props }, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Sheet;

  const styles = tv({
    extend: sheetBaseConfig,
    ...(themeConfig || {}),
  });

  const { content, close } = styles({ side });

  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        ref={ref}
        data-slot="sheet-content"
        data-side={side}
        className={cn(content(), classNames?.content, className)}
        {...props}
      >
        {children}
        <SheetPrimitive.Close
          className={cn(close(), classNames?.close)}
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
  );
});
SheetContent.displayName = 'SheetContent';

// ============================================================================
// Sheet Header
// ============================================================================

function SheetHeader({ className, ...props }: SheetHeaderProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Sheet;

  const styles = tv({
    extend: sheetBaseConfig,
    ...(themeConfig || {}),
  });

  const { header } = styles({});

  return (
    <div
      data-slot="sheet-header"
      className={cn(header(), className)}
      {...props}
    />
  );
}

// ============================================================================
// Sheet Footer
// ============================================================================

function SheetFooter({ className, ...props }: SheetFooterProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Sheet;

  const styles = tv({
    extend: sheetBaseConfig,
    ...(themeConfig || {}),
  });

  const { footer } = styles({});

  return (
    <div
      data-slot="sheet-footer"
      className={cn(footer(), className)}
      {...props}
    />
  );
}

// ============================================================================
// Sheet Title
// ============================================================================

function SheetTitle({ className, ...props }: SheetTitleProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Sheet;

  const styles = tv({
    extend: sheetBaseConfig,
    ...(themeConfig || {}),
  });

  const { title } = styles({});

  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn(title(), className)}
      {...props}
    />
  );
}

// ============================================================================
// Sheet Description
// ============================================================================

function SheetDescription({ className, ...props }: SheetDescriptionProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Sheet;

  const styles = tv({
    extend: sheetBaseConfig,
    ...(themeConfig || {}),
  });

  const { description } = styles({});

  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn(description(), className)}
      {...props}
    />
  );
}

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
