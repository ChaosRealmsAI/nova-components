'use server';

import fs from 'fs/promises';
import path from 'path';
import { getManifest, hasManifest } from '@/registry/manifests';

/**
 * Source Code Accessor (Server Action)
 *
 * 替代原有的 scripts/generate-sources.ts
 * 直接从文件系统读取源码，保证"同源性"且无需构建步骤。
 *
 * v2: 优先使用组件 manifest，fallback 到静态映射
 */

// ============================================================================
// 路径映射配置
// ============================================================================

const COMPONENT_SOURCES: Record<string, string> = {
  button: 'src/components/nova-ui/atmos/button/index.tsx',
  badge: 'src/components/nova-ui/atmos/badge/index.tsx',
  input: 'src/components/nova-ui/atmos/input/index.tsx',
  label: 'src/components/nova-ui/atmos/label/index.tsx',
  checkbox: 'src/components/nova-ui/atmos/checkbox/index.tsx',
  switch: 'src/components/nova-ui/atmos/switch/index.tsx',
  slider: 'src/components/nova-ui/atmos/slider/index.tsx',
  progress: 'src/components/nova-ui/atmos/progress/index.tsx',
  'radio-group': 'src/components/nova-ui/atmos/radio-group/index.tsx',
  separator: 'src/components/nova-ui/atmos/separator/index.tsx',
  skeleton: 'src/components/nova-ui/atmos/skeleton/index.tsx',
  spinner: 'src/components/nova-ui/atmos/spinner/index.tsx',
  textarea: 'src/components/nova-ui/atmos/textarea/index.tsx',
  toggle: 'src/components/nova-ui/atmos/toggle/index.tsx',
  avatar: 'src/components/nova-ui/atmos/avatar/index.tsx',
  kbd: 'src/components/nova-ui/atmos/kbd/index.tsx',
  'aspect-ratio': 'src/components/nova-ui/atmos/aspect-ratio/index.tsx',
  'scroll-area': 'src/components/nova-ui/atmos/scroll-area/index.tsx',
  popover: 'src/components/nova-ui/atmos/popover/index.tsx',
  tooltip: 'src/components/nova-ui/atmos/tooltip/index.tsx',
};

// Block 组件源码映射
const BLOCK_SOURCES: Record<string, string> = {
  'alert-dialog': 'src/components/nova-ui/blocks/alert-dialog/index.tsx',
  tabs: 'src/components/nova-ui/blocks/tabs/index.tsx',
  'dropdown-menu': 'src/components/nova-ui/blocks/dropdown-menu/index.tsx',
  pagination: 'src/components/nova-ui/blocks/pagination/index.tsx',
  select: 'src/components/nova-ui/blocks/select/index.tsx',
  form: 'src/components/nova-ui/blocks/form/index.tsx',
  'button-group': 'src/components/nova-ui/blocks/button-group/index.tsx',
  alert: 'src/components/nova-ui/blocks/alert/index.tsx',
  'toggle-group': 'src/components/nova-ui/blocks/toggle-group/index.tsx',
  breadcrumb: 'src/components/nova-ui/blocks/breadcrumb/index.tsx',
  'input-group': 'src/components/nova-ui/blocks/input-group/index.tsx',
  drawer: 'src/components/nova-ui/blocks/drawer/index.tsx',
  sheet: 'src/components/nova-ui/blocks/sheet/index.tsx',
  'hover-card': 'src/components/nova-ui/blocks/hover-card/index.tsx',
  'context-menu': 'src/components/nova-ui/blocks/context-menu/index.tsx',
  'data-table': 'src/components/nova-ui/blocks/data-table/index.tsx',
  'date-picker': 'src/components/nova-ui/blocks/date-picker/index.tsx',
  'calendar': 'src/components/nova-ui/blocks/calendar/index.tsx',
  'carousel': 'src/components/nova-ui/blocks/carousel/index.tsx',
  combobox: 'src/components/nova-ui/blocks/combobox/index.tsx',
  resizable: 'src/components/nova-ui/blocks/resizable/index.tsx',
  sonner: 'src/components/nova-ui/blocks/sonner/index.tsx',
};

// 主题文件映射
const THEME_BASE_PATH = 'src/lib/themes';

// ============================================================================
// 精准导出：组件→主题配置文件映射
// ============================================================================

