import React from "react";
import { Flex, NumberFormatter, Text } from "@mantine/core";
import { SimpleGrid } from "@mantine/core";

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
    <SimpleGrid cols={2} spacing="xl" verticalSpacing="xl" mt={10}>
      {stats.map((item) => {
        if (item.label === "Бюджет" || item.label === "Сборы") {
          return (
            <Flex direction="column" gap={0} key={item.id}>
              <NumberFormatter
                prefix="$"
                value={item.value}
                thousandSeparator
                className="font-bold"
              />
              <Text c="dimmed">{item.label}</Text>
            </Flex>
          );
        } else if (item.label === "Возраст") {
          return (
            <Flex direction="column" gap={0} key={item.id}>
              <NumberFormatter
                prefix="$"
                value={item.value}
                thousandSeparator
                className="font-bold"
              />
              <Text c="dimmed">{item.value}</Text>
            </Flex>
          );
        } else {
          return (
            <Flex direction="column" gap={0} key={item.id}>
              <Text className="font-bold">{item.value}</Text>
              <Text c="dimmed">{item.label}</Text>
            </Flex>
          );
        }
      })}
    </SimpleGrid>
  );
};
