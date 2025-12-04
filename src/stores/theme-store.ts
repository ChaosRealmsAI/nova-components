'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ThemeDefinition } from '@/types';
import { THEMES } from '@/lib/themes/theme-registry';

/**
 * 可自定义的 Token 类型
 */
export interface CustomTokens {
  '--primary'?: string;
  '--primary-foreground'?: string;
  '--secondary'?: string;
  '--secondary-foreground'?: string;
  '--accent'?: string;
  '--accent-foreground'?: string;
  '--background'?: string;
  '--foreground'?: string;
  '--muted-foreground'?: string;
  '--border'?: string;
  '--ring'?: string;
  '--radius'?: string;
  [key: string]: string | undefined;
}

// 默认空主题（无主题时使用）
const DEFAULT_THEME: ThemeDefinition = {
  id: 'default',
  name: 'Default',
  cssVars: {},
  components: {},
};

function getDefaultTheme(): ThemeDefinition {
  const themeIds = Object.keys(THEMES);
  if (themeIds.length > 0) {
    return THEMES[themeIds[0]];
  }
  return DEFAULT_THEME;
}

interface ThemeStore {
  currentThemeId: string;
  theme: ThemeDefinition;
  customTokens: CustomTokens;
  setTheme: (id: string) => void;
  setCustomToken: (key: keyof CustomTokens, value: string) => void;
  setCustomTokens: (tokens: CustomTokens) => void;
  resetCustomTokens: () => void;
  getMergedCssVars: () => Record<string, string>;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      currentThemeId: 'shadcn-default',
      theme: THEMES['shadcn-default'] || getDefaultTheme(),
      customTokens: {},

      setTheme: (id) => {
        const newTheme = THEMES[id] || getDefaultTheme();
        set({
          currentThemeId: id,
          theme: newTheme,
          customTokens: {},
        });
      },

      setCustomToken: (key, value) =>
        set((state) => ({
          customTokens: {
            ...state.customTokens,
            [key]: value,
          },
        })),

      setCustomTokens: (tokens) =>
        set((state) => ({
          customTokens: {
            ...state.customTokens,
            ...tokens,
          },
        })),

      resetCustomTokens: () => set({ customTokens: {} }),

      getMergedCssVars: () => {
        const state = get();
        const themeVars = state.theme?.cssVars || {};
        return {
          ...themeVars,
          ...state.customTokens,
        } as Record<string, string>;
      },
    }),
    {
      name: 'nova-theme-store',
      partialize: (state) => ({
        currentThemeId: state.currentThemeId,
      }),
    }
  )
);
