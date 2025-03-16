"use client";
import NavigationMenu from "@/components/navigation-menu";
import Container from "@/components/container";
import Text from "@/components/text";

import { useUserAccount } from "@/hooks/useUserAccount";

import AvatarIcon from "@@/public/icons/avatar.svg";

export default function Header() {
  const { user } = useUserAccount();

  const links = [
    { path: "/", label: "Início" },
    { path: "/transferencias", label: "Transferências" },
    { path: "/investimentos", label: "Investimentos" },
    { path: "/outros-servicos", label: "Outros serviços" },
  ];

  return (
    <div className="bg-cyan-300">
      <Container className="h-[96px] flex justify-between items-center">
        <div>
          <NavigationMenu variant="light" menuItens={links} />
        </div>

        <div className="flex gap-40 items-center">
          <Text className="hidden sm:block" color="white" weight="semibold">
            {user?.name}
          </Text>

          <AvatarIcon className="text-orange-200 w-40 h-40" />
        </div>
      </Container>
    </div>
  );
}
