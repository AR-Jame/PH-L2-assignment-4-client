import { Skeleton } from '../ui/skeleton';
const BookSkeleton = () => {
    return (
        <div className='w-[384px] h-[251px] border rounded-md p-5'>
            <Skeleton className='w-64 h-8 mb-3' />
            <Skeleton className='w-52 h-5' />

            <hr className='my-4' />

            <Skeleton className='w-44 h-3 my-3' />
            <Skeleton className='w-44 h-3 my-3' />
            <Skeleton className='w-44 h-3 my-3' />
            <div className='flex justify-between items-center'>
                <Skeleton className='w-24 h-9 my-3' />
                <div className='flex gap-2'>
                    <Skeleton className='w-10 h-9 my-3' />
                    <Skeleton className='w-10 h-9 my-3' />
                </div>
            </div>
        </div>
    );
};

export default BookSkeleton;