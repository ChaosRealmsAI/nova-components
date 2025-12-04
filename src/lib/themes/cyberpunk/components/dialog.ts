/**
 * Dialog 组件样式 - Cyberpunk (Holographic Pop-up)
 * 
 * Design Concept: "Holographic Overlay"
 * - Frame: Double border with corner accents.
 * - Backdrop: Pixelated or scanline blur.
 * - Animation: Scale in with "glitch".
 */
export const dialogConfig = {
  slots: {
    overlay: [
      'fixed inset-0 z-50',
      'bg-black/60 backdrop-blur-sm', // Dark blurred background
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      
      // Scanline overlay effect on the entire screen when modal is open
      'after:fixed after:inset-0 after:pointer-events-none after:z-50',
      'after:bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))]',
      'after:bg-[length:100%_4px,6px_100%]',
    ],
    
    content: [
      'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%]',
      'bg-[#050505] border-2 border-primary', // High contrast black with primary border
      'p-0', // Reset padding for custom layout
      'shadow-[0_0_40px_rgba(0,229,255,0.3)]', // Large glow
      
      // Shape: Cut corners
      '[clip-path:polygon(20px_0,100%_0,100%_calc(100%_-_20px),calc(100%_-_20px)_100%,0_100%,0_20px)]',
      
      // Corner Accents (Simulated via box-shadow or pseudo-elements if possible, 
      // but here we use the strong border and clip-path to define the shape)
      
      'duration-200',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      'data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]',
      'data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
    ],
    
    header: [
      'flex flex-col space-y-1.5 text-center sm:text-left',
      'bg-primary/10 p-6 pb-4', // Header background distinction
      'border-b border-primary/30',
    ],
    
    footer: [
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      'p-6 pt-4',
      'bg-black',
    ],
    
    title: [
      'text-lg font-bold leading-none tracking-widest uppercase font-mono',
      'text-primary drop-shadow-[0_0_5px_rgba(0,229,255,0.8)]', // Glowing text
      'flex items-center gap-2',
      'before:content-["["] before:text-primary before:mr-1',
      'after:content-["]"] after:text-primary after:ml-1',
    ],
    
    description: [
      'text-sm text-muted-foreground font-mono leading-relaxed',
    ],
    
    close: [
      'absolute right-4 top-4',
      'rounded-none opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none',
      'data-[state=open]:bg-accent data-[state=open]:text-muted-foreground',
      'hover:text-primary hover:bg-primary/20', // Custom close hover
    ],
  },
};