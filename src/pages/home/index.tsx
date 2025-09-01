import location from"../../assets/icons/location.png"
import money from"../../assets/icons/money.png"
import clock from "../../assets/icons/clock.png"
import calend from "../../assets/icons/calend.png"
import VB_croche from "../../assets/images/vestidoeBlusa_croche.png"
import "../../styles/global-css.css";

export const Home = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center p-10 md:p-20 min-h-[700px] gap-10 text-center">
        <h1 className="text-[#B27738] text-3xl md:text-5xl font-bold px-4">
          Quer aprender a fazer Crochê?
        </h1>

        <p className="max-w-7xl text-lg md:text-2xl text-gray-700 px-4 leading-relaxed">
          Desperte a sua criatividade e domine a arte do crochê com uma formação pensada especialmente para si! 
          Em apenas duas semanas, vai aprender desde os pontos mais básicos até a criação de peças incríveis, 
          como a elegante peça square. Além disso, terá acesso a bónus exclusivos que vão ajudar a transformar 
          o seu talento numa oportunidade de negócio. As vagas são limitadas — não perca a chance de criar, 
          empreender e dar vida às suas ideias com as próprias mãos!
        </p>
      </section>


    <section className="bg-gradient-to-b from-[#DFA464] to-[#B27738] flex flex-col justify-center gap-10 py-[8rem]">
      <h1 className="text-white text-3xl md:text-5xl font-bold px-4 flex justify-center pb-15">Informações do curso</h1>
      
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-8 
                justify-items-center max-w-7xl mx-auto">
        
        <div className="bg-amber-50 w-[280px] md:w-[300px] lg:w-[340px] h-[320px] 
                        flex flex-col items-center justify-center rounded-lg shadow-lg p-6 mx-[20rem]">
          <img src={location} alt="location" className="w-20 h-20"/>
          <h1 className="text-[#B27738] text-xl font-semibold text-center mt-4">
            Talatona/Bairro militar de frente ao antigo IFAL
          </h1>
        </div>

        <div className="bg-amber-50 w-[280px] md:w-[300px] lg:w-[340px] h-[320px] 
                        flex flex-col items-center justify-center rounded-lg shadow-lg p-6">
          <img src={calend} alt="calendar" className="w-20 h-20"/>
          <h1 className="text-[#B27738] text-xl font-semibold text-center mt-4">
            Dia 8 de Setembro
          </h1>
        </div>

        <div className="bg-amber-50 w-[280px] md:w-[300px] lg:w-[340px] h-[320px] 
                        flex flex-col items-center justify-center rounded-lg shadow-lg p-6">
          <img src={clock} alt="clock" className="w-20 h-20"/>
          <h1 className="text-[#B27738] text-xl font-semibold text-center mt-4">
            Segunda - Sexta <br /> 14h - 16h <br /> Sábado: 9h - 12h
          </h1>
        </div>

        <div className="bg-amber-50 w-[280px] md:w-[300px] lg:w-[340px] h-[320px] 
                        flex flex-col items-center justify-center rounded-lg shadow-lg p-6">
          <img src={money} alt="money" className="w-20 h-20"/>
          <h1 className="text-[#B27738] text-xl font-semibold text-center mt-4">
            20 000, 00kz <br /> Material por nossa conta.
          </h1>
        </div>
      </div>
    </section>

    <section className="flex justify-around items-center p-20 min-h-[700px] gap-20">
      <div className="">
        <h1 className="text-[#B27738] pb-8 text-3xl sm:text-4xl font-bold"> Com a formação vai aprender</h1>
          <p className="text-3xl text-[#a57644]">Pontos De Base:</p>
          <p className="text-2xl text-gray-700"> Baixissimo</p>
          <p className="text-2xl text-gray-700">  Meio alto</p>
          <p className="text-2xl text-gray-700">  Pontos altos. </p>
            <br />
          <p className="text-3xl text-[#a57644]">Projeto final:</p>
          <p className="text-2xl text-gray-700">  Peça square.</p>
          <p className="text-2xl text-gray-700">  Elaboração de uma peça a escolha da formanda.</p>
      </div>

      <div>
        <img src={VB_croche} alt="vestidoEblusa"  className="hidden sm:block max-h-[650px] w-[350px]"/>
      </div>
    </section>

    <section className="flex justify-center items-center p-20 min-h-[700px]">
      <div className="flex justify-center items-center flex-col text-center">
        <h1 className="text-[#B27738] text-2xl sm:text-4xl font-bold mb-8 pb-8">
          Para mais Informações
        </h1>
        <a
          className="flex justify-center items-center bg-[#CE9455] w-64 h-10 rounded-2xl text-white font-semibold pulse-btn"
          href="https://wa.me/244943786386?text=Olá! Gostaria de saber mais sobre o curso de crochê."
        >
          Clica aqui
        </a>
      </div>
    </section>
    </>
  );};