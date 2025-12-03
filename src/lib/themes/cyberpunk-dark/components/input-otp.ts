// ADR-008: 纯数据配置，无组件依赖
export const inputOtpConfig = {
  slots: {
    root: '',
    container: '',
    group: '',
    slot: [
      'rounded-none',
      'border-2 border-primary/50',
      'bg-surface-1',
      'text-foreground font-mono',
      'data-[active=true]:border-primary',
      'data-[active=true]:shadow-[0_0_10px_var(--primary)]',
      'transition-all duration-200',
    ],
    separator: 'text-primary',
    caret: '',
    caretLine: 'bg-primary',
  },
  variants: {
    variant: {
      default: {
        slot: '',
      },
    },
  },
};
