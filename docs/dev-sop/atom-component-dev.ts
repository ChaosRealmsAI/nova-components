/**
 * Nova Components - Atom 组件开发 SOP
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
 *    - 简单组件: src/components/nova-ui/atmos/badge/
 *    - 复杂组件: src/components/nova-ui/atmos/scroll-area/
 *    - 复合组件: src/components/nova-ui/atmos/card/
 *
 * ═══════════════════════════════════════════════════════════════════════════════
 */

// ============================================================================
// 开发步骤（简版）
// ============================================================================

/**
 * ┌─────────────────────────────────────────────────────────────────────────┐
 * │  Atom 组件开发步骤                                                       │
 * ├─────────────────────────────────────────────────────────────────────────┤
 * │                                                                          │
 * │  1. 创建组件                                                             │
 * │     └─ src/components/nova-ui/atmos/{component}/index.tsx               │
 * │        遵循三层架构（见 component-architecture-pattern.ts）              │
 * │                                                                          │
 * │  2. 创建主题配置（所有主题 + theme-template）                            │
 * │     └─ src/lib/themes/{theme}/components/{component}.ts                 │
 * │     └─ 更新 components/index.ts 导出                                    │
 * │     └─ 更新主题 index.ts 注册组件                                       │
 * │                                                                          │
 * │  3. 创建 Manifest                                                        │
 * │     └─ src/components/nova-ui/atmos/{component}/manifest.ts             │
 * │     └─ 注册到 src/registry/manifests.ts                                 │
 * │                                                                          │
 * │  4. 注册组件映射                                                         │
 * │     └─ src/registry/component-map.tsx                                   │
 * │        { component: Xxx, baseConfig: null }                             │
 * │        复杂组件需要 XxxDemo（使用 i18n）                                  │
 * │                                                                          │
 * │  5. 注册 Registry Entry                                                  │
 * │     └─ src/registry/components/atoms/{component}.ts                     │
 * │     └─ 导出到 atoms/index.ts                                            │
 * │                                                                          │
 * │  6. 添加画布顺序                                                         │
 * │     └─ src/stores/canvas-store.ts → COMPONENT_ORDER                     │
 * │                                                                          │
 * │  7. 国际化                                                               │
 * │     └─ src/lib/i18n/messages/components/_types.ts                       │
 * │     └─ src/lib/i18n/messages/components/atmos/{component}.ts            │
 * │                                                                          │
 * │  8. 验证                                                                 │
 * │     └─ npx tsc --noEmit && npm run build                                │
 * │     └─ 画布渲染 + 主题切换 + 导出功能                                    │
 * │                                                                          │
 * └─────────────────────────────────────────────────────────────────────────┘
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
 * □ 组件文件 (index.tsx)
 *   □ L1 静态 tv 在组件外部
 *   □ L2 使用 useTheme + useMemo
 *   □ 合并 twMerge(L1, L2, L3)
 *   □ 不依赖项目内部文件
 *
 * □ 主题配置（所有主题 + theme-template）
 *   □ components/{component}.ts 创建
 *   □ components/index.ts 导出
 *   □ 主题 index.ts 注册
 *
 * □ Manifest
 *   □ manifest.ts 创建
 *   □ manifests.ts 注册
 *
 * □ Registry
 *   □ component-map.tsx 添加（baseConfig: null）
 *   □ components/atoms/{component}.ts 创建
 *   □ components/atoms/index.ts 导出
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
 *   □ 导出功能正常
 */

export {};
