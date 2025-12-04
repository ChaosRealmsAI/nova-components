/**
 * Playground Styles for Obsidian Shard
 */

import { tokens } from '../tokens';
import { createPlaygroundBaseCss } from '../../styles/playground-base';

/**
 * Theme Variables Override
 */
const themeVars = `
  /* Obsidian Shard - Playground Variables */
  :root {
    /* Panel */
    --pg-panel-bg: var(--background);
    --pg-panel-blur: blur(0);
    --pg-panel-shadow: none;
    --pg-header-bg: var(--background);
    --pg-border-color: var(--border);

    /* Radius */
    --pg-radius-sm: 0px;
    --pg-radius-md: 0px;
    --pg-radius-lg: 2px;
    --pg-radius-xl: 4px;

    /* Scrollbar */
    --pg-scrollbar-radius: 0px;
    --pg-scrollbar-track: var(--background);
    --pg-scrollbar-thumb: var(--surface-2);

    /* Glow & Focus */
    --pg-glow: 0 0 10px rgba(0, 240, 255, 0.2);
    --pg-focus-width: 1px;
    --pg-focus-ring: 0 0 0 1px var(--primary);

    /* Buttons */
    --pg-btn-bg: var(--surface-1);
    --pg-btn-hover-bg: var(--surface-2);
    --pg-btn-border: 1px solid var(--border);
    --pg-btn-hover-border: 1px solid var(--primary);

    /* Tree */
    --pg-tree-bg: var(--background);
    --pg-tree-hover-bg: var(--surface-1);
    --pg-tree-active-bg: var(--surface-2);

    /* Slider */
    --pg-slider-radius: 0px;
    --pg-slider-track-radius: 0px;
    --pg-slider-thumb-radius: 0px;
    --pg-slider-track: var(--surface-2);
    --pg-slider-shadow: none;
    --pg-slider-hover-shadow: 0 0 5px var(--primary);

    /* Dock & HUD */
    --pg-dock-shadow: 0 -1px 0 var(--border);
    --pg-hud-shadow: 0 1px 0 var(--border);
    --pg-minimap-bg: var(--background);
    --pg-minimap-shadow: -1px 0 0 var(--border);
    --pg-dropdown-shadow: var(--shadow-lg);

    /* DevMode Button */
    --pg-devmode-bg: var(--surface-1);
    --pg-devmode-border: var(--border);
    --pg-devmode-color: var(--foreground);
    --pg-devmode-radius: 0px;
    --pg-devmode-hover-glow: 0 0 8px var(--primary-muted);
    --pg-devmode-active-glow: 0 0 12px var(--primary-muted);
  }
`;

/**
 * Component Overrides
 */
const overrides = `
  /* Obsidian Shard - Specific Overrides */
  
  /* Sharp scrollbars */
  ::-webkit-scrollbar-track {
    border-left: 1px solid var(--border);
    background: var(--background);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--surface-2);
    border: 1px solid var(--background);
  }

  /* Uppercase buttons in HUD */
  .playground-hud-btn {
    text-transform: uppercase;
    font-size: 0.7rem;
    letter-spacing: 0.5px;
    border: 1px solid var(--border);
  }
  
  .playground-hud-btn:hover {
    border-color: var(--primary);
    color: var(--primary);
  }

  /* Active state for HUD buttons */
  .playground-hud-btn-active {
    background: var(--primary-muted);
    border-color: var(--primary);
    color: var(--primary);
    box-shadow: 0 0 8px var(--primary-muted);
  }

  /* DevMode Button text */
  .playground-devmode-btn {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
    clip-path: polygon(0 0, 100% 0, 100% 80%, 90% 100%, 0 100%);
  }
`;

/**
 * Export
 */
export const playgroundGlobalCss = `
  /* Obsidian Shard - Playground Global CSS */
  ${themeVars}
  ${createPlaygroundBaseCss(tokens)}
  ${overrides}
`;