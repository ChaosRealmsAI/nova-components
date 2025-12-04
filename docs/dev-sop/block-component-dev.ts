/**
 * Nova Components - Block 组件开发规范
 *
 * 版本: v3.0
 * 更新时间: 2025-12-04
 *
 * 参考实现: src/components/nova-ui/blocks/tabs/
 *
 * Block vs Atom 差异:
 * - Block 依赖 Atoms（扁平依赖）
 * - Block 不支持用户可配特效
 * - Block 可内置结构动画
 *
 * 架构说明:
 * - Block 组件采用与 Atom 相同的三层架构
 * - 详见: docs/dev-sop/component-architecture-pattern.ts
 *
 * ⚠️ 关键注意（导出系统）:
 * 1. 有 dependencies 的 Block 必须配置 customJsx/customImports（否则导出代码无法运行）
 * 2. 主题配置文件必须在所有主题中创建（包括 theme-template）
 * 3. themeFile 和 themeConfigs 必须正确配置（否则导出的主题文件为空）
 * 4. theme-template 必须同步更新（否则新创建的主题会缺少组件）
 */

// ============================================================================
// Block 组件清单（共 27 个）
// ============================================================================

/**
 * 当前 blocks 组件列表:
 *
 * | 组件             | 说明                 | 依赖 atoms        |
 * |------------------|---------------------|-------------------|
 * | accordion        | 手风琴               | -                 |
 * | alert            | 警告框               | -                 |
 * | alert-dialog     | 警告对话框           | button            |
 * | breadcrumb       | 面包屑               | -                 |
 * | button-group     | 按钮组               | button            |
 * | calendar         | 日历                 | button            |
 * | carousel         | 走马灯               | button            |
 * | combobox         | 组合框               | button, input     |
 * | command          | 命令面板             | input             |
 * | context-menu     | 右键菜单             | -                 |
 * | data-table       | 数据表格             | table, button     |
 * | date-picker      | 日期选择器           | button, calendar  |
 * | dialog           | 对话框               | button            |
 * | drawer           | 抽屉                 | button            |
 * | dropdown-menu    | 下拉菜单             | -                 |
 * | form             | 表单                 | label, input, button |
 * | hover-card       | 悬浮卡片             | -                 |
 * | input-group      | 输入组               | input, button     |
 * | input-otp        | OTP 输入             | input             |
 * | menubar          | 菜单栏               | -                 |
 * | navigation-menu  | 导航菜单             | -                 |
 * | pagination       | 分页                 | button            |
 * | resizable        | 可调整大小           | -                 |
 * | select           | 选择框               | -                 |
 * | sheet            | 侧边栏               | button            |
 * | sidebar          | 侧边导航             | -                 |
 * | sonner           | Toast 通知           | -                 |
 * | tabs             | 标签页               | -                 |
 * | toggle-group     | 切换按钮组           | toggle            |
 *
 * 路径: src/components/nova-ui/blocks/{component}/
 */

// ============================================================================
// 核心架构：三层样式
// ============================================================================

/**
 * ⭐ 必读: docs/dev-sop/component-architecture-pattern.ts
 *
 * Block 组件采用与 Atom 相同的三层架构:
 * - L1（功能层）：静态 tv 定义，组件外部，只保留功能必需样式
 * - L2（主题层）：useTheme 获取，完全自定义视觉样式
 * - L3（实例层）：用户 className/classNames
 * - 合并方式：twMerge(L1, L2, L3)
 */

// ============================================================================
// 开发步骤
// ============================================================================

