import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function AppLayout({ children }) {
  return (
    <div className="flex flex-col h-screen ">
      <Header />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6 bg-red-100">
          {Outlet}
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default AppLayout;