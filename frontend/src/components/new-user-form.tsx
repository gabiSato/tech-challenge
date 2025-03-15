"use client";
import { useState } from "react";

import Checkbox from "@/components/checkbox";
import Input from "@/components/input";

export default function NewUserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  return (
    <form className="flex flex-col gap-24">
      <div className="flex flex-col gap-8">
        <label className="text-sm-bold">Nome</label>

        <Input
          className="w-full"
          placeholder="Digite seu nome completo"
          value={name}
        />
      </div>

      <div className="flex flex-col gap-8">
        <label className="text-sm-bold">Email</label>

        <Input
          className="w-full"
          placeholder="Digite seu email"
          value={email}
        />
      </div>

      <div className="flex flex-col gap-8">
        <label className="text-sm-bold">Senha</label>

        <Input
          className="w-full"
          placeholder="Digite sua senha"
          value={password}
        />
      </div>

      <Checkbox
        label="Li e estou ciente quanto às condições de tratamento dos meus dados conforme descrito na Política de Privacidade do banco."
        checked={acceptTerms}
        onChange={setAcceptTerms}
      />

      <button>Criar conta</button>
    </form>
  );
}
