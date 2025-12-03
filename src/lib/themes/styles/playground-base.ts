/**
 * Playground 公共 CSS 基础
 *
 * 所有主题共享的 playground 样式框架。
 * 使用 CSS 变量实现主题差异化，各主题只需覆盖变量即可。
 *
 * 主题可覆盖的 CSS 变量：
 * --pg-panel-bg         面板背景
 * --pg-panel-blur       面板模糊效果 (如 blur(16px) 或 none)
 * --pg-panel-shadow     面板阴影
 * --pg-radius-sm        小圆角 (4-6px)
 * --pg-radius-md        中圆角 (6-8px)
 * --pg-radius-lg        大圆角 (8-12px)
 * --pg-radius-xl        超大圆角 (12-16px)
 * --pg-scrollbar-radius 滚动条圆角
 * --pg-scrollbar-thumb  滚动条滑块颜色
 * --pg-glow             发光效果 (如 0 0 10px var(--primary) 或 none)
 * --pg-focus-width      焦点边框宽度
 */

/**
 * 生成 playground 基础 CSS
 * @param tokens - 主题的 token 对象，用于获取字体等值
 */
export function createPlaygroundBaseCss(tokens: Record<string, string>) {
  return `
  /* ========================================
   * 字体加载
   * ======================================== */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap');

  /* ========================================
   * 页面基础
   * ======================================== */
  body {
    background-color: var(--background);
    color: var(--foreground);
    font-family: var(--font-sans, ${tokens['--font-sans'] || 'Inter, system-ui, sans-serif'});
  }

  code, pre, .font-mono {
    font-family: var(--font-mono, ${tokens['--font-mono'] || '"Fira Code", monospace'});
  }

  /* ========================================
   * Playground 布局组件
   * ======================================== */
  .playground-main {
    background-color: var(--background);
  }

  .playground-right-panel {
    background-color: var(--pg-panel-bg, var(--surface-1));
    border-color: var(--border);
    backdrop-filter: var(--pg-panel-blur, none);
    box-shadow: var(--pg-panel-shadow, none);
  }

  .playground-bottom-panel {
    background-color: var(--pg-panel-bg, var(--surface-1));
    border-color: var(--border);
    backdrop-filter: var(--pg-panel-blur, none);
    box-shadow: var(--pg-panel-shadow, none);
  }

  .playground-panel-header {
    background-color: var(--pg-header-bg, var(--surface-2));
    border-color: var(--border);
  }

  .playground-panel-label {
    color: var(--muted-foreground);
  }

  .playground-panel-btn {
    background-color: var(--pg-btn-bg, var(--surface-2));
    border-color: var(--border);
    color: var(--muted-foreground);
    border-radius: var(--pg-radius-sm, 6px);
  }

  .playground-panel-btn:hover {
    background-color: var(--pg-btn-hover-bg, var(--surface-3));
    border-color: var(--primary);
    color: var(--foreground);
  }

  .playground-panel-btn-active {
    background-color: color-mix(in srgb, var(--primary) 15%, transparent);
    color: var(--primary);
    border-color: var(--primary);
    box-shadow: var(--pg-glow, none);
  }

  /* Tab 按钮 */
  .playground-tab {
    color: var(--muted-foreground);
    border-radius: var(--pg-radius-sm, 6px);
  }

  .playground-tab:hover {
    color: var(--foreground);
    background-color: var(--pg-btn-bg, var(--surface-2));
  }

  .playground-tab-active {
    color: var(--foreground);
    background-color: var(--pg-btn-bg, var(--surface-2));
    border-color: var(--border);
  }

  /* 文件列表 */
  .playground-file-list {
    background-color: var(--background);
    border-color: var(--border);
  }

  .playground-file-item {
    color: var(--muted-foreground);
    border-radius: var(--pg-radius-sm, 6px);
  }

  .playground-file-item:hover {
    background-color: var(--pg-btn-bg, var(--surface-2));
    color: var(--foreground);
  }

  .playground-file-item-active {
    background-color: color-mix(in srgb, var(--primary) 12%, transparent);
    color: var(--primary);
    border-left: 2px solid var(--primary);
  }

  /* 代码编辑器区域 */
  .playground-code-area {
    background-color: var(--background);
    border-color: var(--border);
  }

  /* 预览区域 */
  .playground-preview {
    background-color: var(--background);
    border-color: var(--border);
  }

  /* Inspector 组件 */
  .playground-inspector {
    background-color: transparent;
  }

  .playground-inspector-section {
    border-color: var(--border);
  }

  .playground-inspector-title {
    color: var(--foreground);
  }

  .playground-inspector-label {
    color: var(--muted-foreground);
  }

  /* ========================================
   * 自定义滚动条
   * ======================================== */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--pg-scrollbar-track, var(--surface-2));
    border-radius: var(--pg-scrollbar-radius, 4px);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--pg-scrollbar-thumb, var(--surface-3));
    border-radius: var(--pg-scrollbar-radius, 4px);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--primary);
    box-shadow: var(--pg-glow, none);
  }

  /* Selection 高亮 */
  ::selection {
    background: color-mix(in srgb, var(--primary) 25%, transparent);
    color: var(--foreground);
  }

  /* Focus 样式 */
  :focus-visible {
    outline: var(--pg-focus-width, 2px) solid var(--primary);
    outline-offset: 2px;
  }

  /* ========================================
   * ComponentTree 组件树
   * ======================================== */
  .playground-tree-container {
    background-color: var(--pg-tree-bg, var(--surface-2));
    border-color: var(--border);
    border-radius: var(--pg-radius-md, 8px);
  }

  .playground-tree-item {
    color: var(--muted-foreground);
    border-radius: var(--pg-radius-sm, 6px);
  }

  .playground-tree-item:hover {
    background-color: var(--surface-3);
    color: var(--foreground);
  }

  .playground-tree-item-active {
    background-color: color-mix(in srgb, var(--primary) 12%, transparent);
    color: var(--foreground);
  }

  .playground-tree-item-child:hover {
    background-color: var(--surface-2);
  }

  .playground-tree-item-child-active {
    background-color: color-mix(in srgb, var(--primary) 8%, transparent);
  }

  .playground-tree-indicator {
    background-color: var(--primary);
    box-shadow: var(--pg-glow, none);
  }

  .playground-tree-guide {
    background-color: var(--border);
  }

  .playground-tree-label {
    color: var(--foreground);
  }

  .playground-tree-label-muted {
    color: var(--muted-foreground);
  }

  .playground-tree-badge {
    background-color: color-mix(in srgb, var(--secondary) 10%, transparent);
    border-color: color-mix(in srgb, var(--secondary) 20%, transparent);
    border-radius: var(--pg-radius-sm, 4px);
  }

  .playground-tree-badge-dot {
    background-color: var(--secondary);
  }

  .playground-tree-badge-text {
    color: var(--secondary);
  }

  /* ========================================
   * Checkbox 勾选框
   * ======================================== */
  .playground-checkbox {
    border-color: var(--border);
    background-color: var(--surface-1);
    border-radius: var(--pg-radius-sm, 4px);
  }

  .playground-checkbox:hover {
    border-color: var(--primary);
  }

  .playground-checkbox-checked {
    background-color: var(--primary);
    border-color: var(--primary);
    box-shadow: var(--pg-glow, none);
  }

  .playground-checkbox-icon {
    color: var(--primary-foreground, var(--background));
  }

  /* ========================================
   * Effects/Motion Tab 样式
   * ======================================== */
  .playground-effect-category {
    color: var(--muted-foreground);
  }

  .playground-effect-badge {
    background-color: var(--surface-2);
    border-color: var(--border);
    color: var(--muted-foreground);
    border-radius: var(--pg-radius-sm, 4px);
  }

  .playground-effect-item {
    border-color: transparent;
    border-radius: var(--pg-radius-md, 8px);
  }

  .playground-effect-item:hover {
    background-color: var(--surface-2);
  }

  .playground-effect-item-active {
    background-color: color-mix(in srgb, var(--primary) 8%, transparent);
    border-color: color-mix(in srgb, var(--primary) 20%, transparent);
  }

  .playground-effect-label {
    color: var(--foreground);
  }

  .playground-effect-label-muted {
    color: var(--muted-foreground);
  }

  .playground-effect-expand-area {
    background-color: var(--surface-2);
    border-color: var(--border);
    border-radius: var(--pg-radius-sm, 6px);
  }

  /* ========================================
   * Slider 滑块 - 基础样式
   * ======================================== */
  .playground-slider {
    -webkit-appearance: none;
    appearance: none;
    background: var(--surface-3);
    border: 1px solid var(--border);
    border-radius: var(--pg-slider-radius, 4px);
  }

  .playground-slider::-webkit-slider-runnable-track {
    height: 6px;
    border-radius: var(--pg-slider-track-radius, 3px);
    background: var(--pg-slider-track, linear-gradient(90deg, var(--primary), color-mix(in srgb, var(--secondary) 50%, var(--primary))));
  }

  .playground-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: var(--pg-slider-thumb-size, 16px);
    height: var(--pg-slider-thumb-size, 16px);
    margin-top: calc((var(--pg-slider-thumb-size, 16px) - 6px) / -2);
    border-radius: var(--pg-slider-thumb-radius, 50%);
    background: var(--primary);
    border: 2px solid var(--surface-1);
    cursor: pointer;
    box-shadow: var(--pg-slider-shadow, 0 2px 4px rgba(0, 0, 0, 0.15));
    transition: all 0.2s ease;
  }

  .playground-slider::-webkit-slider-thumb:hover {
    transform: scale(1.1);
    box-shadow: var(--pg-slider-hover-shadow, 0 4px 8px rgba(0, 0, 0, 0.2));
  }

  .playground-slider::-moz-range-track {
    height: 6px;
    border-radius: var(--pg-slider-track-radius, 3px);
    background: var(--pg-slider-track, linear-gradient(90deg, var(--primary), color-mix(in srgb, var(--secondary) 50%, var(--primary))));
  }

  .playground-slider::-moz-range-thumb {
    width: var(--pg-slider-thumb-size, 16px);
    height: var(--pg-slider-thumb-size, 16px);
    border: 2px solid var(--surface-1);
    border-radius: var(--pg-slider-thumb-radius, 50%);
    background: var(--primary);
    cursor: pointer;
    box-shadow: var(--pg-slider-shadow, 0 2px 4px rgba(0, 0, 0, 0.15));
  }

  /* Color picker */
  .playground-color-input {
    border-color: var(--border);
    border-radius: var(--pg-radius-sm, 6px);
  }

  /* Text input */
  .playground-text-input {
    background-color: var(--surface-1);
    border-color: var(--border);
    color: var(--foreground);
    border-radius: var(--pg-radius-sm, 6px);
  }

  .playground-text-input:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary) 20%, transparent);
  }

  /* Reset button */
  .playground-reset-btn {
    color: var(--muted-foreground);
    border-color: var(--border);
    border-radius: var(--pg-radius-sm, 6px);
  }

  .playground-reset-btn:hover {
    color: var(--foreground);
    background-color: var(--surface-2);
  }

  .playground-reset-btn:disabled {
    color: var(--disabled-foreground, color-mix(in srgb, var(--muted-foreground) 50%, transparent));
  }

  /* ========================================
   * Dock 底部工具栏
   * ======================================== */
  .playground-dock {
    background-color: var(--pg-panel-bg, var(--surface-1));
    border-color: var(--border);
    backdrop-filter: var(--pg-panel-blur, none);
    box-shadow: var(--pg-dock-shadow, none);
    border-radius: var(--pg-radius-lg, 12px);
  }

  .playground-dock-divider {
    background-color: var(--border);
  }

  .playground-dock-btn {
    color: var(--muted-foreground);
    border-radius: var(--pg-radius-md, 8px);
  }

  .playground-dock-btn:hover {
    color: var(--foreground);
    background-color: var(--surface-2);
  }

  .playground-dock-btn-active {
    color: var(--primary);
    background-color: color-mix(in srgb, var(--primary) 12%, transparent);
    box-shadow: var(--pg-glow, none);
  }

  .playground-dock-filter {
    color: var(--muted-foreground);
    border-radius: var(--pg-radius-sm, 6px);
  }

  .playground-dock-filter:hover {
    color: var(--foreground);
    background-color: var(--surface-2);
  }

  .playground-dock-filter-active {
    color: var(--primary);
    background-color: color-mix(in srgb, var(--primary) 12%, transparent);
  }

  .playground-dock-filter-disabled {
    color: var(--disabled-foreground, color-mix(in srgb, var(--muted-foreground) 50%, transparent));
  }

  .playground-dock-count {
    color: var(--muted-foreground);
  }

  .playground-dock-count-active {
    color: var(--foreground);
  }

  .playground-dock-indicator {
    background-color: var(--primary);
    box-shadow: var(--pg-glow, none);
  }

  /* ========================================
   * Minimap 缩略图
   * ======================================== */
  .tl-container,
  .tl-container.tl-theme__light,
  .tl-container.tl-theme__dark {
    --tl-color-low: var(--background) !important;
    --tl-color-muted-1: color-mix(in srgb, var(--primary) 20%, transparent) !important;
    --tl-color-selected: var(--secondary) !important;
    --tl-color-text-3: var(--primary) !important;
  }

  .playground-minimap {
    pointer-events: auto;
  }

  .playground-minimap .tlui-minimap {
    width: 160px;
    height: 96px;
    background: var(--pg-minimap-bg, var(--surface-1));
    border: 1px solid var(--border);
    border-radius: var(--pg-radius-md, 8px);
    overflow: hidden;
    box-shadow: var(--pg-minimap-shadow, none);
  }

  .playground-minimap .tlui-minimap__canvas {
    opacity: 0.9;
  }

  .playground-minimap .tlui-minimap__viewport {
    border: 2px solid var(--primary);
    border-radius: var(--pg-radius-sm, 4px);
    background: color-mix(in srgb, var(--primary) 10%, transparent);
  }

  /* ========================================
   * HUD 顶部导航栏
   * ======================================== */
  .playground-hud-container {
    background-color: var(--pg-panel-bg, var(--surface-1));
    border-color: var(--border);
    backdrop-filter: var(--pg-panel-blur, none);
    box-shadow: var(--pg-hud-shadow, none);
    border-radius: var(--pg-radius-lg, 12px);
  }

  .playground-hud-brand {
    color: var(--foreground);
  }

  .playground-hud-divider {
    background-color: var(--border);
  }

  .playground-hud-btn {
    color: var(--muted-foreground);
    border-radius: var(--pg-radius-md, 8px);
  }

  .playground-hud-btn:hover {
    background-color: var(--surface-2);
    color: var(--foreground);
  }

  .playground-hud-btn-active {
    background-color: color-mix(in srgb, var(--primary) 15%, transparent);
    color: var(--primary);
    box-shadow: var(--pg-glow, none);
  }

  .playground-hud-dropdown {
    background-color: var(--surface-1);
    border-color: var(--border);
    border-radius: var(--pg-radius-md, 8px);
    box-shadow: var(--pg-dropdown-shadow, 0 4px 12px rgba(0, 0, 0, 0.1));
  }

  .playground-hud-dropdown-header {
    color: var(--muted-foreground);
    background-color: var(--surface-2);
  }

  .playground-hud-dropdown-item {
    color: var(--foreground);
    border-radius: var(--pg-radius-sm, 6px);
  }

  .playground-hud-dropdown-item:hover {
    background-color: var(--surface-2);
  }

  .playground-hud-dropdown-item-active {
    background-color: color-mix(in srgb, var(--primary) 10%, transparent);
    color: var(--primary);
  }

  .playground-hud-indicator {
    background-color: var(--primary);
  }

  /* ========================================
   * Dev Mode 按钮
   * ======================================== */
  .playground-devmode-btn {
    background-color: var(--pg-devmode-bg, var(--surface-2));
    border-color: var(--pg-devmode-border, var(--border));
    color: var(--pg-devmode-color, var(--muted-foreground));
    border-radius: var(--pg-devmode-radius, var(--pg-radius-md, 8px));
  }

  .playground-devmode-btn:hover {
    background-color: var(--primary);
    border-color: var(--primary);
    color: var(--primary-foreground, var(--background));
    box-shadow: var(--pg-devmode-hover-glow, none);
  }

  .playground-devmode-btn-active {
    background-color: var(--primary);
    border-color: var(--primary);
    color: var(--primary-foreground, var(--background));
    box-shadow: var(--pg-devmode-active-glow, none);
  }

  .playground-devmode-icon {
    color: currentColor;
  }

  .playground-devmode-icon-active {
    color: currentColor;
  }

  /* 文件列表选中图标颜色 */
  .playground-file-icon-active {
    color: var(--primary);
  }

  /* Copy 成功状态 */
  .playground-copy-success {
    background-color: color-mix(in srgb, var(--success, var(--secondary)) 10%, transparent);
    border-color: color-mix(in srgb, var(--success, var(--secondary)) 30%, transparent);
    color: var(--success, var(--secondary));
  }
`;
}
