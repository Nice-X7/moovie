import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ActionIcon, Flex, Input, Text, Title, Tooltip } from "@mantine/core";
import { IconLanguage } from "@tabler/icons-react";
import IconAccount from "@/shared/icons/IconAccount.svg";
import magnifyingGlass from "@/shared/icons/magnifyingGlass.svg";
import { Navigation } from "./navigation";

export const Header = () => {
  return (
    <Flex
      gap="25vh"
      justify="center"
      align="center"
      direction="row"
      c="#fff"
      p={"15 0 15 0"}
    >
      <Title order={1} fw={400} c="#875959">
        Логотип
      </Title>

      <Navigation />

      <Flex gap={25}>
        <Link href="#" passHref>
          <Flex justify="center" align="center" direction="row" gap="xs" mt={9}>
            <Image src={IconAccount} alt="logo" width={15} height={15} />
            <Text>Войти</Text>
          </Flex>
        </Link>

        <Tooltip label="Сменить язык">
          <ActionIcon variant="subtle" size="lg" aria-label="Язык" mt={5}>
            <IconLanguage size={20} color="#fff" />
          </ActionIcon>
        </Tooltip>

        <Input
          placeholder="Введите запрос"
          size="md"
          radius="md"
          variant="filled"
          width="2000px"
          rightSection={
            <Image src={magnifyingGlass} alt="" width={16} height={16} />
          }
        />
      </Flex>
    </Flex>
  );
};