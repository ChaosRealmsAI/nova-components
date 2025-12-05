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
  /* TODO: 主题名称 - 主题变量覆盖 */
  :root {
    /* =====================================
     * 面板样式
     * ===================================== */
    /* --pg-panel-bg: var(--surface-1); */
    /* --pg-panel-blur: blur(0); */
    /* --pg-panel-shadow: var(--shadow-md); */
    /* --pg-header-bg: var(--background); */

    /* =====================================
     * 圆角 - 根据主题风格调整
     * 如：锐利风格设为 0，圆润风格设为较大值
     * ===================================== */
    /* --pg-radius-sm: 0.25rem; */
    /* --pg-radius-md: 0.5rem; */
    /* --pg-radius-lg: 0.75rem; */
    /* --pg-radius-xl: 1rem; */

    /* =====================================
     * 滚动条
     * ===================================== */
    /* --pg-scrollbar-radius: 0.25rem; */
    /* --pg-scrollbar-track: var(--background); */
    /* --pg-scrollbar-thumb: var(--surface-2); */

    /* =====================================
     * 聚焦效果
     * ===================================== */
    /* --pg-glow: none; */
    /* --pg-focus-width: 2px; */

    /* =====================================
     * 按钮样式
     * ===================================== */
    /* --pg-btn-bg: var(--surface-2); */
    /* --pg-btn-hover-bg: var(--surface-2-hover); */

    /* =====================================
     * 组件树
     * ===================================== */
    /* --pg-tree-bg: var(--surface-1); */

    /* =====================================
     * Slider 滑块
     * ===================================== */
    /* --pg-slider-radius: 9999px; */
    /* --pg-slider-track-radius: 9999px; */
    /* --pg-slider-thumb-radius: 9999px; */
    /* --pg-slider-track: var(--primary); */
    /* --pg-slider-shadow: none; */
    /* --pg-slider-hover-shadow: var(--shadow-sm); */

    /* =====================================
     * Dock & HUD
     * ===================================== */
    /* --pg-dock-shadow: var(--shadow-lg); */
    /* --pg-hud-shadow: var(--shadow-md); */
    /* --pg-minimap-bg: var(--surface-1); */
    /* --pg-minimap-shadow: var(--shadow-sm); */
    /* --pg-dropdown-shadow: var(--shadow-md); */

    /* =====================================
     * DevMode 按钮
     * ===================================== */
    /* --pg-devmode-bg: transparent; */
    /* --pg-devmode-border: var(--border); */
    /* --pg-devmode-color: var(--foreground); */
    /* --pg-devmode-radius: var(--pg-radius-md); */
    /* --pg-devmode-hover-glow: none; */
    /* --pg-devmode-active-glow: none; */
  }
`;

/**
 * 特定组件覆盖
 *
 * 这里添加主题特定的 CSS 规则
 * 用于覆盖默认样式或添加特殊效果
 */
const overrides = `
  /* TODO: 主题名称 - 特定覆盖 */

  /* 示例：滚动条样式 */
  /*
  ::-webkit-scrollbar-track {
    border-left: 1px solid var(--border);
  }
  */

  /* 示例：DevMode 按钮文字样式 */
  /*
  .playground-devmode-btn {
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  */

  /* 示例：激活状态发光效果 */
  /*
  .playground-hud-btn-active {
    border-color: var(--primary);
    box-shadow: var(--shadow-glow);
  }
  */

  /* 示例：Minimap 样式 */
  /*
  .playground-minimap .tlui-minimap {
    background: transparent;
    border: none;
  }
  */

  /* 示例：复制成功状态 */
  /*
  .playground-copy-success {
    background-color: var(--success-muted);
    border-color: var(--success);
    color: var(--success);
  }
  */
`;

/**
 * 导出完整的 Playground 全局样式
 */
export const playgroundGlobalCss = `
  /* TODO: 主题名称 - Playground 全局样式 */
  ${themeVars}
  ${createPlaygroundBaseCss(tokens)}
  ${overrides}
`;
