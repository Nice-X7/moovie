import React from "react";
import { movieCards } from "./data";
import { CardGrid } from "@/shared/ui/CardGrid/CardGrid";
import { MovieCard } from "@/entities/Movie/ui/MovieCard";
import { Flex } from "@mantine/core";
import image from "@/public/AssetsOfPeople/image.png";

export const Director = () => {
  return (
    <>
      <CardGrid
        title="Режиссёр"
        showButton={true}
        buttonText="Все работы режиссера"
        avatar={image}
        text="Режиссёром фильма «Носферату» (2024) является Роберт Эггерс, известный своим уникальным стилем, сочетающим историческую точность и напряжённую атмосферу. Его лучшие работы включают ужасы «Ведьма» (2015), психологический триллер «Маяк» (2019) и исторический эпик «Северянин» (2022)."
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
