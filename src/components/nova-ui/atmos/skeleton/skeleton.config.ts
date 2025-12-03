/**
 * Skeleton Base Config - ADR-001 标准 Tailwind 类
 */
export const skeletonBaseConfig = {
  slots: {
    base: 'animate-pulse rounded-md bg-surface-2 w-full h-full min-h-[20px] min-w-[20px]',
  },
  variants: {
    variant: {
      default: { base: '' },
      circular: { base: 'rounded-full' },
      text: { base: 'h-4 rounded' },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
} as const;
