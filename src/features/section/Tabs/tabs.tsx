import { Flex, List } from "@mantine/core";
import Link from "next/link";
import React from "react";

const details: string[] = [
  "Актеры",
  "Рецензии",
  "Награды",
  "FAQ",
  "Саундтрек",
  "Фото",
  "Видео",
];

export const Tabs = () => {
  return (
    <Flex
      className="hidden
    sm:mr-[40px]
    shrink-0
    lg:mr-[35vh]"
      justify="flex-end"
      mt={10}
    >
      <List>
        <Flex>
          {details.map((item, index, array) => (
            <li key={item}>
              <div className="flex items-center text-gray-400">
                <Link href="#">{item}</Link>
                {index !== array.length - 1 && (
                  <span className="mx-2 w-1 h-1 bg-gray-400 rounded-full" />
                )}
              </div>
            </li>
          ))}
        </Flex>
      </List>
    </Flex>
  );
};
