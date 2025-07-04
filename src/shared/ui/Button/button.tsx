import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import React from "react";
import { Flex } from "@mantine/core";

type ButtonProps = {
  text?: string;
  icon?: React.ReactNode;
  p?: string
  w?: string
  h?: string
  bgColor: "#887A62" | "#303030" | "#B39C74";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  text,
  icon,
  w,
  h,
  p,
  bgColor = "#887A62",
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "text-white px-4 text-sm rounded-3xl transition duration-200"
      )}
      style={{ backgroundColor: bgColor, height: h, width: w }}
      {...rest}
    >
      <Flex gap='xs' align="center" p={p}>
        {text}
        {icon}
      </Flex>
    </button>
  );
};
