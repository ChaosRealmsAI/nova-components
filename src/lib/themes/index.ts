'use client';

import type { ThemeDefinition } from '@/types';
import { shadcnDefaultTheme } from './shadcn-default';
import { cyberpunkTheme } from './cyberpunk';

/**
 * 主题注册表
 */
export const THEMES: Record<string, ThemeDefinition> = {
  'shadcn-default': shadcnDefaultTheme,
  'cyberpunk': cyberpunkTheme,
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

export { shadcnDefaultTheme } from './shadcn-default';
export { cyberpunkTheme } from './cyberpunk';
export { useTheme } from './use-theme';
