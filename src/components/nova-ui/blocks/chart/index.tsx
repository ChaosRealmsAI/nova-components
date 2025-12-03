'use client';

/**
 * Chart Block
 * 图表组件
 * 依赖: recharts
 */

import * as React from 'react';
import * as RechartsPrimitive from 'recharts';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/themes/use-theme';
import { useI18n } from '@/lib/i18n/use-i18n';
import { chartBaseConfig } from './chart.config';

// ============================================================================ 
// 依赖声明
// ============================================================================ 

export const chartAtoms = [] as const;

export { chartBaseConfig };

// ============================================================================ 
// Styles
// ============================================================================ 

const chart = tv(chartBaseConfig);

// ============================================================================ 
// Types
// ============================================================================ 

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
}

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }

  return context
}

export type ChartVariants = VariantProps<typeof chart>;
export type ChartSlots = keyof typeof chartBaseConfig.slots;
export type ChartClassNames = Partial<Record<ChartSlots, string>>;

export interface ChartDemoProps extends ChartVariants {
  showLegend?: boolean;
  showTooltip?: boolean;
  showGrid?: boolean;
}

// ============================================================================
// Components
// ============================================================================
function ChartContainer({
  id,
  className,
  classNames,
  children,
  config,
  ...props
}: React.ComponentProps<"div"> & {
  config: ChartConfig
  classNames?: ChartClassNames
  children: React.ReactElement
}) {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`
  const { currentTheme } = useTheme();
  const { t } = useI18n();
  const themeConfig = currentTheme?.components?.Chart;
  const styles = chart({});
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = React.useState<{ width: number; height: number } | null>(null);

  // 延迟渲染直到 DOM 准备好且容器可测量
  // 这对于 tldraw canvas 内的渲染至关重要，因为 HTMLContainer 可能还未完全挂载
  React.useEffect(() => {
    let attempts = 0;
    const maxAttempts = 50;
    let timeoutId: ReturnType<typeof setTimeout>;
    let animationFrameId: number;

    const checkReady = () => {
      const el = containerRef.current;
      if (el) {
        try {
          const rect = el.getBoundingClientRect();
          // 确保元素有实际尺寸
          if (rect.width > 0 && rect.height > 0) {
            setDimensions({ width: rect.width, height: rect.height });
            return;
          }
        } catch {
          // getBoundingClientRect 失败，继续重试
        }
      }

      attempts++;
      if (attempts < maxAttempts) {
        animationFrameId = requestAnimationFrame(checkReady);
      } else {
        // 达到最大尝试次数后，使用默认尺寸
        setDimensions({ width: 400, height: 300 });
      }
    };

    animationFrameId = requestAnimationFrame(checkReady);

    // 添加超时保底：500ms 后使用默认尺寸
    timeoutId = setTimeout(() => {
      if (!dimensions) {
        setDimensions({ width: 400, height: 300 });
      }
    }, 500);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        ref={containerRef}
        data-slot="chart"
        data-chart={chartId}
        className={cn(
          styles.container(),
          themeConfig?.slots?.container,
          classNames?.container,
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        {dimensions ? (
          <div style={{ width: dimensions.width, height: dimensions.height }}>
            {React.cloneElement(children, {
              width: dimensions.width,
              height: dimensions.height,
            } as Record<string, unknown>)}
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center text-muted-foreground">
            <div className="animate-pulse">{t('chartLoading', 'Loading chart...')}</div>
          </div>
        )}
      </div>
    </ChartContext.Provider>
  )
}

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([, config]) => config.theme || config.color
  )

  if (!colorConfig.length) {
    return null
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
      itemConfig.color
    return color ? `  --color-${key}: ${color};` : null
  })
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  )
}

const ChartTooltip = RechartsPrimitive.Tooltip

function ChartTooltipContent({
  active,
  payload,
  className,
  classNames,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey,
}: React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
  React.ComponentProps<"div"> &
  {
    hideLabel?: boolean
    hideIndicator?: boolean
    indicator?: "line" | "dot" | "dashed"
    nameKey?: string
    labelKey?: string
    classNames?: ChartClassNames
  }) {
  const { config } = useChart()
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Chart;
  const styles = chart({});

  const tooltipLabel = React.useMemo(() => {
    if (hideLabel || !payload?.length) {
      return null
    }

    const [item] = payload
    const key = `${labelKey || item?.dataKey || item?.name || "value"}`
    const itemConfig = getPayloadConfigFromPayload(config, item, key)
    const value =
      !labelKey && typeof label === "string"
        ? config[label as keyof typeof config]?.label || label
        : itemConfig?.label

    if (labelFormatter) {
      return (
        <div className={cn("font-medium", labelClassName)}>
          {labelFormatter(value, payload)}
        </div>
      )
    }

    if (!value) {
      return null
    }

    return <div className={cn("font-medium", labelClassName)}>{value}</div>
  }, [
    label,
    labelFormatter,
    payload,
    hideLabel,
    labelClassName,
    config,
    labelKey,
  ])

  if (!active || !payload?.length) {
    return null
  }

  const nestLabel = payload.length === 1 && indicator !== "dot"

  return (
    <div
      className={cn(
        styles.tooltip(),
        themeConfig?.slots?.tooltip,
        classNames?.tooltip,
        className
      )}
    >
      {!nestLabel ? tooltipLabel : null}
      <div className="grid gap-1.5">
        {payload
          .filter((item) => item.type !== "none")
          .map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`
            const itemConfig = getPayloadConfigFromPayload(config, item, key)
            const indicatorColor = color || item.payload.fill || item.color

            return (
              <div
                key={item.dataKey}
                className={cn(
                  "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                  indicator === "dot" && "items-center"
                )}
              >
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={cn(
                            "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                            {
                              "h-2.5 w-2.5": indicator === "dot",
                              "w-1": indicator === "line",
                              "w-0 border-[1.5px] border-dashed bg-transparent":
                                indicator === "dashed",
                              "my-0.5": nestLabel && indicator === "dashed",
                            }
                          )}
                          style={
                            {
                              "--color-bg": indicatorColor,
                              "--color-border": indicatorColor,
                            } as React.CSSProperties
                          }
                        />
                      )
                    )}
                    <div
                      className={cn(
                        "flex flex-1 justify-between leading-none",
                        nestLabel ? "items-end" : "items-center"
                      )}
                    >
                      <div className="grid gap-1.5">
                        {nestLabel ? tooltipLabel : null}
                        <span className="text-muted-foreground">
                          {itemConfig?.label || item.name}
                        </span>
                      </div>
                      {item.value && (
                        <span className="text-foreground font-mono font-medium tabular-nums">
                          {item.value.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            )
          })}
      </div>
    </div>
  )
}

