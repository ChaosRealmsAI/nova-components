/**
 * 主题完整性校验脚本
 *
 * 检查所有主题的一致性：
 * 1. 组件配置完整性 - 所有主题的组件数量和名称一致
 * 2. Token 完整性 - 所有主题的 CSS 变量一致
 * 3. Slots 完整性 - 每个组件的 slots 在各主题中一致
 *
 * 使用: pnpm validate:themes
 *
 * 特性：
 * - 自动扫描 src/lib/themes/ 目录下的所有主题
 * - 排除基础主题 (shadcn-default)
 * - 新增主题无需修改此脚本
 */

import * as fs from 'fs';
import * as path from 'path';
import type { ThemeDefinition } from '../src/types';

// ============================================================================
// 配置
// ============================================================================

/**
 * 基础主题列表（不参与校验）
 *
 * 这些主题直接使用组件的 BaseConfig，不需要自定义样式覆盖
 */
const BASE_THEMES = ['shadcn-default'];

/**
 * 排除的目录（不参与校验）
 *
 * - _template: 示例模板，用于指导新主题开发
 * - 以 _ 开头的目录都会被排除
 */
const EXCLUDED_DIRS = ['_template', 'styles'];

/**
 * 主题目录
 */
const THEMES_DIR = path.join(__dirname, '../src/lib/themes');

// ============================================================================
// 动态加载主题
// ============================================================================

async function loadStyledThemes(): Promise<Record<string, ThemeDefinition>> {
  const themes: Record<string, ThemeDefinition> = {};

  // 读取主题目录
  const entries = fs.readdirSync(THEMES_DIR, { withFileTypes: true });

  for (const entry of entries) {
    // 只处理目录，跳过文件
    if (!entry.isDirectory()) continue;

    const themeId = entry.name;

    // 跳过基础主题
    if (BASE_THEMES.includes(themeId)) continue;

    // 跳过排除的目录（styles、_template 等）
    if (EXCLUDED_DIRS.includes(themeId)) continue;

    // 跳过以 _ 开头的目录（模板、草稿等）
    if (themeId.startsWith('_')) continue;

    // 尝试加载主题
    const indexPath = path.join(THEMES_DIR, themeId, 'index.ts');
    if (!fs.existsSync(indexPath)) {
      console.warn(`⚠ 主题目录 ${themeId} 缺少 index.ts，跳过`);
      continue;
    }

    try {
      // 动态导入主题
      const module = await import(`../src/lib/themes/${themeId}`);

      // 查找导出的主题对象（约定：xxxTheme）
      const themeKey = Object.keys(module).find(
        (key) => key.endsWith('Theme') && module[key]?.id
      );

      if (themeKey && module[themeKey]) {
        themes[themeId] = module[themeKey];
      } else {
        console.warn(`⚠ 主题 ${themeId} 未找到有效的 ThemeDefinition 导出`);
      }
    } catch (err) {
      console.error(`✗ 加载主题 ${themeId} 失败:`, err);
    }
  }

  return themes;
}

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
  detail: (msg: string) => console.log(`  ${colors.dim}${msg}${colors.reset}`),
  header: (msg: string) => console.log(`\n${colors.bright}${msg}${colors.reset}`),
};

// ============================================================================
// 校验逻辑
// ============================================================================

interface ValidationResult {
  passed: boolean;
  errors: string[];
  warnings: string[];
}

function validateComponents(THEMES: Record<string, ThemeDefinition>): ValidationResult {
  const result: ValidationResult = { passed: true, errors: [], warnings: [] };
  const themeIds = Object.keys(THEMES);

  if (themeIds.length < 2) {
    result.warnings.push('只有一个主题，跳过组件对比');
    return result;
  }

  // 收集所有主题的组件名
  const componentsByTheme: Record<string, Set<string>> = {};
  for (const themeId of themeIds) {
    const theme = THEMES[themeId];
    componentsByTheme[themeId] = new Set(Object.keys(theme.components || {}));
  }

  // 计算所有组件的并集
  const allComponents = new Set<string>();
  for (const components of Object.values(componentsByTheme)) {
    for (const comp of components) {
      allComponents.add(comp);
    }
  }

  // 检查每个主题是否有所有组件
  for (const themeId of themeIds) {
    const themeComponents = componentsByTheme[themeId];
    const missing: string[] = [];

    for (const comp of allComponents) {
      if (!themeComponents.has(comp)) {
        missing.push(comp);
      }
    }

    if (missing.length > 0) {
      result.passed = false;
      result.errors.push(`主题 [${themeId}] 缺少组件配置: ${missing.join(', ')}`);
    }
  }

  // 统计
  if (result.passed) {
    result.warnings.push(`所有 ${themeIds.length} 个主题都有 ${allComponents.size} 个组件配置`);
  }

  return result;
}

