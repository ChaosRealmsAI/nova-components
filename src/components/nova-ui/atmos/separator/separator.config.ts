export const separatorBaseConfig = {
  slots: {
    // Using shrink-0 and dimensions only; background handled via inline style for CDN compatibility
    base: 'shrink-0',
  },
  variants: {
    orientation: {
      horizontal: { base: 'h-[1px] w-full' },
      vertical: { base: 'h-full w-[1px]' },
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
} as const;
