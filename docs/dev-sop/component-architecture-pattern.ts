/**
  * Nova Components - 组件架构模式规范                                                 
  *                                                                                    
  * 版本: v2.2                                                                         
  * 更新时间: 2025-12-04 *
 * 参考实现:
 * - 简单组件: src/components/nova-ui/atmos/badge/
 * - 复杂组件: src/components/nova-ui/atmos/scroll-area/
 *
 * 本文档描述组件的内部架构模式，包括：
 * - 三层样式架构 (L1/L2/L3)
 * - 静态 tv 定义
 * - twMerge 样式合并
 * - 组件纯净化原则
 * - 演示数据分离（简单/复杂组件）
 * - 复杂组件国际化 (i18n)
 * - 代码生成配置
 */

// ============================================================================
// 一、三层样式架构
// ============================================================================

/**
 * 组件样式分为三层，优先级: L3 > L2 > L1
 *
 * ┌─────────────────────────────────────────┐
 * │  L1: 功能层（静态，组件外部定义）         │
 * │  - 保证组件功能正常的必要样式            │
 * │  - 如: relative overflow-hidden         │
 * │  - 始终存在，不可被覆盖                  │
 * ├─────────────────────────────────────────┤
 * │  L2: 主题层（动态，useTheme 获取）        │
 * │  - 视觉风格样式                          │
 * │  - 如: 边框、圆角、颜色、阴影            │
 * │  - 可被 L3 覆盖                          │
 * ├─────────────────────────────────────────┤
 * │  L3: 实例层（用户传入）                  │
 * │  - className / classNames               │
 * │  - 最高优先级                            │
 * └─────────────────────────────────────────┘
 *
 * 合并方式: twMerge(L1, L2, L3)
 */

// ============================================================================
// 二、组件文件结构
// ============================================================================

/**
 * 组件目录结构:
 *
 * src/components/nova-ui/atmos/{component}/
 * ├── index.tsx      # 组件实现（纯净，不依赖项目内部文件）
 * └── manifest.ts    # 元信息 + 演示数据
 *
 * 组件依赖原则:
 * ✅ 允许: 外部库（radix、tailwind-variants、tailwind-merge）
 * ✅ 允许: @/lib/themes（useTheme hook）
 * ❌ 禁止: 项目内部文件（manifest、registry 等）
 */

// ============================================================================
// 三、组件代码模板
// ============================================================================

/*
'use client';

import * as React from 'react';
import * as ComponentPrimitive from '@radix-ui/react-xxx';
import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes';

// ============================================================================
// Types
// ============================================================================

export interface ComponentItem {
  id: string;
  text: string;
}

// ============================================================================
// Utils
// ============================================================================

const toClassString = (value: string | string[] | undefined): string => {
  if (!value) return '';
  if (Array.isArray(value)) return value.join(' ');
  return value;
};

// ============================================================================
// L1: 静态样式定义（功能层）- 在组件外部定义！
// ============================================================================

const componentBase = tv({
  slots: {
    root: 'relative overflow-hidden',  // 功能必需
    viewport: 'h-full w-full',         // 功能必需
    content: '',                        // 纯视觉
    header: 'sticky top-0 z-10',       // 功能必需
    item: '',                           // 纯视觉
  },
});

// ============================================================================
// Component
// ============================================================================

export interface ComponentProps
  extends React.ComponentPropsWithoutRef<typeof ComponentPrimitive.Root> {
  classNames?: { base?: string; viewport?: string };
  items?: ComponentItem[];
  header?: string;
}

const Component = React.forwardRef<
  React.ComponentRef<typeof ComponentPrimitive.Root>,
  ComponentProps
>(({ className, classNames, children, items, header, ...props }, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Component;

  // L1: 功能层（静态）
  const base = componentBase();

  // L2: 主题层（用 useMemo 缓存）
  const themeStyles = React.useMemo(() => ({
    root: toClassString(themeConfig?.slots?.base),
    viewport: toClassString(themeConfig?.slots?.viewport),
    content: toClassString(themeConfig?.slots?.content),
    header: toClassString(themeConfig?.slots?.header),
    item: toClassString(themeConfig?.slots?.item),
  }), [themeConfig]);

  // 合并: L1 + L2 + L3 (功能层始终保留)
  const rootClass = twMerge(base.root(), themeStyles.root, classNames?.base, className);
  const viewportClass = twMerge(base.viewport(), themeStyles.viewport, classNames?.viewport);
  const contentClass = twMerge(base.content(), themeStyles.content);
  const headerClass = twMerge(base.header(), themeStyles.header);
  const itemClass = twMerge(base.item(), themeStyles.item);

  // 渲染内容：children 优先
  const renderContent = () => {
    if (children) return children;
    if (items && items.length > 0) {
      return (
        <div className={contentClass}>
          {header && <div className={headerClass}>{header}</div>}
          {items.map((item) => (
            <div key={item.id} className={itemClass}>
              {item.text}
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <ComponentPrimitive.Root ref={ref} className={rootClass} {...props}>
      <ComponentPrimitive.Viewport className={viewportClass}>
        {renderContent()}
      </ComponentPrimitive.Viewport>
    </ComponentPrimitive.Root>
  );
});
Component.displayName = 'Component';

export { Component };
*/

