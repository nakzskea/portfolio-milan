# Portfolio - Milan Remy

Next.js (App Router) + Tailwind v4. Six pages statiques : `/fr` et `/en` × 3 pages.
Aucun backend, aucune base, aucune variable d'environnement.

```bash
npm install
npm run dev
```

## Où éditer quoi

| Fichier | Contenu |
|---|---|
| `app/liens.ts` | Email, LinkedIn, GitHub. Repris dans l'en-tête, le pied de page et la page contact. |
| `app/dico.ts` | **Tout le texte du site**, en français et en anglais. Les deux versions sont côte à côte : si tu modifies une phrase, modifie sa jumelle. |
| `app/flore.tsx` | Le motif floral. `SEMIS` = position, rotation, taille et couleur de chaque fleur. |
| `public/projets/` | Les captures d'écran des projets. Nom du fichier = champ `visuel` du projet. Sans fichier, une fleur s'affiche à la place. |
| `app/globals.css` | Palette (`@theme`) et les trois motifs maison : `.badge`, `.carte`, `.frise`. |



