import { Outlet } from "react-router";
import Navbar from "./components/layout/Navbar";
import { Toaster } from "./components/ui/sonner";

const App = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Toaster />
    </main>
  );
};

export default App;