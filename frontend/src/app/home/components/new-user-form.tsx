"use client";
import { useState } from "react";

import Checkbox from "@/components/checkbox";
import Input from "@/components/input";
import Button from "@/components/button";

export default function NewUserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  return (
    <form className="flex flex-col gap-32 items-center">
      <div className="flex flex-col gap-24 w-full">
        <div className="flex flex-col gap-8">
          <label className="text-sm-bold">Nome</label>

          <Input
            className="w-full"
            placeholder="Digite seu nome completo"
            value={name}
            onChange={handleNameChange}
          />
        </div>

        <div className="flex flex-col gap-8">
          <label className="text-sm-bold">Email</label>

          <Input
            className="w-full"
            placeholder="Digite seu email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <div className="flex flex-col gap-8">
          <label className="text-sm-bold">Senha</label>

          <Input
            className="w-full"
            placeholder="Digite sua senha"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <Checkbox
          label="Li e estou ciente quanto às condições de tratamento dos meus dados conforme descrito na Política de Privacidade do banco."
          checked={acceptTerms}
          onChange={setAcceptTerms}
        />
      </div>

      <Button type="submit" variant="orange-primary">
        Criar conta
      </Button>
    </form>
  );
}
