export const avatarConfig = {
  slots: {
    base: 'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-black',
    image: 'aspect-square h-full w-full',
    fallback: 'flex h-full w-full items-center justify-center rounded-full bg-muted font-bold',
  },
};

export const avatarFallbackConfig = {
  slots: {
    base: 'flex h-full w-full items-center justify-center rounded-full bg-muted',
  },
};
