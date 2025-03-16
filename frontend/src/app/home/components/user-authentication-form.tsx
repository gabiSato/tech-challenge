"use client";
import React, { useState } from "react";
import { object, string } from "yup";

import { useValidation } from "@/hooks/useValidation";

import Input from "@/components/input";
import Button from "@/components/button";

export default function UserAuthenticationForm() {
  const userSchema = object({
    email: string().email("Email inválido.").required("Campo obrigatório."),
    password: string().required("Campo obrigatório"),
  });

  const { errors, validate, resetFieldErros } = useValidation(userSchema);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
    resetFieldErros("email");
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    resetFieldErros("password");
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const isValid = await validate({
      email,
      password,
    });

    console.log(isValid);
  }

  return (
    <form className="flex flex-col gap-32 items-center" onSubmit={onSubmit}>
      <div className="flex flex-col gap-24 w-full">
        <div className="flex flex-col gap-8">
          <label className="text-sm-bold">Email</label>

          <Input
            placeholder="Digite seu email"
            value={email}
            full
            invalid={!!errors.email?.length}
            error={errors.email?.[0]}
            onChange={handleEmailChange}
          />
        </div>

        <div className="flex flex-col gap-8">
          <label className="text-sm-bold">Senha</label>

          <Input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            invalid={!!errors.password?.length}
            error={errors.password?.[0]}
            full
            onChange={handlePasswordChange}
          />

          <a
            href="/redefinir-senha"
            className="text-sm text-green-200 underline underline-offset-2"
          >
            Esqueci a senha!
          </a>
        </div>
      </div>

      <Button type="submit" variant="green-primary">
        Acessar
      </Button>
    </form>
  );
}
