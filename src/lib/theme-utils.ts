import { tv, type TV } from 'tailwind-variants';
import type { ComponentStyleConfig } from '@/types';

// TV 配置的基础类型 - 用于 extend API
type TVConfig = Parameters<TV>[0];

/**
 * 解决布局类冲突
 *
 * 当 tv extend 合并了 base 和 theme 的类名后，可能出现布局冲突：
 * - 同时有 grid 和 flex
 * - 同时有 block 和 inline-flex
 *
 * 规则：后出现的布局类优先（主题覆盖基础）
 * 实现：检测布局冲突，保留最后一个布局模式的相关类
 */
function resolveLayoutConflicts(classes: string | undefined | null): string {
  if (!classes) return '';
  const classList = classes.split(/\s+/).filter(Boolean);

  // 布局类型检测
  const layoutPatterns = {
    flex: /^(flex|inline-flex)$/,
    grid: /^(grid|inline-grid)$/,
    block: /^(block|inline-block|inline)$/,
  };

  // 布局特有类模式（仅移除特定布局专属的类）
  // 共享类（gap-, justify-, items-, place-, content-, self-）不移除
  const layoutRelatedPatterns = {
    // flex 特有：flex, inline-flex, flex-col/row/wrap 等
    flex: /^(flex$|inline-flex$|flex-(col|row|wrap|nowrap|1|auto|initial|none)$|space-[xy]-)/,
    // grid 特有：grid, inline-grid, grid-cols/rows, auto-rows/cols, col-/row- span
    grid: /^(grid$|inline-grid$|grid-(cols|rows|flow)|auto-(rows|cols)|col-|row-)/,
    block: /^(block|inline-block|inline)$/,
  };

  // 找出所有布局类型及其最后出现的位置
  const layoutPositions: { type: string; index: number }[] = [];
  classList.forEach((cls, index) => {
    for (const [type, pattern] of Object.entries(layoutPatterns)) {
      if (pattern.test(cls)) {
        layoutPositions.push({ type, index });
      }
    }
  });

  // 如果存在多种布局类型，保留最后一个
  if (layoutPositions.length <= 1) {
    return classes;
  }

  // 找出最后一个布局类型
  const lastLayout = layoutPositions[layoutPositions.length - 1];
  const layoutTypesToRemove = new Set(
    layoutPositions
      .filter(lp => lp.type !== lastLayout.type)
      .map(lp => lp.type)
  );

  // 过滤掉需要移除的布局相关类
  const filtered = classList.filter(cls => {
    for (const type of layoutTypesToRemove) {
      const pattern = layoutRelatedPatterns[type as keyof typeof layoutRelatedPatterns];
      if (pattern.test(cls)) {
        return false;
      }
    }
    return true;
  });

  return filtered.join(' ');
}

/**
 * 计算主题化样式 - 同源性核心函数
 *
 * 遵循宪章 2.8 Generator 契约：
 * - Canvas 和 Generator 必须共用此函数，确保"所见 = 所得"
 * - 使用 tv 官方 extend API 进行样式合并
 * - 后处理解决布局冲突（grid vs flex）
 *
 * @param baseConfig 组件的基础配置 (buttonBaseConfig 等)
 * @param themeConfig 主题的组件扩展配置 (theme.components.Button 等)
 * @param props 组件的变体属性 (variant, size, orientation 等任意变体)
 * @returns 各个 slot 的最终 className
 */
export function computeThemedStyles(
  baseConfig: TVConfig,
  themeConfig: ComponentStyleConfig | undefined,
  props: Record<string, string | undefined>
): Record<string, string> {
  // 使用 tv 官方 extend API（同源性保证）
  const extendConfig: TVConfig = {
    extend: baseConfig,
    ...themeConfig,
  };
  const dynamicTv = tv(extendConfig);

  const styles = dynamicTv(props);

  // 提取各 slot 的 className，并解决布局冲突
  const result: Record<string, string> = {};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const stylesAny = styles as any;
  Object.keys(stylesAny).forEach((key) => {
    const styleValue = stylesAny[key];
    if (typeof styleValue === 'function') {
      const rawClassName = (styleValue as () => string)();
      // 后处理：解决布局冲突
      result[key] = resolveLayoutConflicts(rawClassName);
    }
  });

  return result;
}
