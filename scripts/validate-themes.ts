/**
 * 主题完整性校验脚本
 *
 * 功能：
 * 1. 组件配置完整性 - 是否包含模板中的所有组件
 * 2. Token 完整性 - 是否包含模板中的所有 CSS 变量
 * 3. Slots 完整性 - 每个组件是否包含模板中的所有 slots
 * 4. Slots 自定义检查 - 检查 slot 是否为空（未实现）
 *
 * 使用:
 *   pnpm validate:themes           # 校验所有主题
 *   pnpm validate:themes ocean-blue  # 校验指定主题
 */

import * as fs from 'fs';
import * as path from 'path';
import type { ThemeDefinition } from '../src/types';

// ============================================================================
// 配置
// ============================================================================

const TEMPLATE_THEME = 'theme-template';
const EXCLUDED_THEMES = ['shadcn-default', 'styles', 'theme-template'];
const THEMES_DIR = path.join(__dirname, '../src/lib/themes');

// ============================================================================
// 控制台颜色
// ============================================================================

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  bgRed: '\x1b[41m',
  bgGreen: '\x1b[42m',
  bgYellow: '\x1b[43m',
};

const log = {
  title: (msg: string) => console.log(`\n${colors.bright}${colors.cyan}━━━ ${msg} ━━━${colors.reset}\n`),
  success: (msg: string) => console.log(`${colors.green}✓${colors.reset} ${msg}`),
  error: (msg: string) => console.log(`${colors.red}✗${colors.reset} ${msg}`),
  warn: (msg: string) => console.log(`${colors.yellow}⚠${colors.reset} ${msg}`),
  info: (msg: string) => console.log(`${colors.blue}ℹ${colors.reset} ${msg}`),
};

// ============================================================================
// 动态加载主题
// ============================================================================

async function loadTheme(themeId: string): Promise<ThemeDefinition | null> {
  const indexPath = path.join(THEMES_DIR, themeId, 'index.ts');
  if (!fs.existsSync(indexPath)) {
    return null;
  }

  try {
    const module = await import(`../src/lib/themes/${themeId}`);
    const themeKey = Object.keys(module).find(
      (key) => key.endsWith('Theme') && module[key]?.id
    );
    if (themeKey && module[themeKey]) {
      return module[themeKey];
    }
  } catch (err) {
    console.error(`✗ 加载主题 ${themeId} 失败:`, err);
  }
  return null;
}

async function loadAllThemes(): Promise<Record<string, ThemeDefinition>> {
  const themes: Record<string, ThemeDefinition> = {};
  const entries = fs.readdirSync(THEMES_DIR, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const themeId = entry.name;
    if (EXCLUDED_THEMES.includes(themeId)) continue;

    const theme = await loadTheme(themeId);
    if (theme) {
      themes[themeId] = theme;
    }
  }

  return themes;
}

// ============================================================================
// 校验逻辑
// ============================================================================

interface ValidationResult {
  passed: boolean;
  errors: string[];
  warnings: string[];
}

/**
 * 检查组件完整性
 */
function validateComponentsAgainstTemplate(
  template: ThemeDefinition,
  themes: Record<string, ThemeDefinition>
): ValidationResult {
  const result: ValidationResult = { passed: true, errors: [], warnings: [] };
  const templateComponents = new Set(Object.keys(template.components || {}));

  for (const [themeId, theme] of Object.entries(themes)) {
    const themeComponents = new Set(Object.keys(theme.components || {}));
    const missing: string[] = [];

    for (const comp of templateComponents) {
      if (!themeComponents.has(comp)) {
        missing.push(comp);
      }
    }

    if (missing.length > 0) {
      result.passed = false;
      result.errors.push(`主题 [${themeId}] 缺少组件: ${missing.join(', ')}`);
    }
  }

  if (result.passed) {
    result.warnings.push(`所有主题都包含模板定义的 ${templateComponents.size} 个组件`);
  }

  return result;
}

/**
 * 检查 Token 完整性
 */
function validateTokensAgainstTemplate(
  template: ThemeDefinition,
  themes: Record<string, ThemeDefinition>
): ValidationResult {
  const result: ValidationResult = { passed: true, errors: [], warnings: [] };
  const templateTokens = new Set(Object.keys(template.cssVars || {}));

  for (const [themeId, theme] of Object.entries(themes)) {
    const themeTokens = new Set(Object.keys(theme.cssVars || {}));
    const missing: string[] = [];

    for (const token of templateTokens) {
      if (!themeTokens.has(token)) {
        missing.push(token);
      }
    }

    if (missing.length > 0) {
      result.passed = false;
      const display = missing.length > 5
        ? `${missing.slice(0, 5).join(', ')} ... 等 ${missing.length} 个`
        : missing.join(', ');
      result.errors.push(`主题 [${themeId}] 缺少 Token: ${display}`);
    }
  }

  if (result.passed) {
    result.warnings.push(`所有主题都包含模板定义的 ${templateTokens.size} 个 Token`);
  }

  return result;
}

