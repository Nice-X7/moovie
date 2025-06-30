import React from "react";
import { Flex } from "@mantine/core";
import { CardGrid } from "@/shared/ui/CardGrid/CardGrid";
import { MovieCard } from "@/entities/Movie/ui/MovieCard";
import { movieCards } from "./data";

export const SimilarFilms = () => {
  return (
    <>
      <CardGrid
        title="Похожие фильмы"
        text="SEO текст – По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст"
      />
      <Flex gap="lg">
        {movieCards.map((item, index) => {
          return (
            <MovieCard
              key={index}
              filmCover={item.icon}
              name={item.name}
              year={item.year}
              genre={item.genre}
            />
          );
        })}
      </Flex>
    </>
  );
};
