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
  /* Retro 80s - 主题变量覆盖 */
  :root {
    /* =====================================
     * 面板样式
     * ===================================== */
    --pg-panel-bg: var(--surface-1);
    --pg-panel-blur: blur(0);
    --pg-panel-shadow: 0 0 20px var(--primary);
    --pg-header-bg: var(--background);

    /* =====================================
     * 圆角 - Retro 80s 风格：小圆角
     * ===================================== */
    --pg-radius-sm: 0.125rem; /* 2px */
    --pg-radius-md: 0.25rem;  /* 4px */
    --pg-radius-lg: 0.375rem; /* 6px */
    --pg-radius-xl: 0.5rem;   /* 8px */

    /* =====================================
     * 滚动条
     * ===================================== */
    --pg-scrollbar-radius: 0.125rem;
    --pg-scrollbar-track: var(--background);
    --pg-scrollbar-thumb: var(--surface-2);

    /* =====================================
     * 聚焦效果 - 霓虹发光
     * ===================================== */
    --pg-glow: 0 0 20px var(--primary);
    --pg-focus-width: 2px;

    /* =====================================
     * 按钮样式
     * ===================================== */
    --pg-btn-bg: var(--surface-2);
    --pg-btn-hover-bg: var(--surface-2-hover);

    /* =====================================
     * 组件树
     * ===================================== */
    --pg-tree-bg: var(--surface-1);

    /* =====================================
     * Slider 滑块
     * ===================================== */
    --pg-slider-radius: 0.125rem;
    --pg-slider-track-radius: 0.125rem;
    --pg-slider-thumb-radius: 0.125rem;
    --pg-slider-track: var(--primary);
    --pg-slider-shadow: 0 0 10px var(--primary);
    --pg-slider-hover-shadow: 0 0 15px var(--primary);

    /* =====================================
     * Dock & HUD
     * ===================================== */
    --pg-dock-shadow: 0 0 30px var(--primary);
    --pg-hud-shadow: 0 0 20px var(--primary);
    --pg-minimap-bg: var(--surface-1);
    --pg-minimap-shadow: 0 0 10px var(--primary);
    --pg-dropdown-shadow: 0 0 20px var(--primary);

    /* =====================================
     * DevMode 按钮
     * ===================================== */
    --pg-devmode-bg: transparent;
    --pg-devmode-border: var(--border);
    --pg-devmode-color: var(--foreground);
    --pg-devmode-radius: var(--pg-radius-md);
    --pg-devmode-hover-glow: 0 0 15px var(--primary);
    --pg-devmode-active-glow: 0 0 20px var(--primary);
  }
`;

/**
 * 特定组件覆盖
 *
 * 这里添加主题特定的 CSS 规则
 * 用于覆盖默认样式或添加特殊效果
 */
const overrides = `
  /* Retro 80s - 特定覆盖 */

  /* DevMode 按钮文字样式 - 等宽字体、全大写 */
  .playground-devmode-btn {
    font-family: 'Courier New', Courier, 'Lucida Console', Monaco, monospace;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  /* 激活状态发光效果 */
  .playground-hud-btn-active {
    border-color: var(--primary);
    box-shadow: 0 0 20px var(--primary);
  }

  /* 滚动条样式 - 霓虹边框 */
  ::-webkit-scrollbar-track {
    background: var(--background);
  }
  
  ::-webkit-scrollbar-thumb {
    background: var(--surface-2);
    border: 1px solid var(--primary);
    box-shadow: 0 0 5px var(--primary);
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: var(--surface-3);
    box-shadow: 0 0 10px var(--primary);
  }
`;

/**
 * 导出完整的 Playground 全局样式
 */
export const playgroundGlobalCss = `
  /* Retro 80s - Playground 全局样式 */
  ${themeVars}
  ${createPlaygroundBaseCss(tokens)}
  ${overrides}
`;
