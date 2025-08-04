import React from "react";
import Image, { StaticImageData } from "next/image";
import { Flex, Text } from "@mantine/core";

interface MovieCardProps {
  filmCover: StaticImageData;
  name: string;
  year: number;
  genre: string;
}

export const MovieCard = ({ filmCover, name, year, genre }: MovieCardProps) => {
  return (
    <Flex gap="md" direction="column" w="45%">
      <Image src={filmCover} alt="film" />
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
