/**
 * 自动布局算法
 *
 * 核心原则：
 * 1. 同一行内组件顶部对齐
 * 2. 下一行从当前行最高组件底部 + gap 开始
 * 3. 按尺寸分层：小组件、中组件、大组件分区展示
 */

export interface LayoutItem {
  id: string;
  width: number;
  height: number;
}

export interface LayoutResult {
  id: string;
  x: number;
  y: number;
}

export interface LayoutOptions {
  /** 画布起始 X 坐标 */
  startX?: number;
  /** 画布起始 Y 坐标 */
  startY?: number;
  /** 每行最大宽度 */
  maxRowWidth?: number;
  /** 组件之间的水平间距 */
  gapX?: number;
  /** 行与行之间的垂直间距 */
  gapY?: number;
  /** 层与层之间的间距 */
  sectionGap?: number;
}

/**
 * 按尺寸分层的智能布局
 *
 * 布局结构：
 * ┌─────────────────────────────────────────┐
 * │  小组件区 (height ≤ 50)                  │
 * │  [btn] [badge] [toggle] [checkbox] ...   │
 * ├─────────────────────────────────────────┤
 * │  中组件区 (50 < height ≤ 100)            │
 * │  [textarea] [radio-group] [tooltip]      │
 * ├─────────────────────────────────────────┤
 * │  大组件区 (height > 100)                 │
 * │  [card] [dialog] [scroll-area]           │
 * └─────────────────────────────────────────┘
 */
export function calculateAutoLayout(
  items: LayoutItem[],
  options: LayoutOptions = {}
): LayoutResult[] {
  const {
    startX = 80,
    startY = 80,
    maxRowWidth = 900,
    sectionGap = 80,
  } = options;

  // 按高度分组
  const small: LayoutItem[] = [];  // height <= 50
  const medium: LayoutItem[] = []; // 50 < height <= 100
  const large: LayoutItem[] = [];  // height > 100

  for (const item of items) {
    if (item.height <= 50) {
      small.push(item);
    } else if (item.height <= 100) {
      medium.push(item);
    } else {
      large.push(item);
    }
  }

  const results: LayoutResult[] = [];
  let currentY = startY;

  // 布局小组件区
  if (small.length > 0) {
    const { positions, maxY } = layoutSection(small, {
      startX,
      startY: currentY,
      maxRowWidth,
      gapX: 35,
      gapY: 35,
    });
    results.push(...positions);
    currentY = maxY + sectionGap;
  }

  // 布局中组件区
  if (medium.length > 0) {
    const { positions, maxY } = layoutSection(medium, {
      startX,
      startY: currentY,
      maxRowWidth,
      gapX: 45,
      gapY: 45,
    });
    results.push(...positions);
    currentY = maxY + sectionGap;
  }

  // 布局大组件区
  if (large.length > 0) {
    const { positions } = layoutSection(large, {
      startX,
      startY: currentY,
      maxRowWidth,
      gapX: 50,
      gapY: 50,
    });
    results.push(...positions);
  }

  return results;
}

/**
 * 单区域流式布局
 *
 * 实现顶部对齐的行布局：
 * - 同一行所有组件 y 坐标相同（顶部对齐）
 * - 下一行 y = 当前行 y + 当前行最大高度 + gapY
 */
function layoutSection(
  items: LayoutItem[],
  options: {
    startX: number;
    startY: number;
    maxRowWidth: number;
    gapX: number;
    gapY: number;
  }
): { positions: LayoutResult[]; maxY: number } {
  const { startX, startY, maxRowWidth, gapX, gapY } = options;

  // 第一步：将 items 分配到各行
  const rows: LayoutItem[][] = [];
  let currentRow: LayoutItem[] = [];
  let currentRowWidth = 0;

  for (const item of items) {
    const itemTotalWidth = item.width + (currentRow.length > 0 ? gapX : 0);

    // 检查是否需要换行
    if (currentRowWidth + itemTotalWidth > maxRowWidth && currentRow.length > 0) {
      rows.push(currentRow);
      currentRow = [item];
      currentRowWidth = item.width;
    } else {
      currentRow.push(item);
      currentRowWidth += itemTotalWidth;
    }
  }

  // 添加最后一行
  if (currentRow.length > 0) {
    rows.push(currentRow);
  }

  // 第二步：计算每行的位置
  const positions: LayoutResult[] = [];
  let currentY = startY;
  let maxY = startY;

  for (const row of rows) {
    // 计算当前行的最大高度
    const rowMaxHeight = Math.max(...row.map((item) => item.height));

    // 布局当前行的所有组件（顶部对齐）
    let currentX = startX;
    for (const item of row) {
      positions.push({
        id: item.id,
        x: currentX,
        y: currentY, // 同一行 y 相同 = 顶部对齐
      });
      currentX += item.width + gapX;
    }

    // 更新 maxY
    maxY = currentY + rowMaxHeight;

    // 下一行的起始 y
    currentY = maxY + gapY;
  }

  return { positions, maxY };
}

/**
 * 按类别分组的智能布局
 *
 * 每个类别单独一个区域，类别之间有更大的间距
 */
export function calculateGroupedLayout(
  items: (LayoutItem & { category?: string })[],
  options: LayoutOptions & { categoryGap?: number } = {}
): LayoutResult[] {
  const {
    startX = 80,
    startY = 80,
    maxRowWidth = 900,
    gapX = 40,
    gapY = 40,
    categoryGap = 80,
  } = options;

  // 按类别分组，保持原始顺序
  const groups = new Map<string, typeof items>();
  for (const item of items) {
    const category = item.category || 'default';
    if (!groups.has(category)) {
      groups.set(category, []);
    }
    groups.get(category)!.push(item);
  }

  const results: LayoutResult[] = [];
  let groupStartY = startY;

  for (const [, groupItems] of groups) {
    let currentX = startX;
    let currentY = groupStartY;
    let rowMaxHeight = 0;
    let groupMaxY = groupStartY;

    for (const item of groupItems) {
      // 检查是否需要换行
      if (currentX + item.width > startX + maxRowWidth && currentX !== startX) {
        currentX = startX;
        currentY += rowMaxHeight + gapY;
        rowMaxHeight = 0;
      }

      results.push({
        id: item.id,
        x: currentX,
        y: currentY,
      });

      currentX += item.width + gapX;
      rowMaxHeight = Math.max(rowMaxHeight, item.height);
      groupMaxY = Math.max(groupMaxY, currentY + item.height);
    }

    // 下一个分组的起始 Y
    groupStartY = groupMaxY + categoryGap;
  }

  return results;
}

/**
 * 计算所有组件的边界框
 */
export function calculateBounds(
  items: { x: number; y: number; width: number; height: number }[]
): { minX: number; minY: number; maxX: number; maxY: number; width: number; height: number } {
  if (items.length === 0) {
    return { minX: 0, minY: 0, maxX: 0, maxY: 0, width: 0, height: 0 };
  }

  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  for (const item of items) {
    minX = Math.min(minX, item.x);
    minY = Math.min(minY, item.y);
    maxX = Math.max(maxX, item.x + item.width);
    maxY = Math.max(maxY, item.y + item.height);
  }

  return {
    minX,
    minY,
    maxX,
    maxY,
    width: maxX - minX,
    height: maxY - minY,
  };
}
