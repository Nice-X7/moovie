import React from "react";
import { Box, ScrollArea } from "@mantine/core";
import { CardGrid } from "@/shared/ui/CardGrid/CardGrid";
import { ActorCard } from "@/entities/Movie/ui/ActorCard";
import { Catalog } from "@/shared/DiscoveryCatalog/Catalog";
import { Recommendations } from "./Recommendations/Recommendations";
import { SimilarFilms } from "./SimilarFilms/SimilarFilms";
import { Director } from "./Director/Director";
import { Media } from "./media/media";

export const CastSection: React.FC = () => (
  <>
    <Box>
      <CardGrid
        title="В главных ролях"
        text="SEO текст – По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст"
      />
      <ScrollArea
        scrollbarSize={10}
        pb={20}
        className="scrollbar lg:max-w-[55%] min-w-0 md:flex-none w-full pr-[30px]"
      >
        <ActorCard />
      </ScrollArea>
    </Box>
    <Media />
    <Director />
    <SimilarFilms />
    <Recommendations />
    <Box>
      <CardGrid title="Откройте для себя больше" />
      <Catalog />
    </Box>
  </>
);
