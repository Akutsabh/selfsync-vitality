
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
    image: "/images/health-quote-1.jpg",
  },
  {
    id: 2,
    quote: "Take care of your body. It's the only place you have to live.",
    author: "Jim Rohn",
    image: "/images/health-quote-2.jpg",
  },
  {
    id: 3,
    quote: "Health is not valued until sickness comes.",
    author: "Thomas Fuller",
    image: "/images/health-quote-3.jpg",
  },
  {
    id: 4,
    quote: "Physical fitness is not only one of the most important keys to a healthy body, it is the basis of dynamic and creative intellectual activity.",
    author: "John F. Kennedy",
    image: "/images/health-quote-4.jpg",
  },
  {
    id: 5,
    quote: "Happiness is nothing more than good health and a bad memory.",
    author: "Albert Schweitzer",
    image: "/images/health-quote-5.jpg",
  },
];

export const HealthQuotesCarousel = () => {
  return (
    <Carousel className="mb-8">
      <CarouselContent>
        {healthQuotes.map((quote) => (
          <CarouselItem key={quote.id}>
            <Card className="border-none shadow-sm overflow-hidden">
              <div className="relative h-64 md:h-80 w-full">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
                  style={{ 
                    backgroundImage: `url(${quote.image})`,
                    opacity: 0.7
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                
                <div className="absolute inset-0 flex items-center">
                  <div className="container px-6 md:px-8">
                    <div className="max-w-2xl text-white">
                      <blockquote className="text-xl md:text-2xl font-medium italic mb-2">
                        "{quote.quote}"
                      </blockquote>
                      <cite className="block text-sm md:text-base font-medium not-italic">
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
