/**
 * Glassmorphism Playground Styles
 *
 * Design Concept: Frosted Glass UI
 * - Semi-transparent backgrounds with blur
 * - Subtle white borders
 * - Soft shadows with primary color glow
 * - Large rounded corners
 */

import { tokens } from '../tokens';
import { createPlaygroundBaseCss } from '../../styles/playground-base';

const themeVars = `
  :root {
    /* Panel: Frosted Glass Effect */
    --pg-panel-bg: rgba(255, 255, 255, 0.06);
    --pg-panel-blur: blur(20px);
    --pg-panel-shadow: 0 8px 32px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1);
    --pg-header-bg: rgba(255, 255, 255, 0.08);

    /* Radius - Large and Round */
    --pg-radius-sm: 0.5rem;
    --pg-radius-md: 0.75rem;
    --pg-radius-lg: 1rem;
    --pg-radius-xl: 1.5rem;

    /* Scrollbar - Glass Style */
    --pg-scrollbar-radius: 0.5rem;
    --pg-scrollbar-track: rgba(255, 255, 255, 0.05);
    --pg-scrollbar-thumb: rgba(255, 255, 255, 0.2);

    /* Focus - Subtle Glow */
    --pg-glow: 0 0 16px rgba(139, 92, 246, 0.3);
    --pg-focus-width: 2px;

    /* Buttons (Playground UI) */
    --pg-btn-bg: rgba(255, 255, 255, 0.08);
    --pg-btn-hover-bg: rgba(255, 255, 255, 0.12);

    /* Tree / Sidebar */
    --pg-tree-bg: rgba(255, 255, 255, 0.04);

    /* Slider */
    --pg-slider-radius: 9999px;
    --pg-slider-track-radius: 9999px;
    --pg-slider-thumb-radius: 9999px;
    --pg-slider-track: var(--primary);
    --pg-slider-shadow: 0 0 8px rgba(139, 92, 246, 0.4);
    --pg-slider-hover-shadow: 0 0 12px rgba(139, 92, 246, 0.6);

    /* Dock & HUD */
    --pg-dock-shadow: 0 8px 32px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.15);
    --pg-hud-shadow: 0 4px 16px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1);
    --pg-minimap-bg: rgba(255, 255, 255, 0.06);
    --pg-minimap-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    --pg-dropdown-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);

    /* DevMode Button */
    --pg-devmode-bg: rgba(255, 255, 255, 0.06);
    --pg-devmode-border: rgba(255, 255, 255, 0.15);
    --pg-devmode-color: var(--foreground);
    --pg-devmode-radius: var(--pg-radius-lg);
    --pg-devmode-hover-glow: 0 0 16px rgba(139, 92, 246, 0.3);
    --pg-devmode-active-glow: 0 0 20px rgba(139, 92, 246, 0.5), inset 0 0 8px rgba(139, 92, 246, 0.2);
  }
`;

const overrides = `
  /* Glassmorphism Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    transition: background 0.2s;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.3);
  }
  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
  }

  /* Global Font Settings */
  .playground-container {
    font-family: var(--font-sans);
  }

  /* Soft Text Selection */
  ::selection {
    background: rgba(139, 92, 246, 0.4);
    color: white;
  }

  /* HUD Buttons - Glass Effect */
  .playground-hud-btn {
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
  }

  .playground-hud-btn:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 12px rgba(139, 92, 246, 0.2);
  }

  /* Active Button State */
  .playground-hud-btn-active {
    background: rgba(139, 92, 246, 0.15);
    border-color: rgba(139, 92, 246, 0.3);
    box-shadow: 0 0 16px rgba(139, 92, 246, 0.4);
  }

  /* Preview Area - Subtle Gradient */
  .playground-preview-area {
    background:
      radial-gradient(ellipse at 50% 0%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
      radial-gradient(ellipse at 0% 100%, rgba(6, 182, 212, 0.08) 0%, transparent 40%);
  }

  /* Panel Glass Effect */
  .playground-panel {
    backdrop-filter: blur(20px);
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  /* Copy Success State */
  .playground-copy-success {
    background-color: rgba(16, 185, 129, 0.15);
    border-color: rgba(16, 185, 129, 0.3);
    color: #10b981;
    box-shadow: 0 0 12px rgba(16, 185, 129, 0.3);
  }

  /* Minimap Glass */
  .playground-minimap .tlui-minimap {
    background: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
  }
`;

export const playgroundGlobalCss = `
  ${themeVars}
  ${createPlaygroundBaseCss(tokens)}
  ${overrides}
`;
