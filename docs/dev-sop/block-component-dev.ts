/**
 * Nova Components - Block 组件开发 SOP
 *
 * 版本: v4.0
 * 更新时间: 2025-12-04
 *
 * ═══════════════════════════════════════════════════════════════════════════════
 * ⭐ 必读文档（开发前务必阅读）
 * ═══════════════════════════════════════════════════════════════════════════════
 *
 * 1. 架构规范: docs/dev-sop/component-architecture-pattern.ts
 *    - 三层架构 (L1/L2/L3)
 *    - 代码模板
 *    - i18n 实现
 *    - 常见错误
 *
 * 2. 参考实现:
 *    - src/components/nova-ui/blocks/tabs/
 *    - src/components/nova-ui/blocks/accordion/
 *
 * ═══════════════════════════════════════════════════════════════════════════════
 * Block vs Atom 差异
 * ═══════════════════════════════════════════════════════════════════════════════
 *
 * | 维度         | Atom                    | Block                         |
 * |--------------|-------------------------|-------------------------------|
 * | 依赖         | 无组件依赖              | 可依赖 Atoms                  |
 * | 特效         | 支持用户配置            | 不支持（通过内部 Atoms 获得） |
 * | Demo         | 可选                    | 必须有 XxxDemo                |
 * | customJsx    | 简单组件不需要          | 有依赖时必须配置              |
 *
 * ═══════════════════════════════════════════════════════════════════════════════
 */

// ============================================================================
// 开发步骤（简版）
// ============================================================================

/**
 * ┌─────────────────────────────────────────────────────────────────────────┐
 * │  Block 组件开发步骤                                                      │
 * ├─────────────────────────────────────────────────────────────────────────┤
 * │                                                                          │
 * │  0. 确认依赖                                                             │
 * │     └─ 依赖的 Atoms 已完成三层架构重构                                   │
 * │                                                                          │
 * │  1. 创建组件                                                             │
 * │     └─ src/components/nova-ui/blocks/{component}/index.tsx              │
 * │        遵循三层架构（见 component-architecture-pattern.ts）              │
 * │        从 atmos/ 导入依赖的 Atoms                                        │
 * │        必须导出 XxxDemo 组件                                             │
 * │                                                                          │
 * │  2. 创建主题配置（所有主题 + theme-template）                            │
 * │     └─ src/lib/themes/{theme}/components/{component}.ts                 │
 * │     └─ 更新 components/index.ts 导出                                    │
 * │     └─ 更新主题 index.ts 注册组件                                       │
 * │                                                                          │
 * │  3. 创建 Manifest ⭐⭐⭐                                                  │
 * │     └─ src/components/nova-ui/blocks/{component}/manifest.ts            │
 * │     └─ 注册到 src/registry/manifests.ts                                 │
 * │     └─ 有依赖必须配置 exportOptions（见下方说明）                        │
 * │                                                                          │
 * │  4. 注册组件映射                                                         │
 * │     └─ src/registry/component-map.tsx                                   │
 * │        { component: XxxDemo, baseConfig: null }                         │
 * │                                                                          │
 * │  5. 注册 Registry Entry                                                  │
 * │     └─ src/registry/components/blocks/{component}.ts                    │
 * │     └─ 导出到 blocks/index.ts                                           │
 * │                                                                          │
 * │  6. 添加画布顺序                                                         │
 * │     └─ src/stores/canvas-store.ts → COMPONENT_ORDER                     │
 * │                                                                          │
 * │  7. 国际化                                                               │
 * │     └─ src/lib/i18n/messages/components/_types.ts                       │
 * │     └─ src/lib/i18n/messages/components/blocks/{component}.ts           │
 * │                                                                          │
 * │  8. 验证                                                                 │
 * │     └─ npx tsc --noEmit && npm run build                                │
 * │     └─ 画布渲染 + 主题切换 + 导出功能（含依赖）                          │
 * │                                                                          │
 * └─────────────────────────────────────────────────────────────────────────┘
 */

// ============================================================================
// ⚠️ 有依赖的 Block 必须配置 exportOptions
// ============================================================================

/**
 * 有 dependencies 的 Block 必须配置 customJsx，否则导出代码无法运行！
 *
 * 示例 1: ButtonGroup（依赖 button）
 * ─────────────────────────────────────────
 * dependencies: ['button'],
 * exportOptions: {
 *   noChildren: true,
 *   customJsx: `<ButtonGroup>
 *     <Button>Left</Button>
 *     <Button>Center</Button>
 *     <Button>Right</Button>
 *   </ButtonGroup>`,
 *   customImports: ['ButtonGroup', 'Button'],
 * },
 *
 * 示例 2: ToggleGroup（需要 lucide-react 图标）
 * ─────────────────────────────────────────
 * dependencies: ['toggle'],
 * exportOptions: {
 *   noChildren: true,
 *   customJsx: `<ToggleGroup type="multiple">
 *     <ToggleGroupItem value="bold"><Bold className="h-4 w-4" /></ToggleGroupItem>
 *   </ToggleGroup>`,
 *   customImports: ['ToggleGroup', 'ToggleGroupItem'],
 *   extraImports: `import { Bold, Italic } from 'lucide-react';`,
 * },
 */

// ============================================================================
// 当前主题列表（必须全部创建配置）
// ============================================================================

/**
 * | 主题 ID            | 说明              |
 * |--------------------|-------------------|
 * | shadcn-default     | 基础主题          |
 * | theme-template     | 模板 ⭐ 必须有    |
 *
 * 新主题创建时会基于 theme-template 复制，所以 template 必须包含所有组件。
 */

// ============================================================================
// 检查清单
// ============================================================================

/**
 * □ 依赖确认
 *   □ 依赖 Atoms 已完成三层架构
 *   □ 依赖 Atoms 有 manifest
 *
 * □ 组件文件 (index.tsx)
 *   □ 从 atmos/ 导入 Atoms
 *   □ L1 静态 tv 在组件外部
 *   □ L2 使用 useTheme + useMemo
 *   □ 合并 twMerge(L1, L2, L3)
 *   □ 导出 XxxDemo 组件
 *   □ 不依赖项目内部文件
 *
 * □ 主题配置（所有主题 + theme-template）
 *   □ components/{component}.ts 创建
 *   □ components/index.ts 导出
 *   □ 主题 index.ts 注册
 *   □ 包含文字颜色 Token（text-foreground 等）
 *
 * □ Manifest
 *   □ manifest.ts 创建
 *   □ manifests.ts 注册
 *   □ 有依赖 → dependencies 配置
 *   □ 有依赖 → customJsx 配置
 *   □ 有依赖 → customImports 配置
 *
 * □ Registry
 *   □ component-map.tsx 添加 XxxDemo（baseConfig: null）
 *   □ components/blocks/{component}.ts 创建
 *   □ components/blocks/index.ts 导出
 *
 * □ 其他
 *   □ canvas-store.ts COMPONENT_ORDER
 *   □ i18n 翻译
 *
 * □ 验证
 *   □ TypeScript 编译通过
 *   □ Build 通过
 *   □ 画布渲染正常
 *   □ 主题切换正常
 *   □ 导出功能正常（含依赖组件）
 */

export {};
