"use client";

import { useState } from "react";
import { variants } from "./style";
import { XCircleIcon } from "@phosphor-icons/react";

type Badge = {
  title: string;
  isSelected: (value: string) => void;
  className?: string;
};

export function Badge({ title, className, isSelected }: Badge) {
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <span
      className={`flex w-fit items-center py-1 px-2 rounded-lg text-sm font-semibold gap-1 cursor-pointer ${variants[selected ? "selected" : "unselected"]} ${className}`}
      onClick={() => {
        setSelected(!selected);
        isSelected(title.toLowerCase());
      }}
    >
      {selected && <XCircleIcon size={20} />}
      {title}
    </span>
  );
}
