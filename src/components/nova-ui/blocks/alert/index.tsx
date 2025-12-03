'use client';

/**
 * Alert Block
 *
 * 警告提示组件，用于显示重要信息或警告。
 *
 * Architecture Notes:
 * - Block 组件，样式参考 Badge Atom
 * - 不支持用户可配特效
 * - 提供 default 和 destructive 两种语义变体
 */

import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/themes/use-theme';
import { alertBaseConfig } from './alert.config';

// ============================================================================
// 依赖声明（用于导出时收集）
// ============================================================================

export const alertAtoms = ['badge'] as const;

export { alertBaseConfig };

// ============================================================================
// Types
// ============================================================================

export type AlertVariants = VariantProps<ReturnType<typeof tv>>;
export type AlertSlots = keyof typeof alertBaseConfig.slots;
export type AlertClassNames = Partial<Record<AlertSlots, string>>;

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'destructive';
  classNames?: AlertClassNames;
}

export interface AlertTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export interface AlertDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface AlertDemoProps {
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive';
}

// ============================================================================
// Alert Root
// ============================================================================

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, classNames, variant = 'default', ...props }, ref) => {
    const { currentTheme } = useTheme();
    const themeConfig = currentTheme?.components?.Alert;

    const styles = tv({
      extend: alertBaseConfig,
      ...(themeConfig || {}),
    });

    const { base } = styles({ variant });

    return (
      <div
        ref={ref}
        role="alert"
        data-slot="alert"
        data-variant={variant}
        className={cn(base(), classNames?.base, className)}
        {...props}
      />
    );
  }
);
Alert.displayName = 'Alert';

// ============================================================================
// Alert Title
// ============================================================================

const AlertTitle = React.forwardRef<HTMLHeadingElement, AlertTitleProps>(
  ({ className, ...props }, ref) => {
    const { currentTheme } = useTheme();
    const themeConfig = currentTheme?.components?.Alert;

    const styles = tv({
      extend: alertBaseConfig,
      ...(themeConfig || {}),
    });

    const { title } = styles({});

    return (
      <h5
        ref={ref}
        data-slot="alert-title"
        className={cn(title(), className)}
        {...props}
      />
    );
  }
);
AlertTitle.displayName = 'AlertTitle';

// ============================================================================
// Alert Description
// ============================================================================

const AlertDescription = React.forwardRef<HTMLDivElement, AlertDescriptionProps>(
  ({ className, ...props }, ref) => {
    const { currentTheme } = useTheme();
    const themeConfig = currentTheme?.components?.Alert;

    const styles = tv({
      extend: alertBaseConfig,
      ...(themeConfig || {}),
    });

    const { description } = styles({});

    return (
      <div
        ref={ref}
        data-slot="alert-description"
        className={cn(description(), className)}
        {...props}
      />
    );
  }
);
AlertDescription.displayName = 'AlertDescription';

// ============================================================================
// Alert Demo (用于画布展示)
// ============================================================================

function AlertDemo({
  title = 'Heads up!',
  description = 'You can add components to your app using the CLI.',
  variant = 'default',
}: AlertDemoProps) {
  return (
    <Alert variant={variant}>
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
        {variant === 'destructive' ? (
          // AlertTriangle icon for destructive
          <>
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
          </>
        ) : (
          // Terminal icon for default
          <>
            <polyline points="4 17 10 11 4 5" />
            <line x1="12" x2="20" y1="19" y2="19" />
          </>
        )}
      </svg>
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
}

// ============================================================================
// Exports
// ============================================================================

export { Alert, AlertTitle, AlertDescription, AlertDemo };
