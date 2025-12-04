export const buttonGroupConfig = {
  slots: {
    root: 'inline-flex items-center',
  },
  variants: {
    variant: {
      default: {
        root: '',
      },
      outline: {
        root: '',
      },
    },
    size: {
      default: {
        root: '',
      },
      sm: {
        root: '',
      },
      lg: {
        root: '',
      },
    },
    attached: {
      true: {
        root: '[&>button]:rounded-none [&>button:first-child]:rounded-l-md [&>button:last-child]:rounded-r-md [&>button:not(:first-child)]:-ml-px',
      },
      false: {
        root: 'gap-2',
      },
    },
  },
};
