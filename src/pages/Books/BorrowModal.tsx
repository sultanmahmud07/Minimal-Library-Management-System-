import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useBorrowBookMutation } from "@/redux/api/borrowApi";
import type { IBook, IBorrowData } from "@/types";
import type { SerializedError } from "@reduxjs/toolkit";

interface BorrowModalProps {
  book: IBook;
}

interface BorrowFormData {
  quantity: number;
  dueDate: string;
}

const BorrowModal = ({ book }: BorrowModalProps) => {
  const navigate = useNavigate();
  const [borrowBook, { isLoading }] = useBorrowBookMutation();

  const { register, handleSubmit, reset } = useForm<BorrowFormData>();

  const onSubmit = async (data: BorrowFormData) => {
    if (data.quantity < 1 || data.quantity > book.copies) {
      toast.error(`Quantity must be between 1 and ${book.copies}`);
      return;
    }

    const payload: IBorrowData = {
      book: book._id,
      quantity: data.quantity,
      dueDate: data.dueDate,
    };

    try {
      await borrowBook(payload).unwrap();
      toast.success(`Borrowed ${data.quantity} of "${book.title}"`);
      reset();
      navigate("/borrow-summary");
    } catch (err) {
      const error = err as SerializedError & { data?: { message?: string } };
      toast.error(error?.data?.message || "Failed to borrow book.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" disabled={book.copies === 0}>
          <BookOpen className="w-4 h-4 mr-1" />
          Borrow
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Borrow Book</DialogTitle>
            <DialogDescription>
              You can borrow up to {book.copies} copy(ies).
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="quantity">Quantity</Label>
              <Input
                id="quantity"
                type="number"
                min={1}
                max={book.copies}
                {...register("quantity", { valueAsNumber: true })}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="dueDate">Due Date</Label>
              <Input
                id="dueDate"
                type="date"
                {...register("dueDate")}
                required
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Borrowing..." : "Confirm Borrow"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BorrowModal;
