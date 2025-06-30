import { StaticImageData } from "next/image";

export type movieCardsType = {
  icon: StaticImageData;
  name: string;
  year: number;
  genre: string;
};