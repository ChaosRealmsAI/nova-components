#!/usr/bin/env tsx
/**
 * 新主题创建脚本
 *
 * 功能：
 * 1. 复制 theme-template 作为模板
 * 2. 自动生成 TODOLIST.md（基于实际组件列表）
 * 3. 生成 DESIGN.md（设计规范文档）
 * 4. 更新必要的标识符
 *
 * 使用: pnpm create:theme <theme-id> <ThemeName>
 * 示例: pnpm create:theme forest-green "Forest Green"
 */

import * as fs from 'fs';
import * as path from 'path';

// ============================================================================
// 配置
// ============================================================================

const TEMPLATE_THEME = 'theme-template';
const THEMES_DIR = path.join(__dirname, '../src/lib/themes');

// ============================================================================
// 工具函数
// ============================================================================

function toPascalCase(str: string): string {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

function toCamelCase(str: string): string {
  const pascal = toPascalCase(str);
  return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}

// ============================================================================
// 获取组件列表（动态）
// ============================================================================

function getComponentFiles(themeDir: string): string[] {
  const componentsDir = path.join(themeDir, 'components');
  if (!fs.existsSync(componentsDir)) return [];

  return fs.readdirSync(componentsDir)
    .filter(f => f.endsWith('.ts') && f !== 'index.ts')
    .map(f => f.replace('.ts', ''))
    .sort();
}

// ============================================================================
// 生成 TODOLIST（包含 Phase 0 设计规范）
// ============================================================================

function generateTodolist(themeId: string, themeName: string, components: string[]): string {
  const now = new Date().toISOString().split('T')[0];

  return `# ${themeName} 主题开发 Todolist

> 创建时间: ${now}
> 主题 ID: ${themeId}
> 模板来源: ${TEMPLATE_THEME}

## 状态说明
- [ ] 待开始
- [~] 进行中
- [x] 已完成

---

## ⚠️ 重要提醒

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│   ⛔ Phase 0 必须首先完成！                                                  │
│                                                                             │
│   在写任何代码之前，必须先完成 DESIGN.md 中的设计规范。                        │
│   这不是"换颜色"的工作，而是"创造独特视觉体验"的设计工作。                      │
│                                                                             │
│   每个组件都要问自己：                                                        │
│   "这个组件体现了 ${themeName} 的设计语言吗？"                                │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

---

## Phase 0: 设计规范 ⭐⭐⭐ 最重要！

> **必须首先完成！** 这决定了整个主题的质量。

- [ ] \`DESIGN.md\` - 填写设计故事 (灵感来源、情感表达)
- [ ] \`DESIGN.md\` - 定义形状语言 (圆角/切角风格)
- [ ] \`DESIGN.md\` - 定义动效语言 (hover/active 效果)
- [ ] \`DESIGN.md\` - 定义字体语言 (字族、大小写、字距)
- [ ] \`DESIGN.md\` - 定义层次语言 (阴影、边框风格)
- [ ] \`DESIGN.md\` - 填写色彩设计 (主色调、背景层级)
- [ ] \`DESIGN.md\` - 填写组件风格一览表

**Phase 0 完成标准**：
- [ ] 能用一句话描述主题的设计感（如"科技切角风"、"温暖圆润风"）
- [ ] 设计语言各维度都有明确选择，不是空白或"TODO"
- [ ] 色彩方案完整，不只是换了主色

---

## Phase 1: Token 定义

> 根据 DESIGN.md 中的色彩设计来填写

- [ ] \`tokens.ts\` - 调色板定义 (palette)
- [ ] \`tokens.ts\` - 品牌色 (primary/secondary/accent)
- [ ] \`tokens.ts\` - 语义色 (success/warning/error/info)
- [ ] \`tokens.ts\` - 背景层级 (background/surface)
- [ ] \`tokens.ts\` - 文字颜色 (foreground/muted)
- [ ] \`tokens.ts\` - 结构 (border/ring/radius)
- [ ] \`tokens.ts\` - 字体 (font-sans/mono)
- [ ] \`tokens.ts\` - 阴影 (shadow-sm/md/lg) ← 根据设计语言定义
- [ ] \`tokens.ts\` - 特效 (effect-*)
- [ ] \`tokens.ts\` - meta 信息 (isDark/codeTheme)

---

## Phase 2: 组件样式 (${components.length} 个)

> ⚠️ **每个组件必须体现 DESIGN.md 中定义的设计语言！**
>
> 检查项（每个组件）：
> - 形状：是否使用了定义的圆角/切角？
> - 动效：hover/active 是否符合设计语言？
> - 字体：是否使用了定义的字体风格？
> - 阴影/边框：是否符合设计语言？

${components.map(comp => `- [ ] \`components/${comp}.ts\``).join('\n')}

