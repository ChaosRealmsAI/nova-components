'use client';

import dynamic from 'next/dynamic';
import { Drawer } from '@/components/drawer/Drawer';
import { MainLayout } from '@/components/layout';
import { PlaygroundThemeProvider } from '@/components/providers/PlaygroundThemeProvider';
import { PreviewModal } from '@/components/preview/PreviewModal';

// 动态导入 Canvas (tldraw 需要 client-side only)
const CanvasFallback = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <span className="text-white/50">Loading Canvas...</span>
    </div>
  );
};

const Canvas = dynamic(() => import('@/components/canvas/Canvas').then((mod) => mod.Canvas), {
  ssr: false,
  loading: CanvasFallback,
});

export default function Home() {
  return (
    <PlaygroundThemeProvider>
      <PreviewModal />
      <MainLayout
        canvas={<Canvas />}
        rightPanel={<Drawer />}
      />
    </PlaygroundThemeProvider>
  );
}
