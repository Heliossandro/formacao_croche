import { Navbar } from "../navbar";
import logo from "../../assets/images/logo.png"

export const Header = () => {
  return (
    <div className="text-white">
      <div className="bg-[#9F5C28] flex items-center justify-between py-7 ">
        <div className="w-[80%] mx-auto flex items-center justify-between ">
          <div>logo</div>
           {/* <img src={logo} alt="" /> */}
          <Navbar />
        </div>
      </div>
    </div>  
  );
};
