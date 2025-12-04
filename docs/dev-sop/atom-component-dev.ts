/**
 * Nova Components - 原子组件开发规范
 *
 * 版本: v2.0
 * 更新时间: 2025-12-04
 *
 * 参考实现: src/components/nova-ui/atmos/button/
 *
 * ⚠️ 关键注意（导出系统）:
 * 1. 主题配置文件必须在 4 个地方创建（3 个生产主题 + theme-template）
 * 2. themeFile 和 themeConfigs 必须正确配置（否则导出的主题文件为空）
 * 3. 导出名为 {component}Config（不是 BaseConfig）
 * 4. theme-template 必须同步更新（否则新创建的主题会缺少组件）
 */

// ============================================================================
// 原子组件清单（共 22 个）
// ============================================================================

/**
 * 当前 atmos 组件列表:
 *
 * | 组件           | 说明                 | Demo组件 |
 * |----------------|---------------------|----------|
 * | aspect-ratio   | 宽高比容器           | -        |
 * | avatar         | 头像                 | ✓        |
 * | badge          | 徽章                 | -        |
 * | button         | 按钮                 | -        |
 * | card           | 卡片                 | ✓        |
 * | checkbox       | 复选框               | -        |
 * | collapsible    | 折叠面板             | ✓        |
 * | input          | 输入框               | -        |
 * | kbd            | 键盘按键             | -        |
 * | label          | 标签                 | -        |
 * | popover        | 弹出框               | ✓        |
 * | progress       | 进度条               | -        |
 * | radio-group    | 单选组               | -        |
 * | scroll-area    | 滚动区域             | -        |
 * | separator      | 分隔线               | -        |
 * | skeleton       | 骨架屏               | -        |
 * | slider         | 滑块                 | -        |
 * | spinner        | 加载动画             | -        |
 * | switch         | 开关                 | -        |
 * | textarea       | 多行文本框           | -        |
 * | toggle         | 切换按钮             | -        |
 * | tooltip        | 提示框               | ✓        |
 *
 * 路径: src/components/nova-ui/atmos/{component}/
 */

// ============================================================================
// 开发步骤
// ============================================================================

/**
 * 步骤 0: 参考 shadcn/ui
 * - 本地: src/shadcn_ui/{component}.tsx
 * - 文档: https://ui.shadcn.com/docs/components/{component}
 *
 * 步骤 1: 创建组件
 * - 文件: src/components/nova-ui/atmos/{component}/index.tsx
 *   - 导出 {component}BaseConfig
 *   - 导出 {Component}, {Component}Props, {Component}ClassNames
 *   - 如需 Demo 组件（弹出类），导出 {Component}Demo
 * - 配置: src/components/nova-ui/atmos/{component}/{component}.config.ts
 *
 * 步骤 2: 创建主题配置文件 ⭐⭐⭐
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
 * 步骤 3: 注册主题配置导出
 * - 文件: src/lib/themes/{theme}/components/index.ts
 * - 操作: 添加 export { {component}Config } from './{component}';
 * - 必须: 4 个地方的 components/index.ts 都要更新
 *
 * 步骤 4: 在主题入口注册组件 ⭐⭐⭐ 关键！
 * - 文件: src/lib/themes/{theme}/index.ts
 * - 操作:
 *   1. 在 import 中添加: {component}Config
 *   2. 在 components: {} 中添加: {Component}: {component}Config,
 * - 必须: 4 个地方的 index.ts 都要更新
 * - ⚠️ 漏掉此步骤会导致组件没有主题样式（只显示基础样式）
 * - ⚠️ 漏掉 theme-template 会导致新创建的主题缺少此组件
 *
 * 步骤 5: 创建 Manifest（单一数据源）⭐
 * - 文件: src/components/nova-ui/atmos/{component}/manifest.ts
 * - 包含所有配置:
 *   - 身份: type, name, category, label, labelKey
 *   - 导出: files, themeConfigs, themeFile, cssVars, dependencies
 *   - 画布: canvas.size, canvas.props, canvas.defaultProps
 *
 * ⚠️ 关键配置（导出功能依赖这些）:
 *   themeFile: 'components/{component}.ts',  // 指向主题配置文件
 *   themeConfigs: [
 *     { componentName: '{Component}', configName: '{component}Config' },
 *   ],
 *
 * 步骤 6: 注册 Manifest
 * - 文件: src/registry/manifests.ts
 * - 操作: import manifest, 添加到 MANIFESTS 对象
 *
 * 步骤 7: 注册组件映射（画布渲染用）
 * - 文件: src/registry/component-map.ts
 * - 添加: '{component}': { component: {Component}, baseConfig: {component}BaseConfig }
 *
 * 步骤 8: 注册代码生成器（导出功能用）⭐⭐⭐ 关键！
 * - 文件: src/registry/components/atoms/{component}.ts
 * - 操作:
 *   1. 创建文件，参考 registry/components/atoms/button.ts
 *   2. 在 registry/components/atoms/index.ts 添加 export
 * - ⚠️ 漏掉此步骤会导致导出代码显示 "Unknown component type"
 *
 * 步骤 9: 添加到画布顺序
 * - 文件: src/stores/canvas-store.ts
 * - 在 COMPONENT_ORDER 数组中添加 '{component}'
 *
 * 步骤 10: 国际化（分目录）
 * - 组件类型名: src/lib/i18n/messages/components/_types.ts
 *   - 添加: componentType{Component}
 * - 通用属性名: src/lib/i18n/messages/components/_props.ts
 *   - 添加: prop{PropName}（如属性名是新的）
 * - 通用属性值: src/lib/i18n/messages/components/_values.ts
 *   - 添加: val{Value}（如属性值是新的）
 * - 组件专属翻译: src/lib/i18n/messages/components/atmos/{component}.ts
 *   - 创建文件，添加组件专属文本（如按钮默认文字、提示等）
 *   - 在 atmos/index.ts 中导入并合并
 *
 * 步骤 11: 验证
 * - npx tsc --noEmit && npm run build
 * - 刷新画布页面，确认组件出现在抽屉中
 * - 测试导出功能，确认生成的代码包含:
 *   □ components/{component}.tsx（不是 "Unknown component type"）
 *   □ themes/{theme}/components/{component}.ts
 *   □ themes/{theme}/index.ts 中有 components: { {Component}: {component}Config }
 */

