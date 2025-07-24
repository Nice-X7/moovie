import React from "react";
import Image from "next/image";
import { Flex, Group, Text } from "@mantine/core";
import { Button } from "@/shared/ui/Button";
import Favorite from "@/shared/icons/favorite.svg";
import Vector from "@/shared/icons/Vector.svg";

export const Raiting = () => {
  return (
    <Flex gap="lg" className="flex-col max-[640px]:flex-row sm:flex-col">
      <Flex gap="xs" align="center" >
        <Image src={Vector} alt="" />
        <Text fz={32} c="#838383">
          6.8
        </Text>
      </Flex>
      <Group gap="sm">
        <Button bgColor="#887A62" h="30px" text="Оценить фильм" />
        <Button
        h="30px"
          bgColor="#887A62"
          text="+"
          icon={<Image src={Favorite} alt="favorite" />}
        />
      </Group>
    </Flex>
  );
};
