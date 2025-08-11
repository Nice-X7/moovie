import React from "react";
import { Flex, Loader } from "@mantine/core";
import { CardGrid } from "@/shared/ui/CardGrid/CardGrid";
import { MovieCard } from "@/entities/Movie/ui/MovieCard";
import { useSimilarFilms } from "@/shared/api/hooks/useMovieImages";

export const SimilarFilms = () => {
  const { data, isLoading, error } = useSimilarFilms();

  if (isLoading) return <Loader color="blue" />;
  if (error) return <div>Error</div>;

  return (
    <>
      <CardGrid
        title="Похожие фильмы"
        text="SEO текст – По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст"
      />
      <Flex gap="lg" className="max-[640px]:flex-wrap lg:w-[55%]">
        {data?.map((item, index) => {
          return (
            <MovieCard
              width="80%"
              height="90%"
              key={index}
              image={item.image}
              name={item.name}
              year={item.year}
              genre={item.genre}
            />
          );
        })}
      </Flex>
    </>
  );
};
