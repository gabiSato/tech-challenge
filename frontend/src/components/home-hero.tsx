import HeroImage from "../../public/images/investment.svg";

export default function HomeHero() {
  return (
    <section>
      <div className="flex flex-col lg:flex-row gap-16 justify-between items-center">
        <h1 className="max-w-[446px] text-xl-bold sm:text-2xl-bold text-center lg:text-left">
          Experimente mais liberdade no controle da sua vida financeira. Crie
          sua conta com a gente!
        </h1>

        <HeroImage className="w-full lg:w-[662px]" />

        <div className="flex gap-24 sm:hidden">
          <button className="w-[144px] h-48 rounded bg-black text-sm-semibold text-white">
            Abrir conta
          </button>
          <button className="w-[144px] h-48px rounded border-2 border-black text-sm-semibold">
            Já tenho conta
          </button>
        </div>
      </div>
    </section>
  );
}
