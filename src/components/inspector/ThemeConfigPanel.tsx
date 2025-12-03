'use client';

import { useCallback, useState } from 'react';
import { useThemeStore, type CustomTokens } from '@/stores/theme-store';
import { useCanvasStore } from '@/stores/canvas-store';
import { useI18n } from '@/lib/i18n/use-i18n';
import { RotateCcw, X, Palette, Layers, Type, BoxSelect, Sparkles, ChevronDown, ChevronRight } from 'lucide-react';

// --- 配置项定义 ---

interface TokenConfig {
  key: keyof CustomTokens;
  label: { en: string; zh: string };
  type: 'color' | 'select' | 'text';
}

const BRAND_COLORS: TokenConfig[] = [
  { key: '--primary', label: { en: 'Primary', zh: '主色' }, type: 'color' },
  { key: '--primary-foreground', label: { en: 'On Primary', zh: '主色文本' }, type: 'color' },
  { key: '--secondary', label: { en: 'Secondary', zh: '次要色' }, type: 'color' },
  { key: '--secondary-foreground', label: { en: 'On Secondary', zh: '次要文本' }, type: 'color' },
  { key: '--accent', label: { en: 'Accent', zh: '强调色' }, type: 'color' },
  { key: '--accent-foreground', label: { en: 'On Accent', zh: '强调文本' }, type: 'color' },
];

const SURFACE_COLORS: TokenConfig[] = [
  { key: '--background', label: { en: 'Background', zh: '背景' }, type: 'color' },
  { key: '--surface-1', label: { en: 'Surface L1', zh: '层级 L1' }, type: 'color' },
  { key: '--surface-2', label: { en: 'Surface L2', zh: '层级 L2' }, type: 'color' },
];

const TEXT_COLORS: TokenConfig[] = [
  { key: '--foreground', label: { en: 'Body Text', zh: '正文文本' }, type: 'color' },
  { key: '--muted-foreground', label: { en: 'Muted Text', zh: '次要文本' }, type: 'color' },
];

const STRUCTURE_COLORS: TokenConfig[] = [
  { key: '--border', label: { en: 'Border', zh: '边框' }, type: 'color' },
  { key: '--ring', label: { en: 'Focus Ring', zh: '聚焦光环' }, type: 'color' },
];

// --- UI 组件 ---

interface ColorPickerProps {
  label: string;
  value: string;
  defaultValue: string;
  onChange: (value: string) => void;
}

const ColorPicker = ({ label, value, defaultValue, onChange }: ColorPickerProps) => {
  const displayValue = value || defaultValue;

  const toHex = (color: string) => {
    if (!color) return '#000000';
    if (color.startsWith('#')) return color.slice(0, 7);
    return '#000000';
  };

  return (
    <div className="flex items-center justify-between py-2">
      <span className="playground-effect-label text-[length:var(--text-sm)] truncate max-w-[120px]" title={label}>{label}</span>
      <div className="flex items-center gap-2">
        <input
          type="color"
          value={toHex(displayValue)}
          onChange={(e) => onChange(e.target.value)}
          className="playground-color-input w-6 h-6 rounded border bg-transparent cursor-pointer"
        />
        <div className="flex flex-col items-end">
          <span className="playground-effect-label-muted text-[length:var(--text-xs)] font-mono opacity-50">{displayValue}</span>
        </div>
      </div>
    </div>
  );
};

// --- Section 组件 ---
const ConfigSection = ({ title, icon: Icon, defaultExpanded = false, children }: { title: string, icon: React.ComponentType<{ className?: string }>, defaultExpanded?: boolean, children: React.ReactNode }) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div className="mb-4 border border-[var(--border)]/50 rounded-lg overflow-hidden bg-[var(--surface-1)]/30">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between gap-2 px-3 py-2.5 hover:bg-[var(--surface-2)]/50 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Icon className="w-3.5 h-3.5 text-[var(--primary)]" />
          <span className="playground-effect-category text-[length:var(--text-xs)] font-bold uppercase tracking-wider">
            {title}
          </span>
        </div>
        {expanded ? (
          <ChevronDown className="w-3 h-3 text-[var(--muted-foreground)]" />
        ) : (
          <ChevronRight className="w-3 h-3 text-[var(--muted-foreground)]" />
        )}
      </button>

      {expanded && (
        <div className="px-3 pb-2 pt-0 border-t border-[var(--border)]/30">
          {children}
        </div>
      )}
    </div>
  );
};

// --- 主组件 ---

