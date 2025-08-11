import React from "react";
import { Flex, Loader } from "@mantine/core";
import { CardGrid } from "@/shared/ui/CardGrid/CardGrid";
import { MovieCard } from "@/entities/Movie/ui/MovieCard";
import { useMovieRecommendation } from "@/shared/api/hooks/useMovieImages";

export const Recommendations = () => {
  const { data, isLoading, error } = useMovieRecommendation();

  if (isLoading) return <Loader color="blue" />;
  if (error) return <div>Error</div>;

  return (
    <>
      <CardGrid title="Вам может понравиться" />
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
