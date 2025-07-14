import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import booksBg from "../../../assets/book-banner.jpg"; // Replace with your actual image path

const ViewAllBooksInfo = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[480px] flex items-center my-10"
      style={{ backgroundImage: `url(${booksBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full main_container py-12 text-white">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Explore Our Curated Collection 📚
          </h2>
          <p className="text-lg md:text-xl mb-6 text-gray-100">
            Dive into a wide selection of books across genres — from timeless classics to scientific breakthroughs. Find your next great read today!
          </p>
          <Link to="/books">
            <Button className="bg-primary hover:bg-primary/90 text-white text-base px-6 py-2 rounded-lg">
              View All Books
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ViewAllBooksInfo;
