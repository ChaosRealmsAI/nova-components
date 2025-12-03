import { tokens } from '../tokens';
import { createPlaygroundBaseCss } from '../../styles/playground-base';

/**
 * Sunset Warm - Playground 主题覆盖
 *
 * 特点：
 * - 温暖日落风格
 * - 橙红色调阴影
 * - 更大的圆角 (8-16px)
 * - 温馨氛围
 */

const sunsetWarmThemeVars = `
  /* Sunset Warm 主题变量覆盖 */
  :root {
    /* 面板样式 - 实色 + 暖色调阴影 */
    --pg-panel-bg: var(--surface-1);
    --pg-panel-blur: none;
    --pg-panel-shadow: -4px 0 16px rgba(249, 115, 22, 0.05);
    --pg-header-bg: var(--surface-2);

    /* 圆角 - 温暖圆润风格 */
    --pg-radius-sm: 8px;
    --pg-radius-md: 10px;
    --pg-radius-lg: 16px;
    --pg-radius-xl: 20px;

    /* 滚动条 */
    --pg-scrollbar-radius: 4px;
    --pg-scrollbar-track: var(--surface-2);
    --pg-scrollbar-thumb: var(--stone-300, #d6d3d1);

    /* 无发光效果 */
    --pg-glow: none;
    --pg-focus-width: 2px;

    /* 按钮样式 */
    --pg-btn-bg: var(--surface-2);
    --pg-btn-hover-bg: var(--surface-3);

    /* 组件树 */
    --pg-tree-bg: var(--surface-2);

    /* Slider - 温暖风格 */
    --pg-slider-radius: 6px;
    --pg-slider-track-radius: 3px;
    --pg-slider-thumb-radius: 50%;
    --pg-slider-thumb-size: 18px;
    --pg-slider-track: linear-gradient(90deg, var(--primary), var(--accent));
    --pg-slider-shadow: 0 2px 6px rgba(249, 115, 22, 0.3);
    --pg-slider-hover-shadow: 0 4px 12px rgba(249, 115, 22, 0.4);

    /* Dock & HUD */
    --pg-dock-shadow: 0 -2px 12px rgba(249, 115, 22, 0.08);
    --pg-hud-shadow: 0 2px 10px rgba(249, 115, 22, 0.08);
    --pg-minimap-bg: var(--surface-1);
    --pg-minimap-shadow: 0 2px 10px rgba(249, 115, 22, 0.1);
    --pg-dropdown-shadow: 0 4px 16px rgba(249, 115, 22, 0.12);

    /* DevMode 按钮 - 标准风格 */
    --pg-devmode-bg: var(--surface-2);
    --pg-devmode-border: var(--border);
    --pg-devmode-color: var(--muted-foreground);
    --pg-devmode-radius: 10px;
    --pg-devmode-hover-glow: none;
    --pg-devmode-active-glow: none;
  }
`;

const sunsetWarmOverrides = `
  /* Sunset Warm 特定覆盖 */

  /* 底部面板阴影方向 */
  .playground-bottom-panel {
    box-shadow: 0 -4px 16px rgba(249, 115, 22, 0.05);
  }

  /* 文件项激活状态 - 更粗的边框 */
  .playground-file-item-active {
    border-left-width: 3px;
  }

  /* Minimap 边框 */
  .playground-minimap .tlui-minimap {
    border: 1px solid var(--border);
    border-radius: 12px;
  }

  .playground-minimap .tlui-minimap__viewport {
    border-radius: 6px;
  }
`;

export const playgroundGlobalCss = `
  /* Sunset Warm - Playground 全局样式 */
  ${sunsetWarmThemeVars}
  ${createPlaygroundBaseCss(tokens)}
  ${sunsetWarmOverrides}
`;
