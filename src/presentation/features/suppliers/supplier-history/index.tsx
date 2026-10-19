"use client";

import { Badge } from "@/presentation/shared/components/Badge";
import { PageTitle } from "@/presentation/shared/components/PageTitle";
import { useEffect, useState } from "react";
import { SUPPLIER_HISTORY_LIST } from "./supplier-history.type";

const HISTORY: SUPPLIER_HISTORY_LIST = [
  {
    id: "trxdycfuvgibhojn",
    date: "31/01/2026",
    status: true,
  },
  {
    id: "ewstrxdyfcugvhbi",
    date: "28/02/2026",
    status: false,
  },
  {
    id: "zestxdrfycgvjhbk",
    date: "31/03/2026",
    status: false,
  },
  {
    id: "redytfcuygvhbj",
    date: "30/04/2026",
    status: false,
  },
  {
    id: "esrtdytcfuvghbj",
    date: "31/05/2026",
    status: true,
  },
];

export function SupplierHistory() {
  const [history, setHistory] = useState<SUPPLIER_HISTORY_LIST | []>([]);
  const [filters, setFilters] = useState<string[] | []>([]);

  const handleFilters = (value: string) => {
    console.log(value);
  };

  useEffect(() => {
    setHistory(HISTORY);
  }, []);

  return (
    <>
      <div className="flex flex-col gap-2 items-start sm:flex-row sm:justify-between">
        <PageTitle title="Histórico" />

        <div className="flex gap-2 items-center bg-white w-full p-3 rounded-lg border border-zinc-300 sm:w-fit">
          <span className="font-semibold">Filtrar por:</span>
          <Badge title="Negativo" isSelected={handleFilters} />
          <Badge title="Positivo" isSelected={handleFilters} />
        </div>
      </div>

      <div className=" overflow-x-auto rounded-xl border border-gray-200 bg-white md:block">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-200 text-xs uppercase tracking-wide text-gray-600">
              <th className="px-4 py-3">Data</th>
              <th className="px-4 py-3">Situação</th>
            </tr>
          </thead>
          <tbody>
            {history.map(({ id, date, status }) => (
              <tr
                key={id}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="px-4 py-4 font-semibold">{date}</td>
                <td className="px-4 py-4">
                  {status ? "Positivo" : "Negativo"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
