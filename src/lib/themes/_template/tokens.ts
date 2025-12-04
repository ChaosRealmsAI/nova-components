/**
 * Theme Template - Token Definitions
 *
 * This file serves as a reference template for creating new themes.
 * All 78 tokens are documented with their purpose and usage guidelines.
 *
 * Token Categories:
 * 1. Brand Colors (primary, secondary, accent)
 * 2. Semantic Colors (success, warning, error, info)
 * 3. Surface/Background Layers
 * 4. Text Colors
 * 5. Structure (border, ring, radius)
 * 6. Typography
 * 7. Shadows
 * 8. Effects/Animations
 *
 * IMPORTANT: Do not remove or rename any tokens. All themes must have
 * identical token keys to ensure consistency.
 */

// ============================================================================
// Internal Palette (not exported)
// ============================================================================

/**
 * Define your color palette here.
 * These are internal constants used to build the tokens.
 * Naming convention: descriptive color names or hex references.
 */
const palette = {
  // Brand colors - customize for your theme
  brandPrimary: '#3B82F6',    // Blue-500
  brandSecondary: '#8B5CF6',  // Violet-500
  brandAccent: '#F59E0B',     // Amber-500

  // Semantic colors
  green: '#22C55E',           // Success
  yellow: '#EAB308',          // Warning
  red: '#EF4444',             // Error/Destructive
  blue: '#3B82F6',            // Info

  // Neutral scale (for backgrounds, borders, text)
  neutral50: '#FAFAFA',
  neutral100: '#F5F5F5',
  neutral200: '#E5E5E5',
  neutral300: '#D4D4D4',
  neutral400: '#A3A3A3',
  neutral500: '#737373',
  neutral600: '#525252',
  neutral700: '#404040',
  neutral800: '#262626',
  neutral900: '#171717',
  neutral950: '#0A0A0A',

  // Pure colors
  white: '#FFFFFF',
  black: '#000000',
};

// ============================================================================
// Token Definitions (exported)
// ============================================================================

