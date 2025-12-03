'use client';

import { useThemeStore } from '@/stores/theme-store';

/**
 * Hook to access the current theme
 * 独立文件以避免循环依赖 (theme-store -> themes/index -> theme-store)
 */
export function useTheme() {
  const theme = useThemeStore((s) => s.theme);
  return { currentTheme: theme };
}
