// ADR-008: 纯数据配置，无组件依赖
export const buttonConfig = {
  slots: {
    base: [
      'rounded-none',
      'font-mono uppercase tracking-widest font-bold',
      'transition-all duration-200',
      '[clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)]',
      'relative',
      'px-6',
    ],
  },
  variants: {
    variant: {
      default: {
        base: [
          'bg-primary text-primary-foreground',
          'border-0',
          'hover:shadow-[0_0_20px_var(--primary)]',
          'hover:-translate-y-0.5 hover:translate-x-0.5',
        ],
      },
      destructive: {
        base: [
          'bg-destructive text-destructive-foreground',
          'bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.3)_25%,rgba(0,0,0,0.3)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.3)_75%,rgba(0,0,0,0.3))]',
          'bg-[length:10px_10px]',
          'hover:shadow-[0_0_20px_var(--destructive)]',
        ],
      },
      outline: {
        base: [
          'bg-transparent text-primary',
          'shadow-[inset_0_0_0_2px_var(--primary)]',
          'hover:bg-primary hover:text-primary-foreground',
          'hover:shadow-[0_0_20px_var(--primary)]',
        ],
      },
      secondary: {
        base: [
          'bg-secondary text-secondary-foreground',
          'hover:bg-secondary/80',
          '[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]',
        ],
      },
      ghost: {
        base: [
          'text-primary',
          'hover:bg-primary/10',
          'hover:shadow-[0_0_10px_var(--primary)]',
          '[clip-path:none]',
        ],
      },
      link: {
        base: '[clip-path:none] tracking-normal normal-case font-sans',
      },
    },
  },
};
