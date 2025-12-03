export const cardBaseConfig = {
  slots: {
    base: 'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm',
    header: 'grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6',
    title: 'leading-none font-semibold',
    description: 'text-muted-foreground text-sm',
    action: 'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
    content: 'px-6',
    footer: 'flex items-center px-6',
  },
  variants: {
    variant: {
      default: {},
      outline: {
        base: 'border-2 shadow-none',
      },
      ghost: {
        base: 'border-transparent shadow-none bg-transparent',
      },
      elevated: {
        base: 'shadow-lg border-0',
      },
    },
    size: {
      sm: {
        base: 'py-4 gap-4',
        header: 'px-4 gap-1',
        title: 'text-sm',
        description: 'text-xs',
        content: 'px-4',
        footer: 'px-4',
      },
      default: {},
      lg: {
        base: 'py-8 gap-8',
        header: 'px-8 gap-3',
        title: 'text-xl',
        content: 'px-8',
        footer: 'px-8',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
} as const;
