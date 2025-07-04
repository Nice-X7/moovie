import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Flex, Text, Title } from "@mantine/core";
import { Navigation } from "./navigation";
import { Search } from "@/features/header/search";
import IconAccount from "@/shared/icons/IconAccount.svg";
import arrow from "@/public/Polygon 1.svg";

export const Header = () => {
  return (
    <Flex
      className="header-group"
      justify="center"
      align="center"
      direction="row"
      c="#fff"
      p={"15px 0"}
    >
      <Title fw={400} c="#875959" className="Logo">
        Логотип
      </Title>

      <div className="nav-wrapper">
        <Navigation />
      </div>

      <Flex className="ui-group" align="center" gap="sm">
        <Flex gap="md" align="center" className="buttons-wrapper">
          <Link href="#" passHref>
            <Flex
              justify="row"
              align="center"
              direction="row"
              w={70}
              gap="xs"
            >
              <Image src={IconAccount} alt="logo" width={15} height={15} />
              <Text>Войти</Text>
            </Flex>
          </Link>
          <Button h="30px" color="#303030" radius="xl">
            RU{<Image src={arrow} alt="" />}
          </Button>
        </Flex>

        <div className="search-wrapper">
          <Search />
        </div>
      </Flex>
    </Flex>
  );
};
