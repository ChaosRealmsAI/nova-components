/**
 * Shadcn Default - Token Definition
 * 
 * Standard Zinc/Slate neutral theme typically used as the default in shadcn/ui.
 * Derived from standard HSL values but converted to HEX/Variables for Nova compatibility.
 */

// ============================================================================
// Palette (Internal)
// ============================================================================

const palette = {
  white: '#ffffff',
  black: '#09090b',
  
  // Zinc-like grays
  zinc50: '#fafafa',
  zinc100: '#f4f4f5',
  zinc200: '#e4e4e7',
  zinc300: '#d4d4d8',
  zinc400: '#a1a1aa',
  zinc500: '#71717a',
  zinc600: '#52525b',
  zinc700: '#3f3f46',
  zinc800: '#27272a',
  zinc900: '#18181b',
  zinc950: '#09090b',

  // Functional
  red500: '#ef4444',
  red600: '#dc2626',
};

// ============================================================================
// Tokens (Exported)
// ============================================================================

export const tokens: Record<string, string> = {
  // --- Base ---
  '--background': palette.white,
  '--foreground': palette.zinc950,

  // --- Surface Layers ---
  '--card': palette.white,
  '--card-foreground': palette.zinc950,
  '--popover': palette.white,
  '--popover-foreground': palette.zinc950,
  
  // Nova semantic mapping for surfaces
  '--surface-1': palette.white,
  '--surface-1-hover': palette.zinc50,
  '--surface-2': palette.zinc100,
  '--surface-2-hover': palette.zinc200,
  '--surface-3': palette.zinc200,

  // --- Brand / Primary ---
  '--primary': palette.zinc900,
  '--primary-foreground': palette.zinc50,
  '--primary-muted': 'rgba(24, 24, 27, 0.1)', // Custom for Nova effects

  // --- Secondary ---
  '--secondary': palette.zinc100,
  '--secondary-foreground': palette.zinc900,
  '--secondary-muted': 'rgba(244, 244, 245, 0.5)',

  // --- Muted ---
  '--muted': palette.zinc100,
  '--muted-foreground': palette.zinc500,

  // --- Accent (Hover states etc) ---
  '--accent': palette.zinc100,
  '--accent-foreground': palette.zinc900,

  // --- Destructive ---
  '--destructive': palette.red500,
  '--destructive-foreground': palette.zinc50,
  // Nova aliases
  '--error': palette.red500,
  '--error-foreground': palette.zinc50,

  // --- Borders & Inputs ---
  '--border': palette.zinc200,
  '--input': palette.zinc200,
  '--ring': palette.zinc900,

  // --- Shape ---
  '--radius': '0.5rem', // 8px (rounded-md)

  // --- Typography Scale ---
  '--text-xs': '0.75rem',      // 12px
  '--text-sm': '0.875rem',     // 14px
  '--text-base': '1rem',       // 16px
  '--text-lg': '1.125rem',     // 18px
  '--text-xl': '1.25rem',      // 20px
  '--text-2xl': '1.5rem',      // 24px
  '--text-3xl': '1.875rem',    // 30px

  // ========================================
  // 特效 Token (ADR-005)
  // ========================================
  // BorderBeam - 中性灰边框光束
  '--effect-beam-color': palette.zinc700,
  '--effect-beam-glow': 'color-mix(in srgb, #3f3f46, transparent 60%)',

  // Shimmer - 柔和白色流光
  '--effect-shimmer-color': 'rgba(255, 255, 255, 0.08)',

  // CosmicBackground - 柔和背景 (灰+蓝灰 渐变)
  '--effect-cosmic-glow-1': palette.zinc600,
  '--effect-cosmic-glow-2': '#6b7280', // gray-500

  // GridMatrix - 柔和网格
  '--effect-grid-color': 'rgba(113, 113, 122, 0.15)',

  // Spotlight - 聚光灯
  '--effect-spotlight-color': 'color-mix(in srgb, #71717a, transparent 85%)',
};

export const meta = {
  isDark: false,
};
