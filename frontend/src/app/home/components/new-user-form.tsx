"use client";
import { useState } from "react";
import { object, string, boolean } from "yup";

import { useValidation } from "@/hooks/useValidation";

import Checkbox from "@/components/checkbox";
import Input from "@/components/input";
import Button from "@/components/button";

export default function NewUserForm() {
  const userSchema = object({
    name: string().required("Campo obrigatório."),
    email: string().email("Email inválido.").required("Campo obrigatório."),
    password: string()
      .min(6, "Deve ter no mínimo 6 caracteres")
      .required("Campo obrigatório"),
    acceptTerms: boolean()
      .required("Campo obrigatório.")
      .equals([true], "Deve aceitar os termos para continuar."),
  });

  const { errors, validate, resetFieldErros } = useValidation(userSchema);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
    resetFieldErros("name");
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
    resetFieldErros("email");
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    resetFieldErros("password");
  }

  function handleAcceptTermsChange(value: boolean) {
    setAcceptTerms(value);
    resetFieldErros("acceptTerms");
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const isValid = await validate({
      name,
      email,
      password,
      acceptTerms,
    });

    console.log(isValid);
  }

  return (
    <form className="flex flex-col gap-32 items-center" onSubmit={onSubmit}>
      <div className="flex flex-col gap-24 w-full">
        <div className="flex flex-col gap-8">
          <label className="text-sm-bold">Nome</label>

          <Input
            placeholder="Digite seu nome completo"
            value={name}
            invalid={!!errors.name?.length}
            error={errors.name?.[0]}
            full
            onChange={handleNameChange}
          />
        </div>

        <div className="flex flex-col gap-8">
          <label className="text-sm-bold">Email</label>

          <Input
            placeholder="Digite seu email"
            value={email}
            invalid={!!errors.email?.length}
            error={errors.email?.[0]}
            full
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
        </div>

        <Checkbox
          label="Li e estou ciente quanto às condições de tratamento dos meus dados conforme descrito na Política de Privacidade do banco."
          checked={acceptTerms}
          invalid={!!errors.acceptTerms?.length}
          error={errors.acceptTerms?.[0]}
          onChange={handleAcceptTermsChange}
        />
      </div>

      <Button type="submit" variant="orange-primary">
        Criar conta
      </Button>
    </form>
  );
}
