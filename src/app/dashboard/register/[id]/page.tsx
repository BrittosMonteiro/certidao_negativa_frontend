"use client";

import { FormEvent, useRef } from "react";
import Link from "next/link";
import {
  inputClass,
  labelClass,
} from "@/presentation/features/suppliers/suppliers-create-modal/style";
import { Button } from "@/presentation/shared/components/Button";
import { PageTitle } from "@/presentation/shared/components/PageTitle";
import { maskCnpj, maskPhone } from "@/presentation/shared/utils/maks";
import { ArrowLeftIcon } from "@phosphor-icons/react";
import { SupplierHistory } from "@/presentation/features/suppliers/supplier-history";

export default function RegisterPage() {
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    formRef.current?.reset();
  }

  return (
    <>
      <Link
        href={"/dashboard"}
        className="text-emerald-800 flex items-center gap-2 border-b w-fit hover:bg-emerald-800 hover:text-white transition-all p-2"
      >
        <ArrowLeftIcon />
        Lista de fornecedores
      </Link>

      <div className="flex items-start flex-col md:flex-row gap-6 md:items-center">
        <PageTitle title="Nome fantasia" />
        <span className="bg-emerald-800 text-white py-1 px-2 rounded-lg">
          Ativo
        </span>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="razaoSocial" className={labelClass}>
              Razão social
            </label>
            <input
              id="razaoSocial"
              name="razaoSocial"
              required
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="nomeFantasia" className={labelClass}>
              Nome fantasia
            </label>
            <input
              id="nomeFantasia"
              name="nomeFantasia"
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label htmlFor="cnpj" className={labelClass}>
              CNPJ
            </label>
            <input
              id="cnpj"
              name="cnpj"
              required
              inputMode="numeric"
              maxLength={18}
              placeholder="00.000.000/0000-00"
              onChange={(e) => (e.target.value = maskCnpj(e.target.value))}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="telefone" className={labelClass}>
              Telefone
            </label>
            <input
              id="telefone"
              name="telefone"
              type="tel"
              className={inputClass}
              maxLength={15}
              placeholder="(00) 00000-0000"
              onChange={(e) => (e.target.value = maskPhone(e.target.value))}
            />
          </div>

          <div className="">
            <label htmlFor="email" className={labelClass}>
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={inputClass}
            />
          </div>
        </div>

        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <Button variant="danger" text="Excluir" className="cursor-pointer" />
          <Button type="submit" text="Salvar" className="cursor-pointer" />
          <Button
            type="button"
            text="Consultar certidão"
            className="cursor-pointer"
          />
        </div>
      </form>

      <div className="divider border border-zinc-300" />

      <SupplierHistory />
    </>
  );
}
