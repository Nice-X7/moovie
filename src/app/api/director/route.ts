import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    directorWorks: [
      {
        image: "/movieRecommendation/director/rectangle61.png",
        name: "Маяк",
        year: 2019,
        genre: "триллер",
      },
      {
        image: "/movieRecommendation/director/rectangle62.png",
        name: "Северянин",
        year: 2022,
        genre: "исторический эпик",
      },
      {
        image: "/movieRecommendation/director/rectangle63.png",
        name: "Ведьма",
        year: 2015,
        genre: "ужасы",
      },
      {
        image: "/movieRecommendation/director/rectangle64.png",
        name: "Носферату",
        year: 2024,
        genre: "Ужасы",
      },
    ],
    aboutDirector: {
      image: "/assetsOfPeople/director.png",
      text: "Режиссёром фильма «Носферату» (2024) является Роберт Эггерс, известный своим уникальным стилем, сочетающим историческую точность и напряжённую атмосферу. Его лучшие работы включают ужасы «Ведьма» (2015), психологический триллер «Маяк» (2019) и исторический эпик «Северянин» (2022).",
    },
  };

  return NextResponse.json(data);
}
