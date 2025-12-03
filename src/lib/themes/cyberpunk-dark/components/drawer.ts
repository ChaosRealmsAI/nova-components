// ADR-008: 纯数据配置，无组件依赖
export const drawerConfig = {
  slots: {
    overlay: 'bg-black/70',
    content: [
      'border-2 border-primary/50',
      'bg-surface-1',
      'shadow-[0_0_30px_var(--primary)]',
    ],
    header: '',
    title: 'font-mono uppercase tracking-wider',
    description: 'font-mono',
    footer: '',
    handle: 'bg-primary/50',
  },
  variants: {
    direction: {
      bottom: {
        content: 'rounded-t-none border-t-primary',
      },
      top: {
        content: 'rounded-b-none border-b-primary',
      },
      left: {
        content: 'border-r-primary',
      },
      right: {
        content: 'border-l-primary',
      },
    },
  },
};