export const tokens: Record<string, string> = {
  // ==========================================================================
  // 1. BRAND COLORS
  // ==========================================================================

  /**
   * --primary: Main brand color
   *
   * Usage:
   * - Primary buttons (default variant)
   * - Links and interactive elements
   * - Focus rings and selection states
   * - Active/selected indicators
   *
   * Guidelines:
   * - Should be the most prominent color in your theme
   * - Ensure sufficient contrast with --primary-foreground
   * - Consider accessibility (WCAG 2.1 AA minimum)
   */
  '--primary': palette.brandPrimary,

  /**
   * --primary-foreground: Text/icon color on primary background
   *
   * Usage:
   * - Text inside primary buttons
   * - Icons on primary-colored elements
   *
   * Guidelines:
   * - Must have contrast ratio >= 4.5:1 with --primary
   * - Usually white for dark primaries, black for light primaries
   */
  '--primary-foreground': palette.white,

  /**
   * --primary-muted: Subtle primary for backgrounds
   *
   * Usage:
   * - Hover states on ghost buttons
   * - Selected row backgrounds
   * - Subtle highlighting
   *
   * Guidelines:
   * - Use color-mix() or low opacity version of primary
   * - Should be barely visible, not distracting
   */
  '--primary-muted': 'color-mix(in srgb, #3B82F6 15%, transparent)',

  /**
   * --primary-vivid: Brighter/saturated version of primary
   *
   * Usage:
   * - Hover states that need extra emphasis
   * - Glow effects
   * - Highlights
   */
  '--primary-vivid': '#60A5FA',

  /**
   * --secondary: Secondary brand color
   *
   * Usage:
   * - Secondary buttons
   * - Alternative accent elements
   * - Complementary UI elements
   *
   * Guidelines:
   * - Should complement --primary, not compete with it
   * - Often a different hue or desaturated version
   */
  '--secondary': palette.brandSecondary,

  /**
   * --secondary-foreground: Text on secondary background
   */
  '--secondary-foreground': palette.white,

  /**
   * --secondary-muted: Subtle secondary for backgrounds
   */
  '--secondary-muted': 'color-mix(in srgb, #8B5CF6 15%, transparent)',

  /**
   * --secondary-vivid: Brighter version of secondary
   */
  '--secondary-vivid': '#A78BFA',

  /**
   * --accent: Tertiary/accent color for highlights
   *
   * Usage:
   * - Special callouts
   * - Badges and tags
   * - Decorative elements
   * - Charts and data visualization
   */
  '--accent': palette.brandAccent,

  /**
   * --accent-foreground: Text on accent background
   */
  '--accent-foreground': palette.black,

  /**
   * --accent-muted: Subtle accent for backgrounds
   */
  '--accent-muted': 'color-mix(in srgb, #F59E0B 15%, transparent)',

  /**
   * --accent-vivid: Brighter version of accent
   */
  '--accent-vivid': '#FBBF24',

  // ==========================================================================
  // 2. SEMANTIC COLORS
  // ==========================================================================

  /**
   * --success: Positive/success state color
   *
   * Usage:
   * - Success alerts and toasts
   * - Positive badges (e.g., "Active", "Complete")
   * - Form validation success
   * - Progress completion
   */
  '--success': palette.green,
  '--success-foreground': palette.white,
  '--success-muted': 'color-mix(in srgb, #22C55E 15%, transparent)',
  '--success-vivid': '#4ADE80',

  /**
   * --warning: Warning/caution state color
   *
   * Usage:
   * - Warning alerts
   * - Caution badges
   * - Pending states
   */
  '--warning': palette.yellow,
  '--warning-foreground': palette.black,
  '--warning-muted': 'color-mix(in srgb, #EAB308 15%, transparent)',
  '--warning-vivid': '#FACC15',

  /**
   * --error: Error/negative state color
   *
   * Usage:
   * - Error alerts and messages
   * - Form validation errors
   * - Destructive action indicators
   */
  '--error': palette.red,
  '--error-foreground': palette.white,
  '--error-muted': 'color-mix(in srgb, #EF4444 15%, transparent)',
  '--error-vivid': '#F87171',

  /**
   * --destructive: Alias for error, used by shadcn components
   *
   * Usage:
   * - Destructive buttons (delete, remove)
   * - Danger zones
   *
   * Note: Keep in sync with --error for consistency
   */
  '--destructive': palette.red,
  '--destructive-foreground': palette.white,

  /**
   * --info: Informational state color
   *
   * Usage:
   * - Info alerts
   * - Informational badges
   * - Help text highlights
   */
  '--info': palette.blue,
  '--info-foreground': palette.white,
  '--info-muted': 'color-mix(in srgb, #3B82F6 15%, transparent)',
  '--info-vivid': '#60A5FA',

  // ==========================================================================
  // 3. SURFACE/BACKGROUND LAYERS
  // ==========================================================================

  /**
   * --background: Main page background
   *
   * Usage:
   * - Page/app background
   * - Modal backdrop base
   *
   * Guidelines:
   * - Darkest for dark themes, lightest for light themes
   * - Should provide good contrast with content
   */
  '--background': palette.neutral950,

  /**
   * --background-alt: Alternative background
   *
   * Usage:
   * - Alternating sections
   * - Slightly different areas
   */
  '--background-alt': palette.neutral900,

  /**
   * --surface-1: First elevation layer
   *
   * Usage:
   * - Cards, panels
   * - Dropdown menus
   * - Popovers
   *
   * Guidelines:
   * - Slightly lighter than background (dark theme)
   * - Creates visual hierarchy through elevation
   */
  '--surface-1': palette.neutral900,
  '--surface-1-hover': palette.neutral800,

  /**
   * --surface-2: Second elevation layer
   *
   * Usage:
   * - Nested cards
   * - Input backgrounds
   * - Secondary panels
   */
  '--surface-2': palette.neutral800,
  '--surface-2-hover': palette.neutral700,

  /**
   * --surface-3: Third elevation layer
   *
   * Usage:
   * - Deeply nested elements
   * - Tertiary containers
   */
  '--surface-3': palette.neutral700,
  '--surface-3-hover': palette.neutral600,

  // ==========================================================================
  // 4. TEXT COLORS
  // ==========================================================================

  /**
   * --foreground: Primary text color
   *
   * Usage:
   * - Main body text
   * - Headings
   * - Primary labels
   *
   * Guidelines:
   * - Must have >= 4.5:1 contrast with --background
   * - Usually near-white for dark themes, near-black for light
   */
  '--foreground': palette.neutral100,

  /**
   * --foreground-secondary: Secondary text color
   *
   * Usage:
   * - Descriptions
   * - Secondary labels
   * - Less important text
   */
  '--foreground-secondary': palette.neutral400,

  /**
   * --muted: Muted background (for muted containers)
   *
   * Usage:
   * - Muted badges background
   * - Subtle backgrounds
   */
  '--muted': palette.neutral800,

  /**
   * --muted-foreground: Text on muted backgrounds
   *
   * Usage:
   * - Placeholder text
   * - Helper text
   * - Captions
   */
  '--muted-foreground': palette.neutral400,

  /**
   * --subtle-foreground: Very subtle text
   *
   * Usage:
   * - Timestamps
   * - Metadata
   * - Very low priority text
   */
  '--subtle-foreground': palette.neutral500,

  /**
   * --disabled-foreground: Disabled state text
   *
   * Usage:
   * - Disabled buttons/inputs
   * - Inactive elements
   */
  '--disabled-foreground': palette.neutral600,

  // ==========================================================================
  // 5. STRUCTURE
  // ==========================================================================

  /**
   * --border: Default border color
   *
   * Usage:
   * - Card borders
   * - Dividers
   * - Input borders
   */
  '--border': palette.neutral700,

  /**
   * --border-muted: Subtle border
   *
   * Usage:
   * - Very subtle separators
   * - Table cell borders
   */
  '--border-muted': palette.neutral800,

  /**
   * --border-vivid: Emphasized border
   *
   * Usage:
   * - Active/focused element borders
   * - Highlighted sections
   */
  '--border-vivid': palette.brandPrimary,

  /**
   * --border-width: Default border thickness
   *
   * Usage:
   * - Consistent border sizing across components
   *
   * Guidelines:
   * - 1px for subtle themes
   * - 2px+ for bold/cyberpunk styles
   */
  '--border-width': '1px',

  /**
   * --ring: Focus ring color
   *
   * Usage:
   * - Focus-visible outlines
   * - Keyboard navigation indicators
   *
   * Guidelines:
   * - Usually matches --primary
   * - Must be visible against all backgrounds
   */
  '--ring': palette.brandPrimary,

  /**
   * --radius: Base border radius
   *
   * Usage:
   * - Buttons, inputs, cards
   * - Reference for all rounded corners
   *
   * Guidelines:
   * - 0px for sharp/cyberpunk themes
   * - 0.5rem for modern themes
   * - 9999px for pill-shaped elements
   */
  '--radius': '0.5rem',

  /**
   * --opacity-disabled: Opacity for disabled elements
   */
  '--opacity-disabled': '0.5',

  /**
   * --spacing-base: Base spacing unit
   *
   * Usage:
   * - Consistent padding/margin calculations
   */
  '--spacing-base': '0.25rem',

  // ==========================================================================
  // 6. TYPOGRAPHY
  // ==========================================================================

  /**
   * --font-sans: Primary sans-serif font stack
   *
   * Usage:
   * - Body text
   * - UI labels
   * - Most text content
   */
  '--font-sans': '"Inter", "SF Pro Display", system-ui, sans-serif',

  /**
   * --font-mono: Monospace font stack
   *
   * Usage:
   * - Code blocks
   * - Technical data
   * - Keyboard shortcuts (Kbd)
   */
  '--font-mono': '"Fira Code", "JetBrains Mono", monospace',

  /**
   * --font-display: Display/heading font
   *
   * Usage:
   * - Large headings
   * - Hero text
   * - Brand elements
   */
  '--font-display': '"Inter", system-ui, sans-serif',

  /**
   * Font Sizes: Consistent type scale
   *
   * xs:   12px - Small labels, captions
   * sm:   14px - Secondary text, descriptions
   * base: 16px - Body text default
   * lg:   18px - Large body, small headings
   * xl:   20px - Section headings
   * 2xl:  24px - Page headings
   * 3xl:  30px - Hero headings
   */
  '--text-xs': '0.75rem',
  '--text-sm': '0.875rem',
  '--text-base': '1rem',
  '--text-lg': '1.125rem',
  '--text-xl': '1.25rem',
  '--text-2xl': '1.5rem',
  '--text-3xl': '1.875rem',

  // ==========================================================================
  // 7. SHADOWS
  // ==========================================================================

  /**
   * Shadows: Elevation and depth
   *
   * Guidelines:
   * - Dark themes: Use glow effects with brand colors
   * - Light themes: Use traditional drop shadows
   * - Adjust blur and spread for theme personality
   */

  /**
   * --shadow-sm: Small shadow
   *
   * Usage:
   * - Buttons
   * - Small cards
   * - Subtle elevation
   */
  '--shadow-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',

  /**
   * --shadow-md: Medium shadow
   *
   * Usage:
   * - Cards
   * - Dropdowns
   * - Popovers
   */
  '--shadow-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',

  /**
   * --shadow-lg: Large shadow
   *
   * Usage:
   * - Modals
   * - Dialogs
   * - Hero cards
   */
  '--shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',

  /**
   * --shadow-glow: Glow effect
   *
   * Usage:
   * - Special emphasis
   * - Hover states in dark themes
   * - Brand highlights
   */
  '--shadow-glow': '0 0 20px rgba(59, 130, 246, 0.5)',

};

// ============================================================================
// Theme Metadata
// ============================================================================

export const meta = {
  /**
   * isDark: Theme mode
   *
   * true  - Dark theme (dark backgrounds, light text)
   * false - Light theme (light backgrounds, dark text)
   *
   * This affects:
   * - Default code syntax highlighting theme
   * - System preference matching
   * - Automatic contrast adjustments
   */
  isDark: true,

  /**
   * codeTheme: Syntax highlighting theme
   *
   * Options: 'github-light' | 'github-dark' | others from shiki
   * Should match isDark for consistency
   */
  codeTheme: 'github-dark' as const,
};
