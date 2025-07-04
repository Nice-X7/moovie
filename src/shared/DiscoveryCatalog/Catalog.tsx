import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Box, Group, List, ListItem, SimpleGrid, Text } from "@mantine/core";

type catalogProps = {
  icon: StaticImageData;
  title: string;
  link: string;
  items: string[];
};

export const Catalog = ({ icon, items, title, link }: catalogProps) => {
  return (
    <SimpleGrid cols={4} c="dark">
      <Box>
        <Group>
          <Image src={icon} alt="" />
          <Text>{title}</Text>
        </Group>
        <List>
          {items.map((item, index) => {
            return (
              <ListItem key={index}>
                <Link href={link}>{item}</Link>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </SimpleGrid>
  );
};
