import React from "react";
import Image from "next/image";
import { Button } from "@/shared/ui/button/button";
import { Flex, Text } from "@mantine/core";
import Vector from "@/shared/ui/icons/Vector.svg";
import Favorite from "@/shared/ui/icons/favorite.svg";
import { MovieStats } from "@/features/section/movie-stats/MovieStats";

export const MovieActions = () => {
  return (
    <Flex direction="column" gap={14}>
      <Flex gap="xs" align="center">
        <Image src={Vector} alt="" />
        <Text fz={32} c="#838383">
          6.8
        </Text>
      </Flex>
      <Flex gap="sm">
        <Button bgColor="#887A62" text="Оценить фильм"></Button>
        <Button
          bgColor="#887A62"
          text="+"
          icon={<Image src={Favorite} alt="favorite" />}
        />
      </Flex>
      <MovieStats />
    </Flex>
  );
};
