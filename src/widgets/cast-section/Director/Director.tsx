import React from "react";
import { Flex, Loader } from "@mantine/core";
import { CardGrid } from "@/shared/ui/CardGrid/CardGrid";
import { MovieCard } from "@/entities/Movie/ui/MovieCard";
import { useDirectorFilms } from "@/shared/api/hooks/useMovieImages";

export const Director = () => {
  const { data, isLoading, error } = useDirectorFilms();

  if (isLoading) return <Loader color="blue" />;
  if (error) return <div>Error</div>;

  return (
    <>
      <CardGrid
        title="Режиссёр"
        showButton={true}
        buttonText="Все работы режиссера"
        avatar={data?.aboutDirector.image}
        text={data?.aboutDirector.text}
      />
      <Flex gap="lg" className="md:mt-[40px] max-[640px]:flex-wrap lg:w-[55%]">
        {data?.directorWorks.map((item, index) => {
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
