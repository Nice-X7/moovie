import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    {
      image: "/movieRecommendation/similarFilms/rectangle01.png",
      name: "Носферату симфония ужаса",
      year: 1922,
      genre: "ужасы",
    },
    {
      image: "/movieRecommendation/similarFilms/rectangle02.png",
      name: "Дракула",
      year: 1922,
      genre: "ужасы",
    },
    {
      image: "/movieRecommendation/similarFilms/rectangle03.png",
      name: "Дракула",
      year: 1922,
      genre: "ужасы",
    },
    {
      image: "/movieRecommendation/similarFilms/rectangle04.png",
      name: "Дракула",
      year: 1922,
      genre: "ужасы",
    },
  ];

  return NextResponse.json(data);
}
