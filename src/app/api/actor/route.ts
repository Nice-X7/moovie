import { NextResponse } from "next/server";

export async function GET() {
  const actor = {
    image: "/assetsOfPeople/actor.png",
    name: "Арден Таймер-Дженсин",
    roleName: "Friedrich Harding"
  }

  const data = Array(10).fill(actor);
  return NextResponse.json(data);
}