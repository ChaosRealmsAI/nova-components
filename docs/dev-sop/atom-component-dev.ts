/**
 * Nova Components - 原子组件开发规范
 *
 * 版本: v3.0
 * 更新时间: 2025-12-04
 *
 * 参考实现:
 * - 三层架构: src/components/nova-ui/atmos/scroll-area/
 * - 复合组件: src/components/nova-ui/atmos/card/
 *
 * 架构模式详见: docs/dev-sop/component-architecture-pattern.ts
 */

// ============================================================================
// 原子组件清单（共 22 个）
// ============================================================================

/**
 * 当前 atmos 组件列表:
 *
 * | 组件           | 说明                 | 架构状态 |
 * |----------------|---------------------|----------|
 * | aspect-ratio   | 宽高比容器           | 待重构   |
 * | avatar         | 头像                 | 待重构   |
 * | badge          | 徽章                 | 待重构   |
 * | button         | 按钮                 | 待重构   |
 * | card           | 卡片                 | ✅ 三层  |
 * | checkbox       | 复选框               | 待重构   |
 * | collapsible    | 折叠面板             | 待重构   |
 * | input          | 输入框               | 待重构   |
 * | kbd            | 键盘按键             | 待重构   |
 * | label          | 标签                 | 待重构   |
 * | popover        | 弹出框               | 待重构   |
 * | progress       | 进度条               | 待重构   |
 * | radio-group    | 单选组               | 待重构   |
 * | scroll-area    | 滚动区域             | ✅ 三层  |
 * | separator      | 分隔线               | 待重构   |
 * | skeleton       | 骨架屏               | 待重构   |
 * | slider         | 滑块                 | 待重构   |
 * | spinner        | 加载动画             | 待重构   |
 * | switch         | 开关                 | 待重构   |
 * | textarea       | 多行文本框           | 待重构   |
 * | toggle         | 切换按钮             | 待重构   |
 * | tooltip        | 提示框               | 待重构   |
 *
 * 路径: src/components/nova-ui/atmos/{component}/
 * 重构任务池: docs/dev-sop/refactor-task-pool.md
 */

// ============================================================================
// 核心架构：三层样式
// ============================================================================

/**
 * ⭐ 必读: docs/dev-sop/component-architecture-pattern.ts
 *
 * 核心要点:
 * - L1（功能层）：静态 tv 定义，组件外部，只保留功能必需样式
 * - L2（主题层）：useTheme 获取，完全自定义视觉样式
 * - L3（实例层）：用户 className/classNames
 * - 合并方式：twMerge(L1, L2, L3)
 * - 组件纯净化：不依赖项目内部文件
 */

// ============================================================================
// 开发步骤
// ============================================================================

/**
 * 步骤 0: 阅读架构文档 ⭐
 * - 必读: docs/dev-sop/component-architecture-pattern.ts
 * - 参考: src/components/nova-ui/atmos/scroll-area/（三层架构）
 * - 参考: src/components/nova-ui/atmos/card/（复合组件）
 *
 * 步骤 1: 参考 shadcn/ui
 * - 本地: src/shadcn_ui/{component}.tsx
 * - 文档: https://ui.shadcn.com/docs/components/{component}
 *
 * 步骤 2: 创建组件
 * - 文件: src/components/nova-ui/atmos/{component}/index.tsx
 * - 遵循三层架构:
 *   - L1: 静态 tv 定义在组件外部
 *   - L2: useTheme + useMemo 获取主题样式
 *   - L3: 支持 className/classNames 覆盖
 *   - 合并: twMerge(L1, L2, L3)
 * - 导出: {Component}, {Component}Props, {Component}ClassNames
 * - 注意: 不再需要导出 BaseConfig！
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
 * - 文件: src/components/nova-ui/atmos/{component}/manifest.ts
 * - 包含:
 *   - 身份: type, name, category, label, labelKey
 *   - 导出: files, themeConfigs, themeFile, cssVars, dependencies
 *   - 画布: canvas.size, canvas.props, canvas.defaultProps
 *   - 演示数据: DEMO_ITEMS 等
 *
 * 步骤 7: 注册 Manifest
 * - 文件: src/registry/manifests.ts
 * - 操作: import manifest, 添加到 MANIFESTS 对象
 *
 * 步骤 8: 注册组件映射（画布渲染用）
 * - 文件: src/registry/component-map.tsx
 * - 添加: '{component}': { component: {Component}, baseConfig: null }
 * - 注意: baseConfig 设为 null（三层架构不再需要）
 * - 如需 Demo 包装器，定义本地 Demo 组件
 *
 * 步骤 9: 注册代码生成器（导出功能用）⭐⭐⭐
 * - 文件: src/registry/components/atoms/{component}.tsx
 * - 操作:
 *   1. 创建文件，参考 registry/components/atoms/card.tsx
 *   2. 在 registry/components/atoms/index.ts 添加 export
 * - ⚠️ 漏掉此步骤会导致导出代码显示 "Unknown component type"
 *
 * 步骤 10: 添加到画布顺序
 * - 文件: src/stores/canvas-store.ts
 * - 在 COMPONENT_ORDER 数组中添加 '{component}'
 *
 * 步骤 11: 国际化（分目录）
 * - 组件类型名: src/lib/i18n/messages/components/_types.ts
 * - 通用属性名: src/lib/i18n/messages/components/_props.ts
 * - 通用属性值: src/lib/i18n/messages/components/_values.ts
 * - 组件专属翻译: src/lib/i18n/messages/components/atmos/{component}.ts
 *
 * 步骤 12: 验证
 * - npx tsc --noEmit && npm run build
 * - 画布渲染测试
 * - 主题切换测试
 * - 导出功能测试
 */