function validateTokens(THEMES: Record<string, ThemeDefinition>): ValidationResult {
  const result: ValidationResult = { passed: true, errors: [], warnings: [] };
  const themeIds = Object.keys(THEMES);

  if (themeIds.length < 2) {
    result.warnings.push('只有一个主题，跳过 Token 对比');
    return result;
  }

  // 收集所有主题的 token keys
  const tokensByTheme: Record<string, Set<string>> = {};
  for (const themeId of themeIds) {
    const theme = THEMES[themeId];
    tokensByTheme[themeId] = new Set(Object.keys(theme.cssVars || {}));
  }

  // 计算所有 token 的并集
  const allTokens = new Set<string>();
  for (const tokens of Object.values(tokensByTheme)) {
    for (const token of tokens) {
      allTokens.add(token);
    }
  }

  // 检查每个主题是否有所有 token
  for (const themeId of themeIds) {
    const themeTokens = tokensByTheme[themeId];
    const missing: string[] = [];

    for (const token of allTokens) {
      if (!themeTokens.has(token)) {
        missing.push(token);
      }
    }

    if (missing.length > 0) {
      result.passed = false;
      result.errors.push(`主题 [${themeId}] 缺少 Token: ${missing.slice(0, 5).join(', ')}${missing.length > 5 ? ` ... 等 ${missing.length} 个` : ''}`);
    }
  }

  // 统计
  if (result.passed) {
    result.warnings.push(`所有 ${themeIds.length} 个主题都有 ${allTokens.size} 个 Token`);
  }

  return result;
}

function validateSlots(THEMES: Record<string, ThemeDefinition>): ValidationResult {
  const result: ValidationResult = { passed: true, errors: [], warnings: [] };
  const themeIds = Object.keys(THEMES);

  if (themeIds.length < 2) {
    result.warnings.push('只有一个主题，跳过 Slots 对比');
    return result;
  }

  // 收集所有组件名
  const allComponents = new Set<string>();
  for (const themeId of themeIds) {
    const theme = THEMES[themeId];
    for (const comp of Object.keys(theme.components || {})) {
      allComponents.add(comp);
    }
  }

  // 对每个组件，检查 slots 是否一致
  const slotIssues: string[] = [];

  for (const compName of allComponents) {
    const slotsByTheme: Record<string, Set<string>> = {};

    for (const themeId of themeIds) {
      const theme = THEMES[themeId];
      const compConfig = theme.components?.[compName];
      if (compConfig?.slots) {
        slotsByTheme[themeId] = new Set(Object.keys(compConfig.slots));
      } else {
        slotsByTheme[themeId] = new Set();
      }
    }

    // 计算所有 slots 的并集
    const allSlots = new Set<string>();
    for (const slots of Object.values(slotsByTheme)) {
      for (const slot of slots) {
        allSlots.add(slot);
      }
    }

    // 检查每个主题是否有所有 slots（允许为空，因为有些组件可能不需要覆盖）
    // 只在有差异时报告
    const themesWithSlots = themeIds.filter(id => slotsByTheme[id].size > 0);

    if (themesWithSlots.length > 0 && themesWithSlots.length < themeIds.length) {
      // 有些主题有 slots，有些没有
      const themesWithout = themeIds.filter(id => slotsByTheme[id].size === 0);
      slotIssues.push(`组件 [${compName}] 在以下主题中没有 slots 配置: ${themesWithout.join(', ')}`);
    }

    // 检查 slots 差异
    if (allSlots.size > 0 && themesWithSlots.length > 1) {
      for (const themeId of themesWithSlots) {
        const themeSlots = slotsByTheme[themeId];
        const missing: string[] = [];

        for (const slot of allSlots) {
          if (!themeSlots.has(slot)) {
            missing.push(slot);
          }
        }

        if (missing.length > 0) {
          slotIssues.push(`组件 [${compName}] 在主题 [${themeId}] 中缺少 slots: ${missing.join(', ')}`);
        }
      }
    }
  }

  if (slotIssues.length > 0) {
    result.passed = false;
    result.errors = slotIssues;
  } else {
    result.warnings.push(`${allComponents.size} 个组件的 Slots 配置一致`);
  }

  return result;
}

