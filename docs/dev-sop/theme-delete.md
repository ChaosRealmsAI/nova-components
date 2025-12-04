# Nova Components 主题删除 SOP

> 版本: v1.0
> 更新时间: 2025-12-04

## 概述

本文档描述如何从 Nova Components 中删除一个主题。

---

## 删除步骤

```
┌─────────────────────────────────────────────────────────────────────────┐
│  删除主题完整流程                                                        │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  Step 1: 删除主题目录                                                    │
│          rm -rf src/lib/themes/{theme-id}/                              │
│          ↓                                                              │
│  Step 2: 从主题注册表删除（3 处）                                         │
│          src/lib/themes/index.ts                                        │
│          ↓                                                              │
│  Step 3: 删除 i18n 翻译                                                  │
│          src/lib/i18n/messages/themes.ts                                │
│          ↓                                                              │
│  Step 4: 验证                                                           │
│          pnpm validate:themes && pnpm dev                               │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Step 1: 删除主题目录

```bash
rm -rf src/lib/themes/{theme-id}/
```

**示例：**
```bash
rm -rf src/lib/themes/monochrome-ink/
```

---

## Step 2: 从主题注册表删除

**文件**: `src/lib/themes/index.ts`

需要删除 3 处：

### 2.1 删除 import 语句

```typescript
// 删除这一行
import { monochromeInkTheme } from './monochrome-ink';
```

### 2.2 从 THEMES 对象删除

```typescript
export const THEMES: Record<string, ThemeDefinition> = {
  'shadcn-default': shadcnDefaultTheme,
  'cyberpunk-dark': cyberpunkDarkTheme,
  // 删除这一行
  'monochrome-ink': monochromeInkTheme,
};
```

### 2.3 删除 export 语句

```typescript
// 删除这一行
export { monochromeInkTheme } from './monochrome-ink';
```

---

## Step 3: 删除 i18n 翻译

**文件**: `src/lib/i18n/messages/themes.ts`

删除整个主题名称翻译条目：

```typescript
// 删除整个对象
themeNameMonochromeInk: {
  "en": "Monochrome Ink",
  "zh-Hans": "水墨",
  "zh-Hant": "水墨",
  "zh": "水墨",
  "ja": "モノクロインク",
  "ko": "모노크롬 잉크",
  // ... 其他语言
},
```

---

## Step 4: 验证

```bash
# 验证主题配置
pnpm validate:themes

# 启动开发服务器确认
pnpm dev
```

**验证项：**
- [ ] `pnpm validate:themes` 无错误
- [ ] 主题选择器中不再显示已删除的主题
- [ ] 无 TypeScript 编译错误

---

## 快速参考

| 步骤 | 文件/命令 | 操作 |
|------|-----------|------|
| 1 | `src/lib/themes/{theme-id}/` | 删除目录 |
| 2 | `src/lib/themes/index.ts` | 删除 import + THEMES 条目 + export |
| 3 | `src/lib/i18n/messages/themes.ts` | 删除 themeNameXxx 条目 |
| 4 | `pnpm validate:themes` | 验证 |

---

## 注意事项

1. **不要删除 theme-template**
   - `theme-template` 是创建新主题的模板，不应删除

2. **确认无依赖**
   - 删除前确认没有其他代码硬编码引用该主题 ID

3. **Git 提交**
   - 建议删除后立即提交，避免文件状态混乱
