import { Button } from "@/components/ui/button";
import { Library, PenLine } from "lucide-react";
import { BookDeleteDialog } from "./BookDeleteDialog";
import { NavLink } from "react-router";
import type { IBooks } from '../../../../types'
interface IProps {
    book: IBooks
}
const BookCard = ({ book }: IProps) => {

    return (
        <div className="border rounded-md p-5 w-sm">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-2xl font-medium">{book.title}</p>
                    <p className="text-xl text-[#292929]">{book.author}</p>
                </div>
                <div>
                    <p className="bg-fuchsia-700 text-xs text-white px-2 py-0.5 rounded-full">{book.genre}</p>
                </div>
            </div>
            <hr className="my-3" />

            <p>ISBN: {book.isbn}</p>
            <p>Copies: {book.copies}</p>
            <div className="mt-4 flex items-center justify-between">
                <NavLink to={`/borrow/${book._id}`} state={{ copies: book.copies, available: book.available }}><Button variant={"outline"}><Library /> Borrow</Button></NavLink>
                <div className="flex items-center gap-2">
                    <NavLink to={`/edit-book/${book._id}`}> <Button variant={"outline"}><PenLine /></Button></NavLink>
                    <BookDeleteDialog id={book._id} />
                </div>
            </div>
        </div>
    );
};

export default BookCard;