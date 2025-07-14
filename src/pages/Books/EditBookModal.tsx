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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useUpdateBookMutation } from "@/redux/api/booksApi";
import { toast } from "react-toastify";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import type { IBook } from "@/types";
import { Pencil } from "lucide-react";

type Props = {
  book: IBook;
};

const EditBookModal = ({ book }: Props) => {
      const [open, setOpen] = useState(false);
  const [updateBook, { isLoading }] = useUpdateBookMutation();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<Partial<IBook>>({
    defaultValues: {
      title: book.title,
      author: book.author,
      genre: book.genre,
      isbn: book.isbn,
      description: book.description,
      copies: book.copies,
      available: book.available,
    },
  });

 const onSubmit = async (values: Partial<IBook>) => {
  try {
    const payload = {
      title: values.title,
      author: values.author,
      genre: values.genre,
      isbn: values.isbn,
      description: values.description,
      copies: values.copies,
      available: values.copies === 0 ? false : values.available,
    };

    await updateBook({ id: book._id, data: payload }).unwrap();
    toast.success("Book updated successfully!");
     setOpen(false);
  } catch (error) {
    toast.error("Failed to update book.");
  }
};


  // Reset form each time modal opens
  useEffect(() => {
    reset(book);
  }, [book, reset]);

  return (
   <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)} variant="outline"><Pencil className="w-4 h-4" /></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Update Book</DialogTitle>
            <DialogDescription>
              Update the book information and save changes.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            {["title", "author", "genre", "isbn"].map((field) => (
              <div className="grid gap-1" key={field}>
                <Label htmlFor={field}>{field.toUpperCase()}</Label>
                <Input
                  {...register(field as keyof IBook, { required: true })}
                  placeholder={`Enter ${field}`}
                />
                {errors[field as keyof IBook] && (
                  <span className="text-sm text-red-600">Required</span>
                )}
              </div>
            ))}

            <div className="grid gap-1">
              <Label htmlFor="copies">Copies</Label>
              <Input
                type="number"
                min={0}
                {...register("copies", { valueAsNumber: true, required: true })}
              />
              {watch("copies") === 0 && (
                <span className="text-xs text-yellow-600">
                  Book will be marked as unavailable.
                </span>
              )}
            </div>

            <div className="grid gap-1">
              <Label htmlFor="description">Description</Label>
              <Input {...register("description")} />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="ghost">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Saving..." : "Save Changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditBookModal;
