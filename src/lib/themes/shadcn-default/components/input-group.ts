/**
 * InputGroup 组件样式 - Shadcn Default Theme
 */
export const inputGroupConfig = {
  slots: {
    root: '',
    input: '',
    button: '',
    addon: 'inline-flex items-center justify-center px-3 text-sm text-muted-foreground bg-muted border border-input',
  },
  variants: {
    variant: {
      default: {
        root: '',
        input: 'rounded-md',
        button: 'rounded-md',
        addon: 'rounded-md',
      },
      attached: {
        root: '',
        input: 'rounded-none first:rounded-l-md last:rounded-r-md',
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
