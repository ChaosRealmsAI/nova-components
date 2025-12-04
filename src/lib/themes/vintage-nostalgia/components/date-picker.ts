/**
 * DatePicker 组件 - Vintage Nostalgia 复古怀旧风格
 */
export const datePickerConfig = {
  slots: {
    trigger: [
      'flex h-10 w-full items-center justify-between',
      'rounded-[2px]',
      'border-2 border-border',
      'bg-background px-3 py-2',
      'font-mono text-sm',
      'shadow-[inset_0_2px_4px_rgba(44,24,16,0.12)]',
      'transition-all duration-200',
      'focus:border-primary focus:shadow-[inset_0_2px_4px_rgba(44,24,16,0.15),0_0_0_2px_rgba(139,69,19,0.15)] focus:outline-none',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'aria-[invalid=true]:border-destructive',
    ],
    content: [
      'z-50',
      'rounded-[2px]',
      'border-2 border-border',
      'bg-surface-1 p-3',
      'shadow-[inset_0_1px_2px_rgba(44,24,16,0.1),4px_4px_0_0_rgba(44,24,16,0.2)]',
    ],
    icon: '',
  },
};