// 组件类型 → 主题配置文件路径 + 导出的配置名（支持多配置）
type ThemeConfigMapping = { file: string; configName: string; componentName: string };
const COMPONENT_THEME_MAP: Record<string, ThemeConfigMapping[]> = {
  button: [{ file: 'components/button.ts', configName: 'buttonConfig', componentName: 'Button' }],
  badge: [{ file: 'components/badge.ts', configName: 'badgeConfig', componentName: 'Badge' }],
  input: [{ file: 'components/input.ts', configName: 'inputConfig', componentName: 'Input' }],
  textarea: [{ file: 'components/input.ts', configName: 'textareaConfig', componentName: 'Textarea' }],
  label: [{ file: 'components/input.ts', configName: 'labelConfig', componentName: 'Label' }],
  checkbox: [{ file: 'components/controls.ts', configName: 'checkboxConfig', componentName: 'Checkbox' }],
  switch: [{ file: 'components/controls.ts', configName: 'switchConfig', componentName: 'Switch' }],
  slider: [{ file: 'components/controls.ts', configName: 'sliderConfig', componentName: 'Slider' }],
  toggle: [{ file: 'components/controls.ts', configName: 'toggleConfig', componentName: 'Toggle' }],
  'radio-group': [{ file: 'components/controls.ts', configName: 'radioGroupConfig', componentName: 'RadioGroup' }],
  progress: [{ file: 'components/feedback.ts', configName: 'progressConfig', componentName: 'Progress' }],
  skeleton: [{ file: 'components/feedback.ts', configName: 'skeletonConfig', componentName: 'Skeleton' }],
  spinner: [{ file: 'components/feedback.ts', configName: 'spinnerConfig', componentName: 'Spinner' }],
  avatar: [{ file: 'components/display.ts', configName: 'avatarConfig', componentName: 'Avatar' }],
  kbd: [{ file: 'components/display.ts', configName: 'kbdConfig', componentName: 'Kbd' }],
  separator: [{ file: 'components/display.ts', configName: 'separatorConfig', componentName: 'Separator' }],
  'aspect-ratio': [{ file: 'components/display.ts', configName: 'aspectRatioConfig', componentName: 'AspectRatio' }],
  'scroll-area': [
    { file: 'components/display.ts', configName: 'scrollAreaConfig', componentName: 'ScrollArea' },
    { file: 'components/display.ts', configName: 'scrollBarConfig', componentName: 'ScrollBar' },
  ],
  popover: [{ file: 'components/overlay.ts', configName: 'popoverConfig', componentName: 'Popover' }],
  tooltip: [{ file: 'components/overlay.ts', configName: 'tooltipConfig', componentName: 'Tooltip' }],
};

// ============================================================================
// 工具函数
// ============================================================================

