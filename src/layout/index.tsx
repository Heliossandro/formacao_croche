import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-[120px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
