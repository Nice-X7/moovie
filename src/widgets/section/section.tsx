import React from "react";
import Image from "next/image";
import { Flex } from "@mantine/core";
import { Tabs } from "@/features/section/Tabs";
import { Triller } from "./triller";
import { MovieMeta } from "@/widgets/section/MovieMeta";
import { MovieActions } from "@/features/section/movie-actions/movieActions";
import Poster from "@/public/SectionOfTriller/poster.png";

export const Section = () => {
  return (
    <>
      <Tabs />
      <Flex direction="column" align="center" gap="lg" pb={40}>
        <Flex gap="lg">
          <Flex direction="column" align="center">
            <Image alt="cover" src={Poster} className="w-260px h-360px" />
            <Triller />
          </Flex>
          <MovieMeta />
          <MovieActions />
        </Flex>
      </Flex>
    </>
  );
};
