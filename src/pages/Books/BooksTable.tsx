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
import { Pencil, Trash2, BookOpen } from "lucide-react";
import { useGetBooksQuery } from "@/redux/api/booksApi";
import type { IBook } from "@/types";



const BooksTable = () => {
  const { data: books, isLoading, isError } = useGetBooksQuery();

  if (isLoading) return <p>Loading...</p>;
  if (isError || !books) return <p>Error loading books.</p>;
console.log(books.data)

  const handleEdit = (book: IBook) => {
    alert(`Edit book: ${book.title}`);
    // You can open a modal here with book data
  };

  const handleDelete = (bookId: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (confirmDelete) {
      console.log(bookId)
    }
  };

  const handleBorrow = (book: IBook) => {
    if (book.copies === 0) {
      alert("This book is currently unavailable.");
      return;
    }

    const borrowQty = Number(
      prompt(`Enter quantity to borrow (1 - ${book.copies}):`, "1")
    );

    if (!borrowQty || borrowQty < 1 || borrowQty > book.copies) {
      alert("Invalid quantity.");
      return;
    }

  

    alert(`You borrowed ${borrowQty} copy/copies of "${book.title}"`);
  };

  return (
    <div className="overflow-x-auto bg-white shadow rounded-md p-4">
      <Table>
        <TableCaption>A list of all books in the library.</TableCaption>
        <TableHeader>
          <TableRow>
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
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleEdit(book)}
                >
                  <Pencil className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDelete(book._id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  onClick={() => handleBorrow(book)}
                  disabled={book.copies === 0}
                >
                  <BookOpen className="w-4 h-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BooksTable;
