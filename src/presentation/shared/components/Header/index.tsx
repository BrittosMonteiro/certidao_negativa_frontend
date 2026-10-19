"use client";

import {
  GearIcon,
  ListDashesIcon,
  SignOutIcon,
  type Icon as PhosphorIcon,
} from "@phosphor-icons/react";
import Link from "next/link";

const ANCHORS: { label: string; anchor: string; Icon: PhosphorIcon }[] = [
  {
    label: "Dashboard",
    anchor: "/dashboard",
    Icon: ListDashesIcon,
  },
  {
    label: "Configurações",
    anchor: "/dashboard/settings",
    Icon: GearIcon,
  },
  {
    label: "Sair",
    anchor: "/dashboard",
    Icon: SignOutIcon,
  },
];

export function Header() {
  return (
    <div className="flex justify-between items-center px-8 py-4 shadow sticky top-0 bg-white">
      <span className="text-xl font-bold text-emerald-800 hidden md:flex">
        Consulta Certidão Negativa
      </span>
      <div className="flex items-center gap-6 text-base">
        {ANCHORS.map(({ anchor, label, Icon }) => (
          <Link href={anchor} key={label}>
            <Icon size={20} weight="bold" />
          </Link>
        ))}
      </div>
    </div>
  );
}
