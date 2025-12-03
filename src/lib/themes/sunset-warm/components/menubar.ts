// ADR-008: 纯数据配置，无组件依赖
export const menubarConfig = {
  slots: {
    root: [
      'rounded-2xl',
      'border-primary/20',
      'bg-gradient-to-r from-background to-primary/5',
      'shadow-sm shadow-primary/5',
    ],
    trigger: [
      'rounded-xl',
      'focus:bg-primary/15 focus:text-primary',
      'data-[state=open]:bg-primary/15 data-[state=open]:text-primary',
      'transition-all duration-200',
    ],
    content: [
      'rounded-2xl',
      'border-primary/20',
      'bg-gradient-to-br from-background to-primary/5',
      'shadow-xl shadow-primary/10',
    ],
    item: [
      'rounded-xl',
      'focus:bg-primary/15 focus:text-primary',
      'transition-all duration-200',
    ],
    label: 'text-primary/60 font-semibold',
    separator: 'bg-primary/10',
    shortcut: 'text-primary/40',
    checkboxItem: 'rounded-xl focus:bg-primary/15 focus:text-primary',
    radioItem: 'rounded-xl focus:bg-primary/15 focus:text-primary',
    indicator: '',
    subTrigger: 'rounded-xl focus:bg-primary/15 focus:text-primary',
    subContent: [
      'rounded-2xl',
      'border-primary/20',
      'bg-gradient-to-br from-background to-primary/5',
      'shadow-xl shadow-primary/10',
    ],
  },
};
