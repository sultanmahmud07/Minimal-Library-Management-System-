import { Card, CardContent } from '@/components/ui/card'
import BorrowModal from '@/pages/Books/BorrowModal';
import type { IBook } from '@/types';
interface BookCardProps {
  book: IBook;
}
const BookCard = ({ book }: BookCardProps) => {
  return (
    <Card className="overflow-hidden group transition-all shadow-sm hover:shadow-md">
      <img
        src={"https://img.freepik.com/premium-vector/book-icon-symbol-mark-filled-style_1223784-28375.jpg?semt=ais_hybrid&w=740"}
        alt={book.title}
        className="w-full aspect-video object-cover transition-transform group-hover:scale-105"
      />
      <CardContent className="p-3 text-center">
        <h3 className="font-semibold text-base leading-tight mb-1">
          {book.title}
        </h3>
        <p className="text-sm text-gray-600 uppercase font-semibold mb-1">{book.author}</p>

        <p className="text-sm pb-1">
          {book?.description}
        </p>
         <p className="text-sm pb-2">
          {book.copies > 0 ? (
                  <span className="text-green-600 font-medium">{book.copies} Copies available</span>
                ) : (
                  <span className="text-red-500 font-medium">Unavailable</span>
                )}
        </p>
        <BorrowModal book={book} />
      </CardContent>
    </Card>
  )
}

export default BookCard