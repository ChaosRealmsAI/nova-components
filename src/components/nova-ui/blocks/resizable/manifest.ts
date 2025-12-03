import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  type: 'resizable',
  name: 'Resizable',
  category: 'blocks',
  label: 'Resizable',
  labelKey: 'componentTypeResizable',

  files: {
    component: 'index.tsx',
    config: 'resizable.config.ts',
  },

  themeConfigs: [
    { componentName: 'Resizable', configName: 'resizableConfig' },
  ],

  themeFile: 'components/resizable.ts',

  cssVars: [],

  dependencies: [],

  exportOptions: {
    noChildren: true,
    customJsx: `<ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border">
  <ResizablePanel defaultSize={50}>
    <div className="flex h-[200px] items-center justify-center p-6">
      <span className="font-semibold">One</span>
    </div>
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={50}>
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Two</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Three</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  </ResizablePanel>
</ResizablePanelGroup>`,
    customImports: [
      'ResizablePanelGroup',
      'ResizablePanel',
      'ResizableHandle',
    ],
  },

  canvas: {
    size: { width: 450, height: 200 },
    props: [
      {
        name: 'direction',
        type: 'select',
        label: 'Direction',
        labelKey: 'propDirection',
        options: [
          { value: 'horizontal', label: 'Horizontal', labelKey: 'valHorizontal' },
          { value: 'vertical', label: 'Vertical', labelKey: 'valVertical' },
        ],
        defaultValue: 'horizontal',
      },
    ],
    defaultProps: {
      direction: 'horizontal',
    },
    availableEffects: [],
  },
};
