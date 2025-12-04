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
import { Input } from '@/components/nova-ui/atmos/input';
import { Button } from '@/components/nova-ui/atmos/button';

// ============================================================================
// L1: 静态样式定义（功能层）
// ============================================================================

const inputGroupBase = tv({
  slots: {
    root: 'flex w-full items-center',
    input: 'flex-1',
    button: '',
    addon: 'inline-flex items-center justify-center',
  },
  variants: {
    variant: {
      default: {
        root: 'gap-2',
      },
      attached: {
        root: 'gap-0',
        input: 'focus:z-10',
      },
    },
    size: {
      default: {},
      sm: {},
      lg: {},
    },
  },
  defaultVariants: {
    variant: 'attached',
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
// Types
// ============================================================================

export type InputGroupVariants = VariantProps<typeof inputGroupBase>;
export type InputGroupSlots = keyof typeof inputGroupBase.slots;
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
  
  // L1
  const base = inputGroupBase({ variant, size });

  // L2
  const themeStyles = React.useMemo(() => {
    const rootSlot = toClassString(themeConfig?.slots?.root);
    const inputSlot = toClassString(themeConfig?.slots?.input);
    const addonSlot = toClassString(themeConfig?.slots?.addon);
    const buttonSlot = toClassString(themeConfig?.slots?.button);
    
    // @ts-ignore
    const variantRoot = toClassString(themeConfig?.variants?.variant?.[variant]?.root);
    // @ts-ignore
    const variantInput = toClassString(themeConfig?.variants?.variant?.[variant]?.input);
    // @ts-ignore
    const variantAddon = toClassString(themeConfig?.variants?.variant?.[variant]?.addon);
    // @ts-ignore
    const variantButton = toClassString(themeConfig?.variants?.variant?.[variant]?.button);

    // @ts-ignore
    const sizeRoot = toClassString(themeConfig?.variants?.size?.[size]?.root);
    // @ts-ignore
    const sizeInput = toClassString(themeConfig?.variants?.size?.[size]?.input);
    // @ts-ignore
    const sizeAddon = toClassString(themeConfig?.variants?.size?.[size]?.addon);
    // @ts-ignore
    const sizeButton = toClassString(themeConfig?.variants?.size?.[size]?.button);

    return { 
      root: twMerge(rootSlot, variantRoot, sizeRoot),
      input: twMerge(inputSlot, variantInput, sizeInput),
      addon: twMerge(addonSlot, variantAddon, sizeAddon),
      button: twMerge(buttonSlot, variantButton, sizeButton),
    };
  }, [themeConfig, variant, size]);

  return (
    <div
      data-slot="input-group"
      className={twMerge(
        base.root(),
        themeStyles.root,
        classNames?.root,
        className
      )}
      {...props}
    >
      {prefix && (
        <span
          data-slot="input-group-addon"
          className={twMerge(
            base.addon(),
            themeStyles.addon,
            classNames?.addon
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
        className={twMerge(
          base.input(),
          themeStyles.input,
          classNames?.input
        )}
      />
      {suffix && (
        <span
          data-slot="input-group-addon"
          className={twMerge(
            base.addon(),
            themeStyles.addon,
            classNames?.addon
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
          className={twMerge(
            base.button(),
            themeStyles.button,
            classNames?.button
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
  placeholder,
  buttonLabel,
  prefix,
}: InputGroupDemoProps) {
  const { t } = useI18n();

  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <InputGroup
        variant={variant}
        size={size}
        placeholder={placeholder || t('inputGroupPlaceholder', 'Enter text...')}
        buttonLabel={buttonLabel || t('inputGroupButtonLabel', 'Search')}
        prefix={prefix}
      />
    </div>
  );
}

// ============================================================================
// Exports
// ============================================================================

export { InputGroup, InputGroupDemo };