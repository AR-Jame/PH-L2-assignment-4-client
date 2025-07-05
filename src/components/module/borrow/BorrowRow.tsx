import type { IBorrow } from "types";

const BorrowRow = ({ idx, item }: { idx: number; item: IBorrow }) => {
    return (
        <tr className="hover:bg-gray-50">
            <td className="px-6 py-3 border-b">{idx + 1}</td>
            <td className="px-6 py-3 border-b">{item.book.title}</td>
            <td className="px-6 py-3 border-b">{item.book.isbn}</td>
            <td className="px-6 py-3 border-b">{item.totalQuantity}</td>
        </tr>
    );
};

export default BorrowRow;