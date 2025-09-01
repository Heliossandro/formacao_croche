import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import blusa from "../../assets/images/blusa_croche.jpg";
import vestido from "../../assets/images/vestido_croche.jpg";
import chapeu from "../../assets/images/chapeu.jpg"
import modelo1 from "../../assets/images/modelo1.jpg"
import modelo2 from "../../assets/images/modelo2.jpg"

const imagens = [blusa, vestido, vestido, chapeu, modelo1, modelo2];

export const Course = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? imagens.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === imagens.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="flex flex-col items-center justify-center text-center py-16 px-6 bg-white">
      <h1 className="text-[#B27738] text-3xl md:text-4xl font-bold mb-6">
        Curso de Crochê
      </h1>

      <p className="text-gray-700 text-lg max-w-3xl leading-relaxed mb-12">
        Neste curso intensivo de crochê, você vai aprender desde os pontos
        básicos até a criação de peças sofisticadas. Com aulas práticas e
        acompanhamento passo a passo, estará pronto(a) para transformar sua
        criatividade em obras de arte e até em um negócio rentável.
      </p>

      <div className="relative w-full max-w-xl h-[40rem] overflow-hidden rounded-2xl shadow-lg mb-12">
        <img
          src={imagens[index]}
          alt={`Trabalho ${index + 1}`}
          className="w-full h-full object-cover transition-all duration-500"
        />

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 -translate-y-1/2 bg-[#B27738] text-white p-2 rounded-full shadow-lg"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 -translate-y-1/2 bg-[#B27738] text-white p-2 rounded-full shadow-lg"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <a
        href="https://wa.me/244943786386?text=Olá! Gostaria de saber mais sobre o curso de crochê."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#1ebe5d] text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all"
      >
        Falar no WhatsApp
      </a>
    </section>
  );
};
