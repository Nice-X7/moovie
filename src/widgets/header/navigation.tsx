import React from "react";
import Image from "next/image";
import Link from "next/link";
import GroupSvg from "@/shared/icons/group.svg";
import { Button, Flex, List, Menu } from "@mantine/core";

interface HeaderLinkType {
  id: number;
  text: string;
  href: string;
}

const headerLinks: HeaderLinkType[] = [
  { id: 1, text: "Фильмы", href: "films" },
  { id: 2, text: "Сериалы", href: "series" },
  { id: 3, text: "Люди", href: "people" },
  { id: 4, text: "Избранное", href: "favorites" },
];

export const Navigation = () => {
  return (
    <Flex gap="md" align="center">
      <Button
        color="#303030"
        radius="xl"
        px={0}
        w={45}
        h={45}
        justify="center"
      >
        <Image src={GroupSvg} alt="Logo" width={22} height={22} />
      </Button>

      <List listStyleType="none" className="nav-list">
        <Flex align="center" gap="lg">
          {headerLinks.map((item) => (
            <li key={item.id}>
              <Link href={item.href} passHref>
                {item.text}
              </Link>
            </li>
          ))}
        </Flex>
      </List>
    </Flex>
  );
};
