import type { MetadataRoute } from "next";
import { LANGUES } from "./dico";

const BASE = "https://mremy-dev.fr";
const PAGES = ["", "/projets", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return LANGUES.flatMap((lang) =>
    PAGES.map((page) => ({ url: `${BASE}/${lang}${page}`, lastModified: new Date() })),
  );
}