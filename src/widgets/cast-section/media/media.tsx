import React from "react";
import { Box, Button, Flex, Image, Loader, Text } from "@mantine/core";
import { CardGrid } from "@/shared/ui/CardGrid/CardGrid";
import { useMovieImages } from "@/shared/api/hooks/useMovieImages";

export const Media = () => {
  const { data, isLoading, error } = useMovieImages();

  if (isLoading) return <Loader color="blue" />;
  if (error) return <div>Error</div>;

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
        <Image
          src={data.photo_1}
          alt=""
          className="col-span-3 max-[640px]:col-span-2 w-full object-cover"
        />
        <Image src={data.photo_2} alt="" className="w-full object-cover" />
        <Image src={data.photo_3} alt="" className="w-full object-cover" />
        <Image
          src={data.photo_4}
          alt=""
          className="w-full object-cover max-[640px]:hidden"
        />
      </div>
    </Box>
  );
};
