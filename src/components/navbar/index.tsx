import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // ícones (precisas instalar: npm i lucide-react)

export const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const goAbout = () => navigate("/about");
  const goCourse = () => navigate("/course");
  const goHome = () => navigate("/home");

  return (
    <nav>
      {/* Menu desktop */}
      <ul className="hidden sm:flex gap-8">
        <li
          className="hover:text-[#f8efe6] hover:bg-amber-50/30 px-4 py-2 rounded-sm transition text-xl cursor-pointer"
          onClick={goHome}
        >
          Home
        </li>
        <li
          className="hover:text-[#f8efe6] hover:bg-amber-50/30 px-4 py-2 rounded-sm transition text-xl cursor-pointer"
          onClick={goCourse}
        >
          Curso
        </li>
        <li
          className="hover:text-[#f8efe6] hover:bg-amber-50/30 px-4 py-2 rounded-sm transition text-xl cursor-pointer"
          onClick={goAbout}
        >
          Sobre
        </li>
      </ul>

      {/* Botão hambúrguer - só no mobile */}
      <div className="sm:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="absolute top-20 right-4 bg-[#DFA464] rounded-lg shadow-lg p-6 flex flex-col gap-4 sm:hidden z-50">
          <button
            className="hover:text-[#f8efe6] transition text-lg"
            onClick={() => {
              goHome();
              setIsOpen(false);
            }}
          >
            Home
          </button>
          <button
            className="hover:text-[#f8efe6] transition text-lg"
            onClick={() => {
              goCourse();
              setIsOpen(false);
            }}
          >
            Curso
          </button>
          <button
            className="hover:text-[#f8efe6] transition text-lg"
            onClick={() => {
              goAbout();
              setIsOpen(false);
            }}
          >
            Sobre
          </button>
        </div>
      )}
    </nav>
  );
};
