import { Skeleton } from "../ui/skeleton";

const BorrowSumSkeleton = () => {
    return (
        <tr className="hover:bg-gray-50">
            <td className="px-6 py-3 border-b"><Skeleton className="w-5 h-3" /></td>
            <td className="px-6 py-3 border-b"><Skeleton className="w-56 h-3" /></td>
            <td className="px-6 py-3 border-b"><Skeleton className="w-44 h-3" /></td>
            <td className="px-6 py-3 border-b"><Skeleton className="w-12 h-3" /></td>
        </tr>
    );
};

export default BorrowSumSkeleton;