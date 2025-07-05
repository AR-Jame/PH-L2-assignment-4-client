import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { useDeleteBookMutation } from "@/redux/api/baseApi";
import { Trash } from "lucide-react"

export function BookDeleteDialog({ id }: { id: string }) {
  const [deleteBook] = useDeleteBookMutation();
  const handleDeleteBook = async () => {
    const res = await deleteBook(id);
    console.log(res);
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant={'destructive'}
        >
          <Trash />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            book and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteBook}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
