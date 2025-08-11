import { NextResponse } from "next/server";

export async function GET() {
  const movies = [
    {
      image: "/movieRecommendation/recommendations/rectangle_01.png",
      name: "Тихая ночь",
      year: 2020,
      genre: "драма",
    },
    {
      image: "/movieRecommendation/recommendations/rectangle_02.png",
      name: "Планетариум",
      year: 2016,
      genre: "фэнтези",
    },
    {
      image: "/movieRecommendation/recommendations/rectangle_03.png",
      name: "Поколение вояджер",
      year: 2020,
      genre: "фантастика",
    },
    {
      image: "/movieRecommendation/recommendations/rectangle_04.png",
      name: "Король Англии",
      year: 2019,
      genre: "биография",
    },
  ];

  return NextResponse.json(movies);
}
