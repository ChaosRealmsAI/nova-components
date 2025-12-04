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
 *
 * 架构：
 * - L1 (功能层): 静态定义，保证组件功能正常
 * - L2 (主题层): 从 useTheme 获取，控制视觉风格
 * - L3 (实例层): 用户传入的 className/classNames
 *
 * 优先级: L3 > L2 > L1 (通过 twMerge 解决冲突)
 */

import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes/use-theme';

// ============================================================================
// 依赖声明（用于导出时收集）
// ============================================================================

export const alertAtoms = ['badge'] as const;

// ============================================================================
// L1: 静态样式定义（功能层）
// ============================================================================

const alertBase = tv({
  slots: {
    base: [
      'relative w-full grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr]',
      'has-[>svg]:gap-x-3 gap-y-0.5 items-start',
      '[&>svg]:translate-y-0.5',
    ],
    title: 'col-start-2 min-h-4',
    description: 'col-start-2 grid justify-items-start gap-1 [&_p]:leading-relaxed',
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

interface AlertContextValue {
  variant: AlertProps['variant'];
}

const AlertContext = React.createContext<AlertContextValue>({
  variant: 'default',
});

const useAlertContext = () => React.useContext(AlertContext);

// ============================================================================
// Types
// ============================================================================

export type AlertVariants = VariantProps<typeof alertBase>;
export type AlertSlots = keyof typeof alertBase.slots;
export type AlertClassNames = Partial<Record<AlertSlots, string>>;

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, AlertVariants {
  classNames?: AlertClassNames;
  variant?: 'default' | 'destructive';
}

export interface AlertTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  classNames?: AlertClassNames;
}

export interface AlertDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
  classNames?: AlertClassNames;
}

export interface AlertDemoProps {
  title?: string;
  description?: string;
  variant?: AlertProps['variant'];
}

// ============================================================================
// Alert Root
// ============================================================================

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, classNames, variant = 'default', ...props }, ref) => {
    const { currentTheme } = useTheme();
    const themeConfig = currentTheme?.components?.Alert;

    // L1
    const base = alertBase();

    // L2
    const themeStyles = React.useMemo(() => {
      const slotStyle = toClassString(themeConfig?.slots?.base);
      // @ts-ignore
      const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.base);
      return { slot: slotStyle, variant: variantStyle };
    }, [themeConfig, variant]);

    return (
      <AlertContext.Provider value={{ variant }}>
        <div
          ref={ref}
          role="alert"
          data-slot="alert"
          data-variant={variant}
          className={twMerge(
            base.base(),
            themeStyles.slot,
            themeStyles.variant,
            classNames?.base,
            className
          )}
          {...props}
        />
      </AlertContext.Provider>
    );
  }
);
Alert.displayName = 'Alert';

// ============================================================================
// Alert Title
// ============================================================================

const AlertTitle = React.forwardRef<HTMLHeadingElement, AlertTitleProps>(
  ({ className, classNames, ...props }, ref) => {
    const { variant } = useAlertContext();
    const { currentTheme } = useTheme();
    const themeConfig = currentTheme?.components?.Alert;

    // L1
    const base = alertBase();

    // L2
    const themeStyles = React.useMemo(() => {
      const slotStyle = toClassString(themeConfig?.slots?.title);
      // @ts-ignore
      const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.title);
      return { slot: slotStyle, variant: variantStyle };
    }, [themeConfig, variant]);

    return (
      <h5
        ref={ref}
        data-slot="alert-title"
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
  }
);
AlertTitle.displayName = 'AlertTitle';

// ============================================================================
// Alert Description
// ============================================================================

const AlertDescription = React.forwardRef<HTMLDivElement, AlertDescriptionProps>(
  ({ className, classNames, ...props }, ref) => {
    const { variant } = useAlertContext();
    const { currentTheme } = useTheme();
    const themeConfig = currentTheme?.components?.Alert;

    // L1
    const base = alertBase();

    // L2
    const themeStyles = React.useMemo(() => {
      const slotStyle = toClassString(themeConfig?.slots?.description);
      // @ts-ignore
      const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.description);
      return { slot: slotStyle, variant: variantStyle };
    }, [themeConfig, variant]);

    return (
      <div
        ref={ref}
        data-slot="alert-description"
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