// ============================================================================
// 四、组件分类与演示数据
// ============================================================================

/**
 * 组件分为两类，演示数据处理方式不同：
 *
 * ┌─────────────────────────────────────────────────────────────────┐
 * │  类型 A: 简单组件（Badge, Button, Input 等）                      │
 * │  - 只接收 children 或简单 props                                  │
 * │  - 不需要自定义演示数据                                          │
 * │  - defaultProps 只需基础值（如 children: 'Badge'）               │
 * │  - 不需要 customJsx                                              │
 * ├─────────────────────────────────────────────────────────────────┤
 * │  类型 B: 复杂组件（ScrollArea, Card, Tabs 等）                    │
 * │  - 需要结构化数据（items, tabs, columns 等）                      │
 * │  - 需要在 manifest 定义演示数据（用于 customJsx 导出）             │
 * │  - 画布渲染需要国际化时，在 component-map 创建 XxxDemo            │
 * │  - XxxDemo 使用 useI18n() 获取本地化文本                          │
 * │  - 需要 customJsx 确保导出代码正确（使用静态英文）                 │
 * └─────────────────────────────────────────────────────────────────┘
 */

// ============================================================================
// 五、Manifest 结构
// ============================================================================

/**
 * manifest.ts 职责:
 * 1. 组件元信息（type, name, category）
 * 2. 导出配置（themeFile, themeConfigs）
 * 3. 画布配置（canvas.size, canvas.defaultProps）
 * 4. [复杂组件] 演示数据定义（DEMO_ITEMS 等）
 * 5. [复杂组件] 代码生成配置（exportOptions.customJsx）
 */

