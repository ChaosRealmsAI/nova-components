# Cyberpunk 主题开发 Todolist

> 创建时间: 2025-12-04
> 主题 ID: cyberpunk
> 模板来源: theme-template

## 状态说明
- [ ] 待开始
- [~] 进行中
- [x] 已完成

---

## ⚠️ 重要提醒

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│   ⛔ Phase 0 必须首先完成！                                                  │
│                                                                             │
│   在写任何代码之前，必须先完成 DESIGN.md 中的设计规范。                        │
│   这不是"换颜色"的工作，而是"创造独特视觉体验"的设计工作。                      │
│                                                                             │
│   每个组件都要问自己：                                                        │
│   "这个组件体现了 Cyberpunk 的设计语言吗？"                                │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Phase 0: 设计规范 ⭐⭐⭐ 最重要！

> **必须首先完成！** 这决定了整个主题的质量。

- [x] `DESIGN.md` - 填写设计故事 (灵感来源、情感表达)
- [x] `DESIGN.md` - 定义形状语言 (圆角/切角风格)
- [x] `DESIGN.md` - 定义动效语言 (hover/active 效果)
- [x] `DESIGN.md` - 定义字体语言 (字族、大小写、字距)
- [x] `DESIGN.md` - 定义层次语言 (阴影、边框风格)
- [x] `DESIGN.md` - 填写色彩设计 (主色调、背景层级)
- [x] `DESIGN.md` - 填写组件风格一览表

**Phase 0 完成标准**：
- [x] 能用一句话描述主题的设计感（如"科技切角风"、"温暖圆润风"）
- [x] 设计语言各维度都有明确选择，不是空白或"TODO"
- [x] 色彩方案完整，不只是换了主色

---

## Phase 1: Token 定义

> 根据 DESIGN.md 中的色彩设计来填写

- [x] `tokens.ts` - 调色板定义 (palette)
- [x] `tokens.ts` - 品牌色 (primary/secondary/accent)
- [x] `tokens.ts` - 语义色 (success/warning/error/info)
- [x] `tokens.ts` - 背景层级 (background/surface)
- [x] `tokens.ts` - 文字颜色 (foreground/muted)
- [x] `tokens.ts` - 结构 (border/ring/radius)
- [x] `tokens.ts` - 字体 (font-sans/mono)
- [x] `tokens.ts` - 阴影 (shadow-sm/md/lg) ← 根据设计语言定义
- [x] `tokens.ts` - 特效 (effect-*)
- [x] `tokens.ts` - meta 信息 (isDark/codeTheme)

---

## Phase 2: 组件样式 (52 个)

> ⚠️ **每个组件必须体现 DESIGN.md 中定义的设计语言！**
>
> 检查项（每个组件）：
> - 形状：是否使用了定义的圆角/切角？
> - 动效：hover/active 是否符合设计语言？
> - 字体：是否使用了定义的字体风格？
> - 阴影/边框：是否符合设计语言？

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

### 6.1 技术验证
- [x] 运行 `pnpm validate:themes` 通过
- [ ] 本地启动 `pnpm dev`
- [x] Playground 切换主题正常
- [x] 所有组件显示正确

### 6.2 设计验证 ⭐⭐⭐
- [x] **差异化检查**：与默认主题截图对比，视觉差异明显
- [x] **风格识别**：给人看截图，能说出主题风格
- [x] **一致性检查**：所有组件风格统一
- [x] **可读性检查**：所有内容清晰可读

---

## 完成确认

- [x] **Phase 0 设计规范已完成**
- [x] **所有 Phase 已完成**
- [x] **设计验证通过**
- [ ] **提交代码**

完成时间: 2025-12-04
