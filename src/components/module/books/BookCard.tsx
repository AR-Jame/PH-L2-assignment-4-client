import { Button } from "@/components/ui/button";
import { Library, PenLine } from "lucide-react";
import { BookDeleteDialog } from "./BookDeleteDialog";
import { NavLink } from "react-router";
import type { IBooks } from '../../../../types'
import { cn } from "@/lib/utils";
import { toast } from "sonner";
interface IProps {
    book: IBooks
}
const BookCard = ({ book }: IProps) => {
    const handleUnavailable = () => {
        toast("Sorry!! This book is unavailable right now.", {
            duration: 2000
        })
    }
    return (
        <div className="border rounded-md p-5 w-sm">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-2xl font-medium"><NavLink className='hover:underline' to={`/books/${book._id}`}>{book.title}</NavLink></p>
                    <p className="text-xl text-[#292929]">{book.author}</p>
                </div>
                <p className={cn("text-sm text-white px-2 rounded-md py-0.5", {
                    'bg-red-300': book.available === false,
                    'bg-green-300': book.available === true,
                })}>{book.available ? 'Available' : 'Unavailable'}</p>
            </div>

            <hr className="my-3" />

            <p>Genre: {book.genre}</p>
            <p>ISBN: {book.isbn}</p>
            <p>Copies: {book.copies}</p>
            <div className="mt-4 flex items-center justify-between">
                {
                    book.available ?
                        <NavLink to={`/borrow/${book._id}`} state={{ copies: book.copies, available: book.available }}><Button variant={"outline"}><Library /> Borrow</Button></NavLink>
                        :
                        <span onClick={handleUnavailable}>
                            <Button
                                 disabled variant={'outline'}><Library /> Unavailable
                            </Button>
                        </span>
                }
                <div className="flex items-center gap-2">
                    <NavLink to={`/edit-book/${book._id}`}> <Button variant={"outline"}><PenLine /></Button></NavLink>
                    <BookDeleteDialog id={book._id} />
                </div>
            </div>
        </div>
    );
};

export default BookCard;