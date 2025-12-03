'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface LayoutStore {
  // 右侧面板宽度 (px)
  rightPanelWidth: number;
  // 底部面板高度 (px)
  bottomPanelHeight: number;
  // 底部面板是否显示
  showBottomPanel: boolean;

  // Actions
  setRightPanelWidth: (width: number) => void;
  setBottomPanelHeight: (height: number) => void;
  resizeRightPanel: (delta: number) => void;
  resizeBottomPanel: (delta: number) => void;
  toggleBottomPanel: (show?: boolean) => void;
}

// 约束值
const MIN_RIGHT_WIDTH = 280;
const MAX_RIGHT_WIDTH = 500;
const MIN_BOTTOM_HEIGHT = 200;
const MAX_BOTTOM_HEIGHT = 600;

export const useLayoutStore = create<LayoutStore>()(
  persist(
    (set) => ({
      rightPanelWidth: 320,
      bottomPanelHeight: 350,
      showBottomPanel: false,

      setRightPanelWidth: (width) =>
        set({ rightPanelWidth: Math.min(MAX_RIGHT_WIDTH, Math.max(MIN_RIGHT_WIDTH, width)) }),

      setBottomPanelHeight: (height) =>
        set({ bottomPanelHeight: Math.min(MAX_BOTTOM_HEIGHT, Math.max(MIN_BOTTOM_HEIGHT, height)) }),

      resizeRightPanel: (delta) =>
        set((state) => ({
          // 往左拖 delta < 0，宽度增加；往右拖 delta > 0，宽度减少
          rightPanelWidth: Math.min(
            MAX_RIGHT_WIDTH,
            Math.max(MIN_RIGHT_WIDTH, state.rightPanelWidth - delta)
          ),
        })),

      resizeBottomPanel: (delta) =>
        set((state) => ({
          // 往上拖 delta < 0，高度增加；往下拖 delta > 0，高度减少
          bottomPanelHeight: Math.min(
            MAX_BOTTOM_HEIGHT,
            Math.max(MIN_BOTTOM_HEIGHT, state.bottomPanelHeight - delta)
          ),
        })),

      toggleBottomPanel: (show) =>
        set((state) => ({
          showBottomPanel: show !== undefined ? show : !state.showBottomPanel,
        })),
    }),
    {
      name: 'nova-layout',
      partialize: (state) => ({
        rightPanelWidth: state.rightPanelWidth,
        bottomPanelHeight: state.bottomPanelHeight,
      }),
    }
  )
);