---

## Phase 3: Playground 样式

- [ ] \`styles/playground.ts\` - 主题变量覆盖 (--pg-*)
- [ ] \`styles/playground.ts\` - 面板样式
- [ ] \`styles/playground.ts\` - 滚动条样式
- [ ] \`styles/playground.ts\` - 滑块样式
- [ ] \`styles/playground.ts\` - DevMode 按钮样式
- [ ] \`styles/playground.ts\` - 主题特定覆盖

---

## Phase 4: 入口文件

- [ ] \`index.ts\` - 更新 id/name/nameKey
- [ ] \`index.ts\` - 确认所有组件导入
- [ ] \`index.ts\` - 确认 canvasSizes 配置

---

## Phase 5: 注册集成

- [ ] \`src/lib/themes/index.ts\` - 导入主题
- [ ] \`src/lib/themes/index.ts\` - 添加到 THEMES 对象
- [ ] \`src/lib/themes/index.ts\` - 添加 export
- [ ] \`src/lib/i18n/messages/themes.ts\` - 添加多语言翻译

---

## Phase 6: 验证

### 6.1 技术验证
- [ ] 运行 \`pnpm validate:themes\` 通过
- [ ] 本地启动 \`pnpm dev\`
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
`;
}

// ============================================================================
// 更新 DESIGN.md 中的占位符
// ============================================================================

function updateDesignMd(filePath: string, themeId: string, themeName: string): void {
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf-8');
  const now = new Date().toISOString().split('T')[0];

  // 替换占位符
  content = content.replace(/\{Theme Name\}/g, themeName);
  content = content.replace(/\{theme-id\}/g, themeId);
  content = content.replace(/\{date\}/g, now);
  content = content.replace(/\{设计故事\}/g, themeName);

  fs.writeFileSync(filePath, content, 'utf-8');
}

// ============================================================================
// 复制目录
// ============================================================================

