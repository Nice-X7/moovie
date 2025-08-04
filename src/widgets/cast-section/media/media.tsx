import React from "react";
import { Box, Button, Flex, Text } from "@mantine/core";
import { CardGrid } from "@/shared/ui/CardGrid/CardGrid";
import Image from "next/image";

import Rectangle_1 from "@/public/film-gallery-moments/Rectangle 60.png";
import Rectangle_2 from "@/public/film-gallery-moments/Rectangle 56.png";
import Rectangle_3 from "@/public/film-gallery-moments/Rectangle 57.png";
import Rectangle_4 from "@/public/film-gallery-moments/Rectangle 58.png";

export const Media = () => {
  return (
    <Box>
      <CardGrid
        title="Медиа"
        text="SEO текст – По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст"
      />
      <Flex wrap="wrap" align="center" gap="xs" pb={20}>
        <Text c="dark">Смотреть все медиа:</Text>

        <Button radius="lg" color="#B39C74">
          Фотографии
        </Button>
        <Button radius="lg" color="#B39C74">
          Постеры
        </Button>
        <Button radius="lg" color="#B39C74">
          Трейлеры и тизеры
        </Button>
      </Flex>
      <div className="w-full lg:w-1/2 grid grid-cols-3 max-[640px]:grid-cols-2 gap-3">
        {/* верхняя широкая */}
        <Image
          src={Rectangle_1}
          alt=""
          className="col-span-3 max-[640px]:col-span-2 w-full object-cover"
        />

        {/* три снизу: автоматически занимают по 1 колонке и масштабируются */}
        <Image src={Rectangle_2} alt="" className="w-full object-cover" />
        <Image src={Rectangle_3} alt="" className="w-full object-cover" />
        <Image
          src={Rectangle_4}
          alt=""
          className="w-full object-cover max-[640px]:hidden"
        />
      </div>
    </Box>
  );
};
