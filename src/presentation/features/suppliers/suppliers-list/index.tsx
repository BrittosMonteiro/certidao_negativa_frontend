"use client";

import { maskCnpj } from "@/presentation/shared/utils/maks";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

type SUPPLIERTYPE = {
  id: number;
  razao: string;
  fantasia: string;
  cnpj: string;
  cidade: string;
  status: string;
};

const SUPPLIERS = [
  {
    id: 1,
    razao: "Padaria Estrela Ltda",
    fantasia: "Estrela do Pão",
    cnpj: "12345678000190",
    cidade: "São Paulo, SP",
    status: "Ativo",
  },
  {
    id: 2,
    razao: "Oliveira & Filhos ME",
    fantasia: "Ferragens Oliveira",
    cnpj: "98765432000110",
    cidade: "Curitiba, PR",
    status: "Ativo",
  },
  {
    id: 3,
    razao: "Nova Rota Logística S.A.",
    fantasia: "NovaRota",
    cnpj: "45678901000123",
    cidade: "Belo Horizonte, MG",
    status: "Inativo",
  },
];

const statusCor = (s: string) =>
  s === "Ativo" ? "text-emerald-800" : "text-red-700";

export function SuppliersList({ searchTerm }: { searchTerm?: string }) {
  const [suppliersList, setSuppliersList] = useState<SUPPLIERTYPE[] | []>([]);

  const getSuppliers = () => {
    setSuppliersList(SUPPLIERS);
  };

  const filter = useCallback(() => {
    if (!searchTerm) {
      getSuppliers();
      return;
    }

    if (searchTerm.length >= 3) {
      const filterSuppliers = SUPPLIERS.filter(
        (e) =>
          e.cnpj.includes(searchTerm) ||
          e.fantasia.toLowerCase().includes(searchTerm.toLowerCase()) ||
          e.razao.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setSuppliersList(filterSuppliers);
    }
  }, [searchTerm]);

  useEffect(() => {
    filter();
  }, [searchTerm]);

  return (
    <>
      {/* Cards: só no smartphone */}
      <ul className="space-y-3 md:hidden">
        {suppliersList.map((supplier, index) => (
          <SupplierMobileCard supplier={supplier} key={index} />
        ))}
      </ul>

      {/* Tabela: tablet e desktop */}
      <div className="hidden overflow-x-auto rounded-xl border border-gray-200 bg-white md:block">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-200 text-xs uppercase tracking-wide text-gray-600">
              <th className="px-4 py-3">Razão social</th>
              <th className="px-4 py-3">Nome fantasia</th>
              <th className="px-4 py-3">CNPJ</th>
              <th className="hidden px-4 py-3 lg:table-cell">Cidade</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {suppliersList.map((supplier, index) => (
              <SupplierLine supplier={supplier} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function SupplierMobileCard({ supplier }: { supplier: SUPPLIERTYPE }) {
  return (
    <li
      key={supplier.id}
      className="block rounded-xl border border-gray-200 bg-white p-4"
    >
      <Link
        href={`/dashboard/register/${supplier.id}`}
        className="flex items-start justify-between gap-3"
      >
        <div className="min-w-0">
          <p className="truncate font-semibold text-ink">{supplier.razao}</p>
          <p className="truncate text-sm text-gray-600">{supplier.fantasia}</p>
        </div>
        <span
          className={`shrink-0 text-sm font-semibold ${statusCor(supplier.status)}`}
        >
          {supplier.status}
        </span>
      </Link>
      <p className="mt-3 text-sm text-gray-600">{supplier.cnpj}</p>
    </li>
  );
}

function SupplierLine({ supplier }: { supplier: SUPPLIERTYPE }) {
  return (
    <tr key={supplier.id} className="border-b border-gray-100 hover:bg-gray-50">
      <td className="px-4 py-4 font-semibold">
        <Link href={`/dashboard/register/${supplier.id}`}>
          {supplier.razao}
        </Link>
      </td>
      <td className="px-4 py-4">{supplier.fantasia}</td>
      <td className="px-4 py-4 whitespace-nowrap">{maskCnpj(supplier.cnpj)}</td>
      <td className="hidden px-4 py-4 lg:table-cell">{supplier.cidade}</td>
      <td className={`px-4 py-4 font-semibold ${statusCor(supplier.status)}`}>
        {supplier.status}
      </td>
    </tr>
  );
}
