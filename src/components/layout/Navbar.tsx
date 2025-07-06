import { cn } from "@/lib/utils";
import { NavLink, useLocation } from "react-router";

const Navbar = () => {
    const location = useLocation();
    return (
        <nav className={cn("py-3 z-10 top-0 w-full px-[5%] lg:px-[10%] flex flex-col lg:flex-row items-center justify-between", {
            'fixed bg-[#0000006c] text-white': location.pathname === '/',
            'bg-[#FDF7F1] text-black': location.pathname !== '/'
        })}>
            <div>
                <img src="/logo.png" width={80} alt="Library management" className="w-[50px] lg:w-[80px]"/>
            </div>
            <ul className="lg:text-xl flex items-center gap-5">
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/books'>All Books</NavLink></li>
                <li><NavLink to='/create-book'>Add Book</NavLink></li>
                <li><NavLink to='/borrow-summary'>Borrow Summery</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;