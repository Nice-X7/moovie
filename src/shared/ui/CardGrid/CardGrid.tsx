import React from "react";
import { StaticImageData } from "next/image";
import { Button, Flex, Group, Image, Text, Title } from "@mantine/core";

interface cardGridType {
  avatar?: string | StaticImageData;
  title: string;
  text?: string;
  buttonText?: string;
  showButton?: boolean;
}

export const CardGrid = ({
  title,
  text,
  avatar,
  buttonText,
  showButton = false,
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
            className="rounded-lg mt-[30px]"
          />
        )}
        <Group align="center">
          <Text mt={20}>{text}</Text>
          {showButton ? (
            <Button radius="lg" color="#B39C74">
              {buttonText}
            </Button>
          ) : null}
        </Group>
      </Flex>
    </Flex>
  );
};
