import { type ChartSlots } from '@/components/nova-ui/blocks/chart';

/**
 * Cyberpunk Dark - Chart 主题配置
 * 使用霓虹发光色彩
 */
export const chartConfig: {
  slots: Partial<Record<ChartSlots, string | string[]>>;
  colors?: {
    primary: string;
    secondary: string;
    tertiary?: string;
    quaternary?: string;
    quinary?: string;
  };
} = {
  slots: {
    container: [
      '[&_.recharts-cartesian-axis-tick_text]:fill-zinc-400',
      '[&_.recharts-cartesian-grid_line[stroke="#ccc"]]:stroke-zinc-700/50',
      '[&_.recharts-curve.recharts-tooltip-cursor]:stroke-fuchsia-500/50',
      '[&_.recharts-dot[stroke="#fff"]]:stroke-transparent',
      '[&_.recharts-layer]:outline-none',
      '[&_.recharts-polar-grid_[stroke="#ccc"]]:stroke-zinc-700',
      '[&_.recharts-radial-bar-background-sector]:fill-zinc-800',
      '[&_.recharts-rectangle.recharts-tooltip-cursor]:fill-fuchsia-500/20',
      '[&_.recharts-reference-line_[stroke="#ccc"]]:stroke-zinc-700',
      '[&_.recharts-sector[stroke="#fff"]]:stroke-transparent',
      '[&_.recharts-sector]:outline-none',
      '[&_.recharts-surface]:outline-none',
    ],
    tooltip: [
      'grid min-w-[8rem] items-start gap-1.5',
      'border border-fuchsia-500/50',
      'bg-zinc-900/95 backdrop-blur-sm',
      'px-2.5 py-1.5 text-xs',
      'shadow-[0_0_20px_rgba(217,70,239,0.3)]',
      'text-zinc-200',
    ],
    legend: 'flex items-center justify-center gap-4 text-zinc-400',
  },
  colors: {
    primary: '#D946EF',   // Fuchsia-500 霓虹粉
    secondary: '#22D3EE', // Cyan-400 霓虹青
    tertiary: '#FACC15',  // Yellow-400 霓虹黄
    quaternary: '#00ff9d', // 霓虹绿
    quinary: '#FF0055',   // 霓虹红
  },
};
