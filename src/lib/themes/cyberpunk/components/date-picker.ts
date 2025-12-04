/**
 * DatePicker 组件样式 - Cyberpunk (Time Selector)
 */
export const datePickerConfig = {
  slots: {
    // Reuses popover and calendar styles mostly
    trigger: [
      'w-full justify-start text-left font-normal',
      'rounded-none border-primary/30 bg-black font-mono text-sm',
      'hover:bg-primary/10 hover:text-primary',
      'data-[state=open]:bg-primary/20 data-[state=open]:text-primary',
    ],

    content: [ // Added missing slot
        'w-auto p-0',
    ],

    icon: [ // Added missing slot
        'mr-2 h-4 w-4',
    ],
  },
};
