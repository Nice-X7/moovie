import React from "react";
import { Flex } from "@mantine/core";
import { MovieStats } from "@/features/section/Stats/MovieStats";
import { Raiting } from "@/entities/Movie/Raiting/Raiting";

export const MovieActions = () => {
  return (
    <Flex direction="column" gap={14}>
      <div className="desktop-raiting">
        <Raiting />
      </div>
      <MovieStats />
    </Flex>
  );
};
