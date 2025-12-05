import type { ThemeDefinition } from '@/types';
import { shadcnDefaultTheme } from './shadcn-default';
import { cyberpunkTheme } from './cyberpunk';
import { neoBrutalismTheme } from './neo-brutalism';
import { glassmorphismTheme } from './glassmorphism';
import { retro80sTheme } from './retro-80s';
import { cyberNeonTheme } from './cyber-neon';
import { softClayTheme } from './soft-clay';

/**
 * 主题注册表
 */
export const THEMES: Record<string, ThemeDefinition> = {
  'shadcn-default': shadcnDefaultTheme,
  'cyberpunk': cyberpunkTheme,
  'neo-brutalism': neoBrutalismTheme,
  'glassmorphism': glassmorphismTheme,
  'retro-80s': retro80sTheme,
  'cyber-neon': cyberNeonTheme,
  'soft-clay': softClayTheme,
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
