import { NavLink } from "react-router";

const Navbar = () => {
    return (
        <nav className="py-8 bg-blue-200 px-[10%] flex items-center justify-between">
           <p>📚</p>
           <ul className="text-xl flex items-center gap-5">
            <li><NavLink to='/'>Home</NavLink></li>
            <li>All Books</li>
            <li><NavLink to='/create-book'>Add Book</NavLink></li>
           <li>Borrow Summery</li>
           </ul>
        </nav>
    );
};

export default Navbar;