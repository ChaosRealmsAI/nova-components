'use client';

/**
 * ButtonGroup Block
 *
 * 按钮组组件，用于将多个按钮组合在一起。
 *
 * Architecture Notes:
 * - Block 组件，依赖 Atoms: button
 * - 不支持用户可配特效（通过内部 Atoms 获得）
 * - 支持 attached 模式（按钮连接在一起）和 gap 模式
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
import { Button } from '@/components/nova-ui/atmos/button';

// ============================================================================
// L1: 静态样式定义（功能层）
// ============================================================================

const buttonGroupBase = tv({
  slots: {
    root: 'inline-flex items-center',
  },
  variants: {
    variant: {
      default: {
        root: '',
      },
      outline: {
        root: '',
      },
    },
    size: {
      default: {
        root: '',
      },
      sm: {
        root: '',
      },
      lg: {
        root: '',
      },
    },
    attached: {
      true: {
        root: '[&>button]:rounded-none [&>button:first-child]:rounded-l-md [&>button:last-child]:rounded-r-md [&>button:not(:first-child)]:-ml-px',
      },
      false: {
        root: 'gap-2',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
    attached: true,
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

export type ButtonGroupVariants = VariantProps<typeof buttonGroupBase>;
export type ButtonGroupSlots = keyof typeof buttonGroupBase.slots;
export type ButtonGroupClassNames = Partial<Record<ButtonGroupSlots, string>>;

export interface ButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ButtonGroupVariants {
  classNames?: ButtonGroupClassNames;
}

export interface ButtonGroupItemValue {
  label: string;
  labelKey?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export interface ButtonGroupDemoProps extends ButtonGroupVariants {
  items?: ButtonGroupItemValue[];
}

// ============================================================================
// ButtonGroup Component
// ============================================================================

function ButtonGroup({
  className,
  classNames,
  variant = 'default',
  size = 'default',
  attached = true,
  children,
  ...props
}: ButtonGroupProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.ButtonGroup;
  
  // L1
  const styles = buttonGroupBase({ variant, size, attached });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.root);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.root);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, variant]);

  return (
    <div
      role="group"
      data-slot="button-group"
      className={twMerge(
        styles.root(),
        themeStyles.slot,
        themeStyles.variant,
        classNames?.root,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// ============================================================================
// Demo Component (for Canvas display)
// ============================================================================

const defaultItems: ButtonGroupItemValue[] = [
  { label: 'Left', labelKey: 'buttonGroupLeft' },
  { label: 'Center', labelKey: 'buttonGroupCenter' },
  { label: 'Right', labelKey: 'buttonGroupRight' },
];

function ButtonGroupDemo({
  variant = 'default',
  size = 'default',
  attached = true,
  items = defaultItems,
}: ButtonGroupDemoProps) {
  const { t } = useI18n();

  // Map variant to button variant
  const buttonVariant = variant === 'outline' ? 'outline' : 'default';

  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <ButtonGroup variant={variant} size={size} attached={attached}>
        {items.map((item, index) => (
          <Button
            key={index}
            variant={buttonVariant}
            size={size}
            disabled={item.disabled}
            onClick={item.onClick}
          >
            {item.labelKey ? t(item.labelKey, item.label) : item.label}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
}

// ============================================================================
// Exports
// ============================================================================

export { ButtonGroup, ButtonGroupDemo };