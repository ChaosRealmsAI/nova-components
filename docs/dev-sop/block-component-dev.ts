/**
 * Nova Components - Block 组件开发规范
 *
 * 版本: v2.0
 * 更新时间: 2025-12-04
 *
 * 参考实现: src/components/nova-ui/blocks/tabs/
 *
 * Block vs Atom 差异:
 * - Block 依赖 Atoms（扁平依赖）
 * - Block 不支持用户可配特效
 * - Block 可内置结构动画
 *
 * ⚠️ 关键注意（导出系统）:
 * 1. 有 dependencies 的 Block 必须配置 customJsx/customImports（否则导出代码无法运行）
 * 2. 主题配置文件必须在 4 个地方创建（3 个生产主题 + theme-template）
 * 3. themeFile 和 themeConfigs 必须正确配置（否则导出的主题文件为空）
 * 4. theme-template 必须同步更新（否则新创建的主题会缺少组件）
 */

// ============================================================================
// Block 组件清单（共 28 个）
// ============================================================================

/**
 * 当前 blocks 组件列表:
 *
 * | 组件             | 说明                 | 依赖 atoms        |
 * |------------------|---------------------|-------------------|
 * | alert            | 警告框               | -                 |
 * | alert-dialog     | 警告对话框           | button            |
 * | breadcrumb       | 面包屑               | -                 |
 * | button-group     | 按钮组               | button            |
 * | calendar         | 日历                 | button            |
 * | carousel         | 走马灯               | button            |
 * | chart            | 图表                 | -                 |
 * | combobox         | 组合框               | button, input     |
 * | command          | 命令面板             | input             |
 * | context-menu     | 右键菜单             | -                 |
 * | data-table       | 数据表格             | table, button     |
 * | date-picker      | 日期选择器           | button, calendar  |
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
 * | sonner           | Toast 通知           | -                 |
 * | table            | 表格                 | -                 |
 * | tabs             | 标签页               | -                 |
 * | toggle-group     | 切换按钮组           | toggle            |
 *
 * 路径: src/components/nova-ui/blocks/{component}/
 */

// ============================================================================
// 开发步骤
// ============================================================================

