import { tv } from 'tailwind-variants';

export const alertConfig = {
  slots: {
    base: 'rounded-lg border px-4 py-3 text-sm',
    icon: '',
    title: 'font-medium tracking-tight',
    description: 'text-muted-foreground text-sm [&_p]:leading-relaxed',
  },
  variants: {
    variant: {
      default: {
        base: 'bg-background text-foreground border-border',
      },
      destructive: {
        base: 'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
        title: 'text-destructive',
        description: 'text-destructive/90',
      },
    },
  },
};
