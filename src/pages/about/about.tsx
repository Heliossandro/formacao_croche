
export const About = () =>{
    return(
    <section className="max-h-[1500px] flex flex-col items-center justify-center text-center py-16 px-6 bg-white">
      <h1 className="text-[#B27738] text-3xl md:text-4xl font-bold mb-6">
        Sobre Nós
      </h1>

      <p className="text-gray-700 text-lg max-w-3xl leading-relaxed">
       Somos a essência da modernidade, e a evolução de uma ideia já solidificada, um amor que floresceu e se materializou há 3 anos no vibrante mercado Angolano. <br />
        <br />
        Nosso compromisso é oferecer uma formação acessível, prática e completa,
        para que cada aluno possa desenvolver suas habilidades e descobrir o
        poder de criar algo com as próprias mãos.
      </p>

      <div className="mt-12 bg-[#DFA464] text-white rounded-2xl shadow-lg p-8 max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">Nossa Missão</h2>
        <p className="text-base leading-relaxed">
          Promover a valorização do croché como uma arte atemporal, formando
          pessoas criativas, empreendedoras e apaixonadas pelo que fazem.
        </p>
      </div>
    </section>
    )
}