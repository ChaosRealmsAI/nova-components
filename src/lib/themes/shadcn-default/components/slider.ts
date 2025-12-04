/**
 * Slider - Shadcn Default Theme
 */
export const sliderConfig = {
  slots: {
    base: ['w-full', 'data-[disabled]:opacity-50'],
    track: ['rounded-full', 'bg-surface-2'],
    range: ['bg-primary'],
    thumb: [
      'rounded-full',
      'border',
      'border-primary',
      'bg-background',
      'shadow-sm',
      'transition-colors',
      'focus-visible:ring-[3px]',
      'focus-visible:ring-ring',
      'focus-visible:ring-ring/50',
      'disabled:opacity-50',
    ],
  },
  variants: {
    size: {
      default: {
        track: 'h-1.5',
        thumb: 'size-4',
      },
      sm: {
        track: 'h-1',
        thumb: 'size-3',
      },
      lg: {
        track: 'h-2',
        thumb: 'size-5',
      },
    },
  },
};
