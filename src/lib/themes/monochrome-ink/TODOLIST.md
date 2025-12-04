# Monochrome Ink 主题开发 Todolist

> 创建时间: 2025-12-04
> 主题 ID: monochrome-ink
> 模板来源: theme-template

## 状态说明
- [ ] 待开始
- [~] 进行中
- [x] 已完成

---

## Phase 1: Token 定义

- [ ] `tokens.ts` - 调色板定义 (palette)
- [ ] `tokens.ts` - 品牌色 (primary/secondary/accent)
- [ ] `tokens.ts` - 语义色 (success/warning/error/info)
- [ ] `tokens.ts` - 背景层级 (background/surface)
- [ ] `tokens.ts` - 文字颜色 (foreground/muted)
- [ ] `tokens.ts` - 结构 (border/ring/radius)
- [ ] `tokens.ts` - 字体 (font-sans/mono)
- [ ] `tokens.ts` - 阴影 (shadow-sm/md/lg)
- [ ] `tokens.ts` - 特效 (effect-*)
- [ ] `tokens.ts` - meta 信息 (isDark/codeTheme)

---

## Phase 2: 组件样式 (53 个)

- [ ] `components/accordion.ts`
- [ ] `components/alert.ts`
- [ ] `components/alert-dialog.ts`
- [ ] `components/aspect-ratio.ts`
- [ ] `components/avatar.ts`
- [ ] `components/badge.ts`
- [ ] `components/breadcrumb.ts`
- [ ] `components/button.ts`
- [ ] `components/button-group.ts`
- [ ] `components/calendar.ts`
- [ ] `components/card.ts`
- [ ] `components/carousel.ts`
- [ ] `components/chart.ts`
- [ ] `components/checkbox.ts`
- [ ] `components/collapsible.ts`
- [ ] `components/combobox.ts`
- [ ] `components/command.ts`
- [ ] `components/context-menu.ts`
- [ ] `components/data-table.ts`
- [ ] `components/date-picker.ts`
- [ ] `components/dialog.ts`
- [ ] `components/drawer.ts`
- [ ] `components/dropdown-menu.ts`
- [ ] `components/form.ts`
- [ ] `components/hover-card.ts`
- [ ] `components/input.ts`
- [ ] `components/input-group.ts`
- [ ] `components/input-otp.ts`
- [ ] `components/kbd.ts`
- [ ] `components/label.ts`
- [ ] `components/menubar.ts`
- [ ] `components/navigation-menu.ts`
- [ ] `components/pagination.ts`
- [ ] `components/popover.ts`
- [ ] `components/progress.ts`
- [ ] `components/radio-group.ts`
- [ ] `components/resizable.ts`
- [ ] `components/scroll-area.ts`
- [ ] `components/select.ts`
- [ ] `components/separator.ts`
- [ ] `components/sheet.ts`
- [ ] `components/sidebar.ts`
- [ ] `components/skeleton.ts`
- [ ] `components/slider.ts`
- [ ] `components/sonner.ts`
- [ ] `components/spinner.ts`
- [ ] `components/switch.ts`
- [ ] `components/table.ts`
- [ ] `components/tabs.ts`
- [ ] `components/textarea.ts`
- [ ] `components/toggle.ts`
- [ ] `components/toggle-group.ts`
- [ ] `components/tooltip.ts`

---

## Phase 3: Playground 样式

- [ ] `styles/playground.ts` - 主题变量覆盖 (--pg-*)
- [ ] `styles/playground.ts` - 面板样式
- [ ] `styles/playground.ts` - 滚动条样式
- [ ] `styles/playground.ts` - 滑块样式
- [ ] `styles/playground.ts` - DevMode 按钮样式
- [ ] `styles/playground.ts` - 主题特定覆盖

---

## Phase 4: 入口文件

- [ ] `index.ts` - 更新 id/name/nameKey
- [ ] `index.ts` - 确认所有组件导入
- [ ] `index.ts` - 确认 canvasSizes 配置

---

## Phase 5: 注册集成

- [ ] `src/lib/themes/index.ts` - 导入主题
- [ ] `src/lib/themes/index.ts` - 添加到 THEMES 对象
- [ ] `src/lib/themes/index.ts` - 添加 export
- [ ] `src/lib/i18n/messages/themes.ts` - 添加多语言翻译

---

## Phase 6: 验证

- [ ] 运行 `pnpm validate:themes` 通过
- [ ] 本地启动 `pnpm dev`
- [ ] Playground 切换主题正常
- [ ] 所有组件显示正确
- [ ] Playground UI 风格一致

---

## 完成确认

- [ ] **所有任务已完成**
- [ ] **提交代码**

完成时间: ____________
