// ADR-008: 纯数据配置，无组件依赖
export const inputGroupConfig = {
  slots: {
    root: '',
    input: '',
    button: '',
    addon: [
      'rounded-none',
      'border-primary/50',
      'bg-surface-1',
      'font-mono text-primary/70',
    ],
  },
  variants: {
    variant: {
      default: {},
      attached: {
        addon: [
          '[clip-path:polygon(6px_0,100%_0,100%_100%,0_100%,0_6px)]',
        ],
      },
    },
    size: {
      default: {},
      sm: {},
      lg: {},
    },
  },
};
