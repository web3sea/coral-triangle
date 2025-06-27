
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CarouselImage {
  src: string;
  alt: string;
  title: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
}

export const ImageCarousel = ({ images }: ImageCarouselProps) => (
  <div className="mb-16">
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-entreprenology-bg/80 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-entreprenology-turquoise">
                  {image.title}
                </h3>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-entreprenology-turquoise" />
      <CarouselNext className="text-entreprenology-turquoise" />
    </Carousel>
  </div>
);
