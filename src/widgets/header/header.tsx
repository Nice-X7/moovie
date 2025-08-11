import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Flex, Text, Title } from "@mantine/core";
import { Navigation } from "./navigation";
import { Search } from "@/features/header/search";
import IconAccount from "#/public/icons/IconAccount.svg";
import arrow from "#/public/Polygon 1.svg";

export const Header = () => {
  return (
    <Flex
      className="w-full justify-between items-center max-w-full"
      direction="row"
      gap="lg"
      c="#fff"
    >
      <Title fw={400} c="#875959" className="Logo">
        Логотип
      </Title>

        <div className="max-[640px]:order-3">
          <Navigation />
        </div>
      <Flex align="center" gap="xs" className="max-[1024px]:flex-grow min-w-[30%] justify-between">

        <Flex gap="md" align="center" className="max-[640px]:order-2 max-[1024px]:order-3">
          <Link href="#" passHref>
            <Flex justify="row" align="center" direction="row" gap="xs">
              <Image src={IconAccount} alt="logo" width={15} height={15} />
              <Text>Войти</Text>
            </Flex>
          </Link>
          <div className="hidden sm:inline">
            <Button h="30px" color="#303030" radius="xl">
              RU <Image src={arrow} alt="" className="ml-[5px]"/>
            </Button>
          </div>
        </Flex>

        <div className="max-[640px]:order-1 max-[1024px]:order-2 flex-grow max-w-[600px]">
          <Search />
        </div>
      </Flex>
    </Flex>
  );
};
