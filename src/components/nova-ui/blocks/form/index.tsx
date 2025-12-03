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
 */

import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/themes/use-theme';
import { Label } from '@/components/nova-ui/atmos/label';
import { Input } from '@/components/nova-ui/atmos/input';
import { Button } from '@/components/nova-ui/atmos/button';
import { formBaseConfig } from './form.config';

// ============================================================================
// 依赖声明（用于导出时收集）
// ============================================================================

export const formAtoms = ['label', 'input', 'button'] as const;

export { formBaseConfig };

// ============================================================================
// Styles
// ============================================================================

const form = tv(formBaseConfig);

// ============================================================================
// Types
// ============================================================================

export type FormVariants = VariantProps<typeof form>;
export type FormSlots = keyof typeof formBaseConfig.slots;
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
  const styles = form({ variant, size });

  return (
    <form
      data-slot="form"
      className={cn(
        classNames?.root || styles.root(),
        themeConfig?.slots?.root,
        className
      )}
      {...props}
    />
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
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Form;
  const styles = form({ variant: 'default' });

  return (
    <div
      data-slot="form-item"
      className={cn(
        classNames?.item || styles.item(),
        themeConfig?.slots?.item,
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
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Form;
  const styles = form({ variant: 'default' });

  return (
    <Label
      data-slot="form-label"
      data-error={error}
      className={cn(
        classNames?.label || styles.label(),
        themeConfig?.slots?.label,
        error && 'text-destructive',
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
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Form;
  const styles = form({ variant: 'default' });

  return (
    <div
      data-slot="form-control"
      className={cn(
        classNames?.control || styles.control(),
        themeConfig?.slots?.control,
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
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Form;
  const styles = form({ variant: 'default' });

  return (
    <p
      data-slot="form-description"
      className={cn(
        classNames?.description || styles.description(),
        themeConfig?.slots?.description,
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
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Form;
  const styles = form({ variant: 'default' });

  if (!children) return null;

  return (
    <p
      data-slot="form-message"
      className={cn(
        classNames?.message || styles.message(),
        themeConfig?.slots?.message,
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
