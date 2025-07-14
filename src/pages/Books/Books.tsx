import BooksTable from "./BooksTable";

const Books = () => {
  return (
    <div className="main_container pt-20">
      <h3 className="py-5 text-2xl md:text-3xl font-bold capitalize">
        View all books
      </h3>
      <BooksTable />
    </div>
  );
};

export default Books;
