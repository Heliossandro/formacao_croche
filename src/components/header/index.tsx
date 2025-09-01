import { Navbar } from "../navbar";
import logoB from "../../assets/images/logoBranco.png";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/home");
  };

  return (
    <div className="text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="bg-[#DFA464] flex items-center justify-between py-4">
        <div className="w-[80%] mx-auto h-[70px] flex items-center justify-between">
          <img
            src={logoB}
            alt="logo"
            className="w-[12rem] h-[12rem] cursor-pointer"
            onClick={goHome}
          />
          <Navbar />
        </div>
      </div>
    </div>
  );
};
