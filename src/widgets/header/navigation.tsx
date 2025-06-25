import React from "react";
import Image from "next/image";
import Link from "next/link";
import groupSvg from "@/shared/ui/icons/Group 67.svg";
import { Flex, List } from "@mantine/core";

interface HeaderLinkType {
  id: number;
  icon?: React.ReactNode | null;
  text: string;
  href: string;
}

const headerLinks: HeaderLinkType[] = [
  {
    id: 1,
    icon: <Image src={groupSvg} alt="Logo" width={20} height={20} />,
    text: "",
    href: "#",
  },
  { id: 2, text: "Фильмы", href: "films" },
  { id: 3, text: "Сериалы", href: "series" },
  { id: 4, text: "Люди", href: "people" },
  { id: 5, text: "Избранное", href: "favorites" },
];

export const Navigation = () => {
  return (
    <>
      <List listStyleType="none">
        <Flex align='center' gap='lg'>
          {headerLinks.map((item) => (
            <li key={item.id}>
              <Link href={item.href} passHref>
                {item.icon || item.text}
              </Link>
            </li>
          ))}
        </Flex>
      </List>
    </>
  );
};