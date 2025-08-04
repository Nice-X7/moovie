import React from "react";
import { StaticImageData } from "next/image";
import { CardGrid } from "@/shared/ui/CardGrid/CardGrid";
import { movieCards } from "./data";
import { Flex } from "@mantine/core";
import { MovieCard } from "@/entities/Movie/ui/MovieCard";

export const Recommendations = () => {
  return (
    <>
      <CardGrid title="Вам может понравиться" />
      <Flex gap="lg" className="max-[640px]:flex-wrap">
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
