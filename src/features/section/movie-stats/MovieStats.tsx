import React from "react";
import Image from "next/image";
import { Flex, NumberFormatter, Text, SimpleGrid } from "@mantine/core";
import Awards from "@/public/awards.png";
import Write from "@/shared/ui/icons/write.svg";
import Share from "@/shared/ui/icons/share.svg";
import Link from "next/link";

interface statsType {
  label: string;
  value: string | number;
  id: number;
}

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

export const MovieStats = () => {
  return (
    <Flex direction="column" gap="md">
      <SimpleGrid cols={2} spacing="xl" verticalSpacing="xl" mt={10}>
        {stats.map((item) => {
          if (item.label === "Бюджет" || item.label === "Сборы") {
            return (
              <Flex direction="column" gap={0} key={item.id}>
                <NumberFormatter
                  prefix="$"
                  value={item.value}
                  thousandSeparator
                  className="text-xl font-bold"
                />
                <Text c="dimmed">{item.label}</Text>
              </Flex>
            );
          } else if (item.label === "Возраст") {
            return (
              <Flex direction="column" gap={0} key={item.id}>
                <NumberFormatter
                  suffix="+"
                  value={item.value}
                  thousandSeparator
                  className="text-xl font-bold"
                />
                <Text c="dimmed">{item.label}</Text>
              </Flex>
            );
          } else {
            return (
              <Flex direction="column" gap={0} key={item.id}>
                <Text fw={700} size="xl">
                  {item.value}
                </Text>
                <Text c="dimmed">{item.label}</Text>
              </Flex>
            );
          }
        })}
      </SimpleGrid>
      <Image src={Awards} alt="awards" />

      <Link href="#">
        <Flex align="center" gap="xs">
          <Image src={Write} alt="write a review" />
          <Text td="underline" fw={700}>
            Написать рецензию
          </Text>
        </Flex>
      </Link>

      <Link href="#">
        <Flex align="center" gap="xs">
          <Image src={Share} alt="" />
          <Text td="underline" fw={700}>
            Поделиться
          </Text>
        </Flex>
      </Link>
      <Link href="#">
        <Text c="dimmed">Нашли ошибку?</Text>
      </Link>
    </Flex>
  );
};
