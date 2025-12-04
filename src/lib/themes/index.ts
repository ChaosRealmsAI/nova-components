'use client';

import type { ThemeDefinition } from '@/types';
import { shadcnDefaultTheme } from './shadcn-default';
import { midnightLilacTheme } from './midnight-lilac';
import { cyberpunkTheme } from './cyberpunk';
import { iceGlassTheme } from './ice-glass';
import { vintageNostalgiaTheme } from './vintage-nostalgia';
import { obsidianShardTheme } from './obsidian-shard';

/**
 * 主题注册表
 */
export const THEMES: Record<string, ThemeDefinition> = {
  'shadcn-default': shadcnDefaultTheme,
  'midnight-lilac': midnightLilacTheme,
  'cyberpunk': cyberpunkTheme,
  'ice-glass': iceGlassTheme,
  'vintage-nostalgia': vintageNostalgiaTheme,
  'obsidian-shard': obsidianShardTheme,
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
export { midnightLilacTheme } from './midnight-lilac';
export { cyberpunkTheme } from './cyberpunk';
export { iceGlassTheme } from './ice-glass';
export { vintageNostalgiaTheme } from './vintage-nostalgia';
export { obsidianShardTheme } from './obsidian-shard';
export { useTheme } from './use-theme';