/*
// ============================================================================
// manifest.ts 模板 A: 简单组件（Badge, Button 等）
// ============================================================================

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'badge',
  name: 'Badge',
  category: 'atoms',
  label: 'Badge',
  labelKey: 'componentTypeBadge',

  files: {
    component: 'index.tsx',
  },

  themeConfigs: [
    { componentName: 'Badge', configName: 'badgeConfig' },
  ],

  themeFile: 'components/badge.ts',

  cssVars: ['--primary', '--secondary', '--destructive'],

  dependencies: [],

  // 简单组件不需要 customJsx
  // exportOptions: {},

  canvas: {
    size: { width: 100, height: 36 },
    props: [
      { name: 'variant', type: 'select', options: ['default', 'secondary', 'destructive', 'outline'] },
    ],
    defaultProps: {
      children: 'Badge',  // 简单的 children
      variant: 'default',
    },
    availableEffects: [],
  },
};

// ============================================================================
// manifest.ts 模板 B: 复杂组件（ScrollArea, Card 等）
// ============================================================================

import type { ComponentManifest } from '@/registry/manifest-types';

// ⭐ 复杂组件需要定义演示数据
export interface ComponentItem {
  id: string;
  text: string;
}

export const DEMO_ITEMS: ComponentItem[] = [
  { id: '01', text: 'Item 1' },
  { id: '02', text: 'Item 2' },
];

export const DEMO_HEADER = 'ITEMS';

export const manifest: ComponentManifest = {
  type: 'component-name',
  name: 'ComponentName',
  category: 'atoms',
  label: 'Component Label',
  labelKey: 'componentTypeXxx',

  files: {
    component: 'index.tsx',
  },

  themeConfigs: [
    { componentName: 'ComponentName', configName: 'componentNameConfig' },
  ],

  themeFile: 'components/component-name.ts',

  cssVars: ['--primary', '--border', '--foreground'],

  dependencies: [],

  // ⭐ 复杂组件需要 customJsx
  exportOptions: {
    noChildren: true,
    customJsx: `<ComponentName
      header="ITEMS"
      items={[
        { id: '01', text: 'Item 1' },
        { id: '02', text: 'Item 2' },
      ]}
    />`,
  },

  canvas: {
    size: { width: 320, height: 280 },
    props: [],
    defaultProps: {
      items: DEMO_ITEMS,      // ⭐ 使用演示数据
      header: DEMO_HEADER,
    },
    availableEffects: [],
  },
};
*/

// ============================================================================
// 六、Registry Entry
// ============================================================================

/**
 * registry/components/atoms/{component}.tsx 职责:
 * - 桥接 manifest 数据到画布
 * - [复杂组件] 从 manifest 导入演示数据
 */

/*
// ============================================================================
// registry entry 模板 A: 简单组件
// ============================================================================

import { Badge, BadgeProps } from '@/components/nova-ui/atmos/badge';
import type { ComponentRegistryEntry } from '../types';

export const badgeEntry: ComponentRegistryEntry = {
  type: 'badge',
  label: 'Badge',
  labelKey: 'componentTypeBadge',
  category: 'atoms',
  component: Badge,
  baseConfig: null,
  props: [
    { name: 'variant', type: 'select', options: ['default', 'secondary', 'destructive', 'outline'] },
  ],
  defaultProps: {
    children: 'Badge',
    variant: 'default',
  },
  availableEffects: [],
};

// ============================================================================
// registry entry 模板 B: 复杂组件
// ============================================================================

import { Component } from '@/components/nova-ui/atmos/component';
import { DEMO_ITEMS, DEMO_HEADER } from '@/components/nova-ui/atmos/component/manifest';
import type { ComponentRegistryEntry } from '../types';

export const componentEntry: ComponentRegistryEntry = {
  type: 'component',
  label: 'Component',
  labelKey: 'componentTypeXxx',
  category: 'atoms',
  component: Component,
  baseConfig: null,
  props: [],
  defaultProps: {
    items: DEMO_ITEMS,      // ⭐ 从 manifest 导入
    header: DEMO_HEADER,
  },
  availableEffects: [],
};
*/

// ============================================================================
// 七、数据流总结
// ============================================================================

/**
 * 简单组件数据流:
 *
 * manifest.ts (定义 defaultProps: { children: 'Badge' })
 *     ↓
 * registry entry (复制 defaultProps)
 *     ↓
 * Canvas.tsx (读取 entry.defaultProps)
 *     ↓ props
 * 组件 (渲染)
 *
 * 复杂组件数据流:
 *
 * manifest.ts (定义演示数据 DEMO_ITEMS)
 *     ↓ export DEMO_ITEMS, DEMO_HEADER
 * registry entry (导入到 defaultProps)
 *     ↓
 * Canvas.tsx (读取 entry.defaultProps)
 *     ↓ props
 * 组件 (渲染)
 *
 * 代码生成流向（复杂组件）:
 *
 * manifest.ts (定义 customJsx)
 *     ↓
 * codegen.ts (读取 manifest.exportOptions.customJsx)
 *     ↓
 * 生成 MyComponent.tsx (包含完整使用示例)
 */

// ============================================================================
// 八、复杂组件国际化 (i18n)
// ============================================================================

