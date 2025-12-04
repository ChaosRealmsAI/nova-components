// ADR-008: 纯数据配置，无组件依赖

export const scrollAreaConfig = {
  slots: {
    base: [
      'rounded-lg',
      'border border-border/50',
      'bg-surface-1',
      'shadow-sm',
    ],
    viewport: 'rounded-lg',
    // Ocean Blue 风格内容样式 - 清新现代
    content: 'p-4 space-y-2',
    header: [
      'text-xs text-primary font-medium mb-4 border-b border-border/30 pb-2',
    ],
    item: [
      'flex items-center gap-3 py-2 px-3 rounded-md',
      'bg-surface-2/50',
      'hover:bg-primary/10 hover:shadow-sm',
      'transition-all cursor-default',
    ],
    itemIndex: 'text-xs text-muted-foreground/60 font-medium',
    itemText: 'text-sm text-muted-foreground hover:text-foreground',
  },
};

export const scrollBarConfig = {
  slots: {
    base: '',
    thumb: 'bg-primary/50 rounded-full',
  },
};
