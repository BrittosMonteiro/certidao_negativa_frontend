"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Button } from "@/presentation/shared/components/Button";
import { Props } from "./supplier.type";
import { maskCnpj, maskPhone } from "@/presentation/shared/utils/maks";
import { inputClass, labelClass } from "./style";

export function SupplierCreate() {
  const [aberto, setAberto] = useState(false);

  return (
    <>
      <Button
        text="Novo fornecedor"
        className="cursor-pointer"
        onClick={() => setAberto(true)}
      />

      <SupplierCreateModal
        open={aberto}
        onClose={() => setAberto(false)}
        onSubmit={async (supplier) => {
          // chame sua API aqui, por exemplo:
          // await fetch("/api/suppliers", { method: "POST", body: JSON.stringify(supplier) });
        }}
      />
    </>
  );
}

export function SupplierCreateModal({ open, onClose, onSubmit }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    await onSubmit({
      razaoSocial: String(data.get("razaoSocial") ?? "").trim(),
      nomeFantasia: String(data.get("nomeFantasia") ?? "").trim(),
      cnpj: String(data.get("cnpj") ?? ""),
      telefone: String(data.get("telefone") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
    });
    formRef.current?.reset();
    onClose();
  }

  return (
    <dialog
      ref={dialogRef}
      onClose={() => {
        formRef.current?.reset();
        onClose();
      }}
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose();
      }}
      aria-labelledby="modal-novo-fornecedor-titulo"
      className="m-auto w-full max-w-lg rounded-xl p-0 shadow-xl backdrop:bg-black/50"
    >
      <form ref={formRef} onSubmit={handleSubmit} className="p-6 sm:p-8">
        <h2
          id="modal-novo-fornecedor-titulo"
          className="mb-6 text-xl font-bold text-ink"
        >
          Novo fornecedor
        </h2>

        <div className="mb-4">
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

        <div className="mb-4">
          <label htmlFor="nomeFantasia" className={labelClass}>
            Nome fantasia
          </label>
          <input id="nomeFantasia" name="nomeFantasia" className={inputClass} />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
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
        </div>

        <div className="mt-4">
          <label htmlFor="email" className={labelClass}>
            E-mail
          </label>
          <input id="email" name="email" type="email" className={inputClass} />
        </div>

        <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <Button variant="secondary" onClick={onClose} text="Cancelar" />
          <Button type="submit" text="Salvar fornecedor" />
        </div>
      </form>
    </dialog>
  );
}
