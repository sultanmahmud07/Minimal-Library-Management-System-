import Slider from "react-slick";
import { Card, CardContent } from "@/components/ui/card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const mostPopularAuthors = [
  {
    name: "Stephen Hawking",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Stephen_Hawking.StarChild.jpg",
    role: "Author",
  },
  {
    name: "Albert Einstein",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg",
    role: "Author & Physicist",
  },
  {
    name: "Carl Sagan",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/30/Sagan_1980.jpg",
    role: "Author & Astronomer",
  },
  {
    name: "Neil deGrasse Tyson",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/30/Neil_deGrasse_Tyson_in_June_2017.jpg",
    role: "Author & Astrophysicist",
  },
  {
    name: "Brian Greene",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/39/Brian_Greene%2C_2011.jpg",
    role: "Author & String Theorist",
  },
];

const sliderSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 700,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1280,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1 },
    },
  ],
};

const PopularAuthors = () => {
  return (
    <section className="py-12 bg-white">
      <div className="main_container">
        <h2 className="text-3xl font-bold text-center mb-8">
          Most Popular Authors
        </h2>

        <Slider {...sliderSettings}>
          {mostPopularAuthors.map((author, index) => (
            <div key={index} className="px-3">
              <Card className="p-4 text-center shadow hover:shadow-md transition">
                <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border">
                  <img
                    src={author.image}
                    alt={author.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent>
                  <h3 className="font-semibold text-lg">{author.name}</h3>
                  <p className="text-sm text-gray-500">{author.role}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PopularAuthors;
