import { Outlet } from "react-router";
import Navbar from "./components/layout/Navbar";

const App = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
};

export default App;