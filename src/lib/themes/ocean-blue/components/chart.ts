import { type ChartSlots } from '@/components/nova-ui/blocks/chart';

/**
 * Ocean Blue - Chart 主题配置
 * 使用清新的海洋蓝色调
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
      '[&_.recharts-cartesian-axis-tick_text]:fill-slate-500',
      '[&_.recharts-cartesian-grid_line[stroke="#ccc"]]:stroke-blue-200/50',
      '[&_.recharts-curve.recharts-tooltip-cursor]:stroke-blue-300',
      '[&_.recharts-dot[stroke="#fff"]]:stroke-transparent',
      '[&_.recharts-layer]:outline-none',
      '[&_.recharts-polar-grid_[stroke="#ccc"]]:stroke-blue-200',
      '[&_.recharts-radial-bar-background-sector]:fill-blue-100',
      '[&_.recharts-rectangle.recharts-tooltip-cursor]:fill-blue-100/50',
      '[&_.recharts-reference-line_[stroke="#ccc"]]:stroke-blue-200',
      '[&_.recharts-sector[stroke="#fff"]]:stroke-transparent',
      '[&_.recharts-sector]:outline-none',
      '[&_.recharts-surface]:outline-none',
    ],
    tooltip: [
      'grid min-w-[8rem] items-start gap-1.5',
      'rounded-lg border border-blue-200',
      'bg-white',
      'px-2.5 py-1.5 text-xs shadow-lg',
      'text-slate-900',
    ],
    legend: 'flex items-center justify-center gap-4 text-slate-500',
  },
  colors: {
    primary: '#0284c7',   // Sky-600
    secondary: '#10b981', // Emerald-500
    tertiary: '#8b5cf6',  // Violet-500
    quaternary: '#f97316', // Orange-500
    quinary: '#ec4899',   // Pink-500
  },
};
