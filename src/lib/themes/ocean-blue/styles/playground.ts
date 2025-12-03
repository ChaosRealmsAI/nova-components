import { tokens } from '../tokens';
import { createPlaygroundBaseCss } from '../../styles/playground-base';

/**
 * Ocean Blue - Playground 主题覆盖
 *
 * 特点：
 * - 清新海洋风格
 * - 柔和阴影
 * - 圆润边角 (6-8px)
 * - 现代简洁
 */

const oceanBlueThemeVars = `
  /* Ocean Blue 主题变量覆盖 */
  :root {
    /* 面板样式 - 实色 + 柔和阴影 */
    --pg-panel-bg: var(--surface-1);
    --pg-panel-blur: none;
    --pg-panel-shadow: -4px 0 12px rgba(0, 0, 0, 0.05);
    --pg-header-bg: var(--surface-2);

    /* 圆角 - 现代风格 */
    --pg-radius-sm: 6px;
    --pg-radius-md: 8px;
    --pg-radius-lg: 12px;
    --pg-radius-xl: 16px;

    /* 滚动条 */
    --pg-scrollbar-radius: 4px;
    --pg-scrollbar-track: var(--surface-2);
    --pg-scrollbar-thumb: var(--slate-300, #cbd5e1);

    /* 无发光效果 */
    --pg-glow: none;
    --pg-focus-width: 2px;

    /* 按钮样式 */
    --pg-btn-bg: var(--surface-2);
    --pg-btn-hover-bg: var(--surface-3);

    /* 组件树 */
    --pg-tree-bg: var(--surface-2);

    /* Slider - 现代圆润风格 */
    --pg-slider-radius: 4px;
    --pg-slider-track-radius: 3px;
    --pg-slider-thumb-radius: 50%;
    --pg-slider-track: linear-gradient(90deg, var(--primary), color-mix(in srgb, var(--secondary) 50%, var(--primary)));
    --pg-slider-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    --pg-slider-hover-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    /* Dock & HUD */
    --pg-dock-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
    --pg-hud-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    --pg-minimap-bg: var(--surface-1);
    --pg-minimap-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    --pg-dropdown-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    /* DevMode 按钮 - 标准风格 */
    --pg-devmode-bg: var(--surface-2);
    --pg-devmode-border: var(--border);
    --pg-devmode-color: var(--muted-foreground);
    --pg-devmode-radius: 8px;
    --pg-devmode-hover-glow: none;
    --pg-devmode-active-glow: none;
  }
`;

const oceanBlueOverrides = `
  /* Ocean Blue 特定覆盖 */

  /* 底部面板阴影方向 */
  .playground-bottom-panel {
    box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.05);
  }

  /* Minimap 边框 */
  .playground-minimap .tlui-minimap {
    border: 1px solid var(--border);
  }
`;

export const playgroundGlobalCss = `
  /* Ocean Blue - Playground 全局样式 */
  ${oceanBlueThemeVars}
  ${createPlaygroundBaseCss(tokens)}
  ${oceanBlueOverrides}
`;