function transformImportPaths(source: string): string {
  // 将绝对路径 (@/...) 转换为相对路径，以便在导出包中工作
  // ADR-006 方案A: 主题系统从 @/lib/themes 移到导出包的 themes/
  return source
    // 先处理具体的子路径，再处理通用路径（顺序很重要！）
    .replace(/@\/lib\/themes\/use-theme/g, '../themes')  // ADR-006: use-theme 指向 themes/index.ts
    .replace(/@\/lib\/themes/g, '../themes')  // ADR-006: 主题导入路径
    .replace(/@\/lib\//g, '../lib/')
    // 组件间依赖：@/components/nova-ui/atmos/xxx → ./xxx（导出包中组件平铺在 components/ 下）
    .replace(/@\/components\/nova-ui\/atmos\/([^'"/]+)/g, './$1')
    .replace(/@\/components\/nova-ui\/blocks\/([^'"/]+)/g, './$1')
    // 通用组件路径（fallback）
    .replace(/@\/components\//g, '../components/')
;
}

/**
 * 读取并内联配置文件
 * 如果检测到 import { xxxConfig } from './xxx.config'，则读取该文件并替换 import 语句
 * 同时移除对应的 re-export 语句（避免重复导出）
 */
async function readAndInlineConfig(filePath: string, content: string): Promise<string> {
  const configImportRegex = /import\s+{([^}]+)}\s+from\s+['"]\.\/([^'"]+\.config)['"];?/g;
  let match;
  let newContent = content;
  const inlinedExports: string[] = []; // 记录已内联的导出名

  // 重置 regex lastIndex
  configImportRegex.lastIndex = 0;

  while ((match = configImportRegex.exec(content)) !== null) {
    const [fullMatch, importedNames, configFileName] = match;
    const configFilePath = path.join(path.dirname(filePath), `${configFileName}.ts`);

    try {
      await fs.access(configFilePath);
      const configContent = await fs.readFile(configFilePath, 'utf-8');

      // 移除 configContent 可能存在的 'use client' (虽然 config 通常是纯对象)
      const cleanConfigContent = configContent.replace(/^['"]use client['"];?\s*/, '');

      // 替换 import 语句
      // 我们在 import 语句的位置插入 config 内容
      newContent = newContent.replace(fullMatch, cleanConfigContent);

      // 记录导入的名称，用于后续移除重复的 re-export
      const names = importedNames.split(',').map(n => n.trim());
      inlinedExports.push(...names);

    } catch (error) {
      console.warn(`Failed to inline config file: ${configFilePath}`, error);
      // 如果读取失败，保持原样（虽然这会导致导出代码报错）
    }
  }

  // 移除已内联配置的 re-export 语句
  // 匹配 export { xxxConfig }; 或 export { xxxConfig, yyyConfig };
  for (const exportName of inlinedExports) {
    // 移除单独的 re-export: export { xxxConfig };
    const singleExportRegex = new RegExp(`\\nexport\\s+{\\s*${exportName}\\s*};?`, 'g');
    newContent = newContent.replace(singleExportRegex, '');
  }

  return newContent;
}

async function readAndTransform(relativePath: string): Promise<string | null> {
  try {
    const fullPath = path.join(process.cwd(), relativePath);
    // 检查文件是否存在
    await fs.access(fullPath);
    
    const content = await fs.readFile(fullPath, 'utf-8');
    
    // 先处理内联，再处理路径转换
    const inlinedContent = await readAndInlineConfig(fullPath, content);
    return transformImportPaths(inlinedContent);
  } catch (error) {
    console.error(`Failed to read source file: ${relativePath}`, error);
    return null;
  }
}

// ============================================================================
// Server Actions
// ============================================================================

/**
 * 获取组件源码
 *
 * v3: 优先从 manifest 获取路径，fallback 到静态映射
 * 支持 atmos 和 blocks 组件
 */
export async function getComponentSource(componentType: string): Promise<string | null> {
  // 1. 优先从 manifest 获取路径（单一数据源）
  const manifest = getManifest(componentType);
  if (manifest && manifest.files.component) {
    const category = manifest.category === 'blocks' ? 'blocks' : 'atmos';
    const manifestPath = `src/components/nova-ui/${category}/${componentType}/${manifest.files.component}`;
    const source = await readAndTransform(manifestPath);
    if (source) return source;
  }

  // 2. Fallback: 静态映射（向后兼容）
  const atomsPath = COMPONENT_SOURCES[componentType];
  if (atomsPath) {
    return readAndTransform(atomsPath);
  }

  const blocksPath = BLOCK_SOURCES[componentType];
  if (blocksPath) {
    return readAndTransform(blocksPath);
  }

  return null;
}

/**
 * @deprecated 使用 getComponentSource 代替，已支持 blocks
 */
export async function getBlockSource(blockType: string): Promise<string | null> {
  return getComponentSource(blockType);
}

// ============================================================================
// 主题文件读取（ADR-006 v2: 源码即导出）
// ============================================================================

interface ThemeFile {
  /** 导出路径（相对于 themes/） */
  exportPath: string;
  /** 文件内容 */
  content: string;
}

/**
 * 转换主题文件中的 import 路径
 * 主题文件内部的路径需要调整为导出包的相对路径
 *
 * 导出包结构：
 *   themes/cyberpunk-dark/index.ts        → depth 0
 *   themes/cyberpunk-dark/components/button.ts → depth 1
 *   components/button.tsx                 → 组件文件
 *
 * 路径计算：
 *   从 themes/cyberpunk-dark/components/button.ts 到 components/button.tsx
 *   需要 ../../../components/button （上3级到根目录，再进入 components）
 */
function transformThemeImportPaths(content: string, fileRelativePath: string): string {
  // 计算文件深度
  // 'index.ts' → depth 0
  // 'components/button.ts' → depth 1
  const depth = fileRelativePath.split('/').length - 1;

  // 从主题子目录到导出包根目录
  // themes/cyberpunk-dark/index.ts → 需要 ../../ 到根目录
  // themes/cyberpunk-dark/components/button.ts → 需要 ../../../ 到根目录
  const toExportRoot = '../'.repeat(depth + 2);

  let transformed = content;

  // 1. 移除 playgroundGlobalCss 相关的 import 和引用（画布专用）
  transformed = transformed.replace(/import\s+{\s*playgroundGlobalCss\s*}\s+from\s+['"]\.\/styles['"];?\n?/g, '');
  transformed = transformed.replace(/,?\s*playgroundGlobalCss,?/g, '');
  transformed = transformed.replace(/playgroundGlobalCss,?\n?/g, '');

  // 2. 移除 canvasSizes（画布专用，改进正则处理多行对象）
  transformed = transformed.replace(/,?\s*canvasSizes:\s*\{[\s\S]*?\n\s*\},?/g, '');

  // 3. 移除 effects 配置（特效暂不导出）
  transformed = transformed.replace(/,?\s*effects:\s*\{[\s\S]*?\n\s*\},?/g, '');

  // 4. 移除 @/types 导入和类型注解（类型文件不导出，让 TS 自动推断）
  transformed = transformed.replace(/import\s+type\s+\{[^}]+\}\s+from\s+['"]@\/types['"];?\n?/g, '');
  // 移除 : ThemeDefinition 类型注解
  transformed = transformed.replace(/:\s*ThemeDefinition\s*=/g, ' =');

  // 5. 转换组件配置导入路径（使用动态深度计算）
  // @/components/nova-ui/atmos/xxx/xxx.config → {toExportRoot}components/xxx
  transformed = transformed.replace(
    /@\/components\/nova-ui\/atmos\/([^/]+)\/[^'"]+\.config/g,
    `${toExportRoot}components/$1`
  );
  transformed = transformed.replace(
    /@\/components\/nova-ui\/blocks\/([^/]+)\/[^'"]+\.config/g,
    `${toExportRoot}components/$1`
  );

  return transformed;
}

/**
 * 读取单个主题文件
 */
async function readThemeFile(themeId: string, relativePath: string): Promise<string | null> {
  try {
    const fullPath = path.join(process.cwd(), THEME_BASE_PATH, themeId, relativePath);
    await fs.access(fullPath);
    const content = await fs.readFile(fullPath, 'utf-8');
    return transformThemeImportPaths(content, relativePath);
  } catch (error) {
    console.error(`Failed to read theme file: ${themeId}/${relativePath}`, error);
    return null;
  }
}

// ============================================================================
// 精准导出：只导出选中组件的主题文件
// ============================================================================

/**
 * 获取选中组件的主题文件（精准导出）
 *
 * @param themeId 主题 ID
 * @param componentTypes 选中的组件类型列表
 * @returns 只包含选中组件的主题文件
 */
export async function getThemeFilesForComponents(
  themeId: string,
  componentTypes: string[]
): Promise<ThemeFile[]> {
  const files: ThemeFile[] = [];

  // 1. tokens.ts 始终需要
  const tokensContent = await readThemeFile(themeId, 'tokens.ts');
  if (tokensContent) {
    files.push({
      exportPath: `${themeId}/tokens.ts`,
      content: tokensContent,
    });
  }

  // 2. 收集需要的主题配置文件（去重）
  // v2: 优先使用 manifest，fallback 到静态映射
  const neededFiles = new Set<string>();
  const configsPerFile: Record<string, string[]> = {};
  const allThemeConfigs: { componentName: string; configName: string }[] = [];

  for (const componentType of componentTypes) {
    // 优先使用 manifest
    const manifest = getManifest(componentType);
    if (manifest) {
      // 只处理有 themeFile 的组件（空字符串表示无主题配置）
      if (manifest.themeFile && manifest.themeConfigs.length > 0) {
        neededFiles.add(manifest.themeFile);
        if (!configsPerFile[manifest.themeFile]) {
          configsPerFile[manifest.themeFile] = [];
        }
        for (const config of manifest.themeConfigs) {
          if (!configsPerFile[manifest.themeFile].includes(config.configName)) {
            configsPerFile[manifest.themeFile].push(config.configName);
          }
          allThemeConfigs.push(config);
        }
      }
      // 无 themeFile 的组件跳过主题配置导出
    } else {
      // Fallback 到静态映射
      const mappings = COMPONENT_THEME_MAP[componentType];
      if (mappings) {
        for (const mapping of mappings) {
          neededFiles.add(mapping.file);
          if (!configsPerFile[mapping.file]) {
            configsPerFile[mapping.file] = [];
          }
          if (!configsPerFile[mapping.file].includes(mapping.configName)) {
            configsPerFile[mapping.file].push(mapping.configName);
          }
          allThemeConfigs.push({ componentName: mapping.componentName, configName: mapping.configName });
        }
      }
    }
  }

  // 3. 读取需要的主题配置文件
  for (const file of neededFiles) {
    const content = await readThemeFile(themeId, file);
    if (content) {
      files.push({
        exportPath: `${themeId}/${file}`,
        content,
      });
    }
  }

  // 4. 生成 components/index.ts（只导出选中的配置）
  // 只有在有主题配置时才生成
  if (Object.keys(configsPerFile).length > 0) {
    const componentsIndexContent = generateComponentsIndex(configsPerFile);
    files.push({
      exportPath: `${themeId}/components/index.ts`,
      content: componentsIndexContent,
    });
  }

  // 5. 生成 theme index.ts（只包含选中组件）
  const themeIndexContent = generateThemeIndexV2(themeId, allThemeConfigs);
  files.push({
    exportPath: `${themeId}/index.ts`,
    content: themeIndexContent,
  });

  return files;
}

/**
 * 生成 components/index.ts（只导出选中的配置）
 */
function generateComponentsIndex(configsPerFile: Record<string, string[]>): string {
  const exports: string[] = [];

  for (const [file, configs] of Object.entries(configsPerFile)) {
    // 提取文件名（不含目录和扩展名）
    const fileName = file.replace('components/', '').replace('.ts', '');
    exports.push(`export { ${configs.join(', ')} } from './${fileName}';`);
  }

  return `// Auto-generated: 只导出选中组件的配置
${exports.join('\n')}
`;
}

/**
 * 生成主题 index.ts（v2: 使用已收集的配置）
 */
function generateThemeIndexV2(
  themeId: string,
  themeConfigs: { componentName: string; configName: string }[]
): string {
  const imports = themeConfigs.map(c => c.configName);
  const components = themeConfigs.map(c => `    ${c.componentName}: ${c.configName},`);

  // 去重 imports
  const uniqueImports = [...new Set(imports)];

  // 去重 components（避免重复的组件映射）
  const uniqueComponents = [...new Set(components)];

  // 处理无主题配置的情况
  const hasThemeConfigs = uniqueImports.length > 0;

  const importSection = hasThemeConfigs
    ? `import {
  ${uniqueImports.join(',\n  ')},
} from './components';`
    : '// 该组件无主题配置，使用 baseConfig';

  const componentsSection = hasThemeConfigs
    ? `components: {
${uniqueComponents.join('\n')}
  },`
    : 'components: {},';

  return `import { tokens, meta } from './tokens';
${importSection}

/**
 * Theme: ${themeId}
 * Generated by Nova Components (精准导出)
 */
export const ${themeId.replace(/-([a-z])/g, (_, c) => c.toUpperCase())}Theme = {
  id: '${themeId}',
  isDark: meta.isDark,
  cssVars: tokens,
  ${componentsSection}
};
`;
}

/**
 * 生成导出用的 ThemeProvider
 * 这是一个简化版，不依赖 Nova 的 theme-store
 */
export async function getThemeProvider(themeId: string): Promise<string> {
  // 将 theme-id 转换为变量名（如 'cyberpunk-dark' → 'cyberpunkDarkTheme'）
  const themeVarName = themeId.replace(/-([a-z])/g, (_, c) => c.toUpperCase()) + 'Theme';

  return `'use client';

/**
 * Theme Provider - Generated by Nova Components
 *
 * 当前主题: ${themeId}
 * 换主题时只需修改下面的 import 路径
 */

import { createContext, useContext, useEffect, type ReactNode } from 'react';
import { ${themeVarName} } from './${themeId}';

const theme = ${themeVarName};

interface ThemeContextValue {
  currentTheme: typeof theme;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // 动态注入 CSS 变量到 :root
  useEffect(() => {
    const root = document.documentElement;
    if (theme.cssVars) {
      Object.entries(theme.cssVars).forEach(([key, value]) => {
        root.style.setProperty(key, value as string);
      });
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ currentTheme: theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  // 保证返回对象结构，避免解构报错
  // 无 Provider 时 currentTheme 为 undefined，组件会 fallback 到 baseConfig
  return ctx ?? { currentTheme: undefined };
}

export { theme as currentTheme };
`;
}
