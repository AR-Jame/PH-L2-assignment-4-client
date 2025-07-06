import BookSkeleton from "@/components/layout/BookSkeleton";
import BookCard from "@/components/module/books/BookCard";
import { useGetBooksQuery } from "@/redux/api/baseApi";
import type { IBooks } from "types";

const AllBooks = () => {
    const { data, isLoading } = useGetBooksQuery(undefined);
    console.log(data);
    return (
        <section className="">
            <p className="text-4xl text-center font-medium py-10">See All Books</p>
            {
                isLoading
                    ?
                    <div className="flex flex-wrap justify-center gap-6">
                        <BookSkeleton />
                        <BookSkeleton />
                        <BookSkeleton />
                        <BookSkeleton />
                        <BookSkeleton />
                        <BookSkeleton />
                        <BookSkeleton />
                    </div>
                    :
                    <div className="flex flex-wrap justify-center items-center gap-6">
                        {data?.data?.map((book: IBooks) => <BookCard key={book._id} book={book} />)}
                    </div>
            }
        </section>
    );
};

export default AllBooks;