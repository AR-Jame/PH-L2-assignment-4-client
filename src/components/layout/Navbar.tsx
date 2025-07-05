import { NavLink } from "react-router";

const Navbar = () => {
    return (
        <nav className="py-8 bg-blue-200 px-[10%] flex items-center justify-between">
           <p>📚</p>
           <ul className="text-xl flex items-center gap-5">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/books'>All Books</NavLink></li>
            <li><NavLink to='/create-book'>Add Book</NavLink></li>
            <li><NavLink to='/borrow-summary'>Borrow Summery</NavLink></li>
           </ul>
        </nav>
    );
};

export default Navbar;