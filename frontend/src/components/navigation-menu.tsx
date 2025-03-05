"use client";
import { useState } from "react";
import clsx from "clsx";

import CustomLink from "@/components/custom-link";

import MenuIcon from "../../public/icons/menu.svg";
import CloseIcon from "../../public/icons/close.svg";

export default function NavigationMenu() {
  const [open, setOpen] = useState(false);

  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <button
        className="w-40 h-40 flex items-center justify-center sm:hidden"
        onClick={openMenu}
      >
        <MenuIcon className="w-32 h-32 text-orange-100" />
      </button>

      <div
        className={clsx(
          "absolute top-0 left-0 w-[172px] h-auto bg-green-100 z-10 pt-40 px-18",
          open ? "visible" : "invisible"
        )}
      >
        <button
          className="absolute top-8 right-8 w-24 h-24 flex items-center justify-center sm:hidden"
          onClick={closeMenu}
        >
          <CloseIcon className="w-18 h-18 text-green-200" />
        </button>

        <ul>
          <li className="group">
            <CustomLink
              href="/"
              className="block pb-16 mb-16 text-center group-not-last-of-type:border-b border-b-black"
              textSize="md"
              textColor="black"
              textWeight="regular"
              activeClassName="border-b-green-200"
              activeTextColor="orange-100"
              activeTextWeight="bold"
            >
              Início
            </CustomLink>
          </li>

          <li className="group">
            <CustomLink
              href="/transferencias"
              className="block pb-16 mb-16 text-center group-not-last-of-type:border-b border-b-black"
              textSize="md"
              textColor="black"
              textWeight="regular"
              activeClassName="border-b-green-200"
              activeTextColor="orange-100"
              activeTextWeight="bold"
            >
              Transferências
            </CustomLink>
          </li>

          <li className="group">
            <CustomLink
              href="/investimentos"
              className="block pb-16 mb-16 text-center group-not-last-of-type:border-b border-b-black"
              textSize="md"
              textColor="black"
              textWeight="regular"
              activeClassName="border-b-green-200"
              activeTextColor="orange-100"
              activeTextWeight="bold"
            >
              Investimentos
            </CustomLink>
          </li>

          <li className="group">
            <CustomLink
              href="/outros-servicos"
              className="block pb-16 mb-16 text-center group-not-last-of-type:border-b border-b-black"
              textSize="md"
              textColor="black"
              textWeight="regular"
              activeClassName="border-b-green-200"
              activeTextColor="orange-100"
              activeTextWeight="bold"
            >
              Outros serviços
            </CustomLink>
          </li>
        </ul>
      </div>
    </>
  );
}
