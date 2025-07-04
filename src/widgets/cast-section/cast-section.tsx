import React from "react";
import Image from "next/image";
import { CardGrid } from "@/shared/ui/CardGrid/CardGrid";
import { Box, Flex, ScrollArea } from "@mantine/core";
import { ActorCard } from "@/entities/Movie/ui/ActorCard";
import { Catalog } from "@/shared/DiscoveryCatalog/Catalog";
import { Recommendations } from "./Recommendations/Recommendations";
import { SimilarFilms } from "./SimilarFilms/SimilarFilms";
import { Director } from "./Director/Director";

import Vector from "@/public/Catalog/Vector.svg"
import Rectangle_1 from "@/public/film-gallery-moments/Rectangle 60.png";
import Rectangle_2 from "@/public/film-gallery-moments/Rectangle 56.png";
import Rectangle_3 from "@/public/film-gallery-moments/Rectangle 57.png";
import Rectangle_4 from "@/public/film-gallery-moments/Rectangle 58.png";

export const CastSection = () => {
  return (
    <>
      <Box>
        <CardGrid
          title="В главных ролях"
          text="SEO текст – По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст"
        />
        <ScrollArea scrollbarSize={10} w="48%" pb={20} className="scrollbar">
          <ActorCard />
        </ScrollArea>
      </Box>

      <Box>
        <CardGrid
          title="Медиа"
          text="SEO текст – По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст"
        />
        <Flex wrap="wrap" w="50%" gap="xs">
          <Image src={Rectangle_1} alt="" />
          <Image src={Rectangle_2} alt="" />
          <Image src={Rectangle_3} alt="" />
          <Image src={Rectangle_4} alt="" />
        </Flex>
      </Box>
      <Director />
      <SimilarFilms />
      <Recommendations />
      <Box>
        <CardGrid title="Откройте для себя больше" />
        {/* <Catalog title='Жанры' icon={Vector} link="#"/> */}
      </Box>
    </>
  );
};
