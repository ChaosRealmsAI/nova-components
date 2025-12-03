'use client';

/**
 * Sonner Block
 * Toast 通知组件
 * 依赖: sonner
 */

import * as React from 'react';
import { Toaster as Sonner, toast } from 'sonner';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/themes/use-theme';
import { useI18n } from '@/lib/i18n/use-i18n';
import { Button } from '@/components/nova-ui/atmos/button';
import { sonnerBaseConfig } from './sonner.config';

// ============================================================================
// 依赖声明
// ============================================================================

export const sonnerAtoms = [] as const;

export { sonnerBaseConfig };

// ============================================================================
// Styles
// ============================================================================

const sonner = tv(sonnerBaseConfig);

// ============================================================================
// Types
// ============================================================================

export type SonnerVariants = VariantProps<typeof sonner>;
export type SonnerSlots = keyof typeof sonnerBaseConfig.slots;
export type SonnerClassNames = Partial<Record<SonnerSlots, string>>;

export type ToasterProps = React.ComponentProps<typeof Sonner> & {
  classNames?: SonnerClassNames;
};

export interface SonnerDemoProps extends SonnerVariants {}

// ============================================================================
// Components
// ============================================================================

function Toaster({ className, classNames, ...props }: ToasterProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Sonner;
  const styles = sonner({});

  return (
    <Sonner
      theme={currentTheme?.isDark ? 'dark' : 'light'}
      className={cn('toaster group', className)}
      toastOptions={{
        classNames: {
          toast: cn(
            styles.root(),
            themeConfig?.slots?.root,
            classNames?.root
          ),
          title: cn(
            styles.title(),
            themeConfig?.slots?.title,
            classNames?.title
          ),
          description: cn(
            styles.description(),
            themeConfig?.slots?.description,
            classNames?.description
          ),
          actionButton: cn(
            styles.actionButton(),
            themeConfig?.slots?.actionButton,
            classNames?.actionButton
          ),
          cancelButton: cn(
            styles.cancelButton(),
            themeConfig?.slots?.cancelButton,
            classNames?.cancelButton
          ),
          closeButton: cn(
            styles.closeButton(),
            themeConfig?.slots?.closeButton,
            classNames?.closeButton
          ),
          success: cn(
            styles.success(),
            themeConfig?.slots?.success,
            classNames?.success
          ),
          error: cn(
            styles.error(),
            themeConfig?.slots?.error,
            classNames?.error
          ),
          warning: cn(
            styles.warning(),
            themeConfig?.slots?.warning,
            classNames?.warning
          ),
          info: cn(
            styles.info(),
            themeConfig?.slots?.info,
            classNames?.info
          ),
          icon: cn(
            styles.icon(),
            themeConfig?.slots?.icon,
            classNames?.icon
          ),
        },
      }}
      {...props}
    />
  );
}

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
