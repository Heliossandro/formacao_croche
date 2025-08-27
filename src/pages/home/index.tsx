import "../../styles/style_home.css"
import benef_form_img from "../../assets/images/beneficios_formacao_img.jpg"

export const Home = () => {
  return (
    <>
      <section className="section_title">
        <h1 className="title"> Quer aprender a fazer Crochê?</h1>
          <p className="text_title">Desperte a sua criatividade e domine a arte do croché com uma formação pensada especialmente para si! Em apenas duas semanas, vai aprender desde os pontos mais básicos até a criação de peças incríveis, como a elegante peça square. Além disso, terá acesso a bónus exclusivos que vão ajudar a transformar o seu talento numa oportunidade de negócio. As vagas são limitadas  não perca a chance de criar, empreender e dar vida às suas ideias com as próprias mãos!</p>
      </section>

      <section className="section_info_course">
        <h1 className="title"> Informações do curso</h1>
          <div className="info_1">
            <img src={benef_form_img} alt="" />
          </div>
      </section>
    </>
  );};
