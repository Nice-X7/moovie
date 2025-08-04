import React from "react";
import Image, { StaticImageData } from "next/image";
import { Flex, Group, Text, Title } from "@mantine/core";
import { Button } from "../Button";

interface cardGridType {
  avatar?: StaticImageData;
  title: string;
  text?: string;
  buttonText?: string;
  showButton?: boolean;
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
    <Flex direction="column" c="#000" m="70 0 20 0" className="lg:max-w-5/10">
      <Flex align="center">
        <Title order={1} className="titled-section">
          {title}
        </Title>
      </Flex>
      <Flex gap="md" className="max-[640px]:flex-col">
        {avatar && (
          <Image
            src={avatar}
            alt={title}
            width={imageWidth}
            height={imageHeight}
            className="rounded-lg mt-[30px]"
          />
        )}
        <Group align="center">
          <Text mt={20}>{text}</Text>
          {showButton ? <Button bgColor="#B39C74" text={buttonText} /> : null}
        </Group>
      </Flex>
    </Flex>
  );
};
