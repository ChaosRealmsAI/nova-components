'use client';

import { useState, useRef, useEffect } from 'react';
import { useThemeStore } from '@/stores/theme-store';
import { useCanvasStore } from '@/stores/canvas-store';
import { getAllThemes } from '@/lib/themes';
import { useI18n } from '@/lib/i18n/use-i18n';
import { ChevronDown, Shuffle, Minus, Plus } from 'lucide-react';
import { LANGUAGES } from '@/lib/i18n/languages';
import { useCanvasContext } from './Canvas';

// Helper to render the 5-color palette preview
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

const ZoomControl = () => {
  const { transformRef, scale } = useCanvasContext();

  const handleZoomIn = () => {
    transformRef.current?.zoomIn();
  };

  const handleZoomOut = () => {
    transformRef.current?.zoomOut();
  };

  const handleReset = () => {
    transformRef.current?.resetTransform();
  };

  return (
    <div className="playground-hud-container border rounded-lg p-1 shadow-xl flex items-center gap-1">
      <button
        onClick={handleZoomOut}
        className="playground-hud-btn w-8 h-8 flex items-center justify-center rounded-md transition-colors active:scale-95"
        title="Zoom Out"
      >
        <Minus className="w-4 h-4" />
      </button>
      <button
        onClick={handleReset}
        className="playground-hud-btn min-w-[3.5rem] px-2 h-8 flex items-center justify-center rounded-md text-[length:var(--text-sm)] font-medium transition-colors"
        title="Reset Zoom (100%)"
      >
        {Math.round(scale * 100)}%
      </button>
      <button
        onClick={handleZoomIn}
        className="playground-hud-btn w-8 h-8 flex items-center justify-center rounded-md transition-colors active:scale-95"
        title="Zoom In"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
};

export function HUD() {
  const { theme, setTheme, getMergedCssVars } = useThemeStore();
  const { toggleAboutModal } = useCanvasStore();
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
    const randomTheme = candidates[randomIndex];
    setTheme(randomTheme.id);
  };

  const currentThemeLabel = theme?.nameKey ? t(theme.nameKey, theme.name) : (theme?.name || 'Default');

  const activeColors = getMergedCssVars();
  const primaryColor = activeColors['--primary'] || theme?.cssVars?.['--primary'];
  const secondaryColor = activeColors['--secondary'] || theme?.cssVars?.['--secondary'];

  return (
    <>
      {/* Top Left Group: Brand & Theme Tools */}
      <header
        role="banner"
        aria-label="Nova Components Toolbar"
        data-testid="hud-toolbar"
        className="absolute top-6 left-6 flex items-center gap-3 z-50"
      >
        {/* Brand */}
        <button
          onClick={toggleAboutModal}
          aria-label="Nova Components - Click to open About dialog"
          data-testid="hud-brand-button"
          className="playground-hud-container px-3 py-2 border rounded-lg flex items-center gap-2 shadow-xl select-none cursor-pointer hover:bg-[var(--surface-2)] transition-colors"
        >
          <div
            className="w-4 h-4 rounded-sm bg-gradient-to-tr from-[var(--primary)] to-[var(--secondary)]"
            style={{ '--primary': primaryColor, '--secondary': secondaryColor } as React.CSSProperties}
          />
          <span className="playground-hud-brand text-[length:var(--text-sm)] font-bold tracking-widest uppercase">
            Nova Components
          </span>
        </button>

        {/* Divider */}
        <div className="playground-hud-divider w-px h-6" />

        {/* Global Tools Group */}
        <nav
          role="toolbar"
          aria-label="Theme Tools"
          data-testid="hud-theme-toolbar"
          className="playground-hud-container flex items-center gap-2 border rounded-lg p-1 shadow-xl"
        >

          {/* Theme Switcher */}
          <div className="relative" ref={themeDropdownRef}>
            <button
              onClick={() => setIsThemeOpen(!isThemeOpen)}
              aria-label={`Current theme: ${currentThemeLabel}. Click to switch theme`}
              aria-expanded={isThemeOpen}
              aria-haspopup="listbox"
              data-testid="hud-theme-switcher"
              className={`playground-hud-btn flex items-center gap-2 px-3 py-1.5 rounded-md transition-colors border border-transparent group relative ${
                isThemeOpen ? 'playground-hud-btn-active' : ''
              }`}
            >
              <ThemePalettePreview colors={activeColors} />
              <span className="text-[length:var(--text-sm)] font-medium w-24 truncate">{currentThemeLabel}</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${isThemeOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Theme Dropdown */}
            {isThemeOpen && (
              <div
                role="listbox"
                aria-label="Available themes"
                data-testid="hud-theme-dropdown"
                className="playground-hud-dropdown absolute top-full left-0 mt-2 w-56 border rounded-lg shadow-2xl p-1 z-50 flex flex-col gap-0.5 max-h-[60vh] overflow-y-auto"
              >
                <div className="playground-hud-dropdown-header px-2 py-1.5 text-[length:var(--text-xs)] font-bold uppercase tracking-wider sticky top-0 z-10">
                  {t('modalSelectTheme')}
                </div>
                {allThemes.map((item) => {
                  const label = item.nameKey ? t(item.nameKey, item.name) : item.name;
                  const isActive = item.id === theme?.id;

                  return (
                    <button
                      key={item.id}
                      role="option"
                      aria-selected={isActive}
                      aria-label={`Theme: ${label}${isActive ? ' (currently active)' : ''}`}
                      data-testid={`hud-theme-option-${item.id}`}
                      onClick={() => {
                        setTheme(item.id);
                        setIsThemeOpen(false);
                      }}
                      className={`playground-hud-dropdown-item flex items-center gap-3 px-2 py-2 rounded transition-colors w-full text-left ${
                        isActive ? 'playground-hud-dropdown-item-active' : ''
                      }`}
                    >
                      <ThemePalettePreview colors={item.cssVars} />
                      <span className="text-[length:var(--text-sm)]">
                        {label}
                      </span>
                      {isActive && (
                        <div className="playground-hud-indicator w-1.5 h-1.5 rounded-full ml-auto" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <div className="playground-hud-divider w-px h-4" />

          {/* Shuffle */}
          <button
            onClick={handleShuffle}
            aria-label="Random Theme"
            data-testid="hud-shuffle-theme"
            className="playground-hud-btn flex items-center justify-center px-3 py-1.5 rounded-md transition-colors active:scale-95 h-full"
            title={t('shuffleTheme')}
          >
            <Shuffle className="w-4 h-4" />
          </button>

        </nav>
      </header>

      {/* Top Right Group: Language Switcher */}
      <div
        role="region"
        aria-label="Language Settings"
        data-testid="hud-language-region"
        className="absolute top-6 right-[372px] z-50 flex items-center gap-3"
      >
        {/* Zoom Control */}
        <ZoomControl />

        {/* Language Switcher */}
        <div className="playground-hud-container border rounded-lg p-1 shadow-xl">
          <div className="relative" ref={langDropdownRef}>
            {(() => {
              const currentLang = LANGUAGES.find(l => l.code === locale) || LANGUAGES[0];
              return (
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  aria-label={`Language: ${currentLang.name}. Click to change language`}
                  aria-expanded={isLangOpen}
                  aria-haspopup="listbox"
                  data-testid="hud-language-switcher"
                  className={`playground-hud-btn flex items-center gap-1.5 px-2 py-1.5 rounded-md text-[length:var(--text-sm)] font-medium transition-colors ${
                    isLangOpen ? 'playground-hud-btn-active' : ''
                  }`}
                  title={t('switchLanguage')}
                >
                  <span>{currentLang.name}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
                </button>
              );
            })()}

            {/* Language Dropdown */}
            {isLangOpen && (
              <div
                role="listbox"
                aria-label="Available languages"
                data-testid="hud-language-dropdown"
                className="playground-hud-dropdown absolute top-full right-0 mt-2 w-32 border rounded-lg shadow-2xl p-1 z-50 flex flex-col gap-0.5"
              >
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    role="option"
                    aria-selected={locale === lang.code}
                    aria-label={`${lang.name}${locale === lang.code ? ' (current)' : ''}`}
                    data-testid={`hud-language-option-${lang.code}`}
                    onClick={() => {
                      setLocale(lang.code);
                      setIsLangOpen(false);
                    }}
                    className={`playground-hud-dropdown-item flex items-center gap-2 px-3 py-2 rounded text-[length:var(--text-sm)] w-full text-left transition-colors ${
                      locale === lang.code ? 'playground-hud-dropdown-item-active' : ''
                    }`}
                  >
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
