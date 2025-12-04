export const alertConfig = {
  slots: {
    base: [
      'relative w-full rounded-lg border-2 border-black p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
      'bg-background text-foreground',
      'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
    ],
    title: 'mb-1 font-bold leading-none tracking-tight',
    description: 'text-sm [&_p]:leading-relaxed',
    icon: 'h-4 w-4',
  },
  variants: {
    variant: {
      default: 'bg-background text-foreground',
      destructive: 'bg-destructive/20 border-destructive text-destructive dark:border-destructive [&>svg]:text-destructive',
    },
  },
};
