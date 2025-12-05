/**
 * Cyber Neon Playground Styles
 *
 * Design Concept: Neon Cyberpunk UI
 * - Deep dark backgrounds
 * - Neon glow borders and shadows
 * - Small radius (4px) or chamfer effects
 * - Neon pink/cyan accents
 */

import { tokens } from '../tokens';
import { createPlaygroundBaseCss } from '../../styles/playground-base';

const themeVars = `
  :root {
    /* Panel: Dark Surface with Neon Glow */
    --pg-panel-bg: var(--surface-1);
    --pg-panel-blur: blur(0);
    --pg-panel-shadow: 0 0 8px color-mix(in srgb, var(--primary) 20%, transparent), 0 0 0 1px color-mix(in srgb, var(--primary) 30%, transparent);
    --pg-header-bg: var(--background);

    /* Radius - Small (4px) for cyberpunk feel */
    --pg-radius-sm: 0.25rem;
    --pg-radius-md: 0.5rem;
    --pg-radius-lg: 0.75rem;
    --pg-radius-xl: 1rem;

    /* Scrollbar - Neon Style */
    --pg-scrollbar-radius: 0.25rem;
    --pg-scrollbar-track: var(--background);
    --pg-scrollbar-thumb: var(--surface-2);

    /* Focus - Strong Neon Glow */
    --pg-glow: 0 0 12px var(--primary), 0 0 24px color-mix(in srgb, var(--primary) 40%, transparent);
    --pg-focus-width: 2px;

    /* Buttons (Playground UI) */
    --pg-btn-bg: var(--surface-2);
    --pg-btn-hover-bg: var(--surface-2-hover);

    /* Tree / Sidebar */
    --pg-tree-bg: var(--surface-1);

    /* Slider */
    --pg-slider-radius: 9999px;
    --pg-slider-track-radius: 9999px;
    --pg-slider-thumb-radius: 9999px;
    --pg-slider-track: var(--primary);
    --pg-slider-shadow: 0 0 8px color-mix(in srgb, var(--primary) 50%, transparent);
    --pg-slider-hover-shadow: 0 0 12px var(--primary), 0 0 24px color-mix(in srgb, var(--primary) 40%, transparent);

    /* Dock & HUD */
    --pg-dock-shadow: 0 0 16px color-mix(in srgb, var(--primary) 30%, transparent), 0 0 0 1px color-mix(in srgb, var(--primary) 40%, transparent);
    --pg-hud-shadow: 0 0 8px color-mix(in srgb, var(--primary) 25%, transparent), 0 0 0 1px color-mix(in srgb, var(--primary) 35%, transparent);
    --pg-minimap-bg: var(--surface-1);
    --pg-minimap-shadow: 0 0 4px color-mix(in srgb, var(--primary) 20%, transparent);
    --pg-dropdown-shadow: 0 0 12px color-mix(in srgb, var(--primary) 30%, transparent), 0 0 0 1px color-mix(in srgb, var(--primary) 40%, transparent);

    /* DevMode Button */
    --pg-devmode-bg: transparent;
    --pg-devmode-border: var(--border);
    --pg-devmode-color: var(--foreground);
    --pg-devmode-radius: var(--pg-radius-md);
    --pg-devmode-hover-glow: 0 0 8px color-mix(in srgb, var(--primary) 30%, transparent);
    --pg-devmode-active-glow: 0 0 12px var(--primary), inset 0 0 8px color-mix(in srgb, var(--primary) 20%, transparent);
  }
`;

const overrides = `
  /* Cyber Neon Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--surface-2);
    border-radius: 4px;
    border: 1px solid color-mix(in srgb, var(--primary) 20%, transparent);
    transition: all 0.15s ease-out;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--surface-2-hover);
    border-color: color-mix(in srgb, var(--primary) 40%, transparent);
    box-shadow: 0 0 4px color-mix(in srgb, var(--primary) 30%, transparent);
  }
  ::-webkit-scrollbar-track {
    background: var(--background);
    border-radius: 4px;
  }

  /* Global Font Settings */
  .playground-container {
    font-family: var(--font-sans);
  }

  /* Neon Text Selection */
  ::selection {
    background: color-mix(in srgb, var(--primary) 40%, transparent);
    color: var(--foreground);
  }

  /* HUD Buttons - Neon Style */
  .playground-hud-btn {
    border: 1px solid var(--border);
    transition: all 0.15s ease-out;
  }

  .playground-hud-btn:hover {
    background: var(--surface-2-hover);
    border-color: color-mix(in srgb, var(--primary) 50%, transparent);
    box-shadow: 0 0 8px color-mix(in srgb, var(--primary) 30%, transparent);
  }

  /* Active Button State */
  .playground-hud-btn-active {
    background: var(--surface-2);
    border-color: var(--primary);
    box-shadow: 0 0 12px var(--primary), 0 0 24px color-mix(in srgb, var(--primary) 30%, transparent);
  }

  /* Preview Area - Subtle Neon Gradient */
  .playground-preview-area {
    background:
      radial-gradient(ellipse at 50% 0%, color-mix(in srgb, var(--primary) 8%, transparent) 0%, transparent 50%),
      radial-gradient(ellipse at 0% 100%, color-mix(in srgb, var(--secondary) 6%, transparent) 0%, transparent 40%);
  }

  /* Panel Neon Border */
  .playground-panel {
    background: var(--surface-1);
    border: 1px solid color-mix(in srgb, var(--primary) 30%, transparent);
    box-shadow: 0 0 8px color-mix(in srgb, var(--primary) 20%, transparent);
  }

  /* Copy Success State */
  .playground-copy-success {
    background-color: color-mix(in srgb, var(--success) 15%, transparent);
    border-color: var(--success);
    color: var(--success);
    box-shadow: 0 0 12px color-mix(in srgb, var(--success) 40%, transparent);
  }

  /* Minimap Neon */
  .playground-minimap .tlui-minimap {
    background: var(--surface-1);
    border: 1px solid color-mix(in srgb, var(--primary) 30%, transparent);
    border-radius: 8px;
    box-shadow: 0 0 4px color-mix(in srgb, var(--primary) 20%, transparent);
  }

  /* DevMode Button - Uppercase Cyber Style */
  .playground-devmode-btn {
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 500;
  }
`;

export const playgroundGlobalCss = `
  ${themeVars}
  ${createPlaygroundBaseCss(tokens)}
  ${overrides}
`;