/**
 * 检查 Slots 结构完整性
 */
function validateSlotsAgainstTemplate(
  template: ThemeDefinition,
  themes: Record<string, ThemeDefinition>
): ValidationResult {
  const result: ValidationResult = { passed: true, errors: [], warnings: [] };
  const templateComponents = template.components || {};

  for (const [compName, compConfig] of Object.entries(templateComponents)) {
    const templateSlots = new Set(Object.keys(compConfig?.slots || {}));
    if (templateSlots.size === 0) continue;

    for (const [themeId, theme] of Object.entries(themes)) {
      const themeCompConfig = theme.components?.[compName];
      const themeSlots = new Set(Object.keys(themeCompConfig?.slots || {}));
      const missing: string[] = [];

      for (const slot of templateSlots) {
        if (!themeSlots.has(slot)) {
          missing.push(slot);
        }
      }

      if (missing.length > 0) {
        result.passed = false;
        result.errors.push(`组件 [${compName}] 在主题 [${themeId}] 中缺少 slots: ${missing.join(', ')}`);
      }
    }
  }

  if (result.passed) {
    result.warnings.push(`所有主题的 Slots 结构符合模板标准`);
  }

  return result;
}

// ============================================================================
// 必需样式配置 - 功能性验证规则
// ============================================================================
//
// 📌 这是防止"组件不工作"问题的核心机制
//
// 某些样式是"功能性必需"的，没有它们组件就无法正常工作。
// 在这里配置这些规则，验证脚本会自动检查所有主题。
//
// 添加新规则的步骤：
// 1. 在 REQUIRED_STYLES 中添加配置
// 2. 运行 pnpm validate:themes 确认生效
// ============================================================================

interface RequiredStyleRule {
  slot: string;                    // 要检查的 slot 名称
  patterns: RegExp[];              // 必需样式的正则模式（满足任一即可）
  allRequired?: boolean;           // true = 所有模式都必须匹配
  description: string;             // 样式描述（用于错误信息）
  reason: string;                  // 为什么必需（用于错误信息）
}

/**
 * 必需样式配置表
 *
 * 格式: { 组件名: [规则1, 规则2, ...] }
 *
 * 💡 发现新的必需样式？在这里添加规则即可！
 */
const REQUIRED_STYLES: Record<string, RequiredStyleRule[]> = {
  // ScrollArea 必须有高度，否则滚动条不会显示
  'ScrollArea': [
    {
      slot: 'base',
      patterns: [
        /\bh-\d+/,           // h-64, h-48 等
        /\bh-\[.+\]/,        // h-[200px] 等任意值
        /\bmin-h-/,          // min-h-*
        /\bmax-h-/,          // max-h-*
        /\bh-full/,          // h-full
        /\bh-screen/,        // h-screen
      ],
      description: '高度定义 (如 h-64)',
      reason: '没有高度限制，内容不会溢出，滚动条不会显示',
    },
  ],

  // ScrollBar 必须有方向尺寸样式
  'ScrollBar': [
    {
      slot: 'base',
      patterns: [
        /data-\[orientation=vertical\]/,
        /data-\[orientation=horizontal\]/,
      ],
      allRequired: true,  // 两个方向都必须有
      description: '方向尺寸样式 (data-[orientation=vertical/horizontal])',
      reason: '没有方向样式，滚动条没有尺寸',
    },
  ],

  // 💡 添加更多组件规则示例：
  // 'Dialog': [
  //   {
  //     slot: 'overlay',
  //     patterns: [/\bfixed\b/, /\binset-0\b/],
  //     allRequired: true,
  //     description: '定位样式 (fixed inset-0)',
  //     reason: '没有定位，遮罩层不会覆盖全屏',
  //   },
  // ],
};

/**
 * 通用的必需样式验证函数
 * 根据 REQUIRED_STYLES 配置自动检查所有主题
 */
