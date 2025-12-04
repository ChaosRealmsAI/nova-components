/**
 * InputOTP 组件 - Vintage Nostalgia 复古怀旧风格
 */
export const inputOtpConfig = {
  slots: {
    root: 'flex items-center gap-2',
    container: '',
    group: 'flex items-center',
    slot: [
      'relative flex h-10 w-10 items-center justify-center',
      'rounded-[2px]',
      'border-2 border-border',
      'bg-background',
      'shadow-[inset_0_2px_4px_rgba(44,24,16,0.12)]',
      'font-mono text-sm font-semibold text-foreground',
      'transition-all duration-200',
      'focus-within:border-primary focus-within:shadow-[inset_0_2px_4px_rgba(44,24,16,0.15),0_0_0_2px_rgba(139,69,19,0.15)]',
      'data-[active=true]:border-primary data-[active=true]:shadow-[inset_0_2px_4px_rgba(44,24,16,0.15),0_0_0_2px_rgba(139,69,19,0.15)]',
    ],
    separator: 'text-border',
    caret: '',
    caretLine: '',
  },
  variants: {
    variant: {
      default: {
        slot: '',
      },
    },
  },
};
