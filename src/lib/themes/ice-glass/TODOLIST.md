# Ice Glass 主题开发 Todolist

> 创建时间: 2025-12-04
> 主题 ID: ice-glass
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
│   "这个组件体现了 Ice Glass 的设计语言吗？"                                │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Phase 0: 设计规范 ⭐⭐⭐ 最重要！

> **必须首先完成！** 这决定了整个主题的质量。

- [ ] `DESIGN.md` - 填写设计故事 (灵感来源、情感表达)
- [ ] `DESIGN.md` - 定义形状语言 (圆角/切角风格)
- [ ] `DESIGN.md` - 定义动效语言 (hover/active 效果)
- [ ] `DESIGN.md` - 定义字体语言 (字族、大小写、字距)
- [ ] `DESIGN.md` - 定义层次语言 (阴影、边框风格)
- [ ] `DESIGN.md` - 填写色彩设计 (主色调、背景层级)
- [ ] `DESIGN.md` - 填写组件风格一览表

**Phase 0 完成标准**：
- [ ] 能用一句话描述主题的设计感（如"科技切角风"、"温暖圆润风"）
- [ ] 设计语言各维度都有明确选择，不是空白或"TODO"
- [ ] 色彩方案完整，不只是换了主色

---

## Phase 1: Token 定义

> 根据 DESIGN.md 中的色彩设计来填写

- [ ] `tokens.ts` - 调色板定义 (palette)
- [ ] `tokens.ts` - 品牌色 (primary/secondary/accent)
- [ ] `tokens.ts` - 语义色 (success/warning/error/info)
- [ ] `tokens.ts` - 背景层级 (background/surface)
- [ ] `tokens.ts` - 文字颜色 (foreground/muted)
- [ ] `tokens.ts` - 结构 (border/ring/radius)
- [ ] `tokens.ts` - 字体 (font-sans/mono)
- [ ] `tokens.ts` - 阴影 (shadow-sm/md/lg) ← 根据设计语言定义
- [ ] `tokens.ts` - 特效 (effect-*)
- [ ] `tokens.ts` - meta 信息 (isDark/codeTheme)

---

## Phase 2: 组件样式 (52 个)

> ⚠️ **每个组件必须体现 DESIGN.md 中定义的设计语言！**
>
> 检查项（每个组件）：
> - 形状：是否使用了定义的圆角/切角？
> - 动效：hover/active 是否符合设计语言？
> - 字体：是否使用了定义的字体风格？
> - 阴影/边框：是否符合设计语言？

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

### 6.1 技术验证
- [ ] 运行 `pnpm validate:themes` 通过
- [ ] 本地启动 `pnpm dev`
- [ ] Playground 切换主题正常
- [ ] 所有组件显示正确

### 6.2 设计验证 ⭐⭐⭐
- [ ] **差异化检查**：与默认主题截图对比，视觉差异明显
- [ ] **风格识别**：给人看截图，能说出主题风格
- [ ] **一致性检查**：所有组件风格统一
- [ ] **可读性检查**：所有内容清晰可读

---

## 完成确认

- [ ] **Phase 0 设计规范已完成**
- [ ] **所有 Phase 已完成**
- [ ] **设计验证通过**
- [ ] **提交代码**

完成时间: ____________
