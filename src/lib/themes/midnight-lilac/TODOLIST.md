# Midnight Crystal 主题重构 Todolist

> 重构时间: 2025-12-04
> 主题 ID: midnight-lilac
> 风格目标: Midnight Crystal (午夜水晶) - 玻璃质感、流光、深度、凹槽
> 状态: 重构中

## 状态说明
- [ ] 待开始
- [~] 进行中
- [x] 已完成

---

## Phase 1: Token 定义 (基础已完成，按需微调)

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

## Phase 2: 组件样式重构 (Crystal Style)

**基础输入 & 交互**
- [x] `components/button.ts` (已重构：水晶按钮)
- [x] `components/input.ts` (已重构：能量凹槽)
- [x] `components/card.ts` (已重构：悬浮玻璃板)
- [ ] `components/checkbox.ts`
- [ ] `components/radio-group.ts`
- [ ] `components/switch.ts`
- [ ] `components/slider.ts`
- [ ] `components/textarea.ts`
- [ ] `components/toggle.ts`
- [ ] `components/toggle-group.ts`

**数据展示**
- [ ] `components/badge.ts`
- [ ] `components/avatar.ts`
- [ ] `components/progress.ts`
- [ ] `components/spinner.ts`
- [ ] `components/skeleton.ts`
- [ ] `components/table.ts`
- [ ] `components/data-table.ts`
- [ ] `components/carousel.ts`
- [ ] `components/aspect-ratio.ts`

**导航 & 菜单**
- [ ] `components/tabs.ts`
- [ ] `components/breadcrumb.ts`
- [ ] `components/pagination.ts`
- [ ] `components/menubar.ts`
- [ ] `components/navigation-menu.ts`
- [ ] `components/dropdown-menu.ts`
- [ ] `components/context-menu.ts`
- [ ] `components/command.ts`

**反馈 & 覆盖层**
- [ ] `components/dialog.ts`
- [ ] `components/alert-dialog.ts`
- [ ] `components/sheet.ts`
- [ ] `components/drawer.ts`
- [ ] `components/popover.ts`
- [ ] `components/tooltip.ts`
- [ ] `components/hover-card.ts`
- [ ] `components/alert.ts`
- [ ] `components/sonner.ts`

**复杂组件 & 布局**
- [ ] `components/form.ts`
- [ ] `components/select.ts`
- [ ] `components/combobox.ts`
- [ ] `components/date-picker.ts`
- [ ] `components/calendar.ts`
- [ ] `components/accordion.ts`
- [ ] `components/collapsible.ts`
- [ ] `components/resizable.ts`
- [ ] `components/scroll-area.ts`
- [ ] `components/separator.ts`
- [ ] `components/sidebar.ts`
- [ ] `components/button-group.ts`
- [ ] `components/input-group.ts`
- [ ] `components/input-otp.ts`
- [ ] `components/kbd.ts`

---

## Phase 3: Playground 样式重构

- [x] `styles/playground.ts` - 面板玻璃质感化
- [x] `styles/playground.ts` - 滚动条光效
- [x] `styles/playground.ts` - DevMode 按钮发光

---

## Phase 4: 收尾

- [ ] `index.ts` - 检查所有组件
- [ ] 运行验证脚本
- [ ] 最终视觉审查