import type { Metadata } from "next";
import { dico, type Langue } from "../../dico";
import { Flore } from "../../flore";
import { MOI } from "../../liens";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = (await params) as { lang: Langue };
  return { title: dico[lang].nav.contact };
}

export default async function Contact({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = (await params) as { lang: Langue };
  const t = dico[lang];

  const moyens = [
    { label: t.contactLabels.email, valeur: MOI.email, href: `mailto:${MOI.email}` },
    { label: t.contactLabels.linkedin, valeur: t.contactLiens.linkedin, href: MOI.linkedin },
    { label: t.contactLabels.github, valeur: t.contactLiens.github, href: MOI.github },
  ];

  return (
    <>
      <section className="bandeau">
        <Flore />
        <div className="relative mx-auto max-w-4xl px-6 pt-20 pb-24">
          <h1 className="text-4xl font-semibold sm:text-5xl">
            {t.contactTitre}
          </h1>
          <p className="mt-5 max-w-[52ch] text-lg text-encre/85">
            {t.contactChapo}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6">
        <dl className="relative -mt-10 grid gap-px overflow-hidden rounded-2xl border border-trait bg-trait sm:grid-cols-3">
          {moyens.map((m) => (
            <div key={m.label} className="bg-[#fffdf9] px-6 py-6">
              <dt className="text-sm text-bleu-doux">{m.label}</dt>
              <dd className="mt-1 break-words">
                <a href={m.href} className="text-bleu underline decoration-bleu-doux underline-offset-4 hover:decoration-bleu">
                  {m.valeur}
                </a>
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-10 max-w-[58ch] text-encre/80">{t.contactPied}</p>
      </div>
    </>
  );
}
