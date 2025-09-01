import { useNavigate } from "react-router-dom"

export const Navbar = () => {
  const navegate = useNavigate()

  const goAbout = ()=>{
    navegate("/about")
  }

  const goCourse = ()=>{
    navegate("/course")
  }

  const goHome = ()=>{
    navegate("/home")
  }
  return (
    <ul className="flex gap-8">
      <li className="hover:text-[#f8efe6] hover:bg-amber-50/30 w-15 h-7 rounded-sm flex justify-center text-center transition text-xl cursor-pointer"><a onClick={goHome}>Home</a></li>
      <li className="hover:text-[#f8efe6] hover:bg-amber-50/30 w-15 h-7 rounded-sm flex justify-center text-center transition text-xl cursor-pointer"><a onClick={goCourse}>Curso</a></li>
      <li className="hover:text-[#f8efe6] hover:bg-amber-50/30 w-15 h-7 rounded-sm flex justify-center text-center transition  text-xl cursor-pointer"><a onClick={goAbout}>Sobre</a></li>
    </ul>
  );
};
