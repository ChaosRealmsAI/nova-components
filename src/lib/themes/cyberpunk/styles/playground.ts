/**
 * Cyberpunk Playground Styles (Upgraded)
 */

import { tokens } from '../tokens';
import { createPlaygroundBaseCss } from '../../styles/playground-base';

const themeVars = `
  :root {
    /* Panel: Glassy Tech Interface */
    --pg-panel-bg: rgba(5, 5, 5, 0.85); /* Deep black transparency */
    --pg-panel-blur: blur(8px);
    --pg-panel-shadow: 0 0 0 1px rgba(0, 229, 255, 0.2), 0 0 30px rgba(0, 0, 0, 0.8);
    --pg-header-bg: rgba(15, 15, 19, 0.95);

    /* Radius - Absolutely Sharp */
    --pg-radius-sm: 0px;
    --pg-radius-md: 0px;
    --pg-radius-lg: 0px;
    --pg-radius-xl: 0px;

    /* Scrollbar - Thin Neon */
    --pg-scrollbar-radius: 0px;
    --pg-scrollbar-track: #050505;
    --pg-scrollbar-thumb: #334155;

    /* Focus - Aggressive Neon Glow */
    --pg-glow: 0 0 15px rgba(0, 229, 255, 0.6), inset 0 0 5px rgba(0, 229, 255, 0.2);
    --pg-focus-width: 1px;

    /* Buttons (Playground UI) */
    --pg-btn-bg: rgba(255, 255, 255, 0.05);
    --pg-btn-hover-bg: rgba(0, 229, 255, 0.15);

    /* Tree / Sidebar */
    --pg-tree-bg: rgba(10, 10, 12, 0.5);
    
    /* Slider */
    --pg-slider-radius: 0px;
    --pg-slider-track-radius: 0px;
    --pg-slider-thumb-radius: 0px;
    --pg-slider-track: var(--primary);
    
    /* Dock & HUD */
    --pg-dock-shadow: 0 0 0 1px rgba(0, 229, 255, 0.3), 0 10px 30px rgba(0, 0, 0, 0.9);
    --pg-hud-shadow: 0 0 0 1px rgba(0, 229, 255, 0.3);
    --pg-minimap-bg: #000;
    
    /* DevMode Button */
    --pg-devmode-bg: rgba(0, 0, 0, 0.5);
    --pg-devmode-border: var(--primary);
    --pg-devmode-color: var(--primary);
    --pg-devmode-radius: 0px;
    --pg-devmode-hover-glow: 0 0 15px rgba(0, 229, 255, 0.5);
    --pg-devmode-active-glow: inset 0 0 10px rgba(0, 229, 255, 0.5);
  }
`;

const overrides = `
  /* Custom Scrollbar specific to this theme */
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 0;
  }
  ::-webkit-scrollbar-track {
    background: #000;
    border: none;
  }
  
  /* Global Font Overrides for Playground UI */
  .playground-container {
    font-family: var(--font-sans);
    letter-spacing: 0.02em;
  }
  
  /* Make headings uppercase and mono */
  .playground-header, .playground-title {
    font-family: var(--font-mono);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
  
  /* Neon Text Selection */
  ::selection {
    background: var(--primary);
    color: #000;
  }
  
  /* HUD Buttons - Hexagon or Cut shape if possible, but simpler to just glow */
  .playground-hud-btn {
    clip-path: polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%);
    border: 1px solid rgba(255,255,255,0.1);
  }
  
  /* Grid Background for the Preview Area */
  .playground-preview-area {
    background-image: 
      linear-gradient(rgba(0, 229, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 229, 255, 0.03) 1px, transparent 1px);
    background-size: 40px 40px;
  }
`;

export const playgroundGlobalCss = `
  ${themeVars}
  ${createPlaygroundBaseCss(tokens)}
  ${overrides}
`;