// ============================================================================
// 组件结构（伪代码）
// ============================================================================

/*
// {component}.config.ts - 基础配置（组件内部）
export const {component}BaseConfig = {
  slots: { base: '...' },
  variants: {
    variant: { default: {}, outline: {} },
    size: { default: {}, sm: {}, lg: {} }
  },
  defaultVariants: { variant: 'default', size: 'default' }
} as const;

// themes/cyberpunk-dark/components/{component}.ts - 主题配置
export const {component}Config = {
  slots: {
    base: ['rounded-none', 'font-mono', ...],  // cyberpunk 风格
  },
  variants: {
    variant: {
      default: { base: ['hover:shadow-[0_0_20px_var(--primary)]'] },
    },
  },
};

// index.tsx
'use client';
import { tv, VariantProps } from 'tailwind-variants';
import { {component}BaseConfig } from './{component}.config';

const {component} = tv({component}BaseConfig);

export type {Component}ClassNames = Partial<Record<keyof typeof {component}BaseConfig.slots, string>>;

export interface {Component}Props extends VariantProps<typeof {component}> {
  classNames?: {Component}ClassNames;
}

export const {Component} = forwardRef<HTMLElement, {Component}Props>(
  ({ className, classNames, variant, size, ...props }, ref) => {
    // classNames 优先：有则完全使用，无则计算
    const baseClass = classNames?.base ?? {component}({ variant, size }).base();
    return <element className={cn(baseClass, className)} ref={ref} {...props} />;
  }
);
*/

// ============================================================================
// 样式规则
// ============================================================================

/**
 * ADR-001: 标准 Tailwind 类
 *
 * ✅ 正确: bg-primary, text-foreground, border-border
 * ❌ 禁止: bg-[var(--primary)], bg-blue-500, #ff00ff
 */

// ============================================================================
// 检查清单（新系统）
// ============================================================================

/**
 * □ 组件源码 (index.tsx)
 *   □ 'use client' 指令
 *   □ 导出 {component}BaseConfig
 *   □ 导出 {Component}, {Component}Props, {Component}ClassNames
 *   □ 支持 classNames 完全覆盖
 *   □ 使用标准 Tailwind 类（ADR-001）
 *   □ forwardRef 支持
 *
 * □ 主题配置 ⭐⭐⭐（4 个地方都要创建！）
 *   □ themes/cyberpunk-dark/components/{component}.ts 创建
 *   □ themes/ocean-blue/components/{component}.ts 创建
 *   □ themes/sunset-warm/components/{component}.ts 创建
 *   □ themes/theme-template/components/{component}.ts 创建 ⭐ 模板！
 *   □ 4 个地方的 components/index.ts 都更新导出
 *   □ 导出名为 {component}Config（不是 BaseConfig）
 *
 * □ 主题入口注册 ⭐⭐⭐ 关键！
 *   □ themes/cyberpunk-dark/index.ts - import 并添加到 components
 *   □ themes/ocean-blue/index.ts - import 并添加到 components
 *   □ themes/sunset-warm/index.ts - import 并添加到 components
 *   □ themes/theme-template/index.ts - import 并添加到 components ⭐ 模板！
 *   □ ⚠️ 漏掉此步骤会导致组件没有主题样式
 *   □ ⚠️ 漏掉 theme-template 会导致新创建的主题缺少此组件
 *
 * □ Manifest（单一数据源）⭐
 *   □ manifest.ts 创建
 *   □ registry/manifests.ts 注册
 *   □ themeFile: 'components/{component}.ts' ← 必须配置！
 *   □ themeConfigs: [{ componentName, configName }] ← 必须配置！
 *   □ 包含 label, labelKey
 *   □ 包含 canvas.size, canvas.props, canvas.defaultProps
 *
 * □ 组件映射（画布渲染用）
 *   □ registry/component-map.ts 添加映射
 *
 * □ 代码生成器（导出功能用）⭐⭐⭐ 关键！
 *   □ registry/components.ts 添加 import
 *   □ registry/components.ts 创建 {component}Entry
 *   □ registry/components.ts 添加到 COMPONENT_REGISTRY
 *   □ registry/components.ts 导出 Props 类型
 *   □ ⚠️ 漏掉此步骤会导致导出代码显示 "Unknown component type"
 *
 * □ 画布顺序
 *   □ stores/canvas-store.ts - COMPONENT_ORDER 添加
 *
 * □ 国际化（分目录结构）
 *   □ _types.ts: componentType{Component}
 *   □ _props.ts: prop{PropName}（如新属性名）
 *   □ _values.ts: val{Value}（如新属性值）
 *   □ atmos/{component}.ts: 组件专属翻译
 *   □ atmos/index.ts: 导入并合并
 *   □ 16 种语言翻译
 *
 * □ 验证
 *   □ npx tsc --noEmit 无错误
 *   □ npm run build 无错误
 *   □ 画布抽屉显示组件
 *   □ 切换主题样式变化
 *   □ 导出功能正常:
 *     □ components/{component}.tsx 生成（不是 "Unknown component type"）
 *     □ themes/{theme}/components/{component}.ts 生成
 *     □ 依赖的 atoms 一起导出
 */

export {};
