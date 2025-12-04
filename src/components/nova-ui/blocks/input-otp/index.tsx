'use client';

/**
 * InputOTP Block
 *
 * OTP (One-Time Password) 输入组件，用于验证码、密码等场景。
 *
 * Architecture Notes:
 * - Block 组件，依赖 input-otp 外部库
 * - 不支持用户可配特效（Block 级别）
 * - 提供 default 样式变体
 *
 * 架构：
 * - L1 (功能层): 静态定义，保证组件功能正常
 * - L2 (主题层): 从 useTheme 获取，控制视觉风格
 * - L3 (实例层): 用户传入的 className/classNames
 *
 * 优先级: L3 > L2 > L1 (通过 twMerge 解决冲突)
 */

import * as React from 'react';
import { OTPInput, OTPInputContext } from 'input-otp';
import { MinusIcon } from 'lucide-react';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes';

// ============================================================================
// 依赖声明（用于导出时收集）
// ============================================================================

export const inputOtpAtoms = ['input'] as const;

// ============================================================================
// L1: 静态样式定义（功能层）
// ============================================================================

const inputOtpBase = tv({
  slots: {
    root: 'disabled:cursor-not-allowed',
    container: 'flex items-center gap-2 has-disabled:opacity-50',
    group: 'flex items-center',
    slot: 'relative flex h-9 w-9 items-center justify-center outline-none',
    separator: '',
    caret: 'pointer-events-none absolute inset-0 flex items-center justify-center',
    caretLine: 'animate-caret-blink h-4 w-px duration-1000',
  },
  variants: {
    variant: {
      default: {},
    },
  },
  defaultVariants: {
    variant: 'default',
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

export type InputOTPVariants = VariantProps<typeof inputOtpBase>;
export type InputOTPSlots = keyof typeof inputOtpBase.slots;
export type InputOTPClassNames = Partial<Record<InputOTPSlots, string>>;

type InputOTPProps = React.ComponentPropsWithoutRef<typeof OTPInput> &
  InputOTPVariants & {
    classNames?: InputOTPClassNames;
  };

// ============================================================================
// InputOTP Root
// ============================================================================

const InputOTP = React.forwardRef<HTMLInputElement, InputOTPProps>(
  ({ classNames, containerClassName, variant = 'default', ...props }, ref) => {
    const { currentTheme } = useTheme();
    const themeConfig = currentTheme?.components?.InputOTP;

    // L1: 功能层
    const base = inputOtpBase({ variant });

    // L2: 主题层
    const themeStyles = React.useMemo(() => {
      const rootSlot = toClassString(themeConfig?.slots?.root);
      const containerSlot = toClassString(themeConfig?.slots?.container);
      // @ts-ignore - Theme config types might be loose
      const rootVariant = toClassString(themeConfig?.variants?.variant?.[variant]?.root);
      // @ts-ignore
      const containerVariant = toClassString(themeConfig?.variants?.variant?.[variant]?.container);
      return {
        root: { slot: rootSlot, variant: rootVariant },
        container: { slot: containerSlot, variant: containerVariant },
      };
    }, [themeConfig, variant]);

    return (
      <OTPInput
        ref={ref}
        data-slot="input-otp"
        data-variant={variant}
        containerClassName={twMerge(
          base.container(),
          themeStyles.container.slot,
          themeStyles.container.variant,
          classNames?.container,
          containerClassName
        )}
        className={twMerge(
          base.root(),
          themeStyles.root.slot,
          themeStyles.root.variant,
          classNames?.root
        )}
        {...props}
      />
    );
  }
);
InputOTP.displayName = 'InputOTP';

// ============================================================================
// InputOTP Group
// ============================================================================

const InputOTPGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> & {
    variant?: InputOTPVariants['variant'];
    classNames?: InputOTPClassNames;
  }
>(({ className, classNames, variant = 'default', ...props }, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.InputOTP;

  // L1
  const base = inputOtpBase({ variant });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.group);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.group);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, variant]);

  return (
    <div
      ref={ref}
      data-slot="input-otp-group"
      className={twMerge(
        base.group(),
        themeStyles.slot,
        themeStyles.variant,
        classNames?.group,
        className
      )}
      {...props}
    />
  );
});
InputOTPGroup.displayName = 'InputOTPGroup';

