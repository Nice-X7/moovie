import React from "react";
import Image from "next/image";
import { Button } from "@/shared/ui/Button/button";
import { MovieStats } from "@/features/section/movie-stats/MovieStats";
import { Flex, Group, Text } from "@mantine/core";
import Vector from "@/shared/icons/Vector.svg";
import Favorite from "@/shared/icons/favorite.svg";

export const MovieActions = () => {
  return (
    <Flex direction="column" gap={14}>
      <Flex gap="xs" align="center">
        <Image src={Vector} alt="" />
        <Text fz={32} c="#838383">
          6.8
        </Text>
      </Flex>
      <Group gap="sm">
        <Button bgColor="#887A62" text="Оценить фильм" />
        <Button
          bgColor="#887A62"
          text="+"
          icon={<Image src={Favorite} alt="favorite" />}
        />
      </Group>
      <MovieStats />
    </Flex>
  );
};
