import Container from "@/components/container";
import Button from "@/components/button";

import LogoImage from "../../public/images/logo.svg";

export default function HomeHeader() {
  return (
    <div className="bg-black">
      <Container className=" h-[96px] flex items-center">
        <LogoImage className="h-32 text-green-200 mr-[72px]" />

        <div className="flex flex-1 gap-40">
          <a href="/sobre" className="text-md-semibold text-green-200">
            Sobre
          </a>

          <a href="/servicos" className="text-md-semibold text-green-200">
            Serviços
          </a>
        </div>

        <div className="flex gap-24">
          <button className="bg-green-200 w-[180px] h-48 rounded cursor-pointer text-sm-semibold text-white">
            Abrir minha conta
          </button>

          <button className="w-[180px] h-48 rounded border-2 border-border-green-200 cursor-pointer text-sm-semibold text-green-200">
            Já tenho conta
          </button>
        </div>
      </Container>
    </div>
  );
}
