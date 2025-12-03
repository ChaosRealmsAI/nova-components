/**
 * DatePicker Base Config
 * Block 级别配置
 * 依赖 Atoms: popover, button
 * 依赖 Blocks: calendar
 */
export const datePickerBaseConfig = {
  slots: {
    trigger: 'w-[280px] justify-start text-left font-normal',
    content: 'w-auto p-0',
    icon: 'mr-2 h-4 w-4',
  },
  variants: {
    variant: {
      default: {},
    },
  },
  defaultVariants: {
    variant: 'default' as const,
  },
} as const;
