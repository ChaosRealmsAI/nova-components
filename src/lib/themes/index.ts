'use client';

import type { ThemeDefinition } from '@/types';
import { cyberpunkDarkTheme } from './cyberpunk-dark';
import { oceanBlueTheme } from './ocean-blue';
import { sunsetWarmTheme } from './sunset-warm';
import { shadcnDefaultTheme } from './shadcn-default';
import { neoBrutalismTheme } from './neo-brutalism';
import { monochromeInkTheme } from './monochrome-ink';

/**
 * 主题注册表
 */
export const THEMES: Record<string, ThemeDefinition> = {
  'shadcn-default': shadcnDefaultTheme,
  'cyberpunk-dark': cyberpunkDarkTheme,
  'ocean-blue': oceanBlueTheme,
  'sunset-warm': sunsetWarmTheme,
  'neo-brutalism': neoBrutalismTheme,
  'monochrome-ink': monochromeInkTheme,
};

export function getThemeById(id: string): ThemeDefinition | undefined {
  return THEMES[id];
}

export function getAllThemes(): ThemeDefinition[] {
  return Object.values(THEMES);
}

export function getThemeIds(): string[] {
  return Object.keys(THEMES);
}

export { cyberpunkDarkTheme } from './cyberpunk-dark';
export { oceanBlueTheme } from './ocean-blue';
export { sunsetWarmTheme } from './sunset-warm';
export { shadcnDefaultTheme } from './shadcn-default';
export { neoBrutalismTheme } from './neo-brutalism';
export { monochromeInkTheme } from './monochrome-ink';
export { useTheme } from './use-theme';
