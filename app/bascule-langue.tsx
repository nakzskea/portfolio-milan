"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Langue } from "./dico";

export function BasculeLangue({
  langue,
  libelle,
}: {
  langue: Langue;
  libelle: string;
}) {
  const chemin = usePathname();
  const autre = langue === "fr" ? "en" : "fr";
  return (
    <Link
      href={chemin.replace(/^\/(fr|en)/, `/${autre}`)}
      hrefLang={autre}
      scroll={false}
      className="badge hover:border-bleu-doux"
      data-ton="or"
    >
      {libelle}
    </Link>
  );
}
