# Nova Components 主题开发 SOP

> 版本: v8.0
> 更新时间: 2025-12-04

## 概述

本文档描述如何为 Nova Components 开发一个**独特的风格化主题**。

---

## ⚠️ 核心理念

```
╔═════════════════════════════════════════════════════════════════════════════╗
║                                                                             ║
║   ⭐ 三大核心原则（必须遵守！）                                               ║
║                                                                             ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                                                                             ║
║   1️⃣ Slot 级别定制，不是简单换色                                             ║
║      ─────────────────────────────────────────────────────────────────────  ║
║      ✗ 错误：只改 Token 颜色，组件样式用默认                                  ║
║      ✓ 正确：形状/字体/动效/阴影/边框 全维度定制                               ║
║                                                                             ║
║   2️⃣ 完成一个任务，立即打一个勾                                              ║
║      ─────────────────────────────────────────────────────────────────────  ║
║      ✗ 禁止：留下空 TODO、批量写完再打勾                                      ║
║      ✓ 完成 = 代码写完 + TODOLIST.md 已打勾                                  ║
║                                                                             ║
║   3️⃣ 不要所有组件都用 primary                                                ║
║      ─────────────────────────────────────────────────────────────────────  ║
║      ✗ 错误：Input/Card/Dialog 背景都用 bg-primary                           ║
║      ✓ 正确：容器用 surface，表单用 surface+border，CTA 才用 primary          ║
║                                                                             ║
╚═════════════════════════════════════════════════════════════════════════════╝
```

### Slot 级别差异化

主题系统的核心能力是 **Slot 级别的样式覆盖**：

| 维度 | 你可以做什么 |
|------|-------------|
| **形状** | 圆角大小、切角、不规则形状、clip-path 任意裁剪 |
| **字体** | 字族、大小写、字重、字距、行高 |
| **动效** | hover 变化、active 反馈、过渡时长、动画曲线 |
| **阴影** | 无阴影、柔和、硬边、发光、内凹、多层 |
| **边框** | 粗细、样式、颜色、发光、渐变 |
| **背景** | 纯色、渐变、半透明、模糊、图案 |

---

## 开发流程

严格按照以下步骤执行，每完成一项立即打勾。

---

## Phase 0: 设计规范 ⭐⭐⭐

### 0.1 填写设计故事

**操作**：编辑 `DESIGN.md` → 填写灵感来源、情感表达、目标场景
**打勾**：`TODOLIST.md` → `- [x] DESIGN.md - 填写设计故事`

### 0.2 定义形状语言

**操作**：编辑 `DESIGN.md` → 选择圆角风格、是否使用切角
**打勾**：`TODOLIST.md` → `- [x] DESIGN.md - 定义形状语言`

### 0.3 定义动效语言

**操作**：编辑 `DESIGN.md` → 选择 hover/active 效果、过渡时长
**打勾**：`TODOLIST.md` → `- [x] DESIGN.md - 定义动效语言`

### 0.4 定义字体语言

**操作**：编辑 `DESIGN.md` → 选择字族、大小写、字距
**打勾**：`TODOLIST.md` → `- [x] DESIGN.md - 定义字体语言`

### 0.5 定义层次语言

**操作**：编辑 `DESIGN.md` → 选择阴影风格、边框风格
**打勾**：`TODOLIST.md` → `- [x] DESIGN.md - 定义层次语言`

### 0.6 填写色彩设计

**操作**：编辑 `DESIGN.md` → 填写主色调、背景层级
**打勾**：`TODOLIST.md` → `- [x] DESIGN.md - 填写色彩设计`

---

## Phase 1: Token 定义

### 1.1 调色板

**操作**：编辑 `tokens.ts` → 填写 palette 颜色
**打勾**：`TODOLIST.md` → `- [x] tokens.ts - 调色板定义`

### 1.2 品牌色

**操作**：编辑 `tokens.ts` → 填写 primary/secondary/accent
**打勾**：`TODOLIST.md` → `- [x] tokens.ts - 品牌色`

### 1.3 语义色

**操作**：编辑 `tokens.ts` → 填写 success/warning/error/info
**打勾**：`TODOLIST.md` → `- [x] tokens.ts - 语义色`

### 1.4 背景层级

**操作**：编辑 `tokens.ts` → 填写 background/surface-1/2/3
**打勾**：`TODOLIST.md` → `- [x] tokens.ts - 背景层级`

### 1.5 文字颜色

**操作**：编辑 `tokens.ts` → 填写 foreground/muted-foreground
**打勾**：`TODOLIST.md` → `- [x] tokens.ts - 文字颜色`

### 1.6 结构 Token

**操作**：编辑 `tokens.ts` → 填写 border/ring/radius
**打勾**：`TODOLIST.md` → `- [x] tokens.ts - 结构`

### 1.7 阴影 Token

**操作**：编辑 `tokens.ts` → 填写 shadow-sm/md/lg（根据设计语言）
**打勾**：`TODOLIST.md` → `- [x] tokens.ts - 阴影`

---

## Phase 2: 组件样式 ⭐⭐⭐

