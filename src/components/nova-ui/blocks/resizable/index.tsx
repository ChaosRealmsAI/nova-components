'use client';

/**
 * Resizable Block
 *
 * 可调整大小面板组件
 * 依赖: react-resizable-panels
 *
 * Architecture Notes:
 * - Block 组件，无 Atom 依赖
 * - 不支持用户可配特效
 * - 提供默认变体
 *
 * 架构：
 * - L1 (功能层): 静态定义，保证组件功能正常
 * - L2 (主题层): 从 useTheme 获取，控制视觉风格
 * - L3 (实例层): 用户传入的 className/classNames
 *
 * 优先级: L3 > L2 > L1 (通过 twMerge 解决冲突)
 */

import * as React from 'react';
import * as ResizablePrimitive from 'react-resizable-panels';
import { GripVertical } from 'lucide-react';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes';
import { useI18n } from '@/lib/i18n/use-i18n';
import type { MessageKey } from '@/lib/i18n/messages';

// ============================================================================
// 依赖声明（用于导出时收集）
// ============================================================================

export const resizableAtoms = [] as const;

// ============================================================================
// L1: 静态样式定义（功能层）
// ============================================================================

const resizableBase = tv({
  slots: {
    panelGroup: 'flex h-full w-full data-[panel-group-direction=vertical]:flex-col',
    panel: '',
    handle: 'relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 after:content-[""] data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2 [&[data-panel-group-direction=vertical]>div]:rotate-90',
    handleIcon: 'z-10 flex h-4 w-3 items-center justify-center rounded-sm',
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

export type ResizableVariants = VariantProps<typeof resizableBase>;
export type ResizableSlots = keyof typeof resizableBase.slots;
export type ResizableClassNames = Partial<Record<ResizableSlots, string>>;

export interface ResizablePanelGroupProps
  extends React.ComponentProps<typeof ResizablePrimitive.PanelGroup>,
    ResizableVariants {
  classNames?: ResizableClassNames;
}

export interface ResizablePanelProps
  extends React.ComponentProps<typeof ResizablePrimitive.Panel> {
  classNames?: ResizableClassNames;
}

export interface ResizableHandleProps
  extends React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> {
  withHandle?: boolean;
  classNames?: ResizableClassNames;
}

// ============================================================================
// Resizable Panel Group
// ============================================================================

const ResizablePanelGroup = React.forwardRef<
  React.ElementRef<typeof ResizablePrimitive.PanelGroup>,
  ResizablePanelGroupProps
>(({ className, classNames, variant = 'default', ...props }, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Resizable;

  // L1: 功能层
  const base = resizableBase({ variant });

  // L2: 主题层
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.panelGroup);
    // @ts-ignore - Theme config types might be loose
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.panelGroup);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, variant]);

  return (
    <ResizablePrimitive.PanelGroup
      ref={ref}
      data-slot="resizable-panel-group"
      data-variant={variant}
      className={twMerge(
        base.panelGroup(),
        themeStyles.slot,
        themeStyles.variant,
        classNames?.panelGroup,
        className
      )}
      {...props}
    />
  );
});
ResizablePanelGroup.displayName = 'ResizablePanelGroup';

// ============================================================================
// Resizable Panel
// ============================================================================

const ResizablePanel = React.forwardRef<
  React.ElementRef<typeof ResizablePrimitive.Panel>,
  ResizablePanelProps
>(({ className, classNames, ...props }, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Resizable;

  // L1: 功能层
  const base = resizableBase({});

  // L2: 主题层
  const themeStyles = React.useMemo(
    () => toClassString(themeConfig?.slots?.panel),
    [themeConfig]
  );

  return (
    <ResizablePrimitive.Panel
      ref={ref}
      data-slot="resizable-panel"
      className={twMerge(
        base.panel(),
        themeStyles,
        classNames?.panel,
        className
      )}
      {...props}
    />
  );
});
ResizablePanel.displayName = 'ResizablePanel';

// ============================================================================
// Resizable Handle
// ============================================================================

const ResizableHandle = ({
  withHandle,
  className,
  classNames,
  ...props
}: ResizableHandleProps) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Resizable;

  // L1: 功能层
  const base = resizableBase({});

  // L2: 主题层
  const themeStyles = React.useMemo(() => ({
    handle: toClassString(themeConfig?.slots?.handle),
    handleIcon: toClassString(themeConfig?.slots?.handleIcon),
  }), [themeConfig]);

  return (
    <ResizablePrimitive.PanelResizeHandle
      data-slot="resizable-handle"
      className={twMerge(
        base.handle(),
        themeStyles.handle,
        classNames?.handle,
        className
      )}
      {...props}
    >
      {withHandle && (
        <div
          className={twMerge(
            base.handleIcon(),
            themeStyles.handleIcon,
            classNames?.handleIcon
          )}
        >
          <GripVertical className="h-2.5 w-2.5" />
        </div>
      )}
    </ResizablePrimitive.PanelResizeHandle>
  );
};

// ============================================================================
// Demo Component (用于画布展示)
// ============================================================================

export interface ResizableDemoProps extends ResizableVariants {
  direction?: 'horizontal' | 'vertical';
}

const ResizableDemo = ({ direction = 'horizontal', variant = 'default' }: ResizableDemoProps) => {
  const { t } = useI18n();

  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <ResizablePanelGroup
        direction={direction}
        variant={variant}
        className="max-w-md rounded-lg border md:min-w-[450px]"
      >
        <ResizablePanel defaultSize={50}>
          <div className="flex h-[200px] items-center justify-center p-6">
            <span className="font-semibold text-foreground">
              {t('resizablePanelOne' as MessageKey)}
            </span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={25}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold text-foreground">
                  {t('resizablePanelTwo' as MessageKey)}
                </span>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={75}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold text-foreground">
                  {t('resizablePanelThree' as MessageKey)}
                </span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

// ============================================================================
// Exports
// ============================================================================

export { ResizablePanelGroup, ResizablePanel, ResizableHandle, ResizableDemo };
