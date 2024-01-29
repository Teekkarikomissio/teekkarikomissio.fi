import { StaticImageData } from "next/image";

export type NavigationLabels = Record<string, string>;

export interface LanguageSpecificPaths {
  fi: FinnishPaths;
  sv: SwedishPaths;
}

export type FinnishPaths = Record<string, string>;
export type SwedishPaths = Record<string, string>;

export type GuildCardProps = {
  img: StaticImageData;
  href: string;
  heading: string;
  description: string;
  founded: string;
};

export type PartnerCard = {
  img: string;
  href: string;
  alt: string;
};

export type BoardCard = {
  img: string;
  name: string;
  position: string;
  responsibilities?: string;
  contact: string;
  contact2?: string;
}