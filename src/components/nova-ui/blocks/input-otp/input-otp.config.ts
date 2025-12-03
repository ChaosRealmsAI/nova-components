/**
 * InputOTP Base Config
 *
 * Block 级别配置，定义 OTP 输入的布局和样式变体
 * 依赖的 Atoms: input
 */
export const inputOtpBaseConfig = {
  slots: {
    root: 'disabled:cursor-not-allowed',
    container: 'flex items-center gap-2 has-disabled:opacity-50',
    group: 'flex items-center',
    slot: 'relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md border-input dark:bg-input/30 data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:z-10 data-[active=true]:ring-[3px]',
    separator: '',
    caret: 'pointer-events-none absolute inset-0 flex items-center justify-center',
    caretLine: 'animate-caret-blink bg-foreground h-4 w-px duration-1000',
  },
  variants: {
    variant: {
      default: {
        root: '',
        container: '',
        group: '',
        slot: '',
      },
    },
  },
  defaultVariants: {
    variant: 'default' as const,
  },
} as const;