/**
 * 步骤 0: 确认依赖的 Atoms
 * - 检查依赖的 Atoms 已完成且有 manifest
 * - 确保依赖组件在 registry/manifests.ts 已注册
 *
 * 步骤 1: 参考 shadcn/ui
 * - 本地: src/shadcn_ui/{component}.tsx
 *
 * 步骤 2: 创建 Block 组件
 * - 文件: src/components/nova-ui/blocks/{component}/index.tsx
 *   - 导出 {component}BaseConfig（re-export from config）
 *   - 导出 {Component}Demo 组件（画布展示用）
 * - 配置: src/components/nova-ui/blocks/{component}/{component}.config.ts
 * - 关键: 从 atmos/ 导入 Atoms
 *
 * 步骤 3: 创建主题配置文件 ⭐⭐⭐
 * - 文件: src/lib/themes/{theme}/components/{component}.ts
 * - 必须: 4 个地方都要创建:
 *   - cyberpunk-dark（生产主题）
 *   - ocean-blue（生产主题）
 *   - sunset-warm（生产主题）
 *   - theme-template（模板）⭐ 新主题创建依赖此模板
 * - 导出: {component}Config（注意命名：不是 BaseConfig，是 Config）
 * - 格式: 参考 themes/cyberpunk-dark/components/button.ts
 * - theme-template 格式: 参考 themes/theme-template/components/button.ts（含 TODO 注释）
 *
 * 步骤 4: 注册主题配置导出
 * - 文件: src/lib/themes/{theme}/components/index.ts
 * - 操作: 添加 export { {component}Config } from './{component}';
 * - 必须: 4 个地方的 components/index.ts 都要更新
 *
 * 步骤 5: 在主题入口注册组件 ⭐⭐⭐ 关键！
 * - 文件: src/lib/themes/{theme}/index.ts
 * - 操作:
 *   1. 在 import 中添加: {component}Config
 *   2. 在 components: {} 中添加: {Component}: {component}Config,
 * - 必须: 4 个地方的 index.ts 都要更新
 * - ⚠️ 漏掉此步骤会导致组件没有主题样式（只显示基础样式）
 * - ⚠️ 漏掉 theme-template 会导致新创建的主题缺少此组件
 *
 * 步骤 6: 创建 Manifest（单一数据源）⭐
 * - 文件: src/components/nova-ui/blocks/{component}/manifest.ts
 * - 包含所有配置:
 *   - 身份: type, name, category, label, labelKey
 *   - 导出: files, themeConfigs, themeFile, cssVars, dependencies
 *   - 画布: canvas.size, canvas.props, canvas.defaultProps
 *
 * ⚠️ 关键配置:
 *   themeFile: 'components/{component}.ts',  // 指向主题配置文件
 *   themeConfigs: [
 *     { componentName: '{Component}', configName: '{component}Config' },
 *   ],
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
 *     customImports: ['ButtonGroup', 'Button'],  // 所有需要导入的组件
 *   },
 *
 *   // 示例 2: ToggleGroup（依赖 toggle，需要 lucide-react 图标）
 *   dependencies: ['toggle'],
 *   exportOptions: {
 *     noChildren: true,
 *     customJsx: `<ToggleGroup type="multiple">
 *       <ToggleGroupItem value="bold"><Bold className="h-4 w-4" /></ToggleGroupItem>
 *       ...
 *     </ToggleGroup>`,
 *     customImports: ['ToggleGroup', 'ToggleGroupItem'],
 *     extraImports: `import { Bold, Italic, Underline } from 'lucide-react';`,
 *   },
 *
 *   // 示例 3: Pagination（自包含的复杂组件）
 *   dependencies: ['button'],
 *   exportOptions: {
 *     noChildren: true,
 *     customJsx: `<Pagination>
 *       <PaginationContent>
 *         <PaginationItem><PaginationPrevious /></PaginationItem>
 *         <PaginationItem><PaginationLink isActive>1</PaginationLink></PaginationItem>
 *         ...
 *       </PaginationContent>
 *     </Pagination>`,
 *     customImports: ['Pagination', 'PaginationContent', 'PaginationItem', 'PaginationLink', ...],
 *   },
 *
 * ⚠️ 关键规则:
 *   - 有 dependencies 的组件几乎都需要 customJsx（除非组件完全自包含）
 *   - customImports 必须包含 customJsx 中使用的所有组件
 *   - extraImports 用于第三方库（如 lucide-react 图标）
 *
 * 步骤 7: 注册 Manifest
 * - 文件: src/registry/manifests.ts
 * - 操作: import manifest, 添加到 MANIFESTS 对象
 *
 * 步骤 8: 注册组件映射（画布渲染用）
 * - 文件: src/registry/component-map.ts
 * - 添加: '{component}': { component: {Component}Demo, baseConfig: {component}BaseConfig }
 *
 * 步骤 9: 注册代码生成器（导出功能用）⭐⭐⭐ 关键！
 * - 文件: src/registry/components/blocks/{component}.ts
 * - 操作:
 *   1. 创建文件，参考 registry/components/blocks/tabs.ts
 *   2. 在 registry/components/blocks/index.ts 添加 export
 * - ⚠️ 漏掉此步骤会导致导出代码显示 "Unknown component type"
 *
 * 步骤 10: 添加到画布顺序
 * - 文件: src/stores/canvas-store.ts
 * - 在 COMPONENT_ORDER 数组中添加 '{component}'
 *
 * 步骤 11: 国际化（分目录）
 * - 组件类型名: src/lib/i18n/messages/components/_types.ts
 *   - 添加: componentType{Component}
 * - 通用属性名: src/lib/i18n/messages/components/_props.ts
 *   - 添加: prop{PropName}（如属性名是新的）
 * - 组件专属翻译: src/lib/i18n/messages/components/blocks/{component}.ts
 *   - 创建文件，添加组件专属文本
 *   - 在 blocks/index.ts 中导入并合并
 *
 * 步骤 12: 验证
 * - npx tsc --noEmit && npm run build
 * - 刷新画布页面，确认组件出现在抽屉中
 * - 测试导出功能，确认生成的代码包含:
 *   □ components/{component}.tsx（不是 "Unknown component type"）
 *   □ themes/{theme}/components/{component}.ts
 *   □ themes/{theme}/index.ts 中有 components: { {Component}: {component}Config }
 */

// ============================================================================
// Block 结构（伪代码）
// ============================================================================

/*
// {component}.config.ts - 基础配置（组件内部）
export const {component}BaseConfig = {
  slots: { content: '', header: '', footer: '' },
  variants: { variant: { default: {}, destructive: {} } },
  defaultVariants: { variant: 'default' }
} as const;

// themes/cyberpunk-dark/components/{component}.ts - 主题配置
export const {component}Config = {
  slots: {
    content: ['rounded-none', 'border-2 border-primary', ...],
  },
  variants: {
    variant: {
      default: { content: [...] },
    },
  },
};

// index.tsx
'use client';
import { Button } from '@/components/nova-ui/atmos/button';
import { {component}BaseConfig } from './{component}.config';

export const {component}Atoms = ['button'] as const;

export const {Component} = forwardRef<HTMLDivElement, {Component}Props>(
  ({ classNames, variant, ...props }, ref) => {
    const styles = {component}({ variant });
    return (...);
  }
);

export const {Component}Demo = forwardRef((props, ref) => {
  return <{Component} {...props} />;
});
*/

// ============================================================================
// 检查清单（新系统）
// ============================================================================

