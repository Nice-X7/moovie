import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import React from "react";
import { Flex } from "@mantine/core";

type ButtonProps = {
  text?: string;
  icon?: React.ReactNode;
  bgColor: "#887A62" | "#303030" | "#B39C74";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  text,
  icon,
  bgColor = "#887A62",
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "text-white px-4 py-2 text-sm rounded-3xl transition duration-200"
      )}
      style={{ backgroundColor: bgColor }}
      {...rest}
    >
      <Flex gap='xs'>
        {text}
        {icon}
      </Flex>
    </button>
  );
};
