import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import type { Metadata } from "next";
import { dico, type Langue } from "../../dico";
import { FleurSeule } from "../../flore";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = (await params) as { lang: Langue };
  return { title: dico[lang].projetsTitre };
}

// Une capture absente ne doit pas afficher d'image cassée : on vérifie au build.
function capture(visuel?: string) {
  return visuel && existsSync(join(process.cwd(), "public", "projets", visuel))
    ? `/projets/${visuel}`
    : null;
}

export default async function Projets({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = (await params) as { lang: Langue };
  const t = dico[lang];

  return (
    <div className="mx-auto max-w-5xl px-6 pt-16">
      <h1 className="text-4xl font-semibold sm:text-5xl">{t.projetsTitre}</h1>
      <p className="mt-5 max-w-[58ch] text-lg text-encre/85">
        {t.projetsChapo}
      </p>

      <ol className="mt-12 grid gap-6 md:grid-cols-2">
        {t.projets.map((p) => {
          const src = capture("visuel" in p ? p.visuel : undefined);
          return (
            <li key={p.nom} className="carte flex flex-col overflow-hidden">
              <div className="relative flex aspect-[16/10] items-center justify-center border-b border-trait bg-gradient-to-br from-ciel to-ciel-clair">
                {src ? (
                  <Image
                    src={src}
                    alt={p.nom}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <FleurSeule />
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm text-or">{p.contexte}</p>
                <h2 className="mt-1 text-xl font-semibold">{p.nom}</h2>
                <p className="mt-2 text-sm text-encre/85">{p.resume}</p>

                <ul className="mt-4 space-y-1 text-sm text-encre/75">
                  {p.role.map((r) => (
                    <li key={r} className="pl-4 -indent-4">
                      <span className="text-bleu-doux">◆</span> {r}
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <li key={s} className="badge text-[0.8rem]" data-ton="encre">
                      {s}
                    </li>
                  ))}
                </ul>

                {"lien" in p && (
                  <p className="mt-auto pt-5">
                    <a
                      href={p.lien}
                      className="rounded-full bg-bleu px-5 py-2 text-sm text-creme hover:bg-encre"
                    >
                      {"lienLabel" in p ? p.lienLabel : t.labels.voirSite}
                    </a>
                  </p>
                )}
                {"prive" in p && (
                  <p className="mt-auto pt-5 text-sm text-bleu-doux">
                    {t.labels.prive}
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
