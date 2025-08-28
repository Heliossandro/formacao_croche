export const Navbar = () => {
  return (
    <ul className="flex gap-8">
      <li className="hover:text-[#f8efe6] hover:bg-amber-50/30 w-15 h-7 rounded-sm flex justify-center text-center transition"><a href="">Home</a></li>
      <li className="hover:text-[#f8efe6] hover:bg-amber-50/30 w-15 h-7 rounded-sm flex justify-center text-center transition"><a href="">Curso</a></li>
      <li className="hover:text-[#f8efe6] hover:bg-amber-50/30 w-15 h-7 rounded-sm flex justify-center text-center transition"><a href="">Sobre</a></li>
    </ul>
  );
};