// ============================================================================
// 组件结构（三层架构）
// ============================================================================

/*
// index.tsx - 三层架构模板

'use client';

import * as React from 'react';
import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes';

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

const componentBase = tv({
  slots: {
    base: 'relative',           // 功能必需
    content: 'overflow-hidden', // 功能必需
    // 只放功能必需样式，视觉样式放 L2
  },
});

// ============================================================================
// Theme Hook
// ============================================================================

const useComponentTheme = () => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Component;

  return React.useMemo(() => ({
    base: toClassString(themeConfig?.slots?.base),
    content: toClassString(themeConfig?.slots?.content),
    // 缓存所有 slot 的主题样式
  }), [themeConfig]);
};

// ============================================================================
// Component
// ============================================================================

export interface ComponentClassNames {
  base?: string;
  content?: string;
}

export interface ComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  classNames?: ComponentClassNames;
}

const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, classNames, children, ...props }, ref) => {
    // L1: 功能层（静态）
    const base = componentBase();

    // L2: 主题层（动态，缓存）
    const themeStyles = useComponentTheme();

    // 合并: L1 + L2 + L3
    const baseClass = twMerge(
      base.base(),           // L1: 功能层
      themeStyles.base,      // L2: 主题层
      classNames?.base,      // L3: 实例层
      className              // L3: 实例层
    );

    const contentClass = twMerge(
      base.content(),
      themeStyles.content,
      classNames?.content
    );

    return (
      <div ref={ref} className={baseClass} {...props}>
        <div className={contentClass}>{children}</div>
      </div>
    );
  }
);
Component.displayName = 'Component';

export { Component };
*/

// ============================================================================
// 主题配置结构
// ============================================================================

/*
// themes/{theme}/components/{component}.ts

export const componentConfig = {
  slots: {
    base: [
      'bg-card',
      'text-card-foreground',
      'rounded-lg',
      'border',
      'shadow-sm',
      // 所有视觉样式放这里
    ],
    content: [
      'p-6',
    ],
  },

  variants: {
    variant: {
      default: {},
      outline: {
        base: ['border-2', 'shadow-none'],
      },
      ghost: {
        base: ['border-transparent', 'bg-transparent'],
      },
    },
    size: {
      sm: {
        base: ['text-sm'],
        content: ['p-4'],
      },
      default: {},
      lg: {
        base: ['text-lg'],
        content: ['p-8'],
      },
    },
  },
};
*/

// ============================================================================
// 检查清单
// ============================================================================

/**
 * □ 组件源码 (index.tsx)
 *   □ 'use client' 指令
 *   □ L1 静态 tv 在组件外部定义
 *   □ useTheme + useMemo 获取 L2 主题样式
 *   □ twMerge(L1, L2, L3) 合并样式
 *   □ 导出 {Component}, {Component}Props, {Component}ClassNames
 *   □ 不再导出 BaseConfig
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
 *   □ 导出名为 {component}Config
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
 * □ 组件映射
 *   □ registry/component-map.tsx 添加映射
 *   □ baseConfig: null
 *
 * □ 代码生成器
 *   □ registry/components/atoms/{component}.tsx 创建
 *   □ registry/components/atoms/index.ts 导出
 *
 * □ 画布顺序
 *   □ stores/canvas-store.ts COMPONENT_ORDER 添加
 *
 * □ 国际化
 *   □ _types.ts, _props.ts, _values.ts
 *   □ atmos/{component}.ts
 *
 * □ 验证
 *   □ npx tsc --noEmit
 *   □ npm run build
 *   □ 画布渲染正常
 *   □ 主题切换正常
 *   □ 导出功能正常
 */

export {};
