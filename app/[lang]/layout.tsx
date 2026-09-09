import type { Metadata } from "next";
import { Fraunces, Karla } from "next/font/google";
import Link from "next/link";
import { BasculeLangue } from "../bascule-langue";
import { dico, LANGUES, type Langue } from "../dico";
import { MOI } from "../liens";
import Image from "next/image";
import "../globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["SOFT", "WONK"],
  variable: "--font-fraunces",
});

const karla = Karla({ subsets: ["latin"], variable: "--font-karla" });

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGUES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = (await params) as { lang: Langue };
  return {
    metadataBase: new URL("https://mremy-dev.fr"),
    title: { default: `${MOI.nom} - ${dico[lang].nav.accueil}`, template: `%s - ${MOI.nom}` },
    description: dico[lang].hero.chapo,
  };
}

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = (await params) as { lang: Langue };
  const t = dico[lang];
  const liens = [
    { href: `/${lang}`, label: t.nav.accueil },
    { href: `/${lang}/projets`, label: t.nav.projets },
    { href: `/${lang}/contact`, label: t.nav.contact },
  ];

  return (
    <html lang={lang} className={`${fraunces.variable} ${karla.variable}`}>
      <body>
        <header className="sticky top-0 z-10 border-b border-trait bg-creme/85 backdrop-blur">
          <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-6 py-4">
            <Link href={`/${lang}`}>
              <Image src="/logo.png" alt={MOI.nom} width={1656} height={927} priority className="h-11 w-auto" />
            </Link>
            <div className="flex items-center gap-6">
              <nav className="flex gap-5 text-[0.95rem]">
                {liens.map((l) => (
                  <Link key={l.href} href={l.href} className="hover:text-bleu">
                    {l.label}
                  </Link>
                ))}
              </nav>
              <BasculeLangue langue={lang} libelle={t.autreLangue} />
            </div>
          </div>
        </header>

        {children}

        <footer className="mt-24 border-t border-trait">
          <div className="mx-auto flex max-w-4xl flex-wrap justify-between gap-4 px-6 py-8 text-sm text-bleu">
            <span>
              {MOI.nom} - Metz
            </span>
            <span className="flex gap-5">
              <a href={MOI.github} className="hover:underline">
                GitHub
              </a>
              <a href={MOI.linkedin} className="hover:underline">
                LinkedIn
              </a>
              <a href={`mailto:${MOI.email}`} className="hover:underline">
                Email
              </a>
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
