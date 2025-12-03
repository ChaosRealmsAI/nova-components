'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ThemeDefinition } from '@/types';
import { THEMES } from '@/lib/themes';

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
      currentThemeId: 'cyberpunk-dark',
      theme: THEMES['cyberpunk-dark'],
      customTokens: {},

      setTheme: (id) => {
        set({
          currentThemeId: id,
          theme: THEMES[id] || THEMES['cyberpunk-dark'],
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
        const themeVars = state.theme.cssVars || {};
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
