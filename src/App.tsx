import { Outlet } from "react-router";
import Navbar from "./components/layout/Navbar";
import { Toaster } from "./components/ui/sonner";
import { Footer7 } from "./components/footer-7";
const App = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer7 />
      <Toaster />
    </main>
  );
};

export default App;