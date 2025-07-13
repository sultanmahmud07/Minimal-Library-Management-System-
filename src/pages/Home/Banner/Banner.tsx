import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const demoBooks = [
  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "1984",
    author: "George Orwell",
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=400&q=80", // replaced with working Unsplash image
  },
];

const Banner = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-blue-50 via-white to-gray-100">
      <div className="main_container grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
        {/* Left Content */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Discover Your Next Favorite Book
          </h1>
          <p className="text-lg text-gray-600">
            Browse from a wide collection of books in our digital library.
            Enjoy clean design, fast search, and easy borrowing.
          </p>
          <Button className="mt-4 text-white bg-blue-600 hover:bg-blue-700">
            Explore All Books
          </Button>
        </div>

        {/* Right Carousel */}
        <div className="w-full">
          <Carousel>
            <CarouselContent>
              {demoBooks.map((book, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 px-2"
                >
                  <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-40 object-cover"
                    />
                    <CardContent className="p-4">
                      <h2 className="font-semibold text-lg text-gray-800">
                        {book.title}
                      </h2>
                      <p className="text-sm text-gray-600">{book.author}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Banner;
