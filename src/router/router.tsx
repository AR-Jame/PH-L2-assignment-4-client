import App from "@/App";
import AddBook from "@/pages/AddBook";
import Home from "@/pages/Home/Home";
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
            }
        ]
    }
])

export default router