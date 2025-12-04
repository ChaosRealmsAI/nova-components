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
          '[&>button]:rounded-none',
          '[&>button:first-child]:[clip-path:polygon(6px_0,100%_0,100%_100%,0_100%,0_6px)]',
          '[&>button:last-child]:[clip-path:polygon(0_0,100%_0,100%_calc(100%-6px),calc(100%-6px)_100%,0_100%)]',
        ],
      },
      false: {},
    },
  },
};
