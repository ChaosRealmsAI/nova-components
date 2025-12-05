'use client';

import { Header, ComponentGrid, ComponentDetailModal } from '@/components/gallery';
import { PlaygroundThemeProvider } from '@/components/providers/PlaygroundThemeProvider';

export default function Home() {
  return (
    <PlaygroundThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <ComponentGrid />
        <ComponentDetailModal />
      </div>
    </PlaygroundThemeProvider>
  );
}