/**
 * 复杂组件需要在画布上显示本地化的演示数据。
 *
 * 实现方式：
 * 1. 在 component-map.tsx 创建 XxxDemo 组件
 * 2. XxxDemo 使用 useI18n() 获取本地化文本
 * 3. COMPONENT_MAP 使用 XxxDemo 而非原组件
 * 4. registry entry 的 defaultProps 设为空对象
 * 5. manifest 中的演示数据仍保留（用于 customJsx 导出）
 *
 * 数据流（i18n 模式）:
 *
 * i18n messages (定义翻译文本)
 *     ↓
 * component-map.tsx XxxDemo (useI18n 获取本地化文本)
 *     ↓
 * Canvas.tsx (渲染 XxxDemo)
 *     ↓
 * 组件 (显示本地化内容)
 *
 * 注意：代码导出仍使用 manifest 中的静态英文 customJsx
 *
 * ⚠️ 重要：Canvas 必须使用正确的 Registry！
 * - @/registry/component-registry（自动生成，从 COMPONENT_MAP 构建）
 * - 不要使用 @/registry/components（手动维护，不含 i18n Demo）
 */

/*
// ============================================================================
// component-map.tsx 中的 i18n Demo 组件模板
// ============================================================================

import { useI18n } from '@/lib/i18n/use-i18n';
import type { MessageKey } from '@/lib/i18n/messages';

// ScrollArea 演示组件（使用 i18n）
const ScrollAreaDemo = (props: ComponentProps<typeof ScrollArea>) => {
  const { t } = useI18n();

  // 使用 i18n 构建本地化演示数据
  const items = [
    { id: '01', text: t('scrollAreaSystemInit' as MessageKey) },
    { id: '02', text: t('scrollAreaLoadingModules' as MessageKey) },
    { id: '03', text: t('scrollAreaConnecting' as MessageKey) },
    // ...
  ];

  const header = t('scrollAreaItems' as MessageKey);

  return <ScrollArea {...props} items={items} header={header} />;
};

// 在 COMPONENT_MAP 中使用 Demo 组件
export const COMPONENT_MAP: Record<string, ComponentMapEntry> = {
  // ...
  'scroll-area': { component: ScrollAreaDemo, baseConfig: null },
  // ...
};

// ============================================================================
// registry entry（i18n 模式）
// ============================================================================

export const scrollAreaEntry: ComponentRegistryEntry = {
  type: 'scroll-area',
  label: 'Scroll Area',
  labelKey: 'componentTypeScrollArea',
  category: 'atoms',
  component: ScrollArea,  // 注：实际使用 component-map 中的 ScrollAreaDemo
  baseConfig: null,
  props: [],
  defaultProps: {},  // ⭐ 空对象，演示数据由 Demo 组件通过 i18n 提供
  availableEffects: [],
};

// ============================================================================
// i18n 消息文件示例
// ============================================================================

// src/lib/i18n/messages/components/atmos/scroll-area.ts
export const scrollAreaMessages = {
  en: {
    scrollAreaItems: 'ITEMS',
    scrollAreaSystemInit: 'System initializing...',
    scrollAreaLoadingModules: 'Loading modules...',
    // ...
  },
  zh: {
    scrollAreaItems: '条目',
    scrollAreaSystemInit: '系统初始化中...',
    scrollAreaLoadingModules: '加载模块中...',
    // ...
  },
  // 支持 16 种语言
};
*/

// ============================================================================
// 九、关键注意事项
// ============================================================================

