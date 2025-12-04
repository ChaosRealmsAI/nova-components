/**
 * Playground 样式 - Vintage Nostalgia 复古怀旧风格
 *
 * 设计理念：
 * 打造一个怀旧的打字机/报纸风格的工作台
 * 所有面板像是泛黄的纸张，边框使用报纸风格的实线
 */

import { tokens } from '../tokens';
import { createPlaygroundBaseCss } from '../../styles/playground-base';

const themeVars = `
  /* Vintage Nostalgia - Playground 变量 */
  :root {
    /* =====================================
     * 面板样式：泛黄纸张效果
     * ===================================== */
    --pg-panel-bg: #F5F0E6;
    --pg-panel-blur: blur(0);

    /* 阴影：内凹效果 + 纸张阴影 */
    --pg-panel-shadow:
      inset 0 1px 3px rgba(44, 24, 16, 0.15),
      2px 2px 0 rgba(44, 24, 16, 0.1);

    --pg-header-bg: rgba(240, 234, 214, 0.8);

    /* =====================================
     * 圆角：极小，保持锐利的报纸风格
     * ===================================== */
    --pg-radius-sm: 1px;
    --pg-radius-md: 2px;
    --pg-radius-lg: 3px;
    --pg-radius-xl: 4px;

    /* =====================================
     * 滚动条：打字机滚轮风格
     * ===================================== */
    --pg-scrollbar-radius: 0px;
    --pg-scrollbar-track: #E6DFC9;
    --pg-scrollbar-thumb: #8B4513;

    /* =====================================
     * 聚焦效果：金色边框
     * ===================================== */
    --pg-glow: 0 0 0 2px rgba(139, 69, 19, 0.3);
    --pg-focus-width: 2px;

    /* =====================================
     * 按钮样式：凸版印刷风格
     * ===================================== */
    --pg-btn-bg: #EBE4D0;
    --pg-btn-hover-bg: #E6DFC9;

    /* =====================================
     * 组件树
     * ===================================== */
    --pg-tree-bg: transparent;

    /* =====================================
     * Slider 滑块：打字机拨杆风格
     * ===================================== */
    --pg-slider-radius: 2px;
    --pg-slider-track-radius: 0px;
    --pg-slider-thumb-radius: 2px;
    --pg-slider-track: #8B4513;
    --pg-slider-shadow: inset 0 1px 2px rgba(44, 24, 16, 0.2);
    --pg-slider-hover-shadow: inset 0 1px 3px rgba(44, 24, 16, 0.3);

    /* =====================================
     * Dock & HUD：木质边框感
     * ===================================== */
    --pg-dock-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.3),
      2px 3px 0 rgba(44, 24, 16, 0.2),
      0 0 0 2px rgba(139, 69, 19, 0.15);

    --pg-hud-shadow:
      inset 0 1px 2px rgba(44, 24, 16, 0.1),
      2px 2px 0 rgba(44, 24, 16, 0.15);

    --pg-minimap-bg: #F0EAD6;
    --pg-minimap-shadow: 2px 2px 0 rgba(44, 24, 16, 0.1);
    --pg-dropdown-shadow:
      2px 3px 0 rgba(44, 24, 16, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);

    /* =====================================
     * DevMode 按钮：打字机按键风格
     * ===================================== */
    --pg-devmode-bg: #EBE4D0;
    --pg-devmode-border: #3D2914;
    --pg-devmode-color: #2C1810;
    --pg-devmode-radius: 2px;
    --pg-devmode-hover-glow: inset 0 -2px 0 rgba(44, 24, 16, 0.2);
    --pg-devmode-active-glow: inset 0 2px 4px rgba(44, 24, 16, 0.3);
  }
`;

const overrides = `
  /* Vintage Nostalgia - 特定覆盖 */

  /* 纸张纹理背景（可选） */
  .playground-canvas {
    background-color: #F5F0E6;
  }

  /* 滚动条边框 */
  ::-webkit-scrollbar-track {
    border-left: 2px solid #C4B9A8;
  }

  ::-webkit-scrollbar-thumb {
    border: 1px solid #5C4033;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #A0522D;
  }

  /* DevMode 按钮：打字机按键效果 */
  .playground-devmode-btn {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
    border: 2px solid #3D2914;
    transition: all 0.15s ease;
  }

  .playground-devmode-btn:hover {
    transform: translateY(-1px);
    box-shadow: 2px 3px 0 rgba(44, 24, 16, 0.25);
  }

  .playground-devmode-btn:active {
    transform: translateY(1px);
    box-shadow: inset 0 2px 4px rgba(44, 24, 16, 0.3);
  }

  /* HUD 按钮激活状态 */
  .playground-hud-btn-active {
    background-color: #8B4513;
    color: #FFFDD0;
    border-color: #5C4033;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
  }

  /* Dock 图标悬停：轻微上浮 */
  .playground-dock-item {
    transition: all 0.2s ease;
    border: 1px solid transparent;
  }

  .playground-dock-item:hover {
    background: #EBE4D0;
    border-color: #C4B9A8;
    transform: translateY(-2px);
    box-shadow: 2px 3px 0 rgba(44, 24, 16, 0.15);
  }

  /* 面板头部：报纸标题栏风格 */
  .playground-panel-header {
    border-bottom: 2px solid #3D2914;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  /* 组件树节点 hover：书签效果 */
  .playground-tree-node:hover {
    background: linear-gradient(90deg, rgba(139, 69, 19, 0.1) 0%, transparent 100%);
    border-left: 3px solid #8B4513;
  }

  /* 复制成功状态 */
  .playground-copy-success {
    background-color: rgba(46, 125, 50, 0.15);
    border-color: #2E7D32;
    color: #2E7D32;
  }

  /* Minimap 边框 */
  .playground-minimap .tlui-minimap {
    border: 2px solid #C4B9A8;
  }
`;

export const playgroundGlobalCss = `
  /* Vintage Nostalgia - Playground 全局样式 */
  ${themeVars}
  ${createPlaygroundBaseCss(tokens)}
  ${overrides}
`;
