import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetBorrowSummaryQuery } from "@/redux/api/borrowApi";

const BorrowSummary = () => {
  const { data:borrows, isLoading, isError} = useGetBorrowSummaryQuery();

  if (isLoading) {
    return (
      <div className="main_container py-10 text-center">
        <p className="text-lg text-gray-500">Loading borrow summary...</p>
      </div>
    );
  }


  if (isError || !borrows?.data) {
    return (
      <div className="main_container py-10 text-center">
        <p className="text-lg text-red-500">Failed to load borrow summary.</p>
      </div>
    );
  }

// console.log(borrows)
  return (
    <div className="main_container py-10">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">
        📊 Borrow Summary
      </h2>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4">
        <Table>
          <TableCaption>A summary of all borrowed books</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-indigo-700 font-semibold text-base">
                Book Title
              </TableHead>
              <TableHead className="text-indigo-700 font-semibold text-base">
                ISBN
              </TableHead>
              <TableHead className="text-indigo-700 font-semibold text-base text-center">
                Total Quantity Borrowed
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {borrows?.data?.map((entry, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium text-gray-800">
                  {entry.book.title}
                </TableCell>
                <TableCell className="text-gray-600">
                  {entry.book.isbn}
                </TableCell>
                <TableCell className="text-center font-semibold text-green-600">
                  {entry.totalQuantity}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BorrowSummary;
