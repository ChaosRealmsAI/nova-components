/**
 * Slider Base Config - ADR-001 标准 Tailwind 类
 */
export const sliderBaseConfig = {
  slots: {
    base: 'relative flex w-48 touch-none items-center select-none data-[disabled]:opacity-50',
    track: 'relative grow overflow-hidden rounded-full bg-surface-2',
    range: 'absolute h-full bg-primary',
    thumb: 'block shrink-0 rounded-full border border-primary bg-background shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50',
  },
  variants: {
    variant: {
      default: { base: '', track: '', range: '', thumb: '' },
    },
    size: {
      default: { base: '', track: 'h-1.5', range: '', thumb: 'size-4' },
      sm: { base: '', track: 'h-1', range: '', thumb: 'size-3' },
      lg: { base: '', track: 'h-2', range: '', thumb: 'size-5' },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
} as const;
