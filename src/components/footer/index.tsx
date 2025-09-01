import logoB from "../../assets/images/logoBranco.png"

export const Footer = () => {
  return (
<section className="w-full">
  <div className="bg-gradient-to-b from-[#DFA464] to-[#B27738] w-full py-12 ">
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-20 ">
      
      {/* Contactos */}
      <div>
        <h1 className="font-bold text-2xl sm:text-3xl text-amber-50 pb-4">Contactos</h1>
        <p className="text-amber-50 text-lg sm:text-xl">(+244) 943 786 386</p>
        <p className="text-amber-50 text-lg sm:text-xl">(+244) 926 666 871</p>
        <p className="text-amber-50 text-lg sm:text-xl break-all">isabelquembuissa17@gmail.com</p>
      </div>

      {/* Redes Sociais */}
      <div>
        <h1 className="font-bold text-2xl sm:text-3xl text-amber-50 pb-4">Redes sociais</h1>
        <div className="flex flex-col ">
          <a className="text-amber-50 text-lg sm:text-xl hover:underline" href="https://www.instagram.com/encantos_d_croche?igsh=MWtzZjRwMDc3ZW1lcg== ">Instagram</a>
          <a className="text-amber-50 text-lg sm:text-xl hover:underline" href="https://wa.me/qr/2IA4K4IMT7XZE1">Whatsapp</a>
        </div>
      </div>

      {/* Redes Sociais */}
      <div>
        <img src={logoB} alt="logo" className="w-[20rem] h-[20rem] mt-[-7rem]" /> 
      </div>
      
    </div>
  </div>
</section>

)};
