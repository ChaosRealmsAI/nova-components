// ADR-008: 纯数据配置，无组件依赖
export const sheetConfig = {
  slots: {
    overlay: 'bg-black/70',
    content: [
      'border-2 border-primary/50',
      'bg-surface-1',
      'shadow-[0_0_30px_var(--primary)]',
    ],
    close: 'hover:text-primary hover:shadow-[0_0_8px_var(--primary)]',
    header: '',
    footer: '',
    title: 'font-mono uppercase tracking-wider',
    description: 'font-mono',
  },
  variants: {
    side: {
      right: {
        content: 'border-l-primary',
      },
      left: {
        content: 'border-r-primary',
      },
      top: {
        content: 'border-b-primary',
      },
      bottom: {
        content: 'border-t-primary',
      },
    },
  },
};
