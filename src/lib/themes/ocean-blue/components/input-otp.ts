// ADR-008: 纯数据配置，无组件依赖
export const inputOtpConfig = {
  slots: {
    root: '',
    container: '',
    group: '',
    slot: [
      'rounded-lg',
      'border border-border',
      'bg-surface-1',
      'text-foreground',
      'data-[active=true]:border-primary',
      'data-[active=true]:ring-2 data-[active=true]:ring-primary/30',
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
