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
 *
 * 架构：
 * - L1 (功能层): 静态定义，保证组件功能正常
 * - L2 (主题层): 从 useTheme 获取，控制视觉风格
 * - L3 (实例层): 用户传入的 className/classNames
 *
 * 优先级: L3 > L2 > L1 (通过 twMerge 解决冲突)
 */

import * as React from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { Button } from '@/components/nova-ui/atmos/button';
import { useTheme } from '@/lib/themes/use-theme';

// ============================================================================
// 依赖声明（用于导出时收集）
// ============================================================================

export const drawerAtoms = ['button', 'dialog'] as const;

// ============================================================================
// L1: 静态样式定义（功能层）
// ============================================================================

const drawer = tv({
  slots: {
    overlay: 'fixed inset-0 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    content: 'group/drawer-content fixed z-50 flex h-auto flex-col',
    header: 'flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left',
    title: 'font-semibold',
    description: '',
    footer: 'mt-auto flex flex-col gap-2 p-4',
    handle: 'mx-auto mt-4 h-2 w-[100px] shrink-0 rounded-full',
  },
  variants: {
    direction: {
      bottom: {
        content: 'inset-x-0 bottom-0 mt-24 max-h-[80vh]',
        handle: 'block',
      },
      top: {
        content: 'inset-x-0 top-0 mb-24 max-h-[80vh]',
        handle: 'hidden',
      },
      left: {
        content: 'inset-y-0 left-0 w-3/4 sm:max-w-sm',
        handle: 'hidden',
      },
      right: {
        content: 'inset-y-0 right-0 w-3/4 sm:max-w-sm',
        handle: 'hidden',
      },
    },
  },
  defaultVariants: {
    direction: 'bottom',
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

interface DrawerContextValue {
  direction: DrawerDirection;
}

const DrawerContext = React.createContext<DrawerContextValue>({
  direction: 'bottom',
});

const useDrawerContext = () => React.useContext(DrawerContext);

// ============================================================================
// Types
// ============================================================================

export type DrawerDirection = 'top' | 'bottom' | 'left' | 'right';
export type DrawerVariants = VariantProps<typeof drawer>;
export type DrawerSlots = keyof typeof drawer.slots;
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
}

export interface DrawerDescriptionProps
  extends React.ComponentProps<typeof DrawerPrimitive.Description> {
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
    <DrawerContext.Provider value={{ direction }}>
      <DrawerPrimitive.Root
        data-slot="drawer"
        direction={direction}
        {...props}
      />
    </DrawerContext.Provider>
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
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) {
  const { direction } = useDrawerContext();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Drawer;
  
  // L1
  const styles = drawer({ direction });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.overlay);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.direction?.[direction]?.overlay);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, direction]);

  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={twMerge(
        styles.overlay(),
        themeStyles.slot,
        themeStyles.variant,
        className
      )}
      {...props}
    />
  );
}

// ============================================================================
// Drawer Content
// ============================================================================

function DrawerContent({
  className,
  children,
  ...props
}: DrawerContentProps) {
  const { direction } = useDrawerContext();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Drawer;
  
  // L1
  const styles = drawer({ direction });

  // L2
  const themeStyles = React.useMemo(() => {
    const contentSlot = toClassString(themeConfig?.slots?.content);
    const handleSlot = toClassString(themeConfig?.slots?.handle);
    // @ts-ignore
    const variantContent = toClassString(themeConfig?.variants?.direction?.[direction]?.content);
    // @ts-ignore
    const variantHandle = toClassString(themeConfig?.variants?.direction?.[direction]?.handle);
    
    return { 
      content: { slot: contentSlot, variant: variantContent },
      handle: { slot: handleSlot, variant: variantHandle }
    };
  }, [themeConfig, direction]);

  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        data-direction={direction}
        className={twMerge(
          styles.content(),
          themeStyles.content.slot,
          themeStyles.content.variant,
          className
        )}
        {...props}
      >
        {direction === 'bottom' && (
          <div 
            data-slot="drawer-handle" 
            className={twMerge(
              styles.handle(),
              themeStyles.handle.slot,
              themeStyles.handle.variant
            )} 
          />
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
  ...props
}: DrawerHeaderProps) {
  const { direction } = useDrawerContext();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Drawer;
  
  // L1
  const styles = drawer({ direction });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.header);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.direction?.[direction]?.header);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, direction]);

  return (
    <div
      data-slot="drawer-header"
      className={twMerge(
        styles.header(),
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
// Drawer Footer
// ============================================================================

function DrawerFooter({
  className,
  classNames,
  ...props
}: DrawerFooterProps) {
  const { direction } = useDrawerContext();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Drawer;
  
  // L1
  const styles = drawer({ direction });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.footer);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.direction?.[direction]?.footer);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, direction]);

  return (
    <div
      data-slot="drawer-footer"
      className={twMerge(
        styles.footer(),
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
// Drawer Title
// ============================================================================

function DrawerTitle({
  className,
  ...props
}: DrawerTitleProps) {
  const { direction } = useDrawerContext();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Drawer;
  
  // L1
  const styles = drawer({ direction });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.title);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.direction?.[direction]?.title);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, direction]);

  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={twMerge(
        styles.title(),
        themeStyles.slot,
        themeStyles.variant,
        className
      )}
      {...props}
    />
  );
}

// ============================================================================
// Drawer Description
// ============================================================================

function DrawerDescription({
  className,
  ...props
}: DrawerDescriptionProps) {
  const { direction } = useDrawerContext();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Drawer;
  
  // L1
  const styles = drawer({ direction });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.description);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.direction?.[direction]?.description);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, direction]);

  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={twMerge(
        styles.description(),
        themeStyles.slot,
        themeStyles.variant,
        className
      )}
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
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerDescription>
              {description}
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
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
