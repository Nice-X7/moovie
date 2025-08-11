import React from "react";
import { Flex, Image, Text } from "@mantine/core";

interface MovieCardProps {
  image: string;
  name: string;
  year: number;
  genre: string;
  width: string
  height: string
}

export const MovieCard = ({ image, name, year, genre, width, height }: MovieCardProps) => {
  return (
    <Flex gap="md" direction="column" w="45%">
      <Image w={width} h={height} src={image} alt="film" />
      <Flex direction="column" w="max" className="w-fit">
        <Text fw={700} c="dark" fz={18} style={{ wordBreak: "break-word" }}>
          {name}
        </Text>
        <Text
          c="dimmed"
          fz={14}
          style={{ wordBreak: "break-word" }}
        >{`${year}, ${genre}`}</Text>
      </Flex>
    </Flex>
  );
};
