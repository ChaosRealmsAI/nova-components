/**
 * Neo-Brutalism Tokens
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Philosophy:
 * - High Contrast: Pure black (#000000) on vivid colors.
 * - Bold Borders: Thick, dark borders everywhere.
 * - Hard Shadows: No blur, solid offset shadows.
 * - Raw Geometry: Sharp corners (0px radius).
 * ═══════════════════════════════════════════════════════════════════════════
 */

// ============================================================================
// Palette
// ============================================================================

const palette = {
  // Vivid Colors
  red: '#FF6B6B',
  teal: '#4ECDC4',
  yellow: '#FFE66D',
  purple: '#9B5DE5',
  green: '#A7F760',
  blue: '#54A0FF',

  // Grayscale
  black: '#000000',
  white: '#FFFFFF',
  gray100: '#F7F7F7',
  gray200: '#E6E6E6',
  gray300: '#CCCCCC',
  gray800: '#333333',
};

// ============================================================================
// Token Implementation
// ============================================================================

export const tokens: Record<string, string> = {
  // ========================================
  // 1. Brand
  // ========================================
  '--primary': palette.red,
  '--primary-foreground': palette.black,
  '--primary-muted': palette.gray300, // Muted state usually gray in brutalism
  '--primary-vivid': palette.red,

  '--secondary': palette.teal,
  '--secondary-foreground': palette.black,
  '--secondary-muted': palette.gray300,
  '--secondary-vivid': palette.teal,

  '--accent': palette.yellow,
  '--accent-foreground': palette.black,
  '--accent-muted': palette.gray300,
  '--accent-vivid': palette.yellow,

  // ========================================
  // 2. Semantic
  // ========================================
  '--success': palette.green,
  '--success-foreground': palette.black,
  '--success-muted': palette.gray200,
  '--success-vivid': palette.green,

  '--warning': palette.yellow,
  '--warning-foreground': palette.black,
  '--warning-muted': palette.gray200,
  '--warning-vivid': palette.yellow,

  '--error': palette.red,
  '--error-foreground': palette.black,
  '--error-muted': palette.gray200,
  '--error-vivid': palette.red,

  // Destructive (shadcn)
  '--destructive': palette.red,
  '--destructive-foreground': palette.black,

  '--info': palette.blue,
  '--info-foreground': palette.black,
  '--info-muted': palette.gray200,
  '--info-vivid': palette.blue,

  // ========================================
  // 3. Surface
  // ========================================
  '--background': palette.white,     // Pure white background
  '--background-alt': palette.gray100,

  '--surface-1': palette.white,       // Cards are white
  '--surface-1-hover': palette.gray100,

  '--surface-2': palette.white,       // Dropdowns are white
  '--surface-2-hover': palette.gray100,

  '--surface-3': palette.white,
  '--surface-3-hover': palette.gray100,

  // ========================================
  // 4. Text
  // ========================================
  '--foreground': palette.black,          // Always black
  '--foreground-secondary': palette.gray800,
  '--muted': palette.gray200,
  '--muted-foreground': palette.gray800,
  '--subtle-foreground': palette.gray300,
  '--disabled-foreground': palette.gray300,

  // ========================================
  // 5. Structure
  // ========================================
  '--border': palette.black,         // ALL borders are black
  '--border-muted': palette.black,   // Even muted borders are black in brutalism
  '--border-vivid': palette.black,
  '--border-width': '2px',           // Thick borders
  '--ring': palette.black,           // Focus ring is black
  '--radius': '0px',                 // No rounded corners
  '--opacity-disabled': '0.5',
  '--spacing-base': '0.25rem',

  // ========================================
  // 6. Typography
  // ========================================
  '--font-sans': 'ui-sans-serif, system-ui, sans-serif', // Bold standard fonts
  '--font-mono': 'ui-monospace, monospace',
  '--font-display': 'ui-sans-serif, system-ui, sans-serif',

  // Font Sizes (Standard)
  '--text-xs': '0.75rem',
  '--text-sm': '0.875rem',
  '--text-base': '1rem',
  '--text-lg': '1.125rem',
  '--text-xl': '1.25rem',
  '--text-2xl': '1.5rem',
  '--text-3xl': '1.875rem',

  // ========================================
  // 7. Shadow (Hard Shadows)
  // ========================================
  '--shadow-sm': '2px 2px 0px 0px #000000',
  '--shadow-md': '4px 4px 0px 0px #000000',
  '--shadow-lg': '8px 8px 0px 0px #000000',
  '--shadow-glow': 'none', // No glow in brutalism
};

// ============================================================================
// Meta
// ============================================================================

export const meta = {
  isDark: false,
  codeTheme: 'github-light' as const,
};