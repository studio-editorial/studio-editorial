export const PORTFOLIO_SECTIONS = [
  {
    id: "seo-business",
    title: "Trafic, intention, rentabilité",
    description:
      "Des pièces qui montrent comment relier visibilité, maturité de lecture, CAC et performance business.",
    problem:
      "Beaucoup de contenus SEO font monter la visibilité sans améliorer vraiment le pipeline.",
    promise:
      "Ces pièces montrent comment relier intention de recherche, maturité de lecture et performance business.",
    audience: "SaaS B2B, agences SEO, équipes acquisition",
  },
  {
    id: "conversion-pages",
    title: "Pages SaaS qui informent mais ne font pas avancer",
    description:
      "Des analyses conçues pour clarifier une promesse, hiérarchiser la preuve et mieux préparer la décision sur des pages à enjeu.",
    problem:
      "Certaines pages sont propres, sérieuses, bien remplies — mais elles réduisent mal le doute et poussent peu à l’action.",
    promise:
      "Ces pièces montrent comment reprendre une page à enjeu pour clarifier la promesse, hiérarchiser la preuve et mieux préparer la décision.",
    audience: "SaaS B2B, CMO, product marketing, founders",
  },
  {
    id: "editorial-strategy",
    title: "Publier plus, sans mieux peser",
    description:
      "Des pièces qui corrigent les erreurs de lecture sur le funnel, l’autorité thématique et la fonction réelle des contenus.",
    problem:
      "Le contenu s’accumule, mais le site ne gagne ni en netteté, ni en autorité, ni en utilité commerciale.",
    promise:
      "Ces pièces montrent comment corriger les erreurs de lecture sur le funnel, la structure éditoriale et la fonction réelle des contenus.",
    audience: "Head of Content, agences, SaaS B2B, consultants",
  },
  {
    id: "complex-topics",
    title: "Rendre lisible un sujet dense sans le vider",
    description:
      "Des contenus qui traduisent des sujets techniques en lecture claire, sans les simplifier à vide.",
    problem:
      "Les sujets techniques sont souvent soit simplifiés à vide, soit laissés dans un jargon inutilisable côté business.",
    promise:
      "Ces pièces montrent comment traduire un sujet complexe en lecture claire, sans trahir sa structure ni son enjeu.",
    audience: "SaaS techniques, équipes produit, founders",
  },
  {
    id: "agency-collaboration",
    title: "Produire proprement, sans friction côté agence",
    description:
      "Des pièces qui montrent comment Studio Editorial travaille en marque blanche dans un cadre net, exploitable et sans reprise inutile.",
    problem:
      "Une externalisation mal cadrée ajoute vite une couche de gestion, d’ambiguïté et de reprise inutile.",
    promise:
      "Ces pièces montrent comment Studio Editorial travaille dans un cadre net, exploitable et compatible avec une production agence réelle.",
    audience: "Agences SEO, agences content, consultants",
  },
] as const;

export type PortfolioSection = (typeof PORTFOLIO_SECTIONS)[number];
export type PortfolioSectionId = PortfolioSection["id"];