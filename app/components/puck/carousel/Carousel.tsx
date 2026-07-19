import { ComponentConfig, DropZone } from "@puckeditor/core";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface CarouselProps {
  title: string;
}

export const Carousel: ComponentConfig<CarouselProps> = {
  fields: {
    title: {
      type: "text",
    },
  },

  defaultProps: {
    title: "Featured",
  },

  render: ({ title }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
      loop: true,
      align: "start",
    });

    const scrollPrev = useCallback(() => {
      emblaApi?.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
      emblaApi?.scrollNext();
    }, [emblaApi]);

    return (
      <section className='py-16'>
        <div className='container mx-auto'>
          <h2 className='text-4xl font-bold text-center mb-10'>{title}</h2>

          <div className='relative'>
            <div className='overflow-hidden' ref={emblaRef}>
              <div className='flex'>
                <DropZone zone='slides' />
              </div>
            </div>

            <button
              onClick={scrollPrev}
              className='absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow'
            >
              <ChevronLeft />
            </button>

            <button
              onClick={scrollNext}
              className='absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow'
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>
    );
  },
};
