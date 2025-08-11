import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    photo_1: "/film-gallery-moments/Rectangle 60.png",
    photo_2: "/film-gallery-moments/Rectangle 56.png",
    photo_3: "/film-gallery-moments/Rectangle 57.png",
    photo_4: "/film-gallery-moments/Rectangle 58.png",
  };

  return NextResponse.json(data)
}
