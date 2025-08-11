import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    poster: "/sectionOfTriller/poster.png",
    triller: "/sectionOfTriller/triller.png",
  };

  return NextResponse.json(data);
}