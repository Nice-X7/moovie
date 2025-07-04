import React from "react";
import Image from "next/image";
import { Flex, Text } from "@mantine/core";
import { Button } from "@/shared/ui/Button";
import TrillerImage from "@/public/SectionOfTriller/triller.png";
import Play from "@/shared/icons/play.svg";

export const Triller = () => {
  return (
    <div className="relative inline-block mt-[10px]">
      <Image alt="triller" src={TrillerImage} />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="mb-[30px]">
          <Button
            bgColor="#303030"
            h="30px"
            icon={<Image src={Play} alt="play" width={10} height={20} />}
          />
        </div>
      </div>
      <Flex c="white" justify="space-between" mt="sm">
        <Text fw={600}>Трейлер №1</Text>
        <Text fw={600}>2 мин</Text>
      </Flex>
    </div>
  );
};