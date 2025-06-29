import React from "react";
import { Flex } from "@mantine/core";
import { Tabs } from "../../features/section/tabs";
import Image from "next/image";
import Poster from "@/public/poster.png";
import { Triller } from "./triller";
import { MovieMeta } from "@/widgets/section/MovieMeta";
import { MovieActions } from "@/features/section/movie-actions/movieActions";

export const Section = () => {
  return (
    <Flex direction="column" align="center" gap="lg" pb={40}>
      <Tabs />

      <Flex gap="lg">
        <Flex direction="column" align="center">
          <Image alt="cover" src={Poster} className="w-260px h-360px" />
          <Triller />
        </Flex>
        <MovieMeta />
        <MovieActions />
      </Flex>
    </Flex>
  );
};
