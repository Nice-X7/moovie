import React from "react";
import Image from "next/image";
import { Button, Flex, Text } from "@mantine/core";
import TrillerImage from "@/public/SectionOfTriller/triller.png";
import Play from "@/public/icons/play.svg";
import Poster from "@/public/SectionOfTriller/poster.png";
import { Awards } from "@/entities/Movie/Raiting/awards";

export const Triller = () => {
  return (
    <div className="triller_assets">
      <Flex className="md:flex-col" gap="md">
        <Image
          alt="cover"
          src={Poster}
          className="poster max-[1024px]:max-w-[220px] max-[768px]:max-w-[120px]"
        />

        <div className="relative inline-block ">
          <Image
            alt="triller"
            src={TrillerImage}
            className="triller max-[1024px]:max-w-[220px] max-[768px]:max-w-[200px]"
          />
          <div className="absolute mb-[30px] inset-0 flex items-center justify-center z-10">
            <Button variant="filled" color="dark" radius="xl">
              <Image src={Play} alt="play" width={10} height={20} />
            </Button>
          </div>
          <Flex c="white" justify="space-between" mt="sm">
            <Text fw={600}>Трейлер №1</Text>
            <Text fw={600}>2 мин</Text>
          </Flex>
        </div>
      </Flex>
      <div className="lg:hidden max-[640px]:hidden w-[220px] mt-[30px]">
        <Awards />
      </div>
    </div>
  );
};
