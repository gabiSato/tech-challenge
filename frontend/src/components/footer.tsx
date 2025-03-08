import Container from "./container";

import LogoImage from "../../public/images/logo.svg";
import InstagramIcon from "../../public/icons/instagram.svg";
import WhatsappIcon from "../../public/icons/whatsapp.svg";
import YoutubeIcon from "../../public/icons/youtube.svg";

export default function footer() {
  return (
    <div className="bg-black pt-40 pb-52 text-white">
      <Container>
        <div className="flex justify-between">
          <div className="">
            <h3 className="text-sm font-bold mb-16">Serviços</h3>

            <ul className="flex flex-col gap-16">
              <li>
                <a href="/conta-corrente">Conta corrente</a>
              </li>
              <li>
                <a href="/conta-pj">Conta PJ</a>
              </li>
              <li>
                <a href="/cartão de crédito">Cartão de crédito</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-16">Contato</h3>

            <ul className="flex flex-col gap-16">
              <li>0800 004 250 08</li>
              <li>meajuda@bytebank.com.br</li>
              <li>ouvidoria@bytebank.com.br</li>
            </ul>
          </div>

          <div className="flex flex-col gap-24 items-center">
            <h3 className="text-sm font-bold">Desenvolvido por Alura</h3>

            <div>
              <LogoImage className="h-32" />
            </div>

            <div className="flex gap-24">
              <InstagramIcon className="h-[30px] w-auto text-white" />
              <WhatsappIcon className="h-[30px] w-auto text-white" />
              <YoutubeIcon className="h-[30px] w-auto text-white" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