function copyDir(src: string, dest: string): void {
  fs.mkdirSync(dest, { recursive: true });

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// ============================================================================
// 更新文件内容
// ============================================================================

function updateFileContent(filePath: string, themeId: string, themeName: string): void {
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf-8');

  const templatePascal = toPascalCase(TEMPLATE_THEME);
  const templateCamel = toCamelCase(TEMPLATE_THEME);
  const newPascal = toPascalCase(themeId);
  const newCamel = toCamelCase(themeId);

  // 替换各种命名格式
  content = content.replace(new RegExp(templatePascal, 'g'), newPascal);
  content = content.replace(new RegExp(templateCamel, 'g'), newCamel);
  content = content.replace(new RegExp(TEMPLATE_THEME, 'g'), themeId);

  // 更新主题名称
  content = content.replace(/name: '[^']+'/g, `name: '${themeName}'`);

  fs.writeFileSync(filePath, content, 'utf-8');
}

// ============================================================================
// 主函数
// ============================================================================

async function main() {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.log(`
用法: pnpm create:theme <theme-id> "<Theme Name>"

示例:
  pnpm create:theme forest-green "Forest Green"
  pnpm create:theme sakura-bloom "Sakura Bloom"

参数:
  theme-id    主题ID，使用 kebab-case (如: forest-green)
  Theme Name  主题显示名称 (如: "Forest Green")
`);
    process.exit(1);
  }

  const [themeId, themeName] = args;

  // 验证 theme-id 格式
  if (!/^[a-z][a-z0-9-]*$/.test(themeId)) {
    console.error('错误: theme-id 必须是 kebab-case 格式 (如: forest-green)');
    process.exit(1);
  }

  const templateDir = path.join(THEMES_DIR, TEMPLATE_THEME);
  const newThemeDir = path.join(THEMES_DIR, themeId);

  // 检查模板是否存在
  if (!fs.existsSync(templateDir)) {
    console.error(`错误: 模板主题 ${TEMPLATE_THEME} 不存在`);
    process.exit(1);
  }

  // 检查新主题是否已存在
  if (fs.existsSync(newThemeDir)) {
    console.error(`错误: 主题 ${themeId} 已存在`);
    process.exit(1);
  }

  console.log(`
┌─────────────────────────────────────────────────────────────────┐
│              Nova Components 主题创建工具                        │
│                                                                 │
│   ⭐ 创造独特视觉体验，而不是简单换色                              │
└─────────────────────────────────────────────────────────────────┘

模板: ${TEMPLATE_THEME}
新主题: ${themeId} (${themeName})
`);

  // Step 1: 复制目录
  console.log('📁 复制模板目录...');
  copyDir(templateDir, newThemeDir);

  // Step 2: 获取组件列表
  const components = getComponentFiles(newThemeDir);
  console.log(`📦 检测到 ${components.length} 个组件配置`);

  // Step 3: 生成 TODOLIST
  console.log('📝 生成 TODOLIST.md...');
  const todolist = generateTodolist(themeId, themeName, components);
  fs.writeFileSync(path.join(newThemeDir, 'TODOLIST.md'), todolist, 'utf-8');

  // Step 4: 更新 DESIGN.md
  console.log('🎨 更新 DESIGN.md...');
  updateDesignMd(path.join(newThemeDir, 'DESIGN.md'), themeId, themeName);

  // Step 5: 更新其他文件内容
  console.log('🔄 更新标识符...');
  updateFileContent(path.join(newThemeDir, 'index.ts'), themeId, themeName);
  updateFileContent(path.join(newThemeDir, 'tokens.ts'), themeId, themeName);
  updateFileContent(path.join(newThemeDir, 'styles', 'playground.ts'), themeId, themeName);

  // 删除模板说明文件（如果存在）
  const templateSpec = path.join(newThemeDir, 'TEMPLATE-SPEC.md');
  if (fs.existsSync(templateSpec)) {
    fs.unlinkSync(templateSpec);
  }

  // 完成
  console.log(`
✅ 主题创建完成！

目录结构:
  src/lib/themes/${themeId}/
  ├── DESIGN.md      ← ⭐ 第一步：填写设计规范
  ├── TODOLIST.md    ← 任务清单
  ├── tokens.ts
  ├── index.ts
  ├── components/    ← ${components.length} 个组件
  └── styles/

┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   ⚠️ 重要：开发顺序                                              │
│                                                                 │
│   1. 首先打开 DESIGN.md，完成设计规范（Phase 0）                  │
│      - 定义设计故事、设计语言、色彩方案                           │
│      - 这一步决定了整个主题的质量！                               │
│                                                                 │
│   2. 然后按 TODOLIST.md 完成 Phase 1-6                           │
│                                                                 │
│   3. 最后运行 pnpm validate:themes 验证                          │
│                                                                 │
│   ⛔ 禁止跳过 Phase 0 直接写代码！                                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
`);
}

main().catch((err) => {
  console.error('创建失败:', err);
  process.exit(1);
});
