import App from "@/App";
import BorrowSumSkeleton from "@/components/layout/BorrowSumSkeleton";
import BookDetails from "@/pages/BookDetails";
import { lazy } from "react";

const AddBook = lazy(() => import("@/pages/AddBook"))
const AllBooks = lazy(() => import("@/pages/AllBooks"))
const Borrow = lazy(() => import("@/pages/Borrow"))
const BorrowSum = lazy(() => import("@/pages/BorrowSum"))
const EditBook = lazy(() => import("@/pages/EditBook"))
const Home = lazy(() => import("@/pages/Home/Home"))

import { createBrowserRouter } from "react-router";
const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                path: '/',
                Component: Home
            },
            {
                path: '/create-book',
                Component: AddBook
            },
            {
                path: '/books',
                Component: AllBooks
            },
            {
                path: '/edit-book/:id',
                Component: EditBook
            },
            {
                path: '/borrow/:bookId',
                Component: Borrow
            },
            {
                path: '/borrow-summary',
                Component: BorrowSum
            },
            {
                path: '/loader',
                Component: BorrowSumSkeleton
            },
            {
                path: '/books/:id',
                Component: BookDetails
            }
        ]
    }
])

export default router