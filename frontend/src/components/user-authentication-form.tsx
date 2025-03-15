"use client";
import { useState } from "react";
import Input from "./input";

export default function UserAuthenticationForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <form className="flex flex-col gap-24">
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

      <button>Acessar</button>
    </form>
  );
}
