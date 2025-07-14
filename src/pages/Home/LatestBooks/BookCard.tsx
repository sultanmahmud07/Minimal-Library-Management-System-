import { Card, CardContent } from '@/components/ui/card'
import type { IBook } from '@/types';
interface BookCardProps {
  book: IBook;
}
const BookCard = ({book}: BookCardProps) => {
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
               
                <p className="text-sm">
                 {book?.description}
                </p>
              </CardContent>
            </Card>
  )
}

export default BookCard