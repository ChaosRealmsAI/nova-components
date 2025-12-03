// ADR-008: 纯数据配置，无组件依赖
export const buttonGroupConfig = {
  slots: {
    root: '',
  },
  variants: {
    variant: {
      default: {},
      outline: {},
    },
    size: {
      default: {},
      sm: {},
      lg: {},
    },
    attached: {
      true: {
        root: [
          '[&>button:first-child]:rounded-l-lg [&>button:first-child]:rounded-r-none',
          '[&>button:last-child]:rounded-r-lg [&>button:last-child]:rounded-l-none',
          '[&>button:not(:first-child):not(:last-child)]:rounded-none',
        ],
      },
      false: {},
    },
  },
};
