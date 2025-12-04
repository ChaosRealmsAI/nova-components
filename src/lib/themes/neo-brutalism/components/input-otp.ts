export const inputOtpConfig = {
  slots: {
    root: 'flex items-center gap-2',
    container: 'flex items-center gap-2', // keeping both just in case
    group: 'flex items-center',
    slot: 'relative flex h-10 w-10 items-center justify-center border-y-2 border-r-2 border-black text-sm transition-all first:rounded-l-md first:border-l-2 last:rounded-r-md',
    slotActive: 'z-10 ring-2 ring-ring ring-offset-background',
    separator: 'text-xl font-bold mx-1',
    caret: 'pointer-events-none absolute inset-0 flex items-center justify-center animate-caret-blink',
    caretLine: 'h-4 w-px bg-foreground',
  },
};