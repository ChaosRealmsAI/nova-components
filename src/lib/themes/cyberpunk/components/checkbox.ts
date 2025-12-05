/**
 * Checkbox 组件样式 - Cyberpunk (Digital Check)
 */
export const checkboxConfig = {
  slots: {
    base: [
      'peer h-5 w-5 shrink-0 border-2 border-primary ring-offset-background',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'rounded-none', // Sharp
      'bg-transparent',
      'data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
      'data-[state=checked]:shadow-[0_0_8px_rgba(0,229,255,0.5)]', // Glow
    ],
    indicator: [
      'flex items-center justify-center text-current',
    ],
    icon: [
      'h-4 w-4',
    ],
  },
  variants: {
    variant: {
      default: {
        base: [],
        indicator: [],
        icon: [],
      },
      destructive: {
        base: ['border-destructive', 'data-[state=checked]:bg-destructive'],
        indicator: [],
        icon: [],
      },
    },
    size: {
      default: {
        base: ['h-5 w-5'],
        icon: ['h-4 w-4'],
      },
      sm: {
        base: ['h-4 w-4'],
        icon: ['h-3 w-3'],
      },
      lg: {
        base: ['h-6 w-6'],
        icon: ['h-5 w-5'],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
