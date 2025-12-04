'use client';

/**
 * Carousel Block
 *
 * 轮播组件，用于循环展示一组内容。
 *
 * Architecture Notes:
 * - Block 组件，依赖 Atoms: button
 * - 不支持用户可配特效（通过内部 Atoms 获得）
 *
 * 架构：
 * - L1 (功能层): 静态定义，保证组件功能正常
 * - L2 (主题层): 从 useTheme 获取，控制视觉风格
 * - L3 (实例层): 用户传入的 className/classNames
 *
 * 优先级: L3 > L2 > L1 (通过 twMerge 解决冲突)
 */

import * as React from 'react';
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes';
import { Button } from '@/components/nova-ui/atmos/button';

// ============================================================================
// 依赖声明（用于导出时收集）
// ============================================================================

export const carouselAtoms = ['button'] as const;

// ============================================================================
// L1: 静态样式定义（功能层）
// ============================================================================

const carouselBase = tv({
  slots: {
    root: 'relative',
    content: 'flex',
    item: 'min-w-0 shrink-0 grow-0 basis-full',
    previous: 'absolute h-8 w-8 rounded-full',
    next: 'absolute h-8 w-8 rounded-full',
  },
  variants: {
    orientation: {
      horizontal: {
        content: '-ml-4',
        item: 'pl-4',
        previous: '-left-12 top-1/2 -translate-y-1/2',
        next: '-right-12 top-1/2 -translate-y-1/2',
      },
      vertical: {
        content: '-mt-4 flex-col',
        item: 'pt-4',
        previous: '-top-12 left-1/2 -translate-x-1/2 rotate-90',
        next: '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
      },
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

// ============================================================================
// Utils
// ============================================================================

const toClassString = (value: string | string[] | undefined): string => {
  if (!value) return '';
  if (Array.isArray(value)) return value.join(' ');
  return value;
};

// ============================================================================
// Types
// ============================================================================

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

export type CarouselVariants = VariantProps<typeof carouselBase>;
export type CarouselSlots = keyof typeof carouselBase.slots;
export type CarouselClassNames = Partial<Record<CarouselSlots, string>>;

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement>, CarouselVariants {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: 'horizontal' | 'vertical';
  setApi?: (api: CarouselApi) => void;
  classNames?: CarouselClassNames;
}

export interface CarouselDemoProps extends CarouselVariants {
  loop?: boolean;
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: CarouselApi;
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

// ============================================================================
// Context
// ============================================================================

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }

  return context;
}

// ============================================================================
// Components
// ============================================================================

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      orientation = 'horizontal',
      opts,
      setApi,
      plugins,
      className,
      classNames,
      children,
      ...props
    },
    ref
  ) => {
    const { currentTheme } = useTheme();
    const themeConfig = currentTheme?.components?.Carousel;

    // L1: 功能层（静态）
    const base = carouselBase({ orientation });

    // L2: 主题层（用 useMemo 缓存）
    const themeStyles = React.useMemo(
      () => ({
        root: toClassString(themeConfig?.slots?.root),
        content: toClassString(themeConfig?.slots?.content),
        item: toClassString(themeConfig?.slots?.item),
        previous: toClassString(themeConfig?.slots?.previous),
        next: toClassString(themeConfig?.slots?.next),
      }),
      [themeConfig]
    );

    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === 'horizontal' ? 'x' : 'y',
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return;
      }

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on('reInit', onSelect);
      api.on('select', onSelect);

      return () => {
        api.off('reInit', onSelect);
        api.off('select', onSelect);
      };
    }, [api, onSelect]);

    // 合并: L1 + L2 + L3
    const rootClass = twMerge(base.root(), themeStyles.root, classNames?.root, className);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation: orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDown={handleKeyDown}
          className={rootClass}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = 'Carousel';

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { classNames?: CarouselClassNames }
>(({ className, classNames, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Carousel;

  // L1: 功能层（静态）
  const base = carouselBase({ orientation });

  // L2: 主题层（用 useMemo 缓存）
  const themeStyles = React.useMemo(
    () => ({
      content: toClassString(themeConfig?.slots?.content),
    }),
    [themeConfig]
  );

  // 合并: L1 + L2 + L3
  const contentClass = twMerge(base.content(), themeStyles.content, classNames?.content, className);

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div ref={ref} className={contentClass} {...props} />
    </div>
  );
});
CarouselContent.displayName = 'CarouselContent';

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { classNames?: CarouselClassNames }
>(({ className, classNames, ...props }, ref) => {
  const { orientation } = useCarousel();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Carousel;

  // L1: 功能层（静态）
  const base = carouselBase({ orientation });

  // L2: 主题层（用 useMemo 缓存）
  const themeStyles = React.useMemo(
    () => ({
      item: toClassString(themeConfig?.slots?.item),
    }),
    [themeConfig]
  );

  // 合并: L1 + L2 + L3
  const itemClass = twMerge(base.item(), themeStyles.item, classNames?.item, className);

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={itemClass}
      {...props}
    />
  );
});
CarouselItem.displayName = 'CarouselItem';

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button> & { classNames?: CarouselClassNames }
>(({ className, classNames, variant = 'outline', size = 'icon', ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Carousel;

  // L1: 功能层（静态）
  const base = carouselBase({ orientation });

  // L2: 主题层（用 useMemo 缓存）
  const themeStyles = React.useMemo(
    () => ({
      previous: toClassString(themeConfig?.slots?.previous),
    }),
    [themeConfig]
  );

  // 合并: L1 + L2 + L3
  const previousClass = twMerge(base.previous(), themeStyles.previous, classNames?.previous, className);

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={previousClass}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
});
CarouselPrevious.displayName = 'CarouselPrevious';

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button> & { classNames?: CarouselClassNames }
>(({ className, classNames, variant = 'outline', size = 'icon', ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Carousel;

  // L1: 功能层（静态）
  const base = carouselBase({ orientation });

  // L2: 主题层（用 useMemo 缓存）
  const themeStyles = React.useMemo(
    () => ({
      next: toClassString(themeConfig?.slots?.next),
    }),
    [themeConfig]
  );

  // 合并: L1 + L2 + L3
  const nextClass = twMerge(base.next(), themeStyles.next, classNames?.next, className);

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={nextClass}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
});
CarouselNext.displayName = 'CarouselNext';

// ============================================================================
// Demo
// ============================================================================

function CarouselDemo({
  loop = false,
  orientation = 'horizontal',
}: CarouselDemoProps & { loop?: boolean }) {
  return (
    <div className="flex items-center justify-center w-full h-full p-12">
      <Carousel
        opts={{
          align: 'start',
          loop: loop,
        }}
        orientation={orientation}
        className="w-full max-w-xs"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <div className="flex aspect-square items-center justify-center rounded-xl border bg-card p-6 shadow-sm">
                  <span className="text-3xl font-semibold text-card-foreground">{index + 1}</span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDemo,
};
