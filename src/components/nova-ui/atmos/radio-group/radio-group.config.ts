/**
 * RadioGroup Base Config - ADR-001 标准 Tailwind 类
 */
export const radioGroupBaseConfig = {
  slots: {
    base: 'grid gap-2',
  },
  variants: {
    variant: {
      default: { base: '' },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
} as const;

export const radioGroupItemBaseConfig = {
  slots: {
    base: 'aspect-square rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 bg-background',
    indicator: 'flex items-center justify-center',
    icon: 'fill-primary',
  },
  variants: {
    variant: {
      default: { base: '', indicator: '', icon: '' },
    },
    size: {
      default: { base: 'h-4 w-4', indicator: '', icon: 'h-2.5 w-2.5' },
      sm: { base: 'h-3.5 w-3.5', indicator: '', icon: 'h-2 w-2' },
      lg: { base: 'h-5 w-5', indicator: '', icon: 'h-3 w-3' },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
} as const;
