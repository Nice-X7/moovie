import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Flex, Text } from "@mantine/core";
import Award from "@/public/SectionOfTriller/awards.png";
import Write from "@/public/icons/write.svg";
import Share from "@/public/icons/share.svg";

export const Awards = () => {
  return (
    <Flex gap="lg" direction="column" className="awards">
      <Image src={Award} alt="awards"/>

      <Link href="#">
        <Flex align="center" gap="xs">
          <Image src={Write} alt="write a review" />
          <Text td="underline" fw={700}>
            Написать рецензию
          </Text>
        </Flex>
      </Link>

      <Link href="#">
        <Flex align="center" gap="xs">
          <Image src={Share} alt="" />
          <Text td="underline" fw={700}>
            Поделиться
          </Text>
        </Flex>
      </Link>
      <Link href="#">
        <Text c="dimmed" fz="14">
          Нашли ошибку?
        </Text>
      </Link>
    </Flex>
  );
};
