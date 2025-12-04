import { tokens } from '../tokens';
import { createPlaygroundBaseCss } from '../../styles/playground-base';

/**
 * Neo Brutalism - Playground 主题覆盖
 *
 * 特点：
 * - 硬阴影
 * - 粗边框
 * - 高对比度
 */

const neoBrutalismThemeVars = `
  /* Neo Brutalism 主题变量覆盖 */
  :root {
    /* 面板样式 - 实色 + 硬阴影 */
    --pg-panel-bg: var(--background);
    --pg-panel-blur: none;
    --pg-panel-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
    --pg-header-bg: var(--background);

    /* 圆角 - 稍圆角但硬朗 */
    --pg-radius-sm: 0.25rem;
    --pg-radius-md: 0.375rem;
    --pg-radius-lg: 0.5rem;
    --pg-radius-xl: 0.75rem;

    /* 滚动条 */
    --pg-scrollbar-radius: 0.25rem;
    --pg-scrollbar-track: var(--background-alt);
    --pg-scrollbar-thumb: var(--foreground);

    /* 发光效果 - 无柔和发光，只有硬边 */
    --pg-glow: none;
    --pg-focus-width: 2px;

    /* 按钮样式 */
    --pg-btn-bg: var(--background);
    --pg-btn-hover-bg: var(--secondary);

    /* 组件树 */
    --pg-tree-bg: var(--background-alt);

    /* Slider - 粗线条 */
    --pg-slider-radius: 9999px;
    --pg-slider-track-radius: 9999px;
    --pg-slider-thumb-radius: 9999px;
    --pg-slider-track: var(--border-muted);
    --pg-slider-shadow: 2px 2px 0px 0px rgba(0,0,0,1);
    --pg-slider-hover-shadow: none;

    /* Dock & HUD */
    --pg-dock-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
    --pg-hud-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
    --pg-minimap-bg: var(--background);
    --pg-minimap-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
    --pg-dropdown-shadow: 4px 4px 0px 0px rgba(0,0,0,1);

    /* DevMode 按钮 */
    --pg-devmode-bg: var(--primary);
    --pg-devmode-border: var(--black);
    --pg-devmode-color: var(--primary-foreground);
    --pg-devmode-radius: 0.5rem;
    --pg-devmode-hover-glow: none;
    --pg-devmode-active-glow: none;
  }
`;

const neoBrutalismOverrides = `
  /* Neo Brutalism 特定覆盖 */

  /* 全局边框加粗 */
  * {
    /* border-width is controlled by components, but we enforce some defaults here if needed */
  }

  /* DevMode 按钮 */
  .playground-devmode-btn {
    border: 2px solid var(--black);
    box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
    transition: all 0.2s;
  }
  .playground-devmode-btn:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0px 0px rgba(0,0,0,1);
  }
  .playground-devmode-btn:active {
    transform: translate(2px, 2px);
    box-shadow: none;
  }

  /* HUD 按钮 */
  .playground-hud-btn {
    border: 2px solid transparent;
  }
  .playground-hud-btn:hover {
    border: 2px solid var(--black);
    background: var(--secondary);
  }
  .playground-hud-btn-active {
    border: 2px solid var(--black);
    background: var(--primary);
    color: var(--primary-foreground);
    box-shadow: 2px 2px 0px 0px rgba(0,0,0,1);
  }

  /* Copy 成功 */
  .playground-copy-success {
    background-color: var(--success);
    border: 2px solid var(--black);
    color: var(--success-foreground);
    box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
  }
`;

export const playgroundGlobalCss = `
  /* Neo Brutalism - Playground 全局样式 */
  ${neoBrutalismThemeVars}
  ${createPlaygroundBaseCss(tokens)}
  ${neoBrutalismOverrides}
`;