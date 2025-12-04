'use client';

/**
 * Form Block
 *
 * 表单组件，用于构建用户输入界面。
 *
 * Architecture Notes:
 * - Block 组件，依赖 Atoms: label, input, button
 * - 不支持用户可配特效（通过内部 Atoms 获得）
 * - 简化实现，专注于展示目的
 * - 如需完整表单验证，推荐使用 react-hook-form
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
import { useI18n } from '@/lib/i18n/use-i18n';
import { Label } from '@/components/nova-ui/atmos/label';
import { Input } from '@/components/nova-ui/atmos/input';
import { Button } from '@/components/nova-ui/atmos/button';

// ============================================================================
// 依赖声明（用于导出时收集）
// ============================================================================

export const formAtoms = ['label', 'input', 'button'] as const;

// ============================================================================
// L1: 静态样式定义（功能层）
// ============================================================================

const formBase = tv({
  slots: {
    root: 'space-y-6',
    item: 'space-y-2',
    label: '',
    control: '',
    description: 'text-sm',
    message: 'text-sm font-medium',
  },
  variants: {
    variant: {
      default: {
        root: '',
        item: '',
      },
      inline: {
        root: 'space-y-4',
        item: 'flex items-center gap-4 space-y-0',
      },
    },
    size: {
      default: {
        item: 'space-y-2',
      },
      sm: {
        item: 'space-y-1',
      },
      lg: {
        item: 'space-y-3',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
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

interface FormContextValue {
  variant: FormVariants['variant'];
  size: FormVariants['size'];
}

const FormContext = React.createContext<FormContextValue>({
  variant: 'default',
  size: 'default',
});

const useFormContext = () => React.useContext(FormContext);

// ============================================================================
// Types
// ============================================================================

export type FormVariants = VariantProps<typeof formBase>;
export type FormSlots = keyof typeof formBase.slots;
export type FormClassNames = Partial<Record<FormSlots, string>>;

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement>, FormVariants {
  classNames?: FormClassNames;
}

export interface FormItemProps extends React.HTMLAttributes<HTMLDivElement> {
  classNames?: FormClassNames;
}

export interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  classNames?: FormClassNames;
  error?: boolean;
}

export interface FormControlProps extends React.HTMLAttributes<HTMLDivElement> {
  classNames?: FormClassNames;
}

export interface FormDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  classNames?: FormClassNames;
}

export interface FormMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {
  classNames?: FormClassNames;
}

// ============================================================================
// Form Root
// ============================================================================

function Form({
  className,
  classNames,
  variant = 'default',
  size = 'default',
  ...props
}: FormProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Form;

  // L1
  const base = formBase({ variant, size });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.root);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.root);
    // @ts-ignore
    const sizeStyle = toClassString(themeConfig?.variants?.size?.[size]?.root);
    return { slot: slotStyle, variant: variantStyle, size: sizeStyle };
  }, [themeConfig, variant, size]);

  return (
    <FormContext.Provider value={{ variant, size }}>
      <form
        data-slot="form"
        className={twMerge(
          base.root(),
          themeStyles.slot,
          themeStyles.variant,
          themeStyles.size,
          classNames?.root,
          className
        )}
        {...props}
      />
    </FormContext.Provider>
  );
}

// ============================================================================
// Form Item
// ============================================================================

function FormItem({
  className,
  classNames,
  ...props
}: FormItemProps) {
  const { variant, size } = useFormContext();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Form;

  // L1
  const base = formBase({ variant, size });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.item);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.item);
    // @ts-ignore
    const sizeStyle = toClassString(themeConfig?.variants?.size?.[size]?.item);
    return { slot: slotStyle, variant: variantStyle, size: sizeStyle };
  }, [themeConfig, variant, size]);

  return (
    <div
      data-slot="form-item"
      className={twMerge(
        base.item(),
        themeStyles.slot,
        themeStyles.variant,
        themeStyles.size,
        classNames?.item,
        className
      )}
      {...props}
    />
  );
}

// ============================================================================
// Form Label
// ============================================================================

function FormLabel({
  className,
  classNames,
  error,
  ...props
}: FormLabelProps) {
  const { variant, size } = useFormContext();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Form;

  // L1
  const base = formBase({ variant, size });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.label);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.label);
    // @ts-ignore
    const sizeStyle = toClassString(themeConfig?.variants?.size?.[size]?.label);
    return { slot: slotStyle, variant: variantStyle, size: sizeStyle };
  }, [themeConfig, variant, size]);

  return (
    <Label
      data-slot="form-label"
      data-error={error}
      className={twMerge(
        base.label(),
        themeStyles.slot,
        themeStyles.variant,
        themeStyles.size,
        error && 'text-destructive',
        classNames?.label,
        className
      )}
      {...props}
    />
  );
}

// ============================================================================
// Form Control
// ============================================================================

function FormControl({
  className,
  classNames,
  ...props
}: FormControlProps) {
  const { variant, size } = useFormContext();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Form;

  // L1
  const base = formBase({ variant, size });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.control);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.control);
    // @ts-ignore
    const sizeStyle = toClassString(themeConfig?.variants?.size?.[size]?.control);
    return { slot: slotStyle, variant: variantStyle, size: sizeStyle };
  }, [themeConfig, variant, size]);

  return (
    <div
      data-slot="form-control"
      className={twMerge(
        base.control(),
        themeStyles.slot,
        themeStyles.variant,
        themeStyles.size,
        classNames?.control,
        className
      )}
      {...props}
    />
  );
}

// ============================================================================
// Form Description
// ============================================================================

function FormDescription({
  className,
  classNames,
  ...props
}: FormDescriptionProps) {
  const { variant, size } = useFormContext();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Form;

  // L1
  const base = formBase({ variant, size });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.description);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.description);
    // @ts-ignore
    const sizeStyle = toClassString(themeConfig?.variants?.size?.[size]?.description);
    return { slot: slotStyle, variant: variantStyle, size: sizeStyle };
  }, [themeConfig, variant, size]);

  return (
    <p
      data-slot="form-description"
      className={twMerge(
        base.description(),
        themeStyles.slot,
        themeStyles.variant,
        themeStyles.size,
        classNames?.description,
        className
      )}
      {...props}
    />
  );
}

// ============================================================================
// Form Message
// ============================================================================

function FormMessage({
  className,
  classNames,
  children,
  ...props
}: FormMessageProps) {
  const { variant, size } = useFormContext();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Form;

  // L1
  const base = formBase({ variant, size });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.message);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.message);
    // @ts-ignore
    const sizeStyle = toClassString(themeConfig?.variants?.size?.[size]?.message);
    return { slot: slotStyle, variant: variantStyle, size: sizeStyle };
  }, [themeConfig, variant, size]);

  if (!children) return null;

  return (
    <p
      data-slot="form-message"
      className={twMerge(
        base.message(),
        themeStyles.slot,
        themeStyles.variant,
        themeStyles.size,
        classNames?.message,
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

// ============================================================================
// Demo Component (for Canvas display)
// ============================================================================

export interface FormDemoProps extends FormVariants {
  // Labels
  emailLabel?: string;
  passwordLabel?: string;
  submitLabel?: string;
  // Descriptions
  emailDescription?: string;
  // Placeholders
  emailPlaceholder?: string;
  passwordPlaceholder?: string;
}

function FormDemo({
  variant = 'default',
  size = 'default',
  emailLabel = 'Email',
  passwordLabel = 'Password',
  submitLabel = 'Sign In',
  emailDescription = 'We will never share your email.',
  emailPlaceholder = 'Enter your email',
  passwordPlaceholder = 'Enter your password',
}: FormDemoProps) {
  const { t } = useI18n();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <Form
        variant={variant}
        size={size}
        onSubmit={handleSubmit}
        className="w-full max-w-sm"
      >
        <FormItem>
          <FormLabel htmlFor="email">{emailLabel}</FormLabel>
          <FormControl>
            <Input
              id="email"
              type="email"
              placeholder={emailPlaceholder}
            />
          </FormControl>
          <FormDescription>{emailDescription}</FormDescription>
        </FormItem>

        <FormItem>
          <FormLabel htmlFor="password">{passwordLabel}</FormLabel>
          <FormControl>
            <Input
              id="password"
              type="password"
              placeholder={passwordPlaceholder}
            />
          </FormControl>
        </FormItem>

        <Button type="submit" className="w-full">
          {submitLabel}
        </Button>
      </Form>
    </div>
  );
}

// ============================================================================
// Exports
// ============================================================================

export {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormDemo,
};