const ChartLegend = RechartsPrimitive.Legend

function ChartLegendContent({
  className,
  classNames,
  hideIcon = false,
  payload,
  verticalAlign = "bottom",
  nameKey,
}: React.ComponentProps<"div"> &
  Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> &
  {
    hideIcon?: boolean
    nameKey?: string
    classNames?: ChartClassNames
  }) {
  const { config } = useChart()
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Chart;
  const styles = chart({});

  if (!payload?.length) {
    return null
  }

  return (
    <div
      className={cn(
        styles.legend(),
        themeConfig?.slots?.legend,
        classNames?.legend,
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className
      )}
    >
      {payload
        .filter((item) => item.type !== "none")
        .map((item) => {
          const key = `${nameKey || item.dataKey || "value"}`
          const itemConfig = getPayloadConfigFromPayload(config, item, key)

          return (
            <div
              key={item.value}
              className={cn(
                "[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3"
              )}
            >
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <div
                  className="h-2 w-2 shrink-0 rounded-[2px]"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
              )}
              {itemConfig?.label}
            </div>
          )
        })}
    </div>
  )
}

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string
) {
  if (typeof payload !== "object" || payload === null) {
    return undefined
  }

  const payloadPayload =
    "payload" in payload &&
    typeof payload.payload === "object" &&
    payload.payload !== null
      ? payload.payload
      : undefined

  let configLabelKey: string = key

  if (
    key in payload &&
    typeof payload[key as keyof typeof payload] === "string"
  ) {
    configLabelKey = payload[key as keyof typeof payload] as string
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[
      key as keyof typeof payloadPayload
    ] as string
  }

  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config]
}

// ============================================================================
// Demo
// ============================================================================

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

// 默认颜色（当主题未提供颜色时使用）
const defaultChartColors = {
  primary: "#2563eb",
  secondary: "#60a5fa",
}

function ChartDemo({
  showLegend = true,
  showTooltip = true,
  showGrid = true,
}: ChartDemoProps) {
  const { currentTheme } = useTheme();
  const { t } = useI18n();
  const themeColors = currentTheme?.components?.Chart?.colors;
  const [hasError, setHasError] = React.useState(false);

  // 使用主题颜色或默认颜色，使用国际化标签
  const chartConfig = React.useMemo<ChartConfig>(() => ({
    desktop: {
      label: t('chartLabelDesktop', 'Desktop'),
      color: themeColors?.primary || defaultChartColors.primary,
    },
    mobile: {
      label: t('chartLabelMobile', 'Mobile'),
      color: themeColors?.secondary || defaultChartColors.secondary,
    },
  }), [themeColors, t]);

  // 处理 recharts 在某些环境（如 tldraw canvas）中的渲染错误
  React.useEffect(() => {
    setHasError(false);
  }, [chartConfig]);

  if (hasError) {
    return (
      <div className="min-h-[200px] w-full flex items-center justify-center text-muted-foreground text-sm">
        {t('componentTypeChart', 'Chart')}
      </div>
    );
  }

  return (
    <ErrorBoundary onError={() => setHasError(true)}>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <RechartsPrimitive.BarChart accessibilityLayer data={chartData}>
          {showGrid && <RechartsPrimitive.CartesianGrid vertical={false} />}
          <RechartsPrimitive.XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value: string) => value.slice(0, 3)}
          />
          {showTooltip && <ChartTooltip content={<ChartTooltipContent />} />}
          {showLegend && <ChartLegend content={<ChartLegendContent />} />}
          <RechartsPrimitive.Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <RechartsPrimitive.Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </RechartsPrimitive.BarChart>
      </ChartContainer>
    </ErrorBoundary>
  )
}

// 简单的 Error Boundary 组件
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; onError?: () => void },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; onError?: () => void }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    this.props.onError?.();
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
  ChartDemo,
}
