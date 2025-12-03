/**
 * Source Registry - 源码注册表 (Async Adapter)
 *
 * 宪章 v3.1 同源性保证：
 * - 源码通过 Server Actions (`@/app/actions/get-source`) 动态获取
 * - 不再依赖静态生成的 source-registry.generated.ts
 * - ADR-006 v2: 主题文件也通过 Server Actions 获取
 */

import {
  getComponentSource as getComponentSourceAction,
  getThemeFilesForComponents as getThemeFilesForComponentsAction,
  getThemeProvider as getThemeProviderAction,
} from '@/app/actions/get-source';

// ============================================================================
// 源码获取函数 (Async)
// ============================================================================

/**
 * 获取组件源码（已转换路径）
 * @returns Promise<string | null>
 */
export async function getComponentSource(componentType: string): Promise<string | null> {
  return getComponentSourceAction(componentType);
}

// ============================================================================
// 宪章 v5.2: 精准导出
// ============================================================================

/**
 * 获取选中组件的主题文件（精准导出）
 * @returns Promise<ThemeFile[]>
 */
export async function getThemeFilesForComponents(themeId: string, componentTypes: string[]) {
  return getThemeFilesForComponentsAction(themeId, componentTypes);
}

/**
 * 获取 ThemeProvider 代码（动态注入 CSS 变量版本）
 * @returns Promise<string>
 */
export async function getThemeProvider(themeId: string): Promise<string> {
  return getThemeProviderAction(themeId);
}