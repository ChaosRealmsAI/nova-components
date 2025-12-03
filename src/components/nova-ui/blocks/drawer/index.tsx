'use client';

/**
 * Drawer Block
 *
 * 抽屉面板组件，支持从四个方向滑入。
 * 使用 vaul 库实现，提供流畅的拖拽关闭体验。
 *
 * Architecture Notes:
 * - Block 组件，依赖 Atoms: button, dialog
 * - 不支持用户可配特效（通过内部 Atoms 获得）
 * - 提供 bottom, top, left, right 四种方向变体
 */

import * as React from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';
import { tv, type VariantProps } from 'tailwind-variants';
import { Button } from '@/components/nova-ui/atmos/button';
import { useTheme } from '@/lib/themes/use-theme';
import { drawerBaseConfig } from './drawer.config';

// ============================================================================
// 依赖声明（用于导出时收集）
// ============================================================================

export const drawerAtoms = ['button', 'dialog'] as const;

export { drawerBaseConfig };

// ============================================================================
// Types
// ============================================================================

export type DrawerDirection = 'top' | 'bottom' | 'left' | 'right';
export type DrawerVariants = VariantProps<ReturnType<typeof tv>>;
export type DrawerSlots = keyof typeof drawerBaseConfig.slots;
export type DrawerClassNames = Partial<Record<DrawerSlots, string>>;

export type DrawerRootProps = React.ComponentProps<typeof DrawerPrimitive.Root>;

export interface DrawerBaseProps {
  direction?: DrawerDirection;
  children?: React.ReactNode;
}

export type DrawerProps = DrawerRootProps & DrawerBaseProps;

export interface DrawerContentProps
  extends React.ComponentProps<typeof DrawerPrimitive.Content> {
  direction?: DrawerDirection;
}

export interface DrawerHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  classNames?: DrawerClassNames;
}

export interface DrawerFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  classNames?: DrawerClassNames;
}

export interface DrawerTitleProps
  extends React.ComponentProps<typeof DrawerPrimitive.Title> {
  direction?: DrawerDirection;
}

export interface DrawerDescriptionProps
  extends React.ComponentProps<typeof DrawerPrimitive.Description> {
  direction?: DrawerDirection;
}

export interface DrawerDemoProps {
  title?: string;
  description?: string;
  direction?: DrawerDirection;
  triggerLabel?: string;
  closeLabel?: string;
}

// ============================================================================
// Drawer Root
// ============================================================================

function Drawer({ direction = 'bottom', ...props }: DrawerProps) {
  return (
    <DrawerPrimitive.Root
      data-slot="drawer"
      direction={direction}
      {...props}
    />
  );
}

// ============================================================================
// Drawer Trigger
// ============================================================================

function DrawerTrigger({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
}

// ============================================================================
// Drawer Portal
// ============================================================================

function DrawerPortal({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Portal>) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />;
}

// ============================================================================
// Drawer Close
// ============================================================================

function DrawerClose({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Close>) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
}

// ============================================================================
// Drawer Overlay
// ============================================================================

function DrawerOverlay({
  className,
  direction = 'bottom',
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay> & { direction?: DrawerDirection }) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Drawer;

  const styles = tv({
    extend: drawerBaseConfig,
    ...(themeConfig || {}),
  });

  const { overlay } = styles({ direction });

  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={overlay({ className })}
      {...props}
    />
  );
}

// ============================================================================
// Drawer Content
// ============================================================================

function DrawerContent({
  className,
  direction = 'bottom',
  children,
  ...props
}: DrawerContentProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Drawer;

  const styles = tv({
    extend: drawerBaseConfig,
    ...(themeConfig || {}),
  });

  const { content, handle } = styles({ direction });

  return (
    <DrawerPortal>
      <DrawerOverlay direction={direction} />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        data-direction={direction}
        className={content({ className })}
        {...props}
      >
        {direction === 'bottom' && (
          <div data-slot="drawer-handle" className={handle()} />
        )}
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
}

// ============================================================================
// Drawer Header
// ============================================================================

function DrawerHeader({
  className,
  classNames,
  direction = 'bottom',
  ...props
}: DrawerHeaderProps & { direction?: DrawerDirection }) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Drawer;

  const styles = tv({
    extend: drawerBaseConfig,
    ...(themeConfig || {}),
  });

  const { header } = styles({ direction });

  return (
    <div
      data-slot="drawer-header"
      className={header({ className: classNames?.header || className })}
      {...props}
    />
  );
}

// ============================================================================
// Drawer Footer
// ============================================================================

function DrawerFooter({
  className,
  classNames,
  direction = 'bottom',
  ...props
}: DrawerFooterProps & { direction?: DrawerDirection }) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Drawer;

  const styles = tv({
    extend: drawerBaseConfig,
    ...(themeConfig || {}),
  });

  const { footer } = styles({ direction });

  return (
    <div
      data-slot="drawer-footer"
      className={footer({ className: classNames?.footer || className })}
      {...props}
    />
  );
}

// ============================================================================
// Drawer Title
// ============================================================================

function DrawerTitle({
  className,
  direction = 'bottom',
  ...props
}: DrawerTitleProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Drawer;

  const styles = tv({
    extend: drawerBaseConfig,
    ...(themeConfig || {}),
  });

  const { title } = styles({ direction });

  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={title({ className })}
      {...props}
    />
  );
}

// ============================================================================
// Drawer Description
// ============================================================================

function DrawerDescription({
  className,
  direction = 'bottom',
  ...props
}: DrawerDescriptionProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Drawer;

  const styles = tv({
    extend: drawerBaseConfig,
    ...(themeConfig || {}),
  });

  const { description } = styles({ direction });

  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={description({ className })}
      {...props}
    />
  );
}

// ============================================================================
// Drawer Demo (用于画布展示)
// ============================================================================

function DrawerDemo({
  title = 'Drawer Title',
  description = 'This is a drawer panel that slides in from the edge of the screen.',
  direction = 'bottom',
  triggerLabel = 'Open Drawer',
  closeLabel = 'Close',
}: DrawerDemoProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex items-center justify-center w-full h-full">
      <Drawer open={open} onOpenChange={setOpen} direction={direction}>
        <DrawerTrigger asChild>
          <Button variant="outline">{triggerLabel}</Button>
        </DrawerTrigger>
        <DrawerContent direction={direction}>
          <DrawerHeader direction={direction}>
            <DrawerTitle direction={direction}>{title}</DrawerTitle>
            <DrawerDescription direction={direction}>
              {description}
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter direction={direction}>
            <DrawerClose asChild>
              <Button variant="outline">{closeLabel}</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

// ============================================================================
// Exports
// ============================================================================

export {
  Drawer,
  DrawerTrigger,
  DrawerPortal,
  DrawerOverlay,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerDemo,
};