function validateVariants(THEMES: Record<string, ThemeDefinition>): ValidationResult {
  const result: ValidationResult = { passed: true, errors: [], warnings: [] };
  const themeIds = Object.keys(THEMES);

  if (themeIds.length < 2) {
    result.warnings.push('只有一个主题，跳过 Variants 对比');
    return result;
  }

  // 收集所有组件名
  const allComponents = new Set<string>();
  for (const themeId of themeIds) {
    const theme = THEMES[themeId];
    for (const comp of Object.keys(theme.components || {})) {
      allComponents.add(comp);
    }
  }

  const variantIssues: string[] = [];

  for (const compName of allComponents) {
    // 收集所有 variant keys
    const variantKeysByTheme: Record<string, Set<string>> = {};

    for (const themeId of themeIds) {
      const theme = THEMES[themeId];
      const compConfig = theme.components?.[compName];
      variantKeysByTheme[themeId] = new Set(Object.keys(compConfig?.variants || {}));
    }

    // 计算并集
    const allVariantKeys = new Set<string>();
    for (const keys of Object.values(variantKeysByTheme)) {
      for (const key of keys) {
        allVariantKeys.add(key);
      }
    }

    // 检查差异（只检查有 variants 的主题）
    const themesWithVariants = themeIds.filter(id => variantKeysByTheme[id].size > 0);

    if (themesWithVariants.length > 1) {
      for (const themeId of themesWithVariants) {
        const themeVariantKeys = variantKeysByTheme[themeId];
        const missing: string[] = [];

        for (const key of allVariantKeys) {
          if (!themeVariantKeys.has(key)) {
            missing.push(key);
          }
        }

        if (missing.length > 0) {
          variantIssues.push(`组件 [${compName}] 在主题 [${themeId}] 中缺少 variants: ${missing.join(', ')}`);
        }
      }
    }
  }

  if (variantIssues.length > 0) {
    // variants 差异只作为警告，因为不是所有主题都需要覆盖所有 variants
    result.warnings = variantIssues;
  } else {
    result.warnings.push(`Variants 配置检查完成`);
  }

  return result;
}

// ============================================================================
// 主函数
// ============================================================================

async function main() {
  console.log(`
${colors.bright}${colors.magenta}╔════════════════════════════════════════════════════════════╗
║              Nova Components 主题完整性校验                  ║
╚════════════════════════════════════════════════════════════╝${colors.reset}
`);

  // 动态加载主题
  log.info('正在扫描主题目录...');
  const THEMES = await loadStyledThemes();
  const themeIds = Object.keys(THEMES);

  if (themeIds.length === 0) {
    log.error('未找到任何风格化主题！');
    process.exit(1);
  }

  log.info(`检测到 ${themeIds.length} 个风格化主题: ${themeIds.join(', ')}`);
  if (BASE_THEMES.length > 0) {
    log.info(`排除的基础主题: ${BASE_THEMES.join(', ')}`);
  }

  let hasErrors = false;

  // 1. 检查组件完整性
  log.title('组件配置检查');
  const compResult = validateComponents(THEMES);
  if (compResult.errors.length > 0) {
    hasErrors = true;
    for (const err of compResult.errors) {
      log.error(err);
    }
  }
  for (const warn of compResult.warnings) {
    log.success(warn);
  }

  // 2. 检查 Token 完整性
  log.title('Token 完整性检查');
  const tokenResult = validateTokens(THEMES);
  if (tokenResult.errors.length > 0) {
    hasErrors = true;
    for (const err of tokenResult.errors) {
      log.error(err);
    }
  }
  for (const warn of tokenResult.warnings) {
    log.success(warn);
  }

  // 3. 检查 Slots 完整性
  log.title('Slots 配置检查');
  const slotsResult = validateSlots(THEMES);
  if (slotsResult.errors.length > 0) {
    hasErrors = true;
    for (const err of slotsResult.errors) {
      log.error(err);
    }
  }
  for (const warn of slotsResult.warnings) {
    if (slotsResult.errors.length === 0) {
      log.success(warn);
    }
  }

  // 4. 检查 Variants 完整性（警告级别）
  log.title('Variants 配置检查');
  const variantsResult = validateVariants(THEMES);
  if (variantsResult.warnings.length > 0 && variantsResult.warnings[0] !== 'Variants 配置检查完成') {
    for (const warn of variantsResult.warnings) {
      log.warn(warn);
    }
  } else {
    log.success('Variants 配置检查完成');
  }

  // 总结
  console.log(`
${colors.bright}────────────────────────────────────────────────────────────${colors.reset}
`);

  if (hasErrors) {
    console.log(`${colors.bgRed}${colors.white}${colors.bright}  校验失败  ${colors.reset} 请修复上述错误后重试\n`);
    process.exit(1);
  } else {
    console.log(`${colors.bgGreen}${colors.white}${colors.bright}  校验通过  ${colors.reset} 所有主题配置完整一致\n`);
    process.exit(0);
  }
}

main().catch((err) => {
  console.error('校验脚本执行失败:', err);
  process.exit(1);
});
