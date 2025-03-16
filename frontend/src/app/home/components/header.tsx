"use client";
import NavigationMenu from "@/components/navigation-menu";
import Container from "@/components/container";

import LogoImage from "@@/public/images/logo.svg";
import LogoCompactImage from "@@/public/images/logo-compact.svg";
import UserAuthenticationModal from "./user-authentication-modal";
import NewUserModal from "./new-user-modal";

export default function Header() {
  const links = [
    { path: "/sobre", label: "Sobre" },
    { path: "/servicos", label: "Serviços" },
  ];

  return (
    <div className="bg-black">
      <Container className="h-[96px] flex items-center gap-24 lg:gap-72 sm:justify-between">
        <NavigationMenu variant="dark" menuItens={links} />

        <LogoImage className="sm:hidden lg:block h-32 text-green-200 ml-auto lg:ml-0" />
        <LogoCompactImage className="hidden h-[27px] text-green-200 sm:block lg:hidden" />

        <div className="hidden sm:flex md:flex-1 sm:gap-24 lg:gap-40">
          {links.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className="text-md-semibold text-green-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden sm:flex sm:gap-16 lg:gap-24">
          <NewUserModal />

          <UserAuthenticationModal />
        </div>
      </Container>
    </div>
  );
}
