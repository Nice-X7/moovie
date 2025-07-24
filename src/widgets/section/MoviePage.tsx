import React from "react";
import { Flex } from "@mantine/core";
import { MovieTabs } from "@/features/section/Tabs";
import { Triller } from "./triller";
import { MovieMeta } from "@/widgets/section/MovieMeta";
import { MovieActions } from "@/features/section/Actions/movieActions";

export const MoviePage = () => {
  return (
    <Flex direction="column" gap="md" align="center" className="px-3">
      <MovieTabs />
      <Flex className="max-[768px]:flex-col max-[1024px]:mt-[20px]" gap={30}>
        <Triller />
        <Flex className="max-[1024px]:flex-col" gap={30}>
          <MovieMeta />
          <MovieActions />
        </Flex>
      </Flex>
    </Flex>
  );
};