// ============================================================================
// InputOTP Slot
// ============================================================================

const InputOTPSlot = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> & {
    index: number;
    variant?: InputOTPVariants['variant'];
    classNames?: InputOTPClassNames;
  }
>(({ index, className, classNames, variant = 'default', ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } =
    inputOTPContext?.slots[index] ?? {};
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.InputOTP;

  // L1
  const base = inputOtpBase({ variant });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.slot);
    const caretStyle = toClassString(themeConfig?.slots?.caret);
    const caretLineStyle = toClassString(themeConfig?.slots?.caretLine);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.slot);
    return {
      slot: { slot: slotStyle, variant: variantStyle },
      caret: caretStyle,
      caretLine: caretLineStyle,
    };
  }, [themeConfig, variant]);

  return (
    <div
      ref={ref}
      data-slot="input-otp-slot"
      data-active={isActive}
      className={twMerge(
        base.slot(),
        themeStyles.slot.slot,
        themeStyles.slot.variant,
        classNames?.slot,
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div
          className={twMerge(
            base.caret(),
            themeStyles.caret,
            classNames?.caret
          )}
        >
          <div
            className={twMerge(
              base.caretLine(),
              themeStyles.caretLine,
              classNames?.caretLine
            )}
          />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = 'InputOTPSlot';

// ============================================================================
// InputOTP Separator
// ============================================================================

const InputOTPSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> & {
    variant?: InputOTPVariants['variant'];
    classNames?: InputOTPClassNames;
  }
>(({ className, classNames, variant = 'default', ...props }, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.InputOTP;

  // L1
  const base = inputOtpBase({ variant });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.separator);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.separator);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, variant]);

  return (
    <div
      ref={ref}
      data-slot="input-otp-separator"
      role="separator"
      className={twMerge(
        base.separator(),
        themeStyles.slot,
        themeStyles.variant,
        classNames?.separator,
        className
      )}
      {...props}
    >
      <MinusIcon className="size-4" />
    </div>
  );
});
InputOTPSeparator.displayName = 'InputOTPSeparator';

// ============================================================================
// InputOTP Demo (用于画布展示)
// ============================================================================

export interface InputOTPDemoProps {
  maxLength?: number;
  variant?: InputOTPVariants['variant'];
  classNames?: InputOTPClassNames;
}

const InputOTPDemo = React.forwardRef<HTMLDivElement, InputOTPDemoProps>(
  ({ maxLength = 6, variant = 'default', classNames, ...props }, ref) => {
    return (
      <div ref={ref} className="flex items-center justify-center w-full h-full" {...props}>
        <InputOTP maxLength={maxLength} variant={variant} classNames={classNames}>
          <InputOTPGroup variant={variant} classNames={classNames}>
            <InputOTPSlot index={0} variant={variant} classNames={classNames} />
            <InputOTPSlot index={1} variant={variant} classNames={classNames} />
            <InputOTPSlot index={2} variant={variant} classNames={classNames} />
          </InputOTPGroup>
          <InputOTPSeparator variant={variant} classNames={classNames} />
          <InputOTPGroup variant={variant} classNames={classNames}>
            <InputOTPSlot index={3} variant={variant} classNames={classNames} />
            <InputOTPSlot index={4} variant={variant} classNames={classNames} />
            <InputOTPSlot index={5} variant={variant} classNames={classNames} />
          </InputOTPGroup>
        </InputOTP>
      </div>
    );
  }
);
InputOTPDemo.displayName = 'InputOTPDemo';

// ============================================================================
// Exports
// ============================================================================

export {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
  InputOTPDemo,
};
export type { InputOTPProps };
