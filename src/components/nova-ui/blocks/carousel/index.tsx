'use client';

/**
 * Carousel Block
 * 轮播组件
 * 依赖 Atoms: button
 */

import * as React from 'react';
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/themes/use-theme';
import { Button } from '@/components/nova-ui/atmos/button';
import { carouselBaseConfig } from './carousel.config';

// ============================================================================
// 依赖声明
// ============================================================================

export const carouselAtoms = ['button'] as const;

export { carouselBaseConfig };

// ============================================================================
// Styles
// ============================================================================

const carousel = tv(carouselBaseConfig);

// ============================================================================
// Types
// ============================================================================

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

export type CarouselVariants = VariantProps<typeof carousel>;
export type CarouselSlots = keyof typeof carouselBaseConfig.slots;
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

function Carousel({
  orientation = 'horizontal',
  opts,
  setApi,
  plugins,
  className,
  classNames,
  children,
  ...props
}: CarouselProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Carousel;
  const styles = carousel({ orientation });

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
        onKeyDown={handleKeyDown}
        className={cn(
          styles.root(),
          themeConfig?.slots?.root,
          classNames?.root,
          className
        )}
        role="region"
        aria-roledescription="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselContent({ className, classNames, ...props }: React.HTMLAttributes<HTMLDivElement> & { classNames?: CarouselClassNames }) {
  const { carouselRef, orientation } = useCarousel();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Carousel;
  const styles = carousel({ orientation });

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        className={cn(
          styles.content(),
          themeConfig?.slots?.content,
          classNames?.content,
          className
        )}
        {...props}
      />
    </div>
  );
}

function CarouselItem({ className, classNames, ...props }: React.HTMLAttributes<HTMLDivElement> & { classNames?: CarouselClassNames }) {
  const { orientation } = useCarousel();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Carousel;
  const styles = carousel({ orientation });

  return (
    <div
      role="group"
      aria-roledescription="slide"
      className={cn(
        styles.item(),
        themeConfig?.slots?.item,
        classNames?.item,
        className
      )}
      {...props}
    />
  );
}

function CarouselPrevious({
  className,
  classNames,
  variant = 'outline',
  size = 'icon',
  ...props
}: React.ComponentProps<typeof Button> & { classNames?: CarouselClassNames }) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Carousel;
  const styles = carousel({ orientation });

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        styles.previous(),
        themeConfig?.slots?.previous,
        classNames?.previous,
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
}

function CarouselNext({
  className,
  classNames,
  variant = 'outline',
  size = 'icon',
  ...props
}: React.ComponentProps<typeof Button> & { classNames?: CarouselClassNames }) {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Carousel;
  const styles = carousel({ orientation });

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        styles.next(),
        themeConfig?.slots?.next,
        classNames?.next,
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
}

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
