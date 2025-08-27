import { Navbar } from "../navbar";
export const Header = () => {
  return (
    <div className="text-white">
      <div className="bg-[#9F5C28] flex items-center justify-between py-6 ">
        <div className="w-[80%] mx-auto flex items-center justify-between ">
          <div>logo</div>
          <Navbar />
        </div>
      </div>
    </div>  
  );
};
