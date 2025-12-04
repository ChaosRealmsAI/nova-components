/**
 * InputOTP 组件样式 - Shadcn Default Theme
 */
export const inputOtpConfig = {
  slots: {
    root: '',
    container: '',
    group: '',
    slot: [
      'border-y border-r text-sm shadow-xs transition-all',
      'first:rounded-l-md first:border-l last:rounded-r-md',
      'border-input dark:bg-input/30',
      'data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:z-10 data-[active=true]:ring-[3px]',
    ],
    separator: '',
    caret: '',
    caretLine: 'bg-foreground',
  },
  variants: {
    variant: {
      default: {
        slot: '',
      },
    },
  },
};
