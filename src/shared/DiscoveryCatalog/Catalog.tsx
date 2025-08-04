import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Group,
  List,
  ListItem,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { genres, personalities, years, format } from "./data";

import MovieClapper from "@/public/Catalog/Movie_Clapper.svg";
import Calendar from "@/public/Catalog/Calendar.svg";
import Man from "@/public/Catalog/man.svg";
import Vector from "@/public/Catalog/Vector.svg";

export const Catalog = () => {
  return (
    <SimpleGrid
      className="lg:max-w-[60%] sm:max-w-[100%]"
      pb={20}
      cols={{ base: 2, sm: 4 }}
      c="dark"
    >
      <Box>
        <Group gap="xs" align="center">
          <Image src={Vector} alt=""></Image>
          <Title order={4} pt={5}>
            Жанры
          </Title>
        </Group>
        <List>
          {genres.map((item, index) => {
            return (
              <ListItem key={index} pt={10} className="">
                <Link
                  className="linkUnderline"
                  href=""
                >
                  {item}
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Box>
      <Box>
        <Group gap="xs" align="center">
          <Image src={MovieClapper} alt=""></Image>
          <Title order={4} pt={5}>
            Формат
          </Title>
        </Group>
        <List>
          {format.map((item, index) => {
            return (
              <ListItem key={index} pt={10}>
                <Link
                  className="linkUnderline"
                  href=""
                >
                  {item}
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Box>
      <Box>
        <Group gap="xs" align="center">
          <Image src={Calendar} alt=""></Image>
          <Title order={4} pt={5}>
            Год выпуска
          </Title>
        </Group>
        <List>
          {years.map((item, index) => {
            return (
              <ListItem key={index} pt={10}>
                <Link
                  className="linkUnderline"
                  href=""
                >
                  {item}
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Box>
      <Box>
        <Group gap="xs" align="center">
          <Image src={Man} alt=""></Image>
          <Title order={4} pt={5}>
            Персоналии
          </Title>
        </Group>
        <List>
          {personalities.map((item, index) => {
            return (
              <ListItem key={index} pt={10}>
                <Link
                  className="linkUnderline"
                  href=""
                >
                  {item}
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </SimpleGrid>
  );
};