/**
 * ⚠️ 常见错误（含 i18n）:
 *
 * 1. classNames?.base ?? twMerge(...)
 *    ❌ 错误：如果传了 classNames.base，功能层会丢失
 *    ✅ 正确：twMerge(L1, L2, classNames?.base, className)
 *
 * 2. 在组件内部定义 tv
 *    ❌ 错误：每次渲染都重建 tv 实例
 *    ✅ 正确：在组件外部定义静态 tv
 *
 * 3. 直接字符串拼接样式
 *    ❌ 错误：`${base} ${theme}` 会有冲突
 *    ✅ 正确：twMerge(base, theme) 自动去重
 *
 * 4. 组件依赖 manifest
 *    ❌ 错误：import { DEMO_ITEMS } from './manifest'
 *    ✅ 正确：组件不导入任何项目内部文件
 *
 * 5. entry.defaultProps 为空
 *    ❌ 错误：画布渲染时没有演示数据
 *    ✅ 正确：简单组件用 { children: 'xxx' }，复杂组件用 i18n Demo 或从 manifest 导入
 *
 * 6. 复杂组件画布演示数据硬编码英文
 *    ❌ 错误：manifest 中的 DEMO_ITEMS 直接用于画布渲染
 *    ✅ 正确：创建 XxxDemo 使用 useI18n()，画布自动本地化
 *
 * 7. i18n Demo 组件放在组件目录
 *    ❌ 错误：在 scroll-area/index.tsx 中定义 ScrollAreaDemo
 *    ✅ 正确：在 component-map.tsx 中定义，保持组件纯净
 *
 * 8. Canvas 使用错误的 Registry
 *    ❌ 错误：import { getComponentEntry } from '@/registry/components'
 *    ✅ 正确：import { getComponentEntry } from '@/registry/component-registry'
 *    说明：项目有两套 Registry：
  *    - @/registry/components: 手动维护的 entry 文件（不含 i18n Demo）                
  *    - @/registry/component-registry: 自动从 COMPONENT_MAP 生成（含 i18n Demo）      
  *    Canvas 必须使用后者才能让 i18n Demo 生效！                                      
  *
  * 9. 循环依赖 (Circular Dependency)
  *    ❌ 错误：stores/theme-store -> themes/index -> use-theme -> stores/theme-store
  *    ✅ 正确：将静态 THEMES 定义提取到单独文件 (src/lib/themes/theme-registry.ts)
  *    说明：
  *    - stores/theme-store.ts: 导入 theme-registry.ts (获取静态 THEMES)
  *    - themes/index.ts: 导出 theme-registry.ts
  *    - use-theme.ts: 导入 theme-store.ts
  *    这样打破了环：store 不再依赖 index，而是依赖无副作用的 registry。
  */
// ============================================================================
// 十、检查清单
// ============================================================================

/**
 * 组件开发检查清单:
 *
 * □ 组件文件 (index.tsx)
 *   □ 只依赖外部库，不依赖项目内部文件
 *   □ tv 在组件外部静态定义（L1 功能层）
 *   □ 使用 twMerge(L1, L2, L3) 合并样式
 *   □ L1 功能层始终保留
 *   □ useMemo 缓存主题样式计算
 *   □ 支持 variant 从主题配置读取
 *
 * □ manifest.ts
 *   □ [所有组件] canvas.defaultProps 有值（或使用 i18n Demo）
 *   □ [简单组件] defaultProps: { children: 'xxx', variant: 'default' }
 *   □ [复杂组件] 定义 DEMO_ITEMS 等演示数据（用于 customJsx）
 *   □ [复杂组件] 定义 customJsx（完整使用示例，静态英文）
 *
 * □ component-map.tsx
 *   □ [简单组件] 直接使用组件
 *   □ [复杂组件 + i18n] 创建 XxxDemo 使用 useI18n()
 *   □ baseConfig: null
 *
 * □ registry entry
 *   □ [简单组件] defaultProps: { children: 'xxx' }
 *   □ [复杂组件 + i18n] defaultProps: {} （Demo 提供数据）
 *   □ baseConfig: null
 *
 * □ i18n 消息文件（复杂组件需要时）
 *   □ 创建 src/lib/i18n/messages/components/{category}/{component}.ts
 *   □ 定义所有语言的翻译文本
 *   □ 在 index.ts 中导出
 *
 * □ 验证
 *   □ 画布渲染正常（有演示数据）
 *   □ 切换语言画布内容变化（复杂组件 + i18n）
 *   □ 主题切换样式变化
 *   □ variant 切换正常
 *   □ 导出组件可独立运行
 */

export {};
