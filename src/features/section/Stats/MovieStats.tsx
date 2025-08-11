import React from "react";
import { Flex, NumberFormatter, Text, SimpleGrid, Loader } from "@mantine/core";
import { Awards } from "@/entities/Movie/Raiting/awards";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

type statsType = {
  label: string;
  value: string | number;
  id: number;
}

const fetchMovieStats = async (): Promise<statsType[]> => {
  const { data } = await axios.get("/api/movieActions");
  return data;
};

export const useMovieStats = () => {
  return useQuery({
    queryKey: ["movieActions"],
    queryFn: fetchMovieStats,
  });
};

export const MovieStats = () => {
  const { data, isLoading, isError } = useMovieStats();

  if (isLoading) return "";
  if (isError || !data) return <p>Ошибка загрузки</p>;

  return (
    <Flex direction="column" gap="md">
      <SimpleGrid cols={2} spacing="xl" verticalSpacing="xl" w={330} mt={10}>
        {data.map((item) => {
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
      <div className="sm:hidden">
        <Awards />
      </div>
    </Flex>
  );
};
