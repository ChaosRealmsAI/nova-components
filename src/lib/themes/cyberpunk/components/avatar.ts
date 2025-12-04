/**
 * Avatar 组件样式 - Cyberpunk (User Profile)
 */
export const avatarConfig = {
  slots: {
    base: [ // Changed from root to base
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-none', // No circle
      
      // Octagon Shape
      '[clip-path:polygon(30%_0,70%_0,100%_30%,100%_70%,70%_100%,30%_100%,0_70%,0_30%)]',
      
      // Border Glow (Simulated wrapper needed for true border, but we can use outline/ring on root)
      'ring-2 ring-primary ring-offset-2 ring-offset-background',
    ],
    
    image: [
      'aspect-square h-full w-full',
    ],
    
    fallback: [
      'flex h-full w-full items-center justify-center bg-muted',
      'text-primary font-mono font-bold',
    ],
  },
};

export const avatarFallbackConfig = {
  slots: {
    base: [ // Changed from root to base
      'flex h-full w-full items-center justify-center rounded-none bg-muted',
    ]
  }
}
