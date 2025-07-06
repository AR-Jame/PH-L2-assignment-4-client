import { Skeleton } from "@/components/ui/skeleton";
import { useGetSingleBookQuery } from "@/redux/api/baseApi";
import { useParams } from "react-router";

const BookDetails = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetSingleBookQuery(id);


    if (isLoading) return (
        <div className="flex w-full h-[90vh] justify-center items-center">
            <Skeleton className="w-[50%] h-8 mx-auto" />
        </div>
    )


    return (
        <section className="min-h-[89vh] lg:mx-[10%] mx-[5%] text-lg gap-10 flex flex-col lg:flex-row justify-center lg:justify-start items-center">
            <div className="flex-1/2">
                <h3 className="text-4xl font-semibold pt-10">{data?.data?.title}</h3>
                <p className="text-2xl italic py-3">Written by : {data?.data?.author}</p>

                <div className="border-t w-[70%] xl:w-md my-6"></div>

                <p className="py-5"><span className="italic">Description:</span> {data?.data?.description}</p>

                <div className="border-t w-[100%] xl:w-md my-6"></div>

                <p>Genre: {data?.data?.genre}</p>
                <p>ISBN: {data?.data?.isbn}</p>
                <p>Copies: {data?.data?.copies}</p>
                <p>Availability: {data?.data?.available ? 'Available' : 'Unavailable'}</p>
            </div>

            <div className="flex-1/2">
                <img src="/placeholder_image.jpg" height={600} width={600} alt="" className="w-full xl:w-[600px]" />
                <p className="bg-[#ef6d6f] font-medium italic px-3 py-1 rounded-md text-center text-white">We are working, Very soon you can see the book image also.</p>
            </div>

        </section>
    );
};

export default BookDetails;