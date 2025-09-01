import logoB from "../../assets/images/logoBranco.png"

export const Footer = () => {
  return (
    <section className="w-full">
      <div className="bg-gradient-to-b from-[#DFA464] to-[#B27738] w-full py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-20 relative">
          
          {/* Contactos */}
          <div>
            <h1 className="font-bold text-2xl sm:text-3xl text-amber-50 pb-4">Contactos</h1>
            <p className="text-amber-50 text-lg sm:text-xl">(+244) 943 786 386</p>
            <p className="text-amber-50 text-lg sm:text-xl">(+244) 926 666 871</p>
            <p className="text-amber-50 text-lg sm:text-xl break-all">isabelquembuissa17@gmail.com</p>
          </div>

          {/* Redes Sociais */}
          <div className="relative z-10">
            <h1 className="font-bold text-2xl sm:text-3xl text-amber-50 pb-4">Redes sociais</h1>
            <div className="flex flex-col">
              <a className="text-amber-50 text-lg sm:text-xl hover:underline" href="https://www.instagram.com/encantos_d_croche" target="_blank" rel="noopener noreferrer">
                Instagram
                </a>
              <a 
                className="text-amber-50 text-lg sm:text-xl hover:underline" href="https://wa.me/244943786386" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </div>
          </div>

          {/* Logo */}
          <div className="flex justify-center sm:justify-end">
            <img src={logoB} alt="logo" className="w-[15rem] h-[15rem] sm:w-[20rem] sm:h-[20rem]" /> 
          </div>
          
        </div>
      </div>
    </section>
  );
};
