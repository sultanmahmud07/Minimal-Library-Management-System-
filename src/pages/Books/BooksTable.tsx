import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { useDeleteBookMutation, useGetBooksQuery } from "@/redux/api/booksApi";
import Swal from "sweetalert2";
import BorrowModal from "./BorrowModal";
import EditBookModal from "./EditBookModal";



const BooksTable = () => {
  const { data: books, isLoading, isError } = useGetBooksQuery();
const [deleteBook] = useDeleteBookMutation();
  if (isLoading) return <p>Loading...</p>;
  if (isError || !books) return <p>Error loading books.</p>;
  // console.log(books.data)

  const handleDelete = (bookId: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // console.log("Deleting book with ID:", bookId);
        await deleteBook(bookId).unwrap();
        Swal.fire({
          title: "Deleted!",
          text: "Book has been deleted.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };


  return (
    <div className="overflow-x-auto bg-white shadow rounded-md p-4 md:pb-10">
      <Table>
        <TableCaption>A list of all books in the library.</TableCaption>
        <TableHeader>
          <TableRow className="bg-gray-200">
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Genre</TableHead>
            <TableHead>ISBN</TableHead>
            <TableHead className="text-center">Copies</TableHead>
            <TableHead className="text-center">Available</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {books?.data?.map((book) => (
            <TableRow key={book._id}>
              <TableCell className="font-medium">{book.title}</TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.genre}</TableCell>
              <TableCell>{book.isbn}</TableCell>
              <TableCell className="text-center">{book.copies}</TableCell>
              <TableCell className="text-center">
                {book.copies > 0 ? (
                  <span className="text-green-600 font-medium">Yes</span>
                ) : (
                  <span className="text-red-500 font-medium">Unavailable</span>
                )}
              </TableCell>
              <TableCell className="text-right space-x-1">
               
                   <EditBookModal book={book} />
                 
               

                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDelete(book._id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
                <BorrowModal book={book} />

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BooksTable;
