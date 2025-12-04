# Neo Brutalism 主题开发 Todolist

> 创建时间: 2025-12-04
> 主题 ID: neo-brutalism
> 模板来源: cyberpunk-dark

## 状态说明
- [ ] 待开始
- [~] 进行中
- [x] 已完成

---

## Phase 1: Token 定义

- [x] `tokens.ts` - 调色板定义 (palette)
- [x] `tokens.ts` - 品牌色 (primary/secondary/accent)
- [x] `tokens.ts` - 语义色 (success/warning/error/info)
- [x] `tokens.ts` - 背景层级 (background/surface)
- [x] `tokens.ts` - 文字颜色 (foreground/muted)
- [x] `tokens.ts` - 结构 (border/ring/radius)
- [x] `tokens.ts` - 字体 (font-sans/mono)
- [x] `tokens.ts` - 阴影 (shadow-sm/md/lg)
- [x] `tokens.ts` - 特效 (effect-*)
- [x] `tokens.ts` - meta 信息 (isDark/codeTheme)

---

## Phase 2: 组件样式 (53 个)

- [x] `components/accordion.ts`
- [x] `components/alert.ts`
- [x] `components/alert-dialog.ts`
- [x] `components/aspect-ratio.ts`
- [x] `components/avatar.ts`
- [x] `components/badge.ts`
- [x] `components/breadcrumb.ts`
- [x] `components/button.ts`
- [x] `components/button-group.ts`
- [x] `components/calendar.ts`
- [x] `components/card.ts`
- [x] `components/carousel.ts`
- [x] `components/chart.ts`
- [x] `components/checkbox.ts`
- [x] `components/collapsible.ts`
- [x] `components/combobox.ts`
- [x] `components/command.ts`
- [x] `components/context-menu.ts`
- [x] `components/data-table.ts`
- [x] `components/date-picker.ts`
- [x] `components/dialog.ts`
- [x] `components/drawer.ts`
- [x] `components/dropdown-menu.ts`
- [x] `components/form.ts`
- [x] `components/hover-card.ts`
- [x] `components/input.ts`
- [x] `components/input-group.ts`
- [x] `components/input-otp.ts`
- [x] `components/kbd.ts`
- [x] `components/label.ts`
- [x] `components/menubar.ts`
- [x] `components/navigation-menu.ts`
- [x] `components/pagination.ts`
- [x] `components/popover.ts`
- [x] `components/progress.ts`
- [x] `components/radio-group.ts`
- [x] `components/resizable.ts`
- [x] `components/scroll-area.ts`
- [x] `components/select.ts`
- [x] `components/separator.ts`
- [x] `components/sheet.ts`
- [x] `components/sidebar.ts`
- [x] `components/skeleton.ts`
- [x] `components/slider.ts`
- [x] `components/sonner.ts`
- [x] `components/spinner.ts`
- [x] `components/switch.ts`
- [x] `components/table.ts`
- [x] `components/tabs.ts`
- [x] `components/textarea.ts`
- [x] `components/toggle.ts`
- [x] `components/toggle-group.ts`
- [x] `components/tooltip.ts`

> Note: All components have been cleaned up from Cyberpunk traces and updated to Neo Brutalism style (Thick borders, hard shadows, no clip-paths).

---

## Phase 3: Playground 样式

- [x] `styles/playground.ts` - 主题变量覆盖 (--pg-*)
- [x] `styles/playground.ts` - 面板样式
- [x] `styles/playground.ts` - 滚动条样式
- [x] `styles/playground.ts` - 滑块样式
- [x] `styles/playground.ts` - DevMode 按钮样式
- [x] `styles/playground.ts` - 主题特定覆盖

---

## Phase 4: 入口文件

- [x] `index.ts` - 更新 id/name/nameKey
- [x] `index.ts` - 确认所有组件导入
- [x] `index.ts` - 确认 canvasSizes 配置

---

## Phase 5: 注册集成

- [x] `src/lib/themes/index.ts` - 导入主题
- [x] `src/lib/themes/index.ts` - 添加到 THEMES 对象
- [x] `src/lib/themes/index.ts` - 添加 export
- [x] `src/lib/i18n/messages/themes.ts` - 添加多语言翻译

---

## Phase 6: 验证

- [x] 运行 `pnpm validate:themes` 通过 (Neo Brutalism is clean)
- [x] 本地启动 `pnpm dev`
- [x] Playground 切换主题正常
- [x] 所有组件显示正确
- [x] Playground UI 风格一致

---

## 完成确认

- [x] **所有任务已完成**
- [x] **提交代码**

完成时间: 2025-12-04
