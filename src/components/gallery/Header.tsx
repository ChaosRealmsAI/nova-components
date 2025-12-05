'use client';

import { useState, useRef, useEffect } from 'react';
import { useThemeStore } from '@/stores/theme-store';
import { useGalleryStore } from '@/stores/gallery-store';
import { getAllThemes } from '@/lib/themes';
import { useI18n } from '@/lib/i18n/use-i18n';
import { ChevronDown, Shuffle } from 'lucide-react';
import { LANGUAGES } from '@/lib/i18n/languages';
import type { ComponentCategory } from '@/types';
import type { MessageKey } from '@/lib/i18n/messages';

// Filter options
type FilterOption = 'all' | ComponentCategory;

// Theme palette preview
const ThemePalettePreview = ({ colors }: { colors?: Record<string, string | undefined> }) => {
  const palette = colors ? [
    colors['--primary'],
    colors['--secondary'],
    colors['--accent'],
    colors['--background'],
    colors['--foreground']
  ] : [];

  return (
    <div className="flex items-center gap-1">
      {palette.map((color, i) => (
        <div
          key={i}
          className="w-2 h-2 rounded-full shadow-[0_0_2px_rgba(0,0,0,0.2)] border border-white/10"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
};

export function Header() {
  const { theme, setTheme, getMergedCssVars } = useThemeStore();
  const { filter, setFilter, getFilteredComponents } = useGalleryStore();
  const { t, locale, setLocale } = useI18n();
  const allThemes = getAllThemes();

  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const themeDropdownRef = useRef<HTMLDivElement>(null);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (themeDropdownRef.current && !themeDropdownRef.current.contains(event.target as Node)) {
        setIsThemeOpen(false);
      }
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleShuffle = () => {
    const candidates = allThemes.filter((t) => t.id !== theme.id);
    if (candidates.length === 0) return;
    const randomIndex = Math.floor(Math.random() * candidates.length);
    setTheme(candidates[randomIndex].id);
  };

  const activeColors = getMergedCssVars();
  const currentThemeLabel = theme?.nameKey ? t(theme.nameKey, theme.name) : (theme?.name || 'Default');
  const currentLang = LANGUAGES.find(l => l.code === locale) || LANGUAGES[0];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="relative flex h-16 items-center justify-between px-6 md:px-8 lg:px-12">
        {/* Left: Brand */}
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-md bg-gradient-to-tr from-[var(--primary)] to-[var(--secondary)]"
            style={{
              '--primary': activeColors['--primary'],
              '--secondary': activeColors['--secondary']
            } as React.CSSProperties}
          />
          <span className="text-lg font-bold tracking-tight">Nova Components</span>
        </div>

        {/* Center: Filter Tabs (absolute for true center) */}
        <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-1 bg-muted/50 rounded-lg p-1">
          {(['all', 'atoms', 'blocks'] as FilterOption[]).map((optionId) => {
            const count = optionId === 'all'
              ? useGalleryStore.getState().components.length
              : useGalleryStore.getState().components.filter(c => c.category === optionId).length;

            const labelKey: MessageKey = optionId === 'all' ? 'filterAll' : optionId === 'atoms' ? 'filterAtoms' : 'filterBlocks';
            const label = t(labelKey);

            return (
              <button
                key={optionId}
                onClick={() => setFilter(optionId)}
                className={`
                  px-4 py-1.5 rounded-md text-sm font-medium transition-all
                  ${filter === optionId
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                  }
                `}
              >
                {label}
                <span className="ml-1.5 text-xs opacity-60">({count})</span>
              </button>
            );
          })}
        </nav>

        {/* Right: Theme & Language */}
        <div className="flex items-center gap-2">
          {/* Theme Switcher */}
          <div className="relative" ref={themeDropdownRef}>
            <button
              onClick={() => setIsThemeOpen(!isThemeOpen)}
              className={`
                flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors
                hover:bg-muted/50
                ${isThemeOpen ? 'bg-muted' : ''}
              `}
            >
              <ThemePalettePreview colors={activeColors} />
              <span className="hidden sm:inline max-w-[100px] truncate">{currentThemeLabel}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isThemeOpen ? 'rotate-180' : ''}`} />
            </button>

            {isThemeOpen && (
              <div className="absolute top-full right-0 mt-2 w-56 border border-border rounded-xl bg-popover shadow-xl p-1 z-50 max-h-[60vh] overflow-y-auto">
                <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Select Theme
                </div>
                {allThemes.map((item) => {
                  const label = item.nameKey ? t(item.nameKey, item.name) : item.name;
                  const isActive = item.id === theme?.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setTheme(item.id);
                        setIsThemeOpen(false);
                      }}
                      className={`
                        flex items-center gap-3 w-full px-2 py-2 rounded-lg text-sm transition-colors
                        ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}
                      `}
                    >
                      <ThemePalettePreview colors={item.cssVars} />
                      <span>{label}</span>
                      {isActive && <div className="w-1.5 h-1.5 rounded-full bg-primary ml-auto" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Shuffle Button */}
          <button
            onClick={handleShuffle}
            className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
            title="Random Theme"
          >
            <Shuffle className="w-4 h-4" />
          </button>

          {/* Language Switcher */}
          <div className="relative" ref={langDropdownRef}>
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className={`
                flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors
                hover:bg-muted/50
                ${isLangOpen ? 'bg-muted' : ''}
              `}
            >
              <span>{currentLang.name}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            {isLangOpen && (
              <div className="absolute top-full right-0 mt-2 w-32 border border-border rounded-xl bg-popover shadow-xl p-1 z-50">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLocale(lang.code);
                      setIsLangOpen(false);
                    }}
                    className={`
                      flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm transition-colors
                      ${locale === lang.code ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}
                    `}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
