import React from "react";
import Image, { StaticImageData } from "next/image";
import { Flex, Group, Text, Title } from "@mantine/core";
import { Button } from "../Button";

interface cardGridType {
  avatar?: StaticImageData;
  title: string;
  text?: string;
  buttonText?: string
  showButton?: boolean
  imageWidth?: number;
  imageHeight?: number;
}

export const CardGrid = ({
  title,
  text,
  avatar,
  buttonText,
  showButton = false,
  imageHeight,
  imageWidth,
}: cardGridType) => {
  return (
    <Flex direction="column" c="#000" m="40 0 20 0" className="max-w-5/10">
      <Flex align="center">
        <Title order={1} className="titled-section">
          {title}
        </Title>
      </Flex>
      <Flex gap="md" align="center">
        {avatar && (
          <Image
            src={avatar}
            alt={title}
            width={imageWidth}
            height={imageHeight}
            className="rounded-lg"
          />
        )}
        <Group pl={20} align="center" >
          <Text mt={30} >
            {text}
          </Text>
          {showButton ? <Button bgColor="#B39C74" text={buttonText}/> : null}
        </Group>
      </Flex>
    </Flex>
  );
};
