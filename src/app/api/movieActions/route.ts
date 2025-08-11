import { NextResponse } from "next/server";

type statsType = {
  label: string;
  value: string | number;
  id: number;
}

export async function GET() {
  const stats: statsType[] = [
    { id: 0, label: "Бюджет", value: 50000000 },
    { id: 1, label: "Сборы", value: 91741860 },
    { id: 2, label: "Премьера в мире", value: "7 ноября 2024" },
    { id: 3, label: "Страна", value: "США" },
    { id: 4, label: "Отзывов", value: 927 },
    { id: 5, label: "Оценки", value: 333 },
    { id: 6, label: "Возраст", value: 18 },
    { id: 7, label: "Время", value: "2ч 12мин" },
    { id: 8, label: "Статус", value: "Выпущено" },
    { id: 9, label: "Язык фильма", value: "Английский" },
  ];

  return NextResponse.json(stats);
}