每个组件严格执行：

```
1. 打开 components/{component}.ts
2. 阅读组件注释中的 🎨 颜色语义
3. 根据 DESIGN.md 填写所有 slot 和 variant
4. 确保没有空数组或空字符串
5. 打开 TODOLIST.md
6. 将对应项改为 - [x]
7. 继续下一个组件
```

### 示例：Button 组件

**操作**：编辑 `components/button.ts` → 填写 base slot + 所有 variant
**检查**：
- [ ] base 有形状/字体/动效样式
- [ ] default variant 用 bg-primary
- [ ] secondary variant 用 bg-secondary
- [ ] destructive variant 用 bg-destructive
- [ ] ghost/outline 用透明背景
**打勾**：`TODOLIST.md` → `- [x] components/button.ts`

### 示例：Input 组件

**操作**：编辑 `components/input.ts` → 填写 base slot
**检查**：
- [ ] 背景用 bg-surface-1（不是 primary！）
- [ ] 边框用 border-border
- [ ] focus 状态用 border-primary
**打勾**：`TODOLIST.md` → `- [x] components/input.ts`

### 示例：Card 组件

**操作**：编辑 `components/card.ts` → 填写 base/header/title/description/content/footer
**检查**：
- [ ] 背景用 bg-surface-1（不是 primary！）
- [ ] 标题用 text-foreground
- [ ] 描述用 text-muted-foreground
**打勾**：`TODOLIST.md` → `- [x] components/card.ts`

---

## Phase 3: Playground 样式

**操作**：编辑 `styles/playground.ts` → 填写主题变量覆盖
**打勾**：`TODOLIST.md` → `- [x] styles/playground.ts`

---

## Phase 4: 入口文件

**操作**：编辑 `index.ts` → 确认 id/name/nameKey 正确
**打勾**：`TODOLIST.md` → `- [x] index.ts`

---

## Phase 5: 注册主题

### 5.1 添加到注册表

**操作**：编辑 `src/lib/themes/index.ts` → 导入并添加到 THEMES
**打勾**：`TODOLIST.md` → `- [x] 添加到注册表`

### 5.2 添加 i18n

**操作**：编辑 `src/lib/i18n/messages/themes.ts` → 添加翻译
**打勾**：`TODOLIST.md` → `- [x] 添加 i18n`

---

## Phase 6: 验证

### 6.1 技术验证

**操作**：运行 `pnpm validate:themes <your-theme-id>`
**检查**：
- [ ] Slots 自定义比例 ≥ 80%
- [ ] 没有空字符串或空数组的 slot
- [ ] 所有组件和 Token 完整
**打勾**：`TODOLIST.md` → `- [x] 技术验证通过`

```bash
# 示例
pnpm validate:themes cyberpunk

# 期望输出
✓ 主题 [cyberpunk]: 300/300 slots 已自定义 (100%) ✓ 全部完成
```

### 6.2 视觉验证

**操作**：运行 `pnpm dev` → 切换到你的主题
**检查**：
- [ ] 与默认主题截图对比，视觉差异明显
- [ ] 所有组件风格统一
- [ ] 所有内容清晰可读
**打勾**：`TODOLIST.md` → `- [x] 视觉验证通过`

---

## 底线原则

| 原则 | 要求 |
|------|------|
| **可读性** | 文字与背景对比度 ≥ 4.5:1，眯眼能看清 |
| **状态清晰** | hover/active/focus/disabled 有明显视觉变化 |
| **比例协调** | 内边距用 4px 倍数，圆角不超过高度 50% |
| **语义正确** | destructive 用红色系，success 用绿色系 |
| **一致性** | 同类组件设计语言相同 |

---

## Token 使用规范

| 场景 | 写法 |
|------|------|
| 颜色 | Tailwind 类名：`bg-primary`, `text-foreground` |
| 阴影 | var() 语法：`shadow-[0_0_20px_var(--primary)]` |
| 任意 CSS | [] 语法：`[clip-path:polygon(...)]` |

**记忆口诀：颜色用类名，阴影用 var()**

---

## 命令参考

| 命令 | 用途 |
|------|------|
| `pnpm create:theme <id> "<name>"` | 创建新主题 |
| `pnpm validate:themes` | 验证所有主题 |
| `pnpm validate:themes <theme-id>` | 验证指定主题 |
| `pnpm dev` | 本地开发服务器 |

### 验证脚本输出说明

```
pnpm validate:themes cyberpunk

输出示例：
━━━ Slots 自定义检查（空值检测） ━━━

✓ 主题 [xxx]: 300/300 slots 已自定义 (100%) ✓ 全部完成
⚠ 主题 [xxx]: 280/300 slots 已自定义 (93%) - 20 个空值
✗ 主题 [xxx]: 150/300 slots 已自定义 (50%) - 150 个空值

规则：
- 100%  → ✓ 通过（全部完成）
- ≥80%  → ⚠ 警告（通过，但有空值）
- <80%  → ✗ 失败（需要继续完成）

空值 = slot 为空字符串或空数组，表示未自定义
```
