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
 */

import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/themes/use-theme';
import { useI18n } from '@/lib/i18n/use-i18n';
import { Button } from '@/components/nova-ui/atmos/button';
import { buttonGroupBaseConfig } from './button-group.config';

// ============================================================================
// 依赖声明（用于导出时收集）
// ============================================================================

export const buttonGroupAtoms = ['button'] as const;

export { buttonGroupBaseConfig };

// ============================================================================
// Styles
// ============================================================================

const buttonGroup = tv(buttonGroupBaseConfig);

// ============================================================================
// Types
// ============================================================================

export type ButtonGroupVariants = VariantProps<typeof buttonGroup>;
export type ButtonGroupSlots = keyof typeof buttonGroupBaseConfig.slots;
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
  const styles = buttonGroup({ variant, size, attached });

  return (
    <div
      role="group"
      data-slot="button-group"
      className={cn(
        classNames?.root || styles.root(),
        themeConfig?.slots?.root,
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
