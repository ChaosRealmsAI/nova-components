'use client';

import { useGalleryStore } from '@/stores/gallery-store';
import { ComponentCard } from './ComponentCard';

export function ComponentGrid() {
  const { getFilteredComponents } = useGalleryStore();
  const components = getFilteredComponents();

  return (
    <div className="w-full px-6 md:px-8 lg:px-12 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {components.map((component) => (
          <ComponentCard key={component.id} component={component} />
        ))}
      </div>

      {components.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
          <p className="text-lg">No components found</p>
        </div>
      )}
    </div>
  );
}