function validateRequiredStyles(
  themes: Record<string, ThemeDefinition>
): ValidationResult {
  const result: ValidationResult = { passed: true, errors: [], warnings: [] };
  const checkedComponents = new Set<string>();

  for (const [componentName, rules] of Object.entries(REQUIRED_STYLES)) {
    checkedComponents.add(componentName);

    for (const rule of rules) {
      for (const [themeId, theme] of Object.entries(themes)) {
        const componentConfig = theme.components?.[componentName];
        if (!componentConfig) continue;

        const slotValue = componentConfig.slots?.[rule.slot];
        const slotStr = Array.isArray(slotValue)
          ? slotValue.join(' ')
          : (slotValue || '');

        let isValid: boolean;
        let missingPatterns: string[] = [];

        if (rule.allRequired) {
          // 所有模式都必须匹配
          missingPatterns = rule.patterns
            .filter(p => !p.test(slotStr))
            .map(p => p.source);
          isValid = missingPatterns.length === 0;
        } else {
          // 满足任一模式即可
          isValid = rule.patterns.some(p => p.test(slotStr));
        }

        if (!isValid) {
          result.passed = false;
          result.errors.push(
            `主题 [${themeId}] 的 ${componentName}.slots.${rule.slot} 缺少${rule.description}` +
            `\n     原因: ${rule.reason}` +
            (missingPatterns.length > 0 ? `\n     缺少: ${missingPatterns.join(', ')}` : '')
          );
        }
      }
    }
  }

  if (result.passed) {
    const componentList = Array.from(checkedComponents).join(', ');
    result.warnings.push(`所有主题的必需样式检查通过 (${componentList})`);
  }

  return result;
}

/**
 * 检查 slot 值是否为空（未自定义）
 */
function isSlotEmpty(value: unknown): boolean {
  if (value === undefined || value === null) return true;
  if (value === '') return true;
  if (Array.isArray(value) && value.length === 0) return true;
  if (typeof value === 'string' && value.trim() === '') return true;
  return false;
}

/**
 * 检查组件的 slots 是否已自定义（非空）
 */
function validateSlotsCustomization(
  themes: Record<string, ThemeDefinition>
): Record<string, { total: number; empty: number; emptySlots: string[] }> {
  const results: Record<string, { total: number; empty: number; emptySlots: string[] }> = {};

  for (const [themeId, theme] of Object.entries(themes)) {
    const components = theme.components || {};
    let totalSlots = 0;
    let emptySlots = 0;
    const emptySlotsList: string[] = [];

    for (const [compName, compConfig] of Object.entries(components)) {
      const slots = compConfig?.slots || {};

      for (const [slotName, slotValue] of Object.entries(slots)) {
        totalSlots++;
        if (isSlotEmpty(slotValue)) {
          emptySlots++;
          emptySlotsList.push(`${compName}.${slotName}`);
        }
      }

      // 也检查 variants 里的 slots
      // 注意：'default' variant 为空是合理设计（继承 slots 基础样式），不计入空值统计
      const variants = compConfig?.variants || {};
      for (const [variantType, variantOptions] of Object.entries(variants)) {
        if (typeof variantOptions === 'object' && variantOptions !== null) {
          for (const [variantName, variantConfig] of Object.entries(variantOptions as Record<string, unknown>)) {
            // 跳过 'default' variant 的空值检查
            const isDefaultVariant = variantName === 'default';

            if (typeof variantConfig === 'object' && variantConfig !== null) {
              const variantSlots = (variantConfig as Record<string, unknown>);
              for (const [slotName, slotValue] of Object.entries(variantSlots)) {
                // default variant 的空值不计入统计（因为会继承 slots 基础样式）
                if (isDefaultVariant && isSlotEmpty(slotValue)) {
                  continue;
                }

                totalSlots++;
                if (isSlotEmpty(slotValue)) {
                  emptySlots++;
                  emptySlotsList.push(`${compName}.variants.${variantType}.${variantName}.${slotName}`);
                }
              }
            }
          }
        }
      }
    }

    results[themeId] = {
      total: totalSlots,
      empty: emptySlots,
      emptySlots: emptySlotsList,
    };
  }

  return results;
}

// ============================================================================
// 主函数
// ============================================================================

