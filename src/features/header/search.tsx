import React from "react";
import Image from "next/image";
import { Button, Input } from "@mantine/core";
import { IconSearch } from '@tabler/icons-react';

export const Search = () => {
  return (
    <>
      <Button className="search-button"  color="black" radius="xl">
        <IconSearch stroke={2}/>
      </Button>
      <Input
        placeholder="Введите запрос"
        size="md"
        variant="filled"
        classNames={{ input: "search" }}
        rightSection={<IconSearch stroke={2} className="search-icon"/>}
      />
    </>
  );
};
