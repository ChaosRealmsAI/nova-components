import { type ChartSlots } from '@/components/nova-ui/blocks/chart';

/**
 * Neo Brutalism - Chart 主题配置
 * 
 * 策略：
 * 1. 使用 [&_selector] 语法强行覆盖 Recharts 的 SVG 样式
 * 2. 移除所有透明度，使用实色
 * 3. 强制粗边框和硬阴影
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
      // 1. 坐标轴文字：深色，无透明
      '[&_.recharts-cartesian-axis-tick_text]:fill-black',
      
      // 2. 网格线：实线，黑色，无透明 (强行覆盖 stroke)
      '[&_.recharts-cartesian-grid_line]:stroke-black/20', 
      
      // 3. Tooltip 游标 (鼠标悬停时的辅助线)：黑色粗实线
      '[&_.recharts-curve.recharts-tooltip-cursor]:stroke-black',
      '[&_.recharts-curve.recharts-tooltip-cursor]:stroke-[2px]',
      
      // 4. Bar Chart 悬停时的背景条：灰色
      '[&_.recharts-rectangle.recharts-tooltip-cursor]:fill-black/10',
      
      // 5. 清除默认轮廓
      '[&_.recharts-layer]:outline-none',
      '[&_.recharts-sector]:outline-none',
      '[&_.recharts-surface]:outline-none',
    ],
    
    // Tooltip 样式：新野兽派核心
    tooltip: [
      'grid min-w-[8rem] items-start gap-1.5',
      'bg-white',                  // 白底
      'border-2 border-black',     // 粗黑边框
      'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]', // 硬阴影
      'rounded-md',
      'px-2.5 py-1.5 text-xs',
      'text-black',
    ],
    
    legend: 'flex items-center justify-center gap-4 text-black font-bold',
  },
  
  // 图表颜色序列 (会被注入为 --color-1, --color-2 等)
  colors: {
    primary: '#8b5cf6',   // Violet (品牌主色)
    secondary: '#facc15', // Yellow (高亮色)
    tertiary: '#fb7185',  // Pink
    quaternary: '#4ade80', // Green
    quinary: '#22d3ee',   // Cyan
  },
};