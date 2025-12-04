'use client';

/**
 * Sonner Block
 * Toast 通知组件
 * 依赖: sonner
 *
 * Architecture Notes:
 * - Block 组件，基于 sonner 库
 * - 不支持用户可配特效
 *
 * 架构：
 * - L1 (功能层): 静态定义，保证组件功能正常（使用 !important 覆盖 sonner 默认样式）
 * - L2 (主题层): 从 useTheme 获取，控制视觉风格
 * - L3 (实例层): 用户传入的 classNames
 *
 * 优先级: L3 > L2 > L1 (通过 twMerge 解决冲突)
 */

import * as React from 'react';
import { Toaster as Sonner, toast } from 'sonner';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes/use-theme';
import { useI18n } from '@/lib/i18n/use-i18n';
import { Button } from '@/components/nova-ui/atmos/button';

// ============================================================================
// 依赖声明（用于导出时收集）
// ============================================================================

export const sonnerAtoms = [] as const;

// ============================================================================
// L1: 静态样式定义（功能层）
// ============================================================================

/**
 * Sonner 需要使用 !important 覆盖其默认样式
 * 因为 sonner 使用 portal 渲染，group 选择器会失效
 */
const sonnerBase = tv({
  slots: {
    root: '!bg-background !text-foreground !border-border !shadow-lg',
    title: '!text-foreground !font-semibold',
    description: '!text-muted-foreground',
    actionButton: '!bg-primary !text-primary-foreground hover:!bg-primary/90',
    cancelButton: '!bg-muted !text-muted-foreground hover:!bg-muted/80',
    closeButton: '!text-foreground/50 hover:!text-foreground !border-border',
    success: '!border-green-500/50 !bg-green-500/10',
    error: '!border-red-500/50 !bg-red-500/10',
    warning: '!border-yellow-500/50 !bg-yellow-500/10',
    info: '!border-blue-500/50 !bg-blue-500/10',
    icon: '!text-foreground',
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

export type SonnerVariants = VariantProps<typeof sonnerBase>;
export type SonnerSlots = keyof ReturnType<typeof sonnerBase>;
export type SonnerClassNames = Partial<Record<SonnerSlots, string>>;

export type ToasterProps = React.ComponentProps<typeof Sonner> & {
  classNames?: SonnerClassNames;
};

export interface SonnerDemoProps extends SonnerVariants {}

// ============================================================================
// Component
// ============================================================================

function Toaster({ className, classNames, ...props }: ToasterProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Sonner;

  // L1: 功能层（静态）
  const base = sonnerBase();

  // L2: 主题层（用 useMemo 缓存）
  const themeStyles = React.useMemo(
    () => ({
      root: toClassString(themeConfig?.slots?.root),
      title: toClassString(themeConfig?.slots?.title),
      description: toClassString(themeConfig?.slots?.description),
      actionButton: toClassString(themeConfig?.slots?.actionButton),
      cancelButton: toClassString(themeConfig?.slots?.cancelButton),
      closeButton: toClassString(themeConfig?.slots?.closeButton),
      success: toClassString(themeConfig?.slots?.success),
      error: toClassString(themeConfig?.slots?.error),
      warning: toClassString(themeConfig?.slots?.warning),
      info: toClassString(themeConfig?.slots?.info),
      icon: toClassString(themeConfig?.slots?.icon),
    }),
    [themeConfig]
  );

  // 合并: L1 + L2 + L3
  const rootClass = twMerge(base.root(), themeStyles.root, classNames?.root);
  const titleClass = twMerge(base.title(), themeStyles.title, classNames?.title);
  const descriptionClass = twMerge(base.description(), themeStyles.description, classNames?.description);
  const actionButtonClass = twMerge(base.actionButton(), themeStyles.actionButton, classNames?.actionButton);
  const cancelButtonClass = twMerge(base.cancelButton(), themeStyles.cancelButton, classNames?.cancelButton);
  const closeButtonClass = twMerge(base.closeButton(), themeStyles.closeButton, classNames?.closeButton);
  const successClass = twMerge(base.success(), themeStyles.success, classNames?.success);
  const errorClass = twMerge(base.error(), themeStyles.error, classNames?.error);
  const warningClass = twMerge(base.warning(), themeStyles.warning, classNames?.warning);
  const infoClass = twMerge(base.info(), themeStyles.info, classNames?.info);
  const iconClass = twMerge(base.icon(), themeStyles.icon, classNames?.icon);

  return (
    <Sonner
      theme={currentTheme?.isDark ? 'dark' : 'light'}
      className={twMerge('toaster group', className)}
      toastOptions={{
        classNames: {
          toast: rootClass,
          title: titleClass,
          description: descriptionClass,
          actionButton: actionButtonClass,
          cancelButton: cancelButtonClass,
          closeButton: closeButtonClass,
          success: successClass,
          error: errorClass,
          warning: warningClass,
          info: infoClass,
          icon: iconClass,
        },
      }}
      {...props}
    />
  );
}

Toaster.displayName = 'Toaster';

// ============================================================================
// Demo
// ============================================================================

function SonnerDemo({}: SonnerDemoProps) {
  const { t } = useI18n();

  const handleShowToast = () => {
    toast(t('sonnerEventCreated', 'Event has been created'), {
      description: t('sonnerEventDescription', 'Sunday, December 03, 2023 at 9:00 AM'),
      action: {
        label: t('sonnerUndo', 'Undo'),
        onClick: () => console.log('Undo'),
      },
    });
  };

  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <Toaster />
      <Button variant="outline" onClick={handleShowToast}>
        {t('sonnerShowToast', 'Show Toast')}
      </Button>
    </div>
  );
}

export { Toaster, SonnerDemo };
