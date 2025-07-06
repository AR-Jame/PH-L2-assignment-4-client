import { useGetBooksQuery } from "@/redux/api/baseApi";
import BookCard from "@/components/module/books/BookCard";
import type { IBooks } from "types";
import { NavLink } from "react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const BookList = () => {
    const { data, isLoading } = useGetBooksQuery({ limit: 6 });
    return (
        <div className="mx-[10%]">
            <p className="text-4xl font-semibold text-center pb-10">Discover Your Next Book</p>
            {isLoading ?
                <p>Data is loading</p>
                :
                <div className="flex flex-wrap items-center justify-center gap-5">
                    {
                        data?.data?.map((book: IBooks) => <BookCard key={book._id} book={book} />)

                    }
                </div>
            }
            <div className='flex justify-end'>
                <Button variant={"link"}>
                    <NavLink to={'/books'} className='flex text-lg items-center gap-1'>See All<ArrowRight /></NavLink>
                </Button>
            </div>
        </div>
    );
};

export default BookList;