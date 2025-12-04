import { type ChartSlots } from '@/components/nova-ui/blocks/chart';

/**
 * Shadcn Default - Chart 主题配置
 * 使用经典的中性色调
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
      '[&_.recharts-cartesian-axis-tick_text]:fill-zinc-500',
      '[&_.recharts-cartesian-grid_line[stroke="#ccc"]]:stroke-zinc-200',
      '[&_.recharts-curve.recharts-tooltip-cursor]:stroke-zinc-300',
      '[&_.recharts-dot[stroke="#fff"]]:stroke-transparent',
      '[&_.recharts-layer]:outline-none',
      '[&_.recharts-polar-grid_[stroke="#ccc"]]:stroke-zinc-200',
      '[&_.recharts-radial-bar-background-sector]:fill-zinc-100',
      '[&_.recharts-rectangle.recharts-tooltip-cursor]:fill-zinc-100',
      '[&_.recharts-reference-line_[stroke="#ccc"]]:stroke-zinc-200',
      '[&_.recharts-sector[stroke="#fff"]]:stroke-transparent',
      '[&_.recharts-sector]:outline-none',
      '[&_.recharts-surface]:outline-none',
    ],
    tooltip: [
      'grid min-w-[8rem] items-start gap-1.5',
      'rounded-lg border border-zinc-200',
      'bg-white',
      'px-2.5 py-1.5 text-xs shadow-md',
      'text-zinc-900',
    ],
    legend: 'flex items-center justify-center gap-4 text-zinc-500',
  },
  colors: {
    primary: '#18181b',   // Zinc-900 - 主色
    secondary: '#71717a', // Zinc-500 - 次色
    tertiary: '#3b82f6',  // Blue-500
    quaternary: '#22c55e', // Green-500
    quinary: '#f97316',   // Orange-500
  },
};
