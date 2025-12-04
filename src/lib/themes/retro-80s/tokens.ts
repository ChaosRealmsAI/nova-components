/**
 * Retro 80s Tokens
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Philosophy:
 * - Neon Colors: High saturation neon pink, cyan, yellow
 * - Dark Background: Deep black (#0A0A0A) simulating CRT displays
 * - Glow Effects: Colored glowing shadows everywhere
 * - Monospace Typography: Courier-style fonts for retro computer feel
 * - Small Radius: 2-4px rounded corners, some elements can be sharp
 * ═══════════════════════════════════════════════════════════════════════════
 */

// ============================================================================
// Palette
// ============================================================================

const palette = {
  // Neon Colors (80s signature colors)
  neonPink: '#FF00FF',      // Magenta - Primary
  neonCyan: '#00FFFF',       // Cyan - Secondary
  neonYellow: '#FFFF00',     // Yellow - Accent
  neonGreen: '#00FF00',      // Green - Success
  neonOrange: '#FF6600',     // Orange - Warning
  neonRed: '#FF0066',        // Red - Error/Destructive
  neonBlue: '#0066FF',       // Blue - Info

  // Background (Dark CRT-like)
  black: '#000000',          // Pure black
  darkBg: '#0A0A0A',         // Deep black background
  surface1: '#1A1A1A',       // Dark gray-black (cards)
  surface2: '#252525',       // Medium gray-black (dropdowns)
  surface3: '#333333',       // Light gray-black (dialogs)

  // Grayscale
  white: '#FFFFFF',
  gray100: '#F0F0F0',
  gray200: '#CCCCCC',
  gray300: '#999999',
  gray400: '#666666',
  gray500: '#333333',
  gray600: '#1A1A1A',
};

// ============================================================================
// Token 实现 (导出)
// ============================================================================

export const tokens: Record<string, string> = {
  // ========================================
  // 1. 品牌色 (Brand)
  // ========================================
  '--primary': palette.neonPink,            // Neon Magenta - 80s signature color
  '--primary-foreground': palette.black,     // Black text on neon
  '--primary-muted': '#CC00CC',              // Muted pink
  '--primary-vivid': palette.neonPink,       // Full neon pink

  '--secondary': palette.neonCyan,          // Neon Cyan - secondary actions
  '--secondary-foreground': palette.black,   // Black text on cyan
  '--secondary-muted': '#00CCCC',            // Muted cyan
  '--secondary-vivid': palette.neonCyan,     // Full neon cyan

  '--accent': palette.neonYellow,           // Neon Yellow - highlights
  '--accent-foreground': palette.black,      // Black text on yellow
  '--accent-muted': '#CCCC00',               // Muted yellow
  '--accent-vivid': palette.neonYellow,      // Full neon yellow

  // ========================================
  // 2. 语义色 (Semantic)
  // ========================================
  '--success': palette.neonGreen,           // Neon Green - success
  '--success-foreground': palette.black,    // Black text on green
  '--success-muted': '#00CC00',             // Muted green
  '--success-vivid': palette.neonGreen,     // Full neon green

  '--warning': palette.neonOrange,          // Neon Orange - warning
  '--warning-foreground': palette.black,     // Black text on orange
  '--warning-muted': '#CC6600',              // Muted orange
  '--warning-vivid': palette.neonOrange,     // Full neon orange

  '--error': palette.neonRed,               // Neon Red - error
  '--error-foreground': palette.black,      // Black text on red
  '--error-muted': '#CC0066',                // Muted red
  '--error-vivid': palette.neonRed,          // Full neon red

  // Destructive (shadcn 组件使用)
  '--destructive': palette.neonRed,         // Same as error
  '--destructive-foreground': palette.black, // Black text

  '--info': palette.neonBlue,                // Neon Blue - info
  '--info-foreground': palette.black,        // Black text on blue
  '--info-muted': '#0066CC',                 // Muted blue
  '--info-vivid': palette.neonBlue,          // Full neon blue

  // ========================================
  // 3. 背景层级 (Surface)
  // ========================================
  '--background': palette.darkBg,           // Deep black - CRT background
  '--background-alt': palette.black,        // Pure black alternative

  '--surface-1': palette.surface1,          // Dark gray-black - cards/panels
  '--surface-1-hover': palette.surface2,    // Slightly lighter on hover

  '--surface-2': palette.surface2,          // Medium gray-black - dropdowns
  '--surface-2-hover': palette.surface3,    // Lighter on hover

  '--surface-3': palette.surface3,          // Light gray-black - dialogs
  '--surface-3-hover': '#404040',           // Even lighter on hover

  // ========================================
  // 4. 文字颜色 (Text)
  // ========================================
  '--foreground': palette.white,            // White text on dark background
  '--foreground-secondary': palette.gray200, // Light gray for secondary text
  '--muted': palette.surface1,              // Muted background
  '--muted-foreground': palette.gray400,     // Muted text (gray)
  '--subtle-foreground': palette.gray500,   // Subtle text
  '--disabled-foreground': palette.gray500, // Disabled text (gray)

  // ========================================
  // 5. 结构 (Structure)
  // ========================================
  '--border': palette.neonPink,            // Neon pink border (default)
  '--border-muted': palette.gray400,        // Muted gray border
  '--border-vivid': palette.neonPink,       // Vivid neon border
  '--border-width': '2px',                  // 2px thick borders
  '--ring': palette.neonCyan,               // Cyan focus ring (glowing)
  '--radius': '4px',                        // Small radius (2-4px)
  '--opacity-disabled': '0.5',              // 50% opacity when disabled
  '--spacing-base': '0.25rem',              // 4px base spacing

  // ========================================
  // 6. 字体 (Typography)
  // ========================================
  '--font-sans': 'ui-sans-serif, system-ui, sans-serif', // Fallback sans-serif
  '--font-mono': "'Courier New', Courier, 'Lucida Console', Monaco, monospace", // Retro monospace
  '--font-display': "'Courier New', Courier, 'Lucida Console', Monaco, monospace", // Display uses mono

  // 字号 (Font Size)
  '--text-xs': '0.75rem',      // 12px
  '--text-sm': '0.875rem',     // 14px
  '--text-base': '1rem',       // 16px
  '--text-lg': '1.125rem',     // 18px
  '--text-xl': '1.25rem',      // 20px
  '--text-2xl': '1.5rem',      // 24px
  '--text-3xl': '1.875rem',    // 30px

  // ========================================
  // 7. 阴影 (Shadow) - Neon Glow Effects
  // ========================================
  '--shadow-sm': '0 0 10px var(--primary)',      // Small neon glow
  '--shadow-md': '0 0 20px var(--primary)',      // Medium neon glow
  '--shadow-lg': '0 0 30px var(--primary)',       // Large neon glow
  '--shadow-glow': '0 0 20px var(--primary), 0 0 40px var(--primary)', // Intense glow

};

// ============================================================================
// 主题元信息
// ============================================================================

export const meta = {
  isDark: true,  // Dark theme (CRT-like black background)
  codeTheme: 'github-dark' as const,  // Dark code theme
};
