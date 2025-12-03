// ADR-008: 纯数据配置，无组件依赖
export const inputOtpConfig = {
  slots: {
    root: '',
    container: '',
    group: '',
    slot: [
      'rounded-md',
      'border border-border',
      'bg-surface-1',
      'text-foreground',
      'data-[active=true]:border-primary',
      'data-[active=true]:ring-2 data-[active=true]:ring-primary/20',
      'shadow-sm',
      'transition-all duration-200',
    ],
    separator: 'text-muted-foreground',
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
