import BookCard from "./BookCard";

const latestBooks = [
  {
    _id: "1",
    title: "The Theory of Everything",
    author: "Stephen Hawking",
    genre: "SCIENCE",
    isbn: "0780553380163",
    description: "An overview of cosmology and black holes.",
    copies: 5,
    available: true,
  },
  {
    _id: "2",
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    genre: "SCIENCE",
    isbn: "0553380168",
    description: "One of the most influential scientific books on cosmology.",
    copies: 3,
    available: true,
  },
  {
    _id: "2",
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    genre: "SCIENCE",
    isbn: "0553380168",
    description: "One of the most influential scientific books on cosmology.",
    copies: 3,
    available: true,
  },
  {
    _id: "2",
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    genre: "SCIENCE",
    isbn: "0553380168",
    description: "One of the most influential scientific books on cosmology.",
    copies: 3,
    available: true,
  },
  {
    _id: "3",
    title: "The Grand Design",
    author: "Stephen Hawking",
    genre: "SCIENCE",
    isbn: "055338466X",
    description: "Discusses M-theory and the origins of the universe.",
    copies: 0,
    available: false,
  },
  {
    _id: "4",
    title: "Black Holes and Baby Universes",
    author: "Stephen Hawking",
    genre: "SCIENCE",
    isbn: "0553374117",
    description: "Essays and lectures from Hawking about black holes.",
    copies: 2,
    available: true,
  },
];

const LatestBooks = () => {
  return (
    <section className="py-10 bg-white">
      <div className="main_container">
        <h2 className="text-3xl font-bold text-center mb-8">
          Latest Books
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {latestBooks.map((book, idx) => (
           <BookCard key={idx} book={book}></BookCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBooks;
