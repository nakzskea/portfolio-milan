import Link from "next/link";
import { dico, type Langue } from "../dico";
import { Flore } from "../flore";

function Frise({
  titre,
  etapes,
}: {
  titre: string;
  etapes: readonly {
    date: string;
    titre: string;
    lieu: string;
    texte: string;
    actuel?: boolean;
  }[];
}) {
  return (
    <div>
      <h3 className="text-xl font-semibold">{titre}</h3>
      <ol className="frise mt-6 space-y-8">
        {etapes.map((e) => (
          <li
            key={e.titre}
            className="etape relative"
            data-actuel={"actuel" in e ? "" : undefined}
          >
            <p className="text-sm text-or">{e.date}</p>
            <h4 className="mt-0.5 font-semibold">{e.titre}</h4>
            <p className="text-sm text-bleu">{e.lieu}</p>
            <p className="mt-1.5 text-sm text-encre/80">{e.texte}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default async function Accueil({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = (await params) as { lang: Langue };
  const t = dico[lang];

  return (
    <>
      <section className="bandeau">
        <Flore />
        <div className="relative mx-auto max-w-4xl px-6 pt-20 pb-28">
          <h1 className="max-w-[16ch] text-4xl font-semibold text-balance sm:text-6xl">
            {t.hero.titre}
          </h1>
          <p className="mt-7 max-w-[58ch] text-lg text-encre/85">
            {t.hero.chapo}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href={`/${lang}/contact`}
              className="rounded-full bg-bleu px-6 py-2.5 text-creme hover:bg-encre"
            >
              {t.hero.cta}
            </Link>
            <Link
              href={`/${lang}/projets`}
              className="rounded-full border border-bleu px-6 py-2.5 text-bleu hover:bg-white"
            >
              {t.hero.ctaSecondaire}
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6">
        <dl className="relative -mt-12 grid gap-px overflow-hidden rounded-2xl border border-trait bg-trait sm:grid-cols-3">
          {t.faits.map((f) => (
            <div key={f.cle} className="bg-[#fffdf9] px-6 py-5">
              <dt className="text-sm text-bleu-doux">{f.cle}</dt>
              <dd className="mt-1">
                {"lien" in f ? (
                  <a href={f.lien} className="underline decoration-bleu-doux underline-offset-4 hover:decoration-bleu">
                    {f.valeur}
                  </a>
                ) : (
                  f.valeur
                )}
              </dd>
            </div>
          ))}
        </dl>

        <section className="mt-24">
          <h2 className="text-3xl font-semibold">{t.competencesTitre}</h2>
          <ol className="ligne mt-10">
            {t.arrets.map((a) => (
              <li
                key={a.titre}
                className="arret"
                data-terminus={"terminus" in a ? "" : undefined}
              >
                <h3 className="text-base font-semibold">
                  {"terminus" in a ? (
                    <Link href={`/${lang}/contact`} className="text-bleu hover:underline">
                      {a.titre}
                    </Link>
                  ) : (
                    a.titre
                  )}
                </h3>
                <p className="mt-1 text-sm text-encre/75">{a.texte}</p>
              </li>
            ))}
          </ol>

          <h3 className="mt-16 text-sm font-semibold text-bleu-doux">
            {t.technologiesTitre}
          </h3>
                    <div className="mt-6 grid gap-8 sm:grid-cols-2">
            {t.technologies.map((g) => (
              <div key={g.famille}>
                <h4 className="text-sm font-semibold text-bleu">{g.famille}</h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {g.outils.map((o) => (
                    <li key={o} className="badge" data-ton={g.ton}>{o}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <h2 className="text-3xl font-semibold">{t.parcoursTitre}</h2>
          <p className="mt-3 max-w-[58ch] text-encre/80">{t.parcoursChapo}</p>
          <div className="mt-12 grid gap-14 sm:grid-cols-2 sm:gap-10">
            <Frise titre={t.experiencesTitre} etapes={t.experiences} />
            <Frise titre={t.formationTitre} etapes={t.formation} />
          </div>
        </section>
      </div>
    </>
  );
}
