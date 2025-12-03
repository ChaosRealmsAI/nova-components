'use client';

/**
 * Resizable Block
 *
 * 可调整大小面板组件
 * 依赖: react-resizable-panels
 */

import * as React from 'react';
import * as ResizablePrimitive from 'react-resizable-panels';
import { GripVertical } from 'lucide-react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/themes/use-theme';
import { useI18n } from '@/lib/i18n/use-i18n';
import { resizableBaseConfig } from './resizable.config';

// ============================================================================
// 依赖声明
// ============================================================================

export const resizableAtoms = [] as const;

export { resizableBaseConfig };

// ============================================================================
// Styles
// ============================================================================

const resizable = tv(resizableBaseConfig);

// ============================================================================
// Types
// ============================================================================

export type ResizableVariants = VariantProps<typeof resizable>;
export type ResizableSlots = keyof typeof resizableBaseConfig.slots;
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
// Components
// ============================================================================

const ResizablePanelGroup = ({
  className,
  classNames,
  variant = 'default',
  ...props
}: ResizablePanelGroupProps) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Resizable;
  const styles = resizable({ variant });

  return (
    <ResizablePrimitive.PanelGroup
      className={cn(
        styles.panelGroup(),
        themeConfig?.slots?.panelGroup,
        classNames?.panelGroup,
        className
      )}
      data-slot="resizable-panel-group"
      {...props}
    />
  );
};

const ResizablePanel = ({
  className,
  classNames,
  ...props
}: ResizablePanelProps) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Resizable;
  const styles = resizable({});

  return (
    <ResizablePrimitive.Panel
      className={cn(
        styles.panel(),
        themeConfig?.slots?.panel,
        classNames?.panel,
        className
      )}
      data-slot="resizable-panel"
      {...props}
    />
  );
};

const ResizableHandle = ({
  withHandle,
  className,
  classNames,
  ...props
}: ResizableHandleProps) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Resizable;
  const styles = resizable({});

  return (
    <ResizablePrimitive.PanelResizeHandle
      className={cn(
        styles.handle(),
        themeConfig?.slots?.handle,
        classNames?.handle,
        className
      )}
      data-slot="resizable-handle"
      {...props}
    >
      {withHandle && (
        <div
          className={cn(
            styles.handleIcon(),
            themeConfig?.slots?.handleIcon,
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
// Demo Component
// ============================================================================

export interface ResizableDemoProps extends ResizableVariants {
  direction?: 'horizontal' | 'vertical';
}

const ResizableDemo = ({ direction = 'horizontal' }: ResizableDemoProps) => {
  const { t } = useI18n();

  return (
    <ResizablePanelGroup
      direction={direction}
      className="max-w-md rounded-lg border md:min-w-[450px]"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold text-foreground">{t('resizablePanelOne', 'One')}</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold text-foreground">{t('resizablePanelTwo', 'Two')}</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold text-foreground">{t('resizablePanelThree', 'Three')}</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export { ResizablePanelGroup, ResizablePanel, ResizableHandle, ResizableDemo };