export function ThemeConfigPanel() {
  const { theme, customTokens, setCustomToken, setCustomTokens, resetCustomTokens } = useThemeStore();
  const { setInspectorMode } = useCanvasStore();
  const { translate } = useI18n();

  const getThemeDefault = useCallback(
    (key: keyof CustomTokens): string => {
      const cssVars = theme.cssVars as Record<string, string> | undefined;
      return cssVars?.[key] || '';
    },
    [theme.cssVars]
  );

  const getCustomValue = useCallback(
    (key: keyof CustomTokens): string => {
      return customTokens[key] || '';
    },
    [customTokens]
  );

  const handleChange = useCallback(
    (key: keyof CustomTokens, value: string) => {
      setCustomToken(key, value);
    },
    [setCustomToken]
  );

  // 随机颜色生成器
  const handleRandomize = useCallback(() => {
    const randomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

    const newTokens: CustomTokens = {
      '--primary': randomColor(),
      '--primary-foreground': randomColor(),
      '--secondary': randomColor(),
      '--secondary-foreground': randomColor(),
      '--accent': randomColor(),
      '--accent-foreground': randomColor(),
      '--background': randomColor(),
      '--surface-1': randomColor(),
      '--surface-2': randomColor(),
      '--foreground': randomColor(),
      '--muted-foreground': randomColor(),
      '--border': randomColor(),
      '--ring': randomColor(),
    };

    setCustomTokens(newTokens);
  }, [setCustomTokens]);

  const hasCustomizations = Object.keys(customTokens).length > 0;

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="playground-inspector-section h-14 border-b flex items-center justify-between px-4 bg-transparent shrink-0">
        <div className="flex items-center gap-2">
          <Palette className="w-4 h-4 text-[var(--primary)]" />
          <span className="text-[length:var(--text-base)] font-semibold leading-none">
            {translate({ en: 'Theme Config', zh: '主题配置' })}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => {
              resetCustomTokens();
            }}
            disabled={!hasCustomizations}
            className={`playground-panel-btn p-1.5 rounded transition-colors ${
              !hasCustomizations ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[var(--surface-2)] text-[var(--error)]'
            }`}
            title={translate({ en: 'Reset All', zh: '重置所有' })}
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            onClick={() => setInspectorMode('component')}
            className="playground-panel-btn p-1.5 hover:bg-[var(--surface-2)] rounded transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">

        {/* Randomize Button */}
        <button
          onClick={handleRandomize}
          className="w-full mb-6 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-md flex items-center justify-center gap-2 text-[length:var(--text-xs)] font-medium hover:opacity-90 transition-opacity shadow-md"
        >
          <Sparkles className="w-3.5 h-3.5" />
          {translate({ en: 'Randomize Palette', zh: '随机生成配色' })}
        </button>

        {/* 1. Brand Colors (Expanded by default) */}
        <ConfigSection title={translate({ en: 'Brand Colors', zh: '品牌色系' })} icon={Palette} defaultExpanded={true}>
          {BRAND_COLORS.map((token) => (
            <ColorPicker
              key={token.key}
              label={translate(token.label)}
              value={getCustomValue(token.key)}
              defaultValue={getThemeDefault(token.key)}
              onChange={(v) => handleChange(token.key, v)}
            />
          ))}
        </ConfigSection>

        {/* 2. Surfaces */}
        <ConfigSection title={translate({ en: 'Surfaces', zh: '层级表面' })} icon={Layers}>
          {SURFACE_COLORS.map((token) => (
            <ColorPicker
              key={token.key}
              label={translate(token.label)}
              value={getCustomValue(token.key)}
              defaultValue={getThemeDefault(token.key)}
              onChange={(v) => handleChange(token.key, v)}
            />
          ))}
        </ConfigSection>

        {/* 3. Text Colors */}
        <ConfigSection title={translate({ en: 'Text Colors', zh: '文本颜色' })} icon={Type} defaultExpanded={true}>
          {TEXT_COLORS.map((token) => (
            <ColorPicker
              key={token.key}
              label={translate(token.label)}
              value={getCustomValue(token.key)}
              defaultValue={getThemeDefault(token.key)}
              onChange={(v) => handleChange(token.key, v)}
            />
          ))}
        </ConfigSection>

        {/* 4. Structure */}
        <ConfigSection title={translate({ en: 'Structure', zh: '物理结构' })} icon={BoxSelect}>
          {STRUCTURE_COLORS.map((token) => (
            <ColorPicker
              key={token.key}
              label={translate(token.label)}
              value={getCustomValue(token.key)}
              defaultValue={getThemeDefault(token.key)}
              onChange={(v) => handleChange(token.key, v)}
            />
          ))}
        </ConfigSection>

      </div>
    </div>
  );
}
