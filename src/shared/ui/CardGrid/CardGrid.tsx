import { Flex, Group, Text, Title } from "@mantine/core";
import Image from "next/image";
import React from "react";

interface cardGridType {
  avatar?: string;
  title: string;
  text?: string;
  imageWidth?: number;
  imageHeight?: number;
}

export const CardGrid = ({ title, text, avatar, imageHeight, imageWidth }: cardGridType) => {
  return (
    <Flex direction="column" c="#000" m="40 0 20 0" className="max-w-5/10">
      <Flex align="center">
        <Title order={1} className="titled-section">
          {title}
        </Title>
      </Flex>
      <Group>
        {avatar && (
          <Image
            src={avatar}
            alt={title}
            width={imageWidth}
            height={imageHeight}
            className="rounded-lg"
          />
        )}
        <Text mt={30} ml={avatar ? "30" : ""}>{text}</Text>
      </Group>
    </Flex>
  );
};
