/**
 * Carousel Component Manifest
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'carousel',
  name: 'Carousel',
  category: 'blocks',
  label: 'Carousel',
  labelKey: 'componentTypeCarousel',

  files: {
    component: 'index.tsx',
    config: 'carousel.config.ts',
  },

  themeConfigs: [
    { componentName: 'Carousel', configName: 'carouselConfig' },
  ],

  themeFile: 'components/carousel.ts',

  cssVars: [],

  dependencies: ['button'],

  exportOptions: {
    noChildren: true,
    customJsx: `<Carousel className="w-full max-w-xs">
  <CarouselContent>
    <CarouselItem>
      <div className="p-1">
        <div className="flex aspect-square items-center justify-center rounded-xl border bg-card p-6">
          <span className="text-4xl font-semibold">1</span>
        </div>
      </div>
    </CarouselItem>
    <CarouselItem>
      <div className="p-1">
        <div className="flex aspect-square items-center justify-center rounded-xl border bg-card p-6">
          <span className="text-4xl font-semibold">2</span>
        </div>
      </div>
    </CarouselItem>
    <CarouselItem>
      <div className="p-1">
        <div className="flex aspect-square items-center justify-center rounded-xl border bg-card p-6">
          <span className="text-4xl font-semibold">3</span>
        </div>
      </div>
    </CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`,
    customImports: [
      'Carousel',
      'CarouselContent',
      'CarouselItem',
      'CarouselPrevious',
      'CarouselNext',
    ],
    extraImports: `import { Card, CardContent } from "@/components/ui/card"`,
  },

  canvas: {
    size: { width: 400, height: 300 },
    props: [
      {
        name: 'orientation',
        type: 'select',
        label: 'Orientation',
        labelKey: 'propOrientation',
        options: [
          { value: 'horizontal', label: 'Horizontal', labelKey: 'valHorizontal' },
          { value: 'vertical', label: 'Vertical', labelKey: 'valVertical' },
        ],
        defaultValue: 'horizontal',
      },
      {
        name: 'loop',
        type: 'boolean',
        label: 'Loop',
        labelKey: 'propLoop',
        defaultValue: false,
      },
    ],
    defaultProps: {
      orientation: 'horizontal',
      loop: false,
    },
    availableEffects: [],
  },
};
