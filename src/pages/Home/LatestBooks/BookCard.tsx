import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card'
import BorrowModal from '@/pages/Books/BorrowModal';
import type { IBook } from '@/types';
import { Eye } from 'lucide-react';
import { Link } from 'react-router';
import icon from "../../../assets/book-icon.png"
interface BookCardProps {
  book: IBook;
}
const BookCard = ({ book }: BookCardProps) => {
  return (
    <Card className="overflow-hidden group transition-all shadow-sm hover:shadow-md">
     <div className="flex items-center justify-center">
       <img
        src={icon}
        alt={book.title}
        className="w-1/2 transition-transform group-hover:scale-105"
      />
     </div>
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
         <div className="flex justify-center items-center gap-2">
        <BorrowModal book={book} />
           <Link className='border border-primary rounded-lg px-2' to={`/books/${book._id}`}>
                  <Button size="sm" variant="ghost">
                    <Eye className="w-5 h-5" />
                  </Button>
                </Link>
         </div>
      </CardContent>
    </Card>
  )
}

export default BookCard