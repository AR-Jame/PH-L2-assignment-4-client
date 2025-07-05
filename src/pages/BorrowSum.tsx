import BorrowRow from "@/components/module/borrow/BorrowRow";
import { useBorrowSumQuery } from "@/redux/api/baseApi";
import type { IBorrow } from "types";

const BorrowSum = () => {
    const { data, isLoading } = useBorrowSumQuery(undefined);
    console.log(data);
    if (isLoading) return <p>data is loading</p>
    return (
        <section className="flex flex-col min-h-[90vh] justify-center items-center">
            <p className="text-3xl mb-3 text-left">Borrow Summary</p>
            <table className="min-w-xl border border-gray-300 rounded-2xl text-left text-sm">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-6 py-3 border-b">Sr.</th>
                        <th className="px-6 py-3 border-b">Title</th>
                        <th className="px-6 py-3 border-b">ISBN</th>
                        <th className="px-6 py-3 border-b">Quantity</th>
                    </tr>
                </thead>

                <tbody>
                    {data.data.map((item: IBorrow, idx: number) => (
                        <BorrowRow key={idx} idx={idx} item={item} />
                    ))}
                </tbody>
            </table>

        </section>
    );
};

export default BorrowSum;