async function main() {
  // 解析命令行参数
  const args = process.argv.slice(2);
  const targetTheme = args[0]; // 可选：指定要校验的主题

  console.log(`
${colors.bright}${colors.magenta}╔════════════════════════════════════════════════════════════╗
║              Nova Components 主题完整性校验                  ║
║           (以 theme-template 为基准模板)                     ║
╚════════════════════════════════════════════════════════════╝${colors.reset}
`);

  // 1. 加载基准模板
  log.info('正在加载基准模板 theme-template...');
  const template = await loadTheme(TEMPLATE_THEME);

  if (!template) {
    log.error('无法加载 theme-template，请确保该目录存在且有效');
    process.exit(1);
  }

  const templateComponents = Object.keys(template.components || {});
  const templateTokens = Object.keys(template.cssVars || {});
  log.success(`模板包含 ${templateComponents.length} 个组件, ${templateTokens.length} 个 Token`);

  // 2. 加载主题
  let themes: Record<string, ThemeDefinition>;

  if (targetTheme) {
    // 校验指定主题
    log.info(`正在加载指定主题: ${targetTheme}...`);
    const theme = await loadTheme(targetTheme);
    if (!theme) {
      log.error(`无法加载主题 ${targetTheme}`);
      process.exit(1);
    }
    themes = { [targetTheme]: theme };
  } else {
    // 校验所有主题
    log.info('正在扫描所有主题...');
    themes = await loadAllThemes();
  }

  const themeIds = Object.keys(themes);

  if (themeIds.length === 0) {
    log.warn('未找到需要校验的主题');
    process.exit(0);
  }

  log.info(`检测到 ${themeIds.length} 个主题待校验: ${themeIds.join(', ')}`);

  let hasErrors = false;

  // 3. 检查组件完整性
  log.title('组件配置检查');
  const compResult = validateComponentsAgainstTemplate(template, themes);
  if (compResult.errors.length > 0) {
    hasErrors = true;
    for (const err of compResult.errors) {
      log.error(err);
    }
  }
  for (const warn of compResult.warnings) {
    log.success(warn);
  }

  // 4. 检查 Token 完整性
  log.title('Token 完整性检查');
  const tokenResult = validateTokensAgainstTemplate(template, themes);
  if (tokenResult.errors.length > 0) {
    hasErrors = true;
    for (const err of tokenResult.errors) {
      log.error(err);
    }
  }
  for (const warn of tokenResult.warnings) {
    log.success(warn);
  }

  // 5. 检查 Slots 结构完整性
  log.title('Slots 结构检查');
  const slotsResult = validateSlotsAgainstTemplate(template, themes);
  if (slotsResult.errors.length > 0) {
    hasErrors = true;
    for (const err of slotsResult.errors) {
      log.error(err);
    }
  }
  for (const warn of slotsResult.warnings) {
    log.success(warn);
  }

  // 5.1 检查必需样式（功能性验证）
  log.title('必需样式检查（功能性验证）');
  const requiredStylesResult = validateRequiredStyles(themes);
  if (requiredStylesResult.errors.length > 0) {
    hasErrors = true;
    for (const err of requiredStylesResult.errors) {
      log.error(err);
    }
  }
  for (const warn of requiredStylesResult.warnings) {
    log.success(warn);
  }

  // 6. 检查 Slots 自定义情况（是否为空）
  log.title('Slots 自定义检查（空值检测）');
  const customResults = validateSlotsCustomization(themes);

  for (const [themeId, result] of Object.entries(customResults)) {
    const customized = result.total - result.empty;
    const percentage = result.total > 0 ? Math.round((customized / result.total) * 100) : 0;

    if (result.empty === 0) {
      log.success(`主题 [${themeId}]: ${customized}/${result.total} slots 已自定义 (${percentage}%) ✓ 全部完成`);
    } else if (percentage >= 80) {
      log.warn(`主题 [${themeId}]: ${customized}/${result.total} slots 已自定义 (${percentage}%) - ${result.empty} 个空值`);
    } else {
      hasErrors = true;
      log.error(`主题 [${themeId}]: ${customized}/${result.total} slots 已自定义 (${percentage}%) - ${result.empty} 个空值`);
    }

    // 显示空 slots 详情（最多显示 10 个）
    if (result.empty > 0) {
      const displaySlots = result.emptySlots.slice(0, 10);
      console.log(`   ${colors.dim}空值: ${displaySlots.join(', ')}${result.emptySlots.length > 10 ? ` ... 等 ${result.emptySlots.length} 个` : ''}${colors.reset}`);
    }
  }

  // 总结
  console.log(`
${colors.bright}────────────────────────────────────────────────────────────${colors.reset}
`);

  if (hasErrors) {
    console.log(`${colors.bgRed}${colors.white}${colors.bright}  校验失败  ${colors.reset} 请修复上述错误后重试\n`);
    process.exit(1);
  } else {
    console.log(`${colors.bgGreen}${colors.white}${colors.bright}  校验通过  ${colors.reset} 所有主题配置符合标准\n`);
    process.exit(0);
  }
}

main().catch((err) => {
  console.error('校验脚本执行失败:', err);
  process.exit(1);
});
