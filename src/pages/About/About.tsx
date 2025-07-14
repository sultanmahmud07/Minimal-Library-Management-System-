import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router";

const About = () => {
  const features = [
  {
    title: "Smart Book Search",
    description: "Find any book instantly using title, author, or genre.",
    icon: "🔎",
  },
  {
    title: "Borrow Tracking",
    description: "Easily manage your borrowed books and return dates.",
    icon: "📆",
  },
  {
    title: "Curated Collections",
    description: "Access popular genres and staff picks all in one place.",
    icon: "📁",
  },
];

  return (
    <div className="main_container py-10 pt-20">
      <section className="text-center my-10">
        <h1 className="text-2xl md:text-4xl font-bold  my-4">
           Welcome to Our Library!
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Our mission is to make reading more accessible, enjoyable, and
          organized. Explore our collection, borrow books, and track your
          reading easily.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3 mb-10">
        {features.map(({ title, description, icon }) => (
          <Card
            key={title}
            className="p-5 shadow-sm hover:shadow-lg transition-all border border-gray-100"
          >
            <CardContent className="flex flex-col items-center gap-3 text-center">
              <span className="text-4xl">{icon}</span>
              <h3 className="text-lg font-semibold text-secondary">{title}</h3>
              <p className="text-sm text-gray-500">{description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="text-center md:py-5">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
          Join Our Book Community
        </h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Whether you're a student, teacher, or lifelong learner — our library
          has something for everyone. Stay tuned for new arrivals, author
          highlights, and more!
        </p>
      <Link to={"/books"}>
        <Button className="text-white cursor-pointer bg-primary hover:bg-secondary transition">
          Browse Books
        </Button></Link>
      </section>
    </div>
  );
};

export default About;
