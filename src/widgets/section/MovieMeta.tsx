import React from "react";
import { MovieCredits } from "@/features/section/Credits/MovieCredits";
import { Button, Flex, Text, Title} from "@mantine/core";
import { Raiting } from "@/entities/Movie/Raiting/Raiting";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

type movieMetaType = {
  title: string;
  slogan: string;
  text: string;
};

const genres: string[] = ["Ужасы", "Вампиры", "Фентези", "Детектив", "2024"];

const fetchMovieMeta = async (): Promise<movieMetaType> => {
  const { data } = await axios.get("/api/movieMetaData");
  return data;
};

export const useMovieMeta = () => {
  return useQuery({
    queryKey: ["movieMeta"],
    queryFn: fetchMovieMeta,
  });
};

export const MovieMeta = () => {
  const { data, isLoading, isError } = useMovieMeta();

  if (isLoading) return "";
  if (isError || !data) return <p>Ошибка загрузки</p>;

  return (
    <Flex direction="column" gap="lg" c="white">
      <Title order={1} c="white">
        {data.title}
      </Title>
      <Flex className="genres-container gap-x-[3px] flex flex-wrap max-[640px]:w-[350px]">
        {genres.map((item, i) => {
          const isLast = i === genres.length - 1;
          return (
            <Button
              key={i}
              color="dark"
              radius={20}
              h={30}
              className={isLast ? "genres-buttons" : "genres-buttons"}
            >
              {item}
            </Button>
          );
        })}
      </Flex>
      <div className="tablet-raiting">
        <Raiting />
      </div>
      <Flex
        direction="column"
        gap="lg"
        className="w-[50vh] max-[640px]:w-[42vh]"
      >
        <Title order={4} className="textTitle max-[640px]:w-[300px]">
          {data.slogan}
        </Title>
        <Text className="textMedia max-w-xs">
          {data.text}
        </Text>
      </Flex>
      <MovieCredits />
    </Flex>
  );
};
