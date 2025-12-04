/**
 * Playground 样式模板
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Playground 是组件预览页面的样式配置
 *
 * 此文件控制：
 * - 面板背景、边框、阴影
 * - 圆角风格
 * - 滚动条样式
 * - 各种 UI 控件的样式
 *
 * 开发原则：
 * - 使用 CSS 变量 (--pg-*) 定义可配置的样式
 * - 主题变量覆盖在 themeVars 中
 * - 特定组件覆盖在 overrides 中
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { tokens } from '../tokens';
import { createPlaygroundBaseCss } from '../../styles/playground-base';

/**
 * 主题变量覆盖
 *
 * 这里定义 --pg-* 变量的主题特定值
 * 未定义的变量会使用 playground-base 中的默认值
 */
const themeVars = `
  /* Monochrome Ink - 主题变量覆盖 */
  :root {
    /* =====================================
     * 面板样式
     * ===================================== */
    --pg-panel-bg: var(--surface-1);
    --pg-panel-blur: none;
    --pg-panel-shadow: 4px 4px 0px var(--foreground);
    --pg-header-bg: var(--background);

    /* =====================================
     * 圆角 - 极简硬朗
     * ===================================== */
    --pg-radius-sm: 0px;
    --pg-radius-md: 2px;
    --pg-radius-lg: 4px;
    --pg-radius-xl: 6px;

    /* =====================================
     * 滚动条
     * ===================================== */
    --pg-scrollbar-radius: 0px;
    --pg-scrollbar-track: transparent;
    --pg-scrollbar-thumb: var(--foreground);

    /* =====================================
     * 聚焦效果
     * ===================================== */
    --pg-glow: none;
    --pg-focus-width: 2px;
    --pg-focus-ring: 2px solid var(--foreground);

    /* =====================================
     * 按钮样式
     * ===================================== */
    --pg-btn-bg: var(--surface-2);
    --pg-btn-hover-bg: var(--surface-3);

    /* =====================================
     * 组件树
     * ===================================== */
    --pg-tree-bg: var(--surface-1);

    /* =====================================
     * Slider 滑块
     * ===================================== */
    --pg-slider-radius: 0px;
    --pg-slider-track-radius: 0px;
    --pg-slider-thumb-radius: 0px;
    --pg-slider-track: var(--foreground);
    --pg-slider-shadow: none;
    --pg-slider-hover-shadow: none;

    /* =====================================
     * Dock & HUD
     * ===================================== */
    --pg-dock-shadow: 4px 4px 0px var(--foreground);
    --pg-hud-shadow: 4px 4px 0px var(--foreground);
    --pg-minimap-bg: var(--surface-1);
    --pg-minimap-shadow: 2px 2px 0px var(--foreground);
    --pg-dropdown-shadow: 4px 4px 0px var(--foreground);

    /* =====================================
     * DevMode 按钮
     * ===================================== */
    --pg-devmode-bg: transparent;
    --pg-devmode-border: var(--border);
    --pg-devmode-color: var(--foreground);
    --pg-devmode-radius: var(--pg-radius-md);
    --pg-devmode-hover-glow: none;
    --pg-devmode-active-glow: none;
  }
`;

/**
 * 特定组件覆盖
 *
 * 这里添加主题特定的 CSS 规则
 * 用于覆盖默认样式或添加特殊效果
 */
const overrides = `
  /* Monochrome Ink - 特定覆盖 */

  /* 滚动条边框 */
  ::-webkit-scrollbar-track {
    border-left: 2px solid var(--border);
    background-color: var(--background);
  }

  ::-webkit-scrollbar-thumb {
    border: 2px solid var(--background); /* 创建间隔感 */
    background-color: var(--foreground);
  }

  /* DevMode 按钮文字样式 - 衬线大写 */
  .playground-devmode-btn {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: var(--font-serif);
    border-width: 2px;
    font-weight: bold;
  }

  /* 激活状态 - 反色 */
  .playground-hud-btn-active {
    background-color: var(--foreground);
    color: var(--background);
    border-color: var(--foreground);
    box-shadow: none;
  }

  /* HUD 面板边框 */
  .playground-hud {
    border: 2px solid var(--foreground);
  }

  /* Minimap 样式 */
  .playground-minimap .tlui-minimap {
    background: var(--surface-1);
    border: 2px solid var(--foreground);
  }
  
  /* 所有的 Panel 都要加粗边框 */
  [data-panel] {
    border: 2px solid var(--foreground);
  }
`;

/**
 * 导出完整的 Playground 全局样式
 */
export const playgroundGlobalCss = `
  /* Monochrome Ink - Playground 全局样式 */
  ${themeVars}
  ${createPlaygroundBaseCss(tokens)}
  ${overrides}
`;
