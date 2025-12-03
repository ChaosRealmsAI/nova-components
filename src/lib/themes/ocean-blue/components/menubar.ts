// ADR-008: 纯数据配置，无组件依赖
export const menubarConfig = {
  slots: {
    root: [
      'rounded-xl',
      'border-primary/20',
      'bg-background/80 backdrop-blur-sm',
      'shadow-sm',
    ],
    trigger: [
      'rounded-lg',
      'focus:bg-primary/10 focus:text-primary',
      'data-[state=open]:bg-primary/10 data-[state=open]:text-primary',
      'transition-colors duration-150',
    ],
    content: [
      'rounded-xl',
      'border-primary/20',
      'bg-background/95 backdrop-blur-md',
      'shadow-lg shadow-primary/10',
    ],
    item: [
      'rounded-lg',
      'focus:bg-primary/10 focus:text-primary',
      'transition-colors duration-150',
    ],
    label: 'text-primary/70 font-medium',
    separator: 'bg-primary/10',
    shortcut: 'text-primary/50',
    checkboxItem: 'rounded-lg focus:bg-primary/10 focus:text-primary',
    radioItem: 'rounded-lg focus:bg-primary/10 focus:text-primary',
    indicator: '',
    subTrigger: 'rounded-lg focus:bg-primary/10 focus:text-primary',
    subContent: [
      'rounded-xl',
      'border-primary/20',
      'bg-background/95 backdrop-blur-md',
      'shadow-lg shadow-primary/10',
    ],
  },
};
