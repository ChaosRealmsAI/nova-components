import { tokens } from '../tokens';
import { createPlaygroundBaseCss } from '../../styles/playground-base';

/**
 * Cyberpunk Dark - Playground 主题覆盖
 *
 * 特点：
 * - 无圆角 (border-radius: 0)
 * - 霓虹发光效果
 * - backdrop-filter 毛玻璃
 * - 方形滑块
 */

const cyberpunkThemeVars = `
  /* Cyberpunk 主题变量覆盖 */
  :root {
    /* 面板样式 - 毛玻璃 + 发光 */
    --pg-panel-bg: color-mix(in srgb, var(--surface-1) 95%, transparent);
    --pg-panel-blur: blur(16px);
    --pg-panel-shadow: none;
    --pg-header-bg: color-mix(in srgb, var(--background) 60%, transparent);

    /* 圆角 - 赛博风格无圆角 */
    --pg-radius-sm: 0;
    --pg-radius-md: 0;
    --pg-radius-lg: 0;
    --pg-radius-xl: 0;

    /* 滚动条 */
    --pg-scrollbar-radius: 0;
    --pg-scrollbar-track: var(--background);
    --pg-scrollbar-thumb: var(--surface-2);

    /* 发光效果 */
    --pg-glow: 0 0 10px color-mix(in srgb, var(--primary) 30%, transparent);
    --pg-focus-width: 1px;

    /* 按钮样式 */
    --pg-btn-bg: color-mix(in srgb, var(--surface-2) 25%, transparent);
    --pg-btn-hover-bg: color-mix(in srgb, var(--surface-2) 50%, transparent);

    /* 组件树 */
    --pg-tree-bg: color-mix(in srgb, var(--surface-2) 13%, transparent);

    /* Slider - 霓虹风格 */
    --pg-slider-radius: 0;
    --pg-slider-track-radius: 0;
    --pg-slider-thumb-radius: 2px;
    --pg-slider-track: linear-gradient(90deg, color-mix(in srgb, var(--primary) 31%, transparent), color-mix(in srgb, var(--secondary) 19%, transparent));
    --pg-slider-shadow: 0 0 10px color-mix(in srgb, var(--primary) 50%, transparent);
    --pg-slider-hover-shadow: 0 0 14px var(--secondary), 0 0 24px color-mix(in srgb, var(--secondary) 38%, transparent);

    /* Dock & HUD */
    --pg-dock-shadow: none;
    --pg-hud-shadow: none;
    --pg-minimap-bg: transparent;
    --pg-minimap-shadow: none;
    --pg-dropdown-shadow: none;

    /* DevMode 按钮 - 霓虹风格 */
    --pg-devmode-bg: color-mix(in srgb, var(--primary) 10%, transparent);
    --pg-devmode-border: var(--primary);
    --pg-devmode-color: var(--primary);
    --pg-devmode-radius: 0;
    --pg-devmode-hover-glow: 0 0 20px var(--primary), 0 0 40px color-mix(in srgb, var(--primary) 50%, transparent);
    --pg-devmode-active-glow: 0 0 15px var(--primary);
  }
`;

const cyberpunkOverrides = `
  /* Cyberpunk 特定覆盖 */

  /* 滚动条 track 边框 */
  ::-webkit-scrollbar-track {
    border-left: 1px solid var(--border);
  }

  /* DevMode 按钮文字样式 */
  .playground-devmode-btn {
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  /* HUD 按钮激活发光 */
  .playground-hud-btn-active {
    border-color: var(--primary);
    box-shadow: 0 0 10px color-mix(in srgb, var(--primary) 30%, transparent);
  }

  /* 滑块 hover 时变色 */
  .playground-slider::-webkit-slider-thumb:hover {
    background: var(--secondary);
    border-color: var(--secondary);
  }

  .playground-slider::-moz-range-thumb:hover {
    background: var(--secondary);
    border-color: var(--secondary);
  }

  /* tldraw minimap 特定颜色 */
  .tl-container,
  .tl-container.tl-theme__light,
  .tl-container.tl-theme__dark {
    --tl-color-muted-1: color-mix(in srgb, var(--primary) 25%, transparent) !important;
  }

  /* Minimap 边框 */
  .playground-minimap .tlui-minimap {
    background: transparent;
    border: none;
  }

  .playground-minimap .tlui-minimap__canvas {
    opacity: 0.8;
  }

  .playground-minimap .tlui-minimap__viewport {
    border-width: 1.5px;
    border-radius: 2px;
  }

  /* Copy 成功使用 secondary 色 */
  .playground-copy-success {
    background-color: color-mix(in srgb, var(--secondary) 8%, transparent);
    border-color: color-mix(in srgb, var(--secondary) 19%, transparent);
    color: var(--secondary);
  }
`;

export const playgroundGlobalCss = `
  /* Cyberpunk Dark - Playground 全局样式 */
  ${cyberpunkThemeVars}
  ${createPlaygroundBaseCss(tokens)}
  ${cyberpunkOverrides}
`;