/**
 * □ 依赖确认
 *   □ 所有依赖 Atoms 已完成
 *   □ 依赖 Atoms 都有 manifest
 *
 * □ 组件源码 (index.tsx)
 *   □ 从 atmos/ 导入 Atoms（路径: @/components/nova-ui/atmos/xxx）
 *   □ 导出 {component}BaseConfig
 *   □ 导出 {Component}Demo 组件
 *
 * □ 主题配置 ⭐⭐⭐（4 个地方都要创建！）
 *   □ themes/cyberpunk-dark/components/{component}.ts 创建
 *   □ themes/ocean-blue/components/{component}.ts 创建
 *   □ themes/sunset-warm/components/{component}.ts 创建
 *   □ themes/theme-template/components/{component}.ts 创建 ⭐ 模板！
 *   □ 4 个地方的 components/index.ts 都更新导出
 *   □ 导出名为 {component}Config（不是 BaseConfig）
 *   □ ⚠️ 必须使用文字颜色 Token！（见下方说明）
 *
 * □ 主题入口注册 ⭐⭐⭐ 关键！
 *   □ themes/cyberpunk-dark/index.ts - import 并添加到 components
 *   □ themes/ocean-blue/index.ts - import 并添加到 components
 *   □ themes/sunset-warm/index.ts - import 并添加到 components
 *   □ themes/theme-template/index.ts - import 并添加到 components ⭐ 模板！
 *   □ ⚠️ 漏掉此步骤会导致组件没有主题样式
 *   □ ⚠️ 漏掉 theme-template 会导致新创建的主题缺少此组件
 *
 * □ Manifest（单一数据源）⭐⭐⭐
 *   □ manifest.ts 创建
 *   □ registry/manifests.ts 注册
 *   □ themeFile: 'components/{component}.ts' ← 必须配置！
 *   □ themeConfigs: [{ componentName, configName }] ← 必须配置！
 *
 * □ 导出配置（有 dependencies 必须配置！）⭐⭐⭐
 *   □ dependencies: ['atom1', 'atom2'] ← 列出所有依赖的 atoms
 *   □ 有依赖 → 必须配置 customJsx（否则导出代码错误）
 *   □ customImports: [...] ← 包含 customJsx 中所有使用的组件
 *   □ extraImports: '...' ← 第三方库导入（如 lucide-react）
 *
 * □ 组件映射（画布渲染用）
 *   □ registry/component-map.ts 添加映射
 *
 * □ 代码生成器（导出功能用）⭐⭐⭐ 关键！
 *   □ registry/components/blocks/{component}.ts 创建 Entry 文件
 *   □ registry/components/blocks/index.ts 添加 export
 *   □ registry/components/index.ts 添加 import 并注册到 COMPONENT_REGISTRY
 *   □ ⚠️ 漏掉此步骤会导致导出代码显示 "Unknown component type"
 *
 * □ 画布顺序
 *   □ stores/canvas-store.ts - COMPONENT_ORDER 添加
 *
 * □ 国际化（分目录结构）
 *   □ _types.ts: componentType{Component}
 *   □ _props.ts: prop{PropName}（如新属性名）
 *   □ blocks/{component}.ts: 组件专属翻译
 *   □ blocks/index.ts: 导入并合并
 *   □ 16 种语言翻译
 *
 * □ 验证 ⭐⭐⭐
 *   □ npx tsc --noEmit 无错误
 *   □ npm run build 无错误
 *   □ 画布抽屉显示组件
 *   □ 导出功能正常:
 *     □ components/{component}.tsx 生成（不是 "Unknown component type"）
 *     □ themes/{theme}/components/{component}.ts 生成（不为空！）
 *     □ themes/{theme}/index.ts 包含 components: { {Component}: {component}Config }
 *     □ My{Component}.tsx 中的 JSX 正确（不是默认的 <Component>Click me</Component>）
 *     □ 导出的代码可以直接运行（import 路径正确、依赖组件齐全）
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
 *     content: 'rounded-lg',        // ❌ 文字颜色会使用浏览器默认值
 *   },
 * };
 * ```
 *
 * ✅ 正确示例（包含文字颜色 Token）:
 * ```ts
 * export const myComponentConfig = {
 *   slots: {
 *     root: 'font-mono text-foreground',                    // ✅ 主文字颜色
 *     trigger: 'bg-surface-1 text-foreground',              // ✅ 主文字颜色
 *     content: 'rounded-lg text-foreground',                // ✅ 主文字颜色
 *     label: 'text-muted-foreground',                       // ✅ 弱化文字颜色
 *     shortcut: 'text-muted-foreground',                    // ✅ 弱化文字颜色
 *   },
 * };
 * ```
 *
 * 可用的文字颜色 Token（参考 tokens.ts）:
 * | Token 类            | CSS 变量              | 用途                    |
 * |---------------------|----------------------|------------------------|
 * | text-foreground     | --foreground         | 主要文字（默认）         |
 * | text-muted-foreground| --muted-foreground   | 次要/弱化文字           |
 * | text-primary        | --primary            | 强调色文字              |
 * | text-primary-foreground | --primary-foreground | 主色背景上的文字     |
 * | text-destructive    | --destructive        | 错误/危险文字           |
 *
 * 常见场景：
 * - 容器根节点: text-foreground
 * - 交互元素默认状态: text-foreground
 * - 标签/提示: text-muted-foreground
 * - hover/focus 状态: hover:text-primary / focus:text-primary
 * - 激活状态: data-[state=active]:text-primary-foreground
 */

export {};
