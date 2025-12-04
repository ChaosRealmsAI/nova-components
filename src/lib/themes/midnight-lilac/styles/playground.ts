/**
 * Playground 样式 - Midnight Crystal 风格
 * 
 * 设计理念：
 * 打造一个沉浸式的深空玻璃控制台。
 * 所有的面板都像是悬浮在深空中的高科技显示屏。
 */

import { tokens } from '../tokens';
import { createPlaygroundBaseCss } from '../../styles/playground-base';

const themeVars = `
  /* Midnight Crystal - Playground 变量 */
  :root {
    /* =====================================
     * 面板样式：深色玻璃
     * ===================================== */
    /* 背景：极低透明度的深紫黑，配合模糊 */
    --pg-panel-bg: rgba(20, 15, 30, 0.6);
    --pg-panel-blur: blur(20px);
    
    /* 阴影：深邃的黑色弥散阴影 + 顶部边缘高光 */
    --pg-panel-shadow: 
      0 20px 50px -10px rgba(0,0,0,0.8),
      inset 0 1px 0 0 rgba(255,255,255,0.1),
      inset 0 0 0 1px rgba(255,255,255,0.05);
      
    --pg-header-bg: rgba(255, 255, 255, 0.03);

    /* =====================================
     * 圆角
     * ===================================== */
    --pg-radius-sm: 0.5rem;
    --pg-radius-md: 0.75rem;
    --pg-radius-lg: 1rem;
    --pg-radius-xl: 1.5rem;

    /* =====================================
     * 滚动条：极简光条
     * ===================================== */
    --pg-scrollbar-radius: 99px;
    --pg-scrollbar-track: transparent;
    --pg-scrollbar-thumb: rgba(255, 255, 255, 0.15);

    /* =====================================
     * 聚焦效果：紫色辉光
     * ===================================== */
    --pg-glow: 0 0 0 2px rgba(167, 139, 250, 0.3), 0 0 20px rgba(167, 139, 250, 0.2);
    --pg-focus-width: 2px;

    /* =====================================
     * 按钮样式
     * ===================================== */
    --pg-btn-bg: rgba(255, 255, 255, 0.05);
    --pg-btn-hover-bg: rgba(255, 255, 255, 0.1);

    /* =====================================
     * 组件树
     * ===================================== */
    --pg-tree-bg: transparent;

    /* =====================================
     * Slider 滑块
     * ===================================== */
    --pg-slider-radius: 99px;
    --pg-slider-track-radius: 99px;
    --pg-slider-thumb-radius: 99px;
    --pg-slider-track: var(--primary);
    --pg-slider-shadow: 0 0 15px var(--primary-muted);
    --pg-slider-hover-shadow: 0 0 25px var(--primary);

    /* =====================================
     * Dock & HUD
     * ===================================== */
    /* 更加强烈的悬浮感 */
    --pg-dock-shadow: 
      0 20px 60px rgba(0,0,0,0.9),
      inset 0 1px 0 rgba(255,255,255,0.15),
      0 0 0 1px rgba(0,0,0,0.5);
      
    --pg-hud-shadow: 
      0 15px 40px rgba(0,0,0,0.8),
      inset 0 1px 0 rgba(255,255,255,0.1);
      
    --pg-minimap-bg: rgba(0,0,0,0.4);
    --pg-minimap-shadow: 0 10px 30px rgba(0,0,0,0.5);
    --pg-dropdown-shadow: 0 20px 50px rgba(0,0,0,0.8);

    /* =====================================
     * DevMode 按钮
     * ===================================== */
    --pg-devmode-bg: rgba(0, 0, 0, 0.3);
    --pg-devmode-border: rgba(255, 255, 255, 0.1);
    --pg-devmode-color: var(--foreground);
    --pg-devmode-radius: 99px;
    --pg-devmode-hover-glow: 0 0 15px rgba(255,255,255,0.1);
    --pg-devmode-active-glow: 0 0 20px var(--primary-muted);
  }
`;

const overrides = `
  /* 全局背景：给整个页面加一点星空/深邃感（可选，如果 playground 支持） */
  /*
  .playground-canvas {
    background-image: radial-gradient(circle at 50% 0%, #2e1065 0%, #0f172a 50%, #000000 100%);
  }
  */

  /* 滚动条 hover 变亮 */
  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }

  /* HUD 按钮激活状态：霓虹点亮 */
  .playground-hud-btn-active {
    color: var(--primary);
    background-color: rgba(139, 92, 246, 0.15);
    box-shadow: 
      inset 0 0 0 1px rgba(139, 92, 246, 0.5),
      0 0 15px rgba(139, 92, 246, 0.3);
  }
  
  /* Dock 图标悬停：上浮 + 发光 */
  .playground-dock-item {
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .playground-dock-item:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-4px) scale(1.1);
    box-shadow: 0 10px 20px rgba(0,0,0,0.5);
  }

  /* 面板头部底部边框：改为发光线 */
  .playground-panel-header {
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
  
  /* 组件树节点 hover */
  .playground-tree-node:hover {
    background: linear-gradient(90deg, rgba(139, 92, 246, 0.1) 0%, transparent 100%);
    border-left: 2px solid var(--primary);
  }
`;

export const playgroundGlobalCss = `
  /* Midnight Crystal - Playground 全局样式 */
  ${themeVars}
  ${createPlaygroundBaseCss(tokens)}
  ${overrides}
`;
