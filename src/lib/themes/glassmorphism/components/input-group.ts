/**
 * InputGroup 组件样式
 */
export const inputGroupConfig = {
  slots: {
    root: 'flex w-full items-center',
    input: 'flex-1',
    button: 'shrink-0',
    addon: 'inline-flex items-center justify-center px-3 text-sm text-muted-foreground bg-muted border border-input',
  },
  variants: {
    variant: {
      default: {
        root: 'gap-2',
        input: 'rounded-md',
        button: 'rounded-md',
        addon: 'rounded-md',
      },
      attached: {
        root: 'gap-0',
        input: 'rounded-none first:rounded-l-md last:rounded-r-md focus:z-10',
        button: 'rounded-none first:rounded-l-md last:rounded-r-md',
        addon: 'rounded-none first:rounded-l-md last:rounded-r-md border-l-0 first:border-l',
      },
    },
    size: {
      default: {
        addon: 'h-9',
      },
      sm: {
        addon: 'h-8 text-xs',
      },
      lg: {
        addon: 'h-10',
      },
    },
  },
};