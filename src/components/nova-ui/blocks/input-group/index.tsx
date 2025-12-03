'use client';

/**
 * InputGroup Block
 *
 * 输入框组组件，用于组合输入框和按钮/附加内容。
 *
 * Architecture Notes:
 * - Block 组件，依赖 Atoms: input, button
 * - 不支持用户可配特效（通过内部 Atoms 获得）
 * - 支持前缀/后缀附加内容
 */

import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/themes/use-theme';
import { Input } from '@/components/nova-ui/atmos/input';
import { Button } from '@/components/nova-ui/atmos/button';
import { inputGroupBaseConfig } from './input-group.config';

// ============================================================================
// 依赖声明（用于导出时收集）
// ============================================================================

export const inputGroupAtoms = ['input', 'button'] as const;

export { inputGroupBaseConfig };

// ============================================================================
// Styles
// ============================================================================

const inputGroup = tv(inputGroupBaseConfig);

// ============================================================================
// Types
// ============================================================================

export type InputGroupVariants = VariantProps<typeof inputGroup>;
export type InputGroupSlots = keyof typeof inputGroupBaseConfig.slots;
export type InputGroupClassNames = Partial<Record<InputGroupSlots, string>>;

export interface InputGroupProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children' | 'prefix'>,
    InputGroupVariants {
  classNames?: InputGroupClassNames;
  /** 输入框占位符 */
  placeholder?: string;
  /** 输入框类型 */
  inputType?: 'text' | 'email' | 'password' | 'search' | 'url';
  /** 按钮文本 */
  buttonLabel?: string;
  /** 前缀附加内容 */
  prefix?: React.ReactNode;
  /** 后缀附加内容 */
  suffix?: React.ReactNode;
  /** 输入框禁用 */
  disabled?: boolean;
  /** 按钮点击回调 */
  onButtonClick?: () => void;
}

// ============================================================================
// InputGroup Component
// ============================================================================

function InputGroup({
  className,
  classNames,
  variant = 'attached',
  size = 'default',
  placeholder,
  inputType = 'text',
  buttonLabel,
  prefix,
  suffix,
  disabled,
  onButtonClick,
  ...props
}: InputGroupProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.InputGroup;
  const styles = inputGroup({ variant, size });

  return (
    <div
      data-slot="input-group"
      className={cn(
        classNames?.root || styles.root(),
        themeConfig?.slots?.root,
        className
      )}
      {...props}
    >
      {prefix && (
        <span
          data-slot="input-group-addon"
          className={cn(
            classNames?.addon || styles.addon(),
            themeConfig?.slots?.addon
          )}
        >
          {prefix}
        </span>
      )}
      <Input
        data-slot="input-group-input"
        type={inputType}
        placeholder={placeholder}
        disabled={disabled}
        className={cn(
          classNames?.input || styles.input(),
          themeConfig?.slots?.input
        )}
      />
      {suffix && (
        <span
          data-slot="input-group-addon"
          className={cn(
            classNames?.addon || styles.addon(),
            themeConfig?.slots?.addon,
            variant === 'attached' && 'rounded-r-md border-l-0'
          )}
        >
          {suffix}
        </span>
      )}
      {buttonLabel && (
        <Button
          data-slot="input-group-button"
          onClick={onButtonClick}
          disabled={disabled}
          size={size}
          className={cn(
            classNames?.button || styles.button(),
            themeConfig?.slots?.button
          )}
        >
          {buttonLabel}
        </Button>
      )}
    </div>
  );
}

// ============================================================================
// Demo Component (for Canvas display)
// ============================================================================

export interface InputGroupDemoProps extends InputGroupVariants {
  placeholder?: string;
  buttonLabel?: string;
  prefix?: string;
}

function InputGroupDemo({
  variant = 'attached',
  size = 'default',
  placeholder = 'Enter text...',
  buttonLabel = 'Search',
  prefix,
}: InputGroupDemoProps) {
  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <InputGroup
        variant={variant}
        size={size}
        placeholder={placeholder}
        buttonLabel={buttonLabel}
        prefix={prefix}
      />
    </div>
  );
}

// ============================================================================
// Exports
// ============================================================================

export { InputGroup, InputGroupDemo };
