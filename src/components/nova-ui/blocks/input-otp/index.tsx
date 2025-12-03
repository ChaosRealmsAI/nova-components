'use client';

import * as React from 'react';
import { OTPInput, OTPInputContext } from 'input-otp';
import { MinusIcon } from 'lucide-react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '@/lib/utils';
import { inputOtpBaseConfig } from './input-otp.config';

// Re-export for registry
export { inputOtpBaseConfig };

// Atoms 依赖声明
export const inputOtpAtoms = ['input'] as const;

// ============================================================================
// Styles
// ============================================================================

const inputOtp = tv(inputOtpBaseConfig);

// ============================================================================
// Types
// ============================================================================

export type InputOTPVariants = VariantProps<typeof inputOtp>;
export type InputOTPClassNames = Partial<
  Record<keyof typeof inputOtpBaseConfig.slots, string>
>;

type InputOTPProps = React.ComponentPropsWithoutRef<typeof OTPInput> &
  InputOTPVariants & {
    classNames?: InputOTPClassNames;
  };

// ============================================================================
// Components
// ============================================================================

const InputOTP = React.forwardRef<HTMLInputElement, InputOTPProps>(
  ({ classNames, containerClassName, variant, ...props }, ref) => {
    const styles = inputOtp({ variant });

    return (
      <OTPInput
        ref={ref}
        data-slot="input-otp"
        containerClassName={cn(
          classNames?.container ?? styles.container(),
          containerClassName
        )}
        className={cn(classNames?.root ?? styles.root())}
        {...props}
      />
    );
  }
);
InputOTP.displayName = 'InputOTP';

const InputOTPGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> & { classNames?: InputOTPClassNames }
>(({ className, classNames, ...props }, ref) => {
  const styles = inputOtp();

  return (
    <div
      ref={ref}
      data-slot="input-otp-group"
      className={cn(classNames?.group ?? styles.group(), className)}
      {...props}
    />
  );
});
InputOTPGroup.displayName = 'InputOTPGroup';

const InputOTPSlot = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> & {
    index: number;
    classNames?: InputOTPClassNames;
  }
>(({ index, className, classNames, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } =
    inputOTPContext?.slots[index] ?? {};
  const styles = inputOtp();

  return (
    <div
      ref={ref}
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(classNames?.slot ?? styles.slot(), className)}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className={classNames?.caret ?? styles.caret()}>
          <div className={classNames?.caretLine ?? styles.caretLine()} />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = 'InputOTPSlot';

const InputOTPSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> & { classNames?: InputOTPClassNames }
>(({ className, classNames, ...props }, ref) => {
  const styles = inputOtp();

  return (
    <div
      ref={ref}
      data-slot="input-otp-separator"
      role="separator"
      className={cn(classNames?.separator ?? styles.separator(), className)}
      {...props}
    >
      <MinusIcon className="size-4" />
    </div>
  );
});
InputOTPSeparator.displayName = 'InputOTPSeparator';

// ============================================================================
// Demo Component (for Canvas)
// ============================================================================

export interface InputOTPDemoProps {
  maxLength?: number;
  variant?: InputOTPVariants['variant'];
  classNames?: InputOTPClassNames;
}

const InputOTPDemo = React.forwardRef<HTMLDivElement, InputOTPDemoProps>(
  ({ maxLength = 6, variant, classNames, ...props }, ref) => {
    return (
      <div ref={ref} {...props}>
        <InputOTP maxLength={maxLength} variant={variant} classNames={classNames}>
          <InputOTPGroup classNames={classNames}>
            <InputOTPSlot index={0} classNames={classNames} />
            <InputOTPSlot index={1} classNames={classNames} />
            <InputOTPSlot index={2} classNames={classNames} />
          </InputOTPGroup>
          <InputOTPSeparator classNames={classNames} />
          <InputOTPGroup classNames={classNames}>
            <InputOTPSlot index={3} classNames={classNames} />
            <InputOTPSlot index={4} classNames={classNames} />
            <InputOTPSlot index={5} classNames={classNames} />
          </InputOTPGroup>
        </InputOTP>
      </div>
    );
  }
);
InputOTPDemo.displayName = 'InputOTPDemo';

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator, InputOTPDemo };
export type { InputOTPProps };