/**
 * 步骤 0: 确认依赖的 Atoms
 * - 检查依赖的 Atoms 已完成且有 manifest
 * - 确保依赖组件在 registry/manifests.ts 已注册
 * - 阅读架构文档: docs/dev-sop/component-architecture-pattern.ts
 *
 * 步骤 1: 参考 shadcn/ui
 * - 本地: src/shadcn_ui/{component}.tsx
 * - 文档: https://ui.shadcn.com/docs/components/{component}
 *
 * 步骤 2: 创建 Block 组件
 * - 文件: src/components/nova-ui/blocks/{component}/index.tsx
 * - 遵循三层架构:
 *   - L1: 静态 tv 定义在组件外部
 *   - L2: useTheme + useMemo 获取主题样式
 *   - L3: 支持 className/classNames 覆盖
 *   - 合并: twMerge(L1, L2, L3)
 * - 导出: {Component}, {Component}Demo, {Component}Props, {Component}ClassNames
 * - 关键: 从 atmos/ 导入依赖的 Atoms
 *
 * 步骤 3: 创建主题配置文件 ⭐⭐⭐
 * - 文件: src/lib/themes/{theme}/components/{component}.ts
 * - 必须: 所有主题都要创建:
 *   - shadcn-default（基础主题）
 *   - vintage-nostalgia（复古怀旧）
 *   - ice-glass（冰川玻璃）
 *   - midnight-lilac（午夜丁香）
 *   - obsidian-shard（黑曜碎片）
 *   - cyberpunk（赛博朋克）
 *   - theme-template（模板）⭐ 新主题创建依赖此模板
 * - 导出: {component}Config
 * - 内容: slots（视觉样式）+ variants（变体）
 *
 * 步骤 4: 注册主题配置导出
 * - 文件: src/lib/themes/{theme}/components/index.ts
 * - 操作: 添加 export { {component}Config } from './{component}';
 * - 必须: 所有主题的 components/index.ts 都要更新
 *
 * 步骤 5: 在主题入口注册组件 ⭐⭐⭐ 关键！
 * - 文件: src/lib/themes/{theme}/index.ts
 * - 操作:
 *   1. 在 import 中添加: {component}Config
 *   2. 在 components: {} 中添加: {Component}: {component}Config,
 * - 必须: 所有主题的 index.ts 都要更新
 * - ⚠️ 漏掉此步骤会导致组件没有主题样式
 *
 * 步骤 6: 创建 Manifest（单一数据源）⭐
 * - 文件: src/components/nova-ui/blocks/{component}/manifest.ts
 * - 包含:
 *   - 身份: type, name, category, label, labelKey
 *   - 导出: files, themeConfigs, themeFile, cssVars, dependencies
 *   - 画布: canvas.size, canvas.props, canvas.defaultProps
 *
 * ⚠️ 有依赖的组件必须配置 exportOptions（否则导出代码无法运行）:
 *
 *   // 示例 1: ButtonGroup（依赖 button）
 *   dependencies: ['button'],
 *   exportOptions: {
 *     noChildren: true,
 *     customJsx: `<ButtonGroup>
 *       <Button>Left</Button>
 *       <Button>Center</Button>
 *       <Button>Right</Button>
 *     </ButtonGroup>`,
 *     customImports: ['ButtonGroup', 'Button'],
 *   },
 *
 *   // 示例 2: ToggleGroup（需要 lucide-react 图标）
 *   dependencies: ['toggle'],
 *   exportOptions: {
 *     noChildren: true,
 *     customJsx: `<ToggleGroup type="multiple">
 *       <ToggleGroupItem value="bold"><Bold className="h-4 w-4" /></ToggleGroupItem>
 *     </ToggleGroup>`,
 *     customImports: ['ToggleGroup', 'ToggleGroupItem'],
 *     extraImports: `import { Bold, Italic, Underline } from 'lucide-react';`,
 *   },
 *
 * 步骤 7: 注册 Manifest
 * - 文件: src/registry/manifests.ts
 * - 操作: import manifest, 添加到 MANIFESTS 对象
 *
 * 步骤 8: 注册组件映射（画布渲染用）
 * - 文件: src/registry/component-map.tsx
 * - 添加: '{component}': { component: {Component}Demo, baseConfig: null }
 * - 注意: baseConfig 设为 null（三层架构不再需要）
 *
 * 步骤 9: 注册代码生成器（导出功能用）⭐⭐⭐
 * - 文件: src/registry/components/blocks/{component}.tsx
 * - 操作:
 *   1. 创建文件，参考 registry/components/blocks/tabs.tsx
 *   2. 在 registry/components/blocks/index.ts 添加 export
 * - ⚠️ 漏掉此步骤会导致导出代码显示 "Unknown component type"
 *
 * 步骤 10: 添加到画布顺序
 * - 文件: src/stores/canvas-store.ts
 * - 在 COMPONENT_ORDER 数组中添加 '{component}'
 *
 * 步骤 11: 国际化（分目录）
 * - 组件类型名: src/lib/i18n/messages/components/_types.ts
 * - 通用属性名: src/lib/i18n/messages/components/_props.ts
 * - 组件专属翻译: src/lib/i18n/messages/components/blocks/{component}.ts
 *
 * 步骤 12: 验证
 * - npx tsc --noEmit && npm run build
 * - 画布渲染测试
 * - 主题切换测试
 * - 导出功能测试（含依赖组件）
 */

// ============================================================================
// Block 结构（三层架构）
// ============================================================================

