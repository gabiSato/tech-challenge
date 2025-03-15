"use client";
import React, { useState } from "react";

import Input from "@/components/input";
import Button from "@/components/button";

export default function UserAuthenticationForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
      </div>

      <Button type="submit" variant="green-primary">
        Acessar
      </Button>
    </form>
  );
}
