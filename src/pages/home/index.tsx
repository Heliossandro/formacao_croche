import location from"../../assets/icons/location.png"

export const Home = () => {
  return (
    <>
      <section className="flex justify-center items-center flex-col p-20">
        <h1 className="text-[#B27738] p-8 text-5xl"> Quer aprender a fazer Crochê?</h1>
          <p className="w-350 text-base">Desperte a sua criatividade e domine a arte do croché com uma formação pensada especialmente para si! Em apenas duas semanas, vai aprender desde os pontos mais básicos até a criação de peças incríveis, como a elegante peça square. Além disso, terá acesso a bónus exclusivos que vão ajudar a transformar o seu talento numa oportunidade de negócio. As vagas são limitadas  não perca a chance de criar, empreender e dar vida às suas ideias com as próprias mãos!</p>
      </section>

      <section className="bg-gradient-to-b from-[#DFA464] to-[#B27738] ">
        <h1 className="text-[#ffff] p-8 text-5xl flex justify-center"> Informações do curso</h1>
          <div className="bg-amber-50  m-8 w-85 h-80">
            <img src={location} alt="location" className="m-23 w-20 h-20 text-[#B27738]" />
          </div>
      </section>
    </>
  );};