/*
// index.tsx - Block 三层架构模板

'use client';

import * as React from 'react';
import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes';

// 导入依赖的 Atoms
import { Button } from '@/components/nova-ui/atmos/button';

// ============================================================================
// Utils
// ============================================================================

const toClassString = (value: string | string[] | undefined): string => {
  if (!value) return '';
  if (Array.isArray(value)) return value.join(' ');
  return value;
};

// ============================================================================
// L1: 功能层（静态，组件外部定义）
// ============================================================================

const blockBase = tv({
  slots: {
    root: 'relative',
    content: 'flex flex-col',
    header: 'sticky top-0',
    footer: 'flex items-center',
  },
});

// ============================================================================
// Theme Hook
// ============================================================================

const useBlockTheme = () => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Block;

  return React.useMemo(() => ({
    root: toClassString(themeConfig?.slots?.root),
    content: toClassString(themeConfig?.slots?.content),
    header: toClassString(themeConfig?.slots?.header),
    footer: toClassString(themeConfig?.slots?.footer),
  }), [themeConfig]);
};

// ============================================================================
// Component
// ============================================================================

export interface BlockClassNames {
  root?: string;
  content?: string;
  header?: string;
  footer?: string;
}

export interface BlockProps extends React.HTMLAttributes<HTMLDivElement> {
  classNames?: BlockClassNames;
}

const Block = React.forwardRef<HTMLDivElement, BlockProps>(
  ({ className, classNames, children, ...props }, ref) => {
    const base = blockBase();
    const themeStyles = useBlockTheme();

    const rootClass = twMerge(
      base.root(),
      themeStyles.root,
      classNames?.root,
      className
    );

    return (
      <div ref={ref} className={rootClass} {...props}>
        {children}
      </div>
    );
  }
);
Block.displayName = 'Block';

// Demo 组件（画布展示用）
const BlockDemo = React.forwardRef<HTMLDivElement, BlockProps>(
  (props, ref) => {
    return (
      <Block ref={ref} {...props}>
        <Button>Action</Button>
      </Block>
    );
  }
);
BlockDemo.displayName = 'BlockDemo';

export { Block, BlockDemo };
*/

// ============================================================================
// 检查清单
// ============================================================================

/**
 * □ 依赖确认
 *   □ 所有依赖 Atoms 已完成（三层架构）
 *   □ 依赖 Atoms 都有 manifest
 *
 * □ 组件源码 (index.tsx)
 *   □ 从 atmos/ 导入 Atoms
 *   □ L1 静态 tv 在组件外部定义
 *   □ useTheme + useMemo 获取 L2 主题样式
 *   □ twMerge(L1, L2, L3) 合并样式
 *   □ 导出 {Component}, {Component}Demo, {Component}Props
 *   □ 不依赖项目内部文件
 *
 * □ 主题配置 ⭐⭐⭐（所有主题都要创建！）
 *   □ themes/shadcn-default/components/{component}.ts
 *   □ themes/vintage-nostalgia/components/{component}.ts
 *   □ themes/ice-glass/components/{component}.ts
 *   □ themes/midnight-lilac/components/{component}.ts
 *   □ themes/obsidian-shard/components/{component}.ts
 *   □ themes/cyberpunk/components/{component}.ts
 *   □ themes/theme-template/components/{component}.ts ⭐ 模板
 *   □ 所有主题的 components/index.ts 都更新导出
 *   □ 必须包含文字颜色 Token（text-foreground 等）
 *
 * □ 主题入口注册 ⭐⭐⭐
 *   □ 所有主题的 index.ts 都 import 并添加到 components
 *   □ 包括 theme-template
 *
 * □ Manifest（单一数据源）
 *   □ manifest.ts 创建
 *   □ registry/manifests.ts 注册
 *   □ themeFile 和 themeConfigs 正确配置
 *
 * □ 导出配置（有 dependencies 必须配置！）⭐⭐⭐
 *   □ dependencies: ['atom1', 'atom2']
 *   □ 有依赖 → 必须配置 customJsx
 *   □ customImports 包含所有使用的组件
 *   □ extraImports 用于第三方库导入
 *
 * □ 组件映射
 *   □ registry/component-map.tsx 添加映射
 *   □ baseConfig: null
 *
 * □ 代码生成器
 *   □ registry/components/blocks/{component}.tsx 创建
 *   □ registry/components/blocks/index.ts 导出
 *
 * □ 画布顺序
 *   □ stores/canvas-store.ts COMPONENT_ORDER 添加
 *
 * □ 国际化
 *   □ _types.ts, _props.ts
 *   □ blocks/{component}.ts
 *
 * □ 验证
 *   □ npx tsc --noEmit
 *   □ npm run build
 *   □ 画布渲染正常
 *   □ 主题切换正常
 *   □ 导出功能正常（包含依赖组件）
 */

// ============================================================================
// ⚠️ 主题配置文字颜色 Token 规范
// ============================================================================

/**
 * 主题配置中必须显式指定文字颜色 Token，不能依赖默认继承！
 *
 * ❌ 错误示例（缺少文字颜色）:
 * ```ts
 * export const myComponentConfig = {
 *   slots: {
 *     root: 'font-mono',           // ❌ 没有指定文字颜色
 *     trigger: 'bg-surface-1',      // ❌ 只有背景色，没有文字颜色
 *   },
 * };
 * ```
 *
 * ✅ 正确示例（包含文字颜色 Token）:
 * ```ts
 * export const myComponentConfig = {
 *   slots: {
 *     root: 'font-mono text-foreground',
 *     trigger: 'bg-surface-1 text-foreground',
 *     label: 'text-muted-foreground',
 *   },
 * };
 * ```
 *
 * 可用的文字颜色 Token:
 * | Token 类                   | 用途                    |
 * |---------------------------|------------------------|
 * | text-foreground           | 主要文字（默认）         |
 * | text-muted-foreground     | 次要/弱化文字           |
 * | text-primary              | 强调色文字              |
 * | text-primary-foreground   | 主色背景上的文字         |
 * | text-destructive          | 错误/危险文字           |
 */

export {};
