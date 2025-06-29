import React from "react";
import { Button } from "@/shared/ui/button/button";
import { MovieCredits } from "@/features/section/Movie-Credits/MovieCredits";
import { Flex, Text, Title } from "@mantine/core";

const genres: string[] = ["Ужасы", "Вампиры", "Фентези", "Детектив", "2024"];

export const MovieMeta = () => {
  return (
    <Flex direction="column" gap="lg" c="white">
      <Title order={1} c="white">
        Носферату
      </Title>
      <Flex direction="row" gap="md">
        {genres.map((item, i) => {
          return <Button text={item} bgColor="#303030" key={i} />;
        })}
      </Flex>
      <Flex direction="column" gap="lg" w="50vh">
        <Title order={4}>
          Слоган: У всех бед одно начало – сидела женщина скучала
        </Title>
        <Text fz={18}>
          Вюрцбург, 1838 год. Несмотря на дурное предчувствие жены Эллен,
          с детства одолеваемой видениями, ради продвижения по службе Томас
          отправляется на восток Богемии, чтобы закрыть сделку о продаже
          недвижимости эксцентричному старому князю Орлоку. Мужчина становится
          пленником коварного князя, который оказывается кровососущей нежитью,
          а тем временем недуг Эллен всё больше походит на одержимость.
        </Text>
      </Flex>
      <MovieCredits />
    </Flex>
  );
};
