// ADR-008: 纯数据配置，无组件依赖

export const scrollAreaConfig = {
  slots: {
    base: [
      'rounded-xl',
      'border border-border',
      'bg-surface-1',
      'shadow-md',
    ],
    viewport: 'rounded-xl',
    // Sunset Warm 风格内容样式
    content: 'p-4 space-y-2',
    header: [
      'text-xs text-primary/80 font-medium mb-4 border-b border-border/50 pb-2',
    ],
    item: [
      'flex items-center gap-3 py-2 px-3 rounded-lg',
      'bg-gradient-to-r from-muted/30 to-muted/50',
      'hover:from-primary/10 hover:to-accent/10',
      'transition-all cursor-default',
    ],
    itemIndex: 'text-xs text-primary/60 font-medium',
    itemText: 'text-sm text-muted-foreground hover:text-foreground',
  },
};

export const scrollBarConfig = {
  slots: {
    base: '',
    thumb: 'bg-primary/60 rounded-full',
  },
};
