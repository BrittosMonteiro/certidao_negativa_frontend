"use client";

import { useState } from "react";
import { SuppliersList } from "../../suppliers/suppliers-list";
import { Button } from "@/presentation/shared/components/Button";

export function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const requestUpdateRegister = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000);
  };

  return (
    <>
      <form>
        <input
          className="rounded-lg border border-slate-300 bg-white p-3 w-full max-w-90 font-normal"
          placeholder="Buscar por Nome ou CNPJ"
          onChange={(value) => setSearchTerm(value.target.value)}
        />
      </form>
      <Button
        text={isLoading ? "Atualizando" : "Atualizar certidões"}
        className="cursor-pointer self-end"
        disabled={isLoading}
        onClick={requestUpdateRegister}
      />
      <SuppliersList searchTerm={searchTerm} />
    </>
  );
}
