# Atmos 组件重构任务池

## 概述

将所有 atmos 组件重构为新的三层架构模式。

## 必读文档

每次开始任务前，必须先阅读以下 SOP：

```
docs/dev-sop/component-architecture-pattern.ts
```

核心要点：
- L1（功能层）：静态 tv 定义，组件外部，只保留功能必需样式
- L2（主题层）：useTheme 获取，完全自定义视觉样式
- L3（实例层）：用户 className/classNames
- 合并方式：twMerge(L1, L2, L3)
- 组件纯净化：不依赖项目内部文件

## 任务状态

| 状态 | 含义 |
|------|------|
| ✅ | 已完成 |
| 🔄 | 进行中 |
| ⏳ | 待开始 |

## 任务列表

### 已完成

| # | 组件 | 状态 | 备注 |
|---|------|------|------|
| 1 | scroll-area | ✅ | 参考实现，含 i18n Demo |
| 2 | card | ✅ | 含子组件 (Header/Title/Description/Content/Footer) |
| 3 | badge | ✅ | 简单组件参考实现 |
| 4 | button | ✅ | variants 多 |
| 5 | input | ✅ | |
| 6 | textarea | ✅ | |
| 7 | label | ✅ | |
| 8 | checkbox | ✅ | |
| 9 | switch | ✅ | 含 thumb |
| 10 | slider | ✅ | 含 track/range/thumb |
| 11 | toggle | ✅ | |
| 12 | radio-group | ✅ | 含 item/indicator |
| 13 | progress | ✅ | 含 indicator |
| 14 | skeleton | ✅ | |
| 15 | spinner | ✅ | |
| 16 | avatar | ✅ | 含 fallback |
| 17 | kbd | ✅ | |
| 18 | separator | ✅ | |
| 19 | aspect-ratio | ✅ | |
| 22 | collapsible | ✅ | 含 trigger/content |

### 待重构

| # | 组件 | 状态 | 复杂度 | 备注 |
|---|------|------|--------|------|
| 20 | popover | 🔄 | 中 | 弹出类，需 Demo |
| 21 | tooltip | 🔄 | 中 | 弹出类，需 Demo |

## 单个任务执行步骤

### 认领任务

```
1. 在本文档将任务状态从 ⏳ 改为 🔄
2. 更新进度追踪中的"进行中"计数
```

### 开始前

```
1. 阅读 SOP: docs/dev-sop/component-architecture-pattern.ts
2. 查看参考实现: src/components/nova-ui/atmos/scroll-area/
3. 查看当前组件代码，理解结构
```

### 重构步骤

```
1. 重写组件 index.tsx
   - 移除 xxxBaseConfig 导出
   - 静态 tv 定义在组件外部（L1 功能层）
   - 使用 useTheme 获取主题样式（L2）
   - 使用 twMerge 合并 L1 + L2 + L3
   - 移除对项目内部文件的依赖

2. 删除 xxx.config.ts（如存在）

3. 更新 manifest.ts
   - 移除 config 文件引用
   - 确保 themeFile 和 themeConfigs 正确

4. 更新 registry/component-map.tsx
   - 更新导入
   - 设置 baseConfig: null
   - 如需要，定义本地 Demo 组件

5. 更新 registry/components/atoms/xxx.ts
   - 改为 .tsx（如有 JSX）
   - 更新导入和导出

6. 填充 theme-template 样式
   - 确保 slots 包含完整视觉样式
   - 确保 variants 正确定义

7. 验证
   - npx tsc --noEmit
   - npm run build
   - 画布渲染测试
   - 主题切换测试
```

### 完成后

```
1. 在本文档将任务状态从 🔄 改为 ✅
2. 将任务从"待重构"移到"已完成"表格
3. 更新"待删除的 config 文件清单"状态
4. 更新进度追踪计数
5. 提交代码
```

## 需要删除的文件

重构后，以下文件不再需要：

```
src/components/nova-ui/atmos/{component}/{component}.config.ts
```

**原因**：
- 旧架构：baseConfig 混合了功能样式和视觉样式
- 新架构：L1（功能层）在组件内静态定义，L2（视觉层）在主题文件定义
- config.ts 的内容应拆分到这两个地方

**待删除的 config 文件清单**：

| 组件 | 文件 | 状态 |
|------|------|------|
| button | button.config.ts | ✅ 已删除 |
| badge | badge.config.ts | ✅ 已删除 |
| input | input.config.ts | ✅ 已删除 |
| textarea | textarea.config.ts | ✅ |
| label | label.config.ts | ✅ |
| checkbox | checkbox.config.ts | ✅ 已删除 |
| switch | switch.config.ts | ✅ 已删除 |
| slider | slider.config.ts | ✅ 已删除 |
| toggle | toggle.config.ts | ✅ 已删除 |
| radio-group | radio-group.config.ts | ✅ 已删除 |
| progress | progress.config.ts | ✅ 已删除 |
| skeleton | skeleton.config.ts | ✅ 已删除 |
| spinner | spinner.config.ts | ✅ 已删除 |
| avatar | avatar.config.ts | ✅ |
| kbd | kbd.config.ts | ✅ 已删除 |
| separator | separator.config.ts | ✅ 已删除 |
| aspect-ratio | aspect-ratio.config.ts | ✅ |
| popover | popover.config.ts | ⏳ |
| tooltip | tooltip.config.ts | ⏳ |
| collapsible | collapsible.config.ts | ✅ 已删除 |

## 注意事项

### L1 功能层常见样式

| 功能 | 样式 |
|------|------|
| 弹性布局 | flex, flex-col, items-center |
| 网格布局 | grid, grid-rows-[...] |
| 定位 | relative, absolute, sticky |
| 溢出 | overflow-hidden |
| 交互 | cursor-pointer, select-none |
| 可访问性 | sr-only |

### L2 视觉层常见样式

| 类别 | 样式 |
|------|------|
| 背景 | bg-xxx, bg-gradient-xxx |
| 边框 | border, rounded-xxx |
| 阴影 | shadow-xxx |
| 颜色 | text-xxx |
| 字体 | font-xxx, text-sm/lg |
| 间距 | p-x, m-x, gap-x |
| 动效 | transition-xxx, hover:xxx |

### 常见错误

```
❌ classNames?.base ?? twMerge(...)
   → 如果传了 classNames.base，功能层会丢失

✅ twMerge(L1, L2, classNames?.base, className)
   → L1 始终保留
```

```
❌ 在组件内部定义 tv
   → 每次渲染都重建

✅ 在组件外部定义静态 tv
```

```
❌ 组件依赖 manifest 或 config 文件
   → 不纯净

✅ 组件只依赖外部库 + useTheme
```

## 进度追踪

- 总数: 22
- 已完成: 20
- 进行中: 2
- 待开始: 0
- 完成率: 91%