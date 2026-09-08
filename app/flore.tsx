// Motif décoratif repris de la bannière GitHub : fleurs et feuilles à l'aquarelle.
// Positions fixes (pas d'aléatoire) pour éviter tout écart d'hydratation.
// Le filtre est porté par le groupe parent : les formes ci-dessous n'en déclarent pas.

const PETALES = [0, 72, 144, 216, 288];

function Aquarelle({ id }: { id: string }) {
  return (
    <filter id={id}>
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.05"
        numOctaves={2}
        seed={7}
      />
      <feDisplacementMap in="SourceGraphic" scale={3} />
    </filter>
  );
}

function Fleur({ ton }: { ton: "encre" | "creme" }) {
  const petale = ton === "encre" ? "#2b4d7e" : "#fdfbf6";
  const ombre = ton === "encre" ? "#17263d" : "#dbe7f4";
  return (
    <>
      {PETALES.map((a) => (
        <g key={a} transform={`rotate(${a})`}>
          <ellipse cy={-15} rx={8} ry={15} fill={petale} opacity={0.95} />
          <ellipse cy={-17} rx={3.5} ry={8} fill={ombre} opacity={0.35} />
        </g>
      ))}
      <circle r={5} fill="#f3ead6" />
      {PETALES.map((a) => (
        <circle
          key={a}
          r={1.5}
          fill="#cf9c3a"
          transform={`rotate(${a + 36}) translate(0 -3.5)`}
        />
      ))}
    </>
  );
}

function Feuille({ ton }: { ton: "encre" | "creme" }) {
  return (
    <path
      d="M0 0C10-6 19-17 21-33 9-28 1-14 0 0Z"
      fill={ton === "encre" ? "#2b4d7e" : "#eef4fb"}
      opacity={0.9}
    />
  );
}

// x, y en % du viewBox, rotation, échelle, ton.
// Le bandeau recadre les bords : l'essentiel se joue entre x 25 et 75.
const SEMIS = [
  { x: 6, y: 22, r: -18, e: 1.1, ton: "encre", type: "fleur" },
  { x: 17, y: 68, r: 32, e: 0.75, ton: "creme", type: "feuille" },
  { x: 29, y: 14, r: 12, e: 0.85, ton: "creme", type: "fleur" },
  { x: 54, y: 12, r: -8, e: 0.7, ton: "encre", type: "feuille" },
  { x: 67, y: 62, r: 24, e: 1, ton: "creme", type: "fleur" },
  { x: 79, y: 18, r: -25, e: 0.95, ton: "encre", type: "fleur" },
  { x: 88, y: 70, r: 48, e: 0.8, ton: "creme", type: "feuille" },
  { x: 96, y: 34, r: -12, e: 0.7, ton: "encre", type: "feuille" },
] as const;

export function Flore() {
  return (
    <svg
      className="flore"
      viewBox="0 0 1000 300"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <Aquarelle id="aquarelle-bandeau" />
      </defs>
      {SEMIS.map((s, i) => (
        <g
          key={i}
          filter="url(#aquarelle-bandeau)"
          transform={`translate(${s.x * 10} ${s.y * 3}) rotate(${s.r}) scale(${s.e})`}
        >
          {s.type === "fleur" ? <Fleur ton={s.ton} /> : <Feuille ton={s.ton} />}
        </g>
      ))}
    </svg>
  );
}

// Aplat affiché à la place d'une capture manquante.
export function FleurSeule({ taille = 110 }: { taille?: number }) {
  return (
    <svg
      viewBox="-40 -40 80 80"
      width={taille}
      height={taille}
      aria-hidden="true"
    >
      <defs>
        <Aquarelle id="aquarelle-vignette" />
      </defs>
      <g filter="url(#aquarelle-vignette)">
        <Fleur ton="creme" />
      </g>
    </svg>
  );
}
