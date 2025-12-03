import { type ChartSlots } from '@/components/nova-ui/blocks/chart';

/**
 * Sunset Warm - Chart 主题配置
 * 使用温暖的橙红色调
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
      '[&_.recharts-cartesian-axis-tick_text]:fill-stone-500',
      '[&_.recharts-cartesian-grid_line[stroke="#ccc"]]:stroke-orange-200/50',
      '[&_.recharts-curve.recharts-tooltip-cursor]:stroke-orange-300',
      '[&_.recharts-dot[stroke="#fff"]]:stroke-transparent',
      '[&_.recharts-layer]:outline-none',
      '[&_.recharts-polar-grid_[stroke="#ccc"]]:stroke-orange-200',
      '[&_.recharts-radial-bar-background-sector]:fill-orange-100',
      '[&_.recharts-rectangle.recharts-tooltip-cursor]:fill-orange-100/50',
      '[&_.recharts-reference-line_[stroke="#ccc"]]:stroke-orange-200',
      '[&_.recharts-sector[stroke="#fff"]]:stroke-transparent',
      '[&_.recharts-sector]:outline-none',
      '[&_.recharts-surface]:outline-none',
    ],
    tooltip: [
      'grid min-w-[8rem] items-start gap-1.5',
      'rounded-xl border border-orange-200',
      'bg-gradient-to-br from-white to-orange-50/50',
      'px-2.5 py-1.5 text-xs shadow-lg',
      'text-stone-900',
    ],
    legend: 'flex items-center justify-center gap-4 text-stone-500',
  },
  colors: {
    primary: '#f97316',   // Orange-500
    secondary: '#f59e0b', // Amber-500
    tertiary: '#14b8a6',  // Teal-500
    quaternary: '#6366f1', // Indigo-500
    quinary: '#f472b6',   // Pink-400
  },
};
