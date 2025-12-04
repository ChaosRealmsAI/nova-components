export const accordionConfig = {
  slots: {
    root: 'w-full',
    item: 'border-b-2 border-black last:border-b-0',
    header: 'flex',
    trigger: [
      'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline',
      '[&[data-state=open]>svg]:rotate-180',
      'text-lg font-bold hover:no-underline hover:bg-accent/50 px-2',
    ],
    content: [
      'overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
      'px-2 pb-4',
    ],
    contentInner: 'pt-0',
    chevron: 'h-4 w-4 shrink-0 transition-transform duration-200',
  },
};
