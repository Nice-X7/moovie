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
    <Flex gap="lg" style={{ display: "flex" }}>
      {actors.map((actor, index) => (
        <Box
          key={index}
          style={{
            flexShrink: 0,
            overflow: "hidden",
            boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
          }}
          pb={20}
          className="border-2 border-[#EADEC9] rounded-lg max-[640px]:w-[100px]"
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
            className="max-[640px]:w-[100px] max-[640px]:h-[120px]"
          />
          <Box pl={8} className="inline-block max-w-[160px] sm:max-w-[120px]">
            <Text
              size="sm"
              fw={700}
              mt="sm"
              c="dark"
              style={{ wordBreak: "break-word" }}
              className="actor_name"
            >
              {actor.name}
            </Text>
            <Text
              size="xs"
              mt="xs"
              c="dark"
              style={{ wordBreak: "break-word" }}
              className="role_name"
            >
              {actor.roleName}
            </Text>
          </Box>
        </Box>
      ))}
    </Flex>
  );
};
