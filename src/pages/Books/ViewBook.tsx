import { useParams } from "react-router";
import { useGetBookQuery } from "@/redux/api/booksApi";
import { Badge } from "@/components/ui/badge";
import { Loader } from "lucide-react";
import BorrowModal from "./BorrowModal";

const ViewBook = () => {
  const { id } = useParams();
  const { data: bookData, isLoading, isError } = useGetBookQuery(id!);

  if (isLoading)
    return (
      <div className="flex justify-center mt-20">
        <Loader className="animate-spin" />
      </div>
    );

  if (isError || !bookData)
    return (
      <div className="text-center mt-20 text-red-500 font-medium">
        Failed to load book details.
      </div>
    );
    const book = bookData?.data;
// console.log(book)
  return (
    <div className="max-w-4xl mx-auto py-10 my-32  px-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-secondary my-4">
       {book.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="text-gray-700">
            <strong>Author:</strong> {book.author}
          </p>
          <p className="text-gray-700">
            <strong>Genre:</strong>{" "}
            <Badge variant="outline" className="capitalize">
              {book.genre}
            </Badge>
          </p>
          <p className="text-gray-700">
            <strong>ISBN:</strong> {book.isbn}
          </p>
          <p className="text-gray-700">
            <strong>Copies:</strong> {book.copies}
          </p>
          <p className="text-gray-700">
            <strong>Status:</strong>{" "}
            {book.available ? (
              <span className="text-green-600 font-semibold">Available</span>
            ) : (
              <span className="text-red-500 font-semibold">Unavailable</span>
            )}
          </p>
        </div>

        <div>
          <p className="text-gray-700">
            <strong>Description:</strong>
          </p>
          <p className="mt-2 text-gray-600">{book.description}</p>
        </div>
      </div>
     <div className="flex items-center gap-3.5 py-4">
       <BorrowModal book={book} />
     </div>
    </div>
  );
};

export default ViewBook;
