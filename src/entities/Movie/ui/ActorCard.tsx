import React from "react";
import Actor from "@/public/AssetsOfPeople/actor.png";
import Image, { StaticImageData } from "next/image";
import { Box, Flex, Text } from "@mantine/core";

type actorsType = {
  name: string;
  roleName: string;
  role?: string;
  image: StaticImageData;
};

const actors: actorsType[] = Array(10).fill({
  name: "Арден Таймер-Дженсин",
  roleName: "Friedrich Harding",
  role: "Главная роль",
  image: Actor,
});

export const ActorCard = () => {
  return (
    <Flex gap="md" style={{ display: "flex" }}>
      {actors.map((actor, index) => (
        <Box
          key={index}
          h={350}
          style={{
            minWidth: 150,
            flexShrink: 0,
            overflow: "hidden",
            boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
          }}
          className="border-2 border-[#EADEC9] rounded-lg overflow-hidden"
        >
          <Image
            src={actor.image}
            alt={actor.name}
            height={130}
            width={160}
            style={{
              borderRadius: "8px",
              objectFit: "cover",
            }}
          />
          <Box p={8} w={160}>
            <Text
              size="sm"
              fw={700}
              mt="sm"
              c="dark"
              fz={20}
              style={{ wordBreak: "break-word" }}
            >
              {actor.name}
            </Text>
            <Text
              size="xs"
              mt="xs"
              c="dark"
              style={{ wordBreak: "break-word" }}
            >
              {actor.roleName}
            </Text>
          </Box>
        </Box>
      ))}
    </Flex>
  );
};
