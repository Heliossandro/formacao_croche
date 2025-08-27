import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
        <div>
          <div className="w-[80%] mx-auto flex items-center justify-between  text-black">
            <span>Endereço</span>
            <span>Contacto</span>
          </div>
        </div>
        <div className="sticky top-0"><Header /></div>
      <Outlet />
      <Footer />
    </div>
  );
};
