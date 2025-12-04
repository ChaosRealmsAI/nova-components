/**
 * Vintage Nostalgia 主题 - Token 定义
 *
 * 设计理念：
 * 灵感来源于旧打字机、泛黄羊皮纸、古典书籍、老式报纸
 *
 * 特色：
 * - 暖色调为主：米色、棕色、深褐色
 * - 极小圆角或无圆角，锐利边缘
 * - Letterpress 风格阴影（内凹/偏移）
 * - 衬线字体风格
 */

const palette = {
  // 主色系 - 经典褐色
  primary: '#8B4513',      // Saddle Brown - 皮革色
  secondary: '#D2691E',    // Chocolate - 巧克力色
  accent: '#CD853F',       // Peru - 秘鲁棕

  // 背景色 - 羊皮纸/旧纸
  parchment: '#F5F0E6',     // 羊皮纸色
  oldPaper: '#FAF4E8',      // 旧纸色
  cream: '#FFFDD0',         // 奶油色

  // 表面色 - 不同层级的纸张
  surface1: '#F0EAD6',      // 浅米色
  surface2: '#EBE4D0',      // 中米色
  surface3: '#E6DFC9',      // 深米色

  // 文字色 - 墨水/铅字
  ink: '#2C1810',           // 深墨色
  typewriter: '#3D2914',    // 打字机墨色
  faded: '#5C4033',         // 褪色墨水

  // 状态色
  success: '#2E7D32',       // 深绿（老式印刷绿）
  warning: '#E65100',       // 橙褐色
  error: '#B71C1C',         // 深红（老式印刷红）
  info: '#1565C0',          // 深蓝（老式印刷蓝）

  // 装饰色
  gold: '#C5A572',          // 古金色
  brass: '#B5A642',         // 黄铜色
  copper: '#B87333',        // 铜色

  // 纯色
  white: '#FFFFFF',
  black: '#000000',
};

