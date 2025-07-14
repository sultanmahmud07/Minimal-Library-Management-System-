import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { useState } from "react";
import { cn } from "@/lib/utils";

const bannerSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1553729784-e91953dec042?auto=format&fit=crop&w=1600&q=80",
    title: "Inspire a Lifetime of Learning",
    description:
      "Discover powerful stories and thoughtful insights that spark curiosity, deepen understanding, and foster lifelong habits of learning and discovery.",
    buttonText: "Visit Our Blog",
    buttonLink: "/blog",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1600&q=80",
    title: "Browse Thousands of Books Effortlessly",
    description:
      "From science and tech to fiction and biographies—explore titles across all genres curated for modern readers and knowledge seekers.",
    buttonText: "Browse Books",
    buttonLink: "/books",
  },
  {
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80",
    title: "Streamlined Borrowing Experience",
    description:
      "Easily borrow your favorite books, monitor return dates, and manage your library journey—all from one intuitive dashboard.",
    buttonText: "View Borrow Summary",
    buttonLink: "/borrow-summary",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=1600&q=80",
    title: "Passionate About Community & Knowledge",
    description:
      "Our platform is built to connect readers, nurture curiosity, and promote literacy for all ages. Learn more about our mission and impact.",
    buttonText: "About Us",
    buttonLink: "/about",
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="relative w-full h-[600px]  overflow-hidden">
      <Carousel
        opts={{ align: "start" }}
        plugins={[Autoplay({ delay: 6000, stopOnInteraction: false })]}
        className="carousel_class h-full w-full"
      >
        <CarouselContent className="h-full">
          {bannerSlides.map((slide, index) => (
            <CarouselItem
              key={index}
              className="relative h-full w-full"
              onClick={() => setCurrentSlide(index)}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="object-cover w-full h-full absolute inset-0 z-0"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/60 z-10" />
              <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-8 md:px-16">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold drop-shadow-md mb-4">
                  {slide.title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl max-w-2xl md:max-w-3xl drop-shadow-md mb-6">
                  {slide.description}
                </p>
                <Link to={slide.buttonLink} className="z-20">
                  <Button className="bg-primary text-white hover:bg-primary/90 px-6 py-3 text-base md:text-lg rounded-md">
                    {slide.buttonText}
                  </Button>
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-2 sm:left-4 z-30 text-white bg-black/30 hover:bg-black/50" />
        <CarouselNext className="right-2 sm:right-4 z-30 text-white bg-black/30 hover:bg-black/50" />

        {/* Dots Indicator */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
          {bannerSlides.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={cn(
                "w-2 h-2 sm:w-3 sm:h-3 rounded-full cursor-pointer",
                idx === currentSlide
                  ? "bg-white"
                  : "bg-white/40 hover:bg-white/70"
              )}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};

export default Banner;
