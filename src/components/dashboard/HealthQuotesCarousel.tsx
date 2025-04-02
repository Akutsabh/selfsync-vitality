
import { useState } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

type HealthQuote = {
  id: number;
  quote: string;
  author: string;
  image: string;
};

const healthQuotes: HealthQuote[] = [
  {
    id: 1,
    quote: "The greatest wealth is health.",
    author: "Virgil",
    image: "https://images.unsplash.com/photo-1579126038374-6064e9370f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 2,
    quote: "Take care of your body. It's the only place you have to live.",
    author: "Jim Rohn",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 3,
    quote: "Health is not valued until sickness comes.",
    author: "Thomas Fuller",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 4,
    quote: "Physical fitness is not only one of the most important keys to a healthy body, it is the basis of dynamic and creative intellectual activity.",
    author: "John F. Kennedy",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 5,
    quote: "Happiness is nothing more than good health and a bad memory.",
    author: "Albert Schweitzer",
    image: "https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
  },
];

export const HealthQuotesCarousel = () => {
  return (
    <Carousel className="mb-6">
      <CarouselContent>
        {healthQuotes.map((quote) => (
          <CarouselItem key={quote.id}>
            <Card className="border-none shadow-sm overflow-hidden">
              <div className="relative h-40 md:h-48 w-full">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
                  style={{ 
                    backgroundImage: `url(${quote.image})`,
                    opacity: 0.8
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                
                <div className="absolute inset-0 flex items-center">
                  <div className="container px-4 md:px-6">
                    <div className="max-w-md text-white">
                      <blockquote className="text-sm md:text-lg font-medium italic mb-1">
                        "{quote.quote}"
                      </blockquote>
                      <cite className="block text-xs md:text-sm font-medium not-italic">
                        — {quote.author}
                      </cite>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2" />
      <CarouselNext className="right-2 top-1/2 -translate-y-1/2" />
    </Carousel>
  );
};