export const tokens: Record<string, string> = {
  // ========================================
  // 1. 品牌色 (Brand)
  // ========================================
  '--primary': palette.primary,
  '--primary-foreground': palette.cream,
  '--primary-muted': 'color-mix(in srgb, #8B4513 15%, #F5F0E6)',
  '--primary-vivid': '#A0522D', // Sienna

  '--secondary': palette.secondary,
  '--secondary-foreground': palette.cream,
  '--secondary-muted': 'color-mix(in srgb, #D2691E 15%, #F5F0E6)',
  '--secondary-vivid': '#E07020',

  '--accent': palette.accent,
  '--accent-foreground': palette.ink,
  '--accent-muted': 'color-mix(in srgb, #CD853F 15%, #F5F0E6)',
  '--accent-vivid': '#DEB887', // Burlywood

  // ========================================
  // 2. 语义色 (Semantic)
  // ========================================
  '--success': palette.success,
  '--success-foreground': palette.cream,
  '--success-muted': 'color-mix(in srgb, #2E7D32 15%, #F5F0E6)',
  '--success-vivid': '#388E3C',

  '--warning': palette.warning,
  '--warning-foreground': palette.cream,
  '--warning-muted': 'color-mix(in srgb, #E65100 15%, #F5F0E6)',
  '--warning-vivid': '#EF6C00',

  '--error': palette.error,
  '--error-foreground': palette.cream,
  '--error-muted': 'color-mix(in srgb, #B71C1C 15%, #F5F0E6)',
  '--error-vivid': '#C62828',

  '--destructive': palette.error,
  '--destructive-foreground': palette.cream,

  '--info': palette.info,
  '--info-foreground': palette.cream,
  '--info-muted': 'color-mix(in srgb, #1565C0 15%, #F5F0E6)',
  '--info-vivid': '#1976D2',

  // ========================================
  // 3. 背景层级 (Surface) - 纸张层级
  // ========================================
  '--background': palette.parchment,
  '--background-alt': palette.oldPaper,

  '--surface-1': palette.surface1,
  '--surface-1-hover': 'color-mix(in srgb, #F0EAD6 95%, #8B4513)',

  '--surface-2': palette.surface2,
  '--surface-2-hover': 'color-mix(in srgb, #EBE4D0 95%, #8B4513)',

  '--surface-3': palette.surface3,
  '--surface-3-hover': 'color-mix(in srgb, #E6DFC9 95%, #8B4513)',

  // ========================================
  // 4. 文字颜色 (Text) - 墨水色调
  // ========================================
  '--foreground': palette.ink,
  '--foreground-secondary': palette.typewriter,
  '--muted': palette.surface2,
  '--muted-foreground': palette.faded,
  '--subtle-foreground': '#7D6E5D',
  '--disabled-foreground': '#A89F94',

  // ========================================
  // 5. 结构 (Structure) - 锐利边缘
  // ========================================
  '--border': palette.typewriter,
  '--border-muted': '#C4B9A8',
  '--border-vivid': palette.primary,
  '--border-width': '2px',           // 粗边框，报纸风格
  '--ring': 'color-mix(in srgb, #8B4513 40%, transparent)',
  '--radius': '2px',                 // 极小圆角
  '--opacity-disabled': '0.5',
  '--spacing-base': '0.25rem',

  // ========================================
  // 6. 字体 (Typography) - 衬线风格
  // ========================================
  '--font-sans': '"Playfair Display", Georgia, "Times New Roman", serif',
  '--font-mono': '"Courier Prime", "Courier New", Courier, monospace',
  '--font-display': '"Playfair Display", Georgia, serif',

  // 字号
  '--text-xs': '0.75rem',
  '--text-sm': '0.875rem',
  '--text-base': '1rem',
  '--text-lg': '1.125rem',
  '--text-xl': '1.25rem',
  '--text-2xl': '1.5rem',
  '--text-3xl': '1.875rem',

  // ========================================
  // 7. 阴影 (Shadow) - Letterpress 风格
  // ========================================
  // 内凹阴影，模拟印刷压痕效果
  '--shadow-sm': 'inset 0 1px 2px rgba(44, 24, 16, 0.15)',
  '--shadow-md': 'inset 0 2px 4px rgba(44, 24, 16, 0.2), 0 1px 0 rgba(255, 255, 255, 0.5)',
  '--shadow-lg': 'inset 0 3px 6px rgba(44, 24, 16, 0.25), 0 2px 0 rgba(255, 255, 255, 0.6)',
  '--shadow-glow': '0 0 10px rgba(139, 69, 19, 0.3)', // 温暖的光晕

  // ========================================
  // 8. 特效 (Effects)
  // ========================================
  '--effect-speed-slow': '0.4s',
  '--effect-speed-normal': '0.25s',
  '--effect-speed-fast': '0.15s',
  '--effect-glow-primary': '0 0 12px rgba(139, 69, 19, 0.4)',
  '--effect-glow-secondary': '0 0 12px rgba(210, 105, 30, 0.4)',

  // ========================================
  // 9. 特效 Token (ADR-005)
  // ========================================
  // BorderBeam
  '--effect-beam-color': palette.gold,
  '--effect-beam-glow': '0 0 8px rgba(197, 165, 114, 0.6)',

  // Shimmer
  '--effect-shimmer-color': 'rgba(139, 69, 19, 0.08)',

  // CosmicBackground
  '--effect-cosmic-glow-1': 'rgba(139, 69, 19, 0.3)',
  '--effect-cosmic-glow-2': 'rgba(210, 105, 30, 0.3)',

  // GridMatrix
  '--effect-grid-color': 'rgba(139, 69, 19, 0.1)',

  // Spotlight
  '--effect-spotlight-color': 'rgba(139, 69, 19, 0.15)',
};

export const meta = {
  isDark: false,  // 浅色主题
  codeTheme: 'github-light' as const,
};
