import React from "react";
import { MovieCredits } from "@/features/section/Credits/MovieCredits";
import { Button, Flex, Text, Title } from "@mantine/core";
import { Raiting } from "@/entities/Movie/Raiting/Raiting";

const genres: string[] = ["Ужасы", "Вампиры", "Фентези", "Детектив", "2024"];

export const MovieMeta = () => {
  return (
    <Flex direction="column" gap="lg" c="white">
      <Title order={1} c="white">
        Носферату
      </Title>
      <Flex className="genres-container gap-x-[3px] flex flex-wrap max-[640px]:w-[350px]">
        {genres.map((item, i) => {
          const isLast = i === genres.length - 1;
          return (
            <Button
              key={i}
              color="dark"
              radius={20}
              h={30}
              className={
                isLast
                  ? "genres-buttons"
                  : "genres-buttons"
              }
            >
              {item}
            </Button>
          );
        })}
      </Flex>
      <div className="tablet-raiting">
        <Raiting />
      </div>
      <Flex direction="column" gap="lg" className="w-[50vh] max-[640px]:w-[42vh]">
        <Title order={4} className="textTitle max-[640px]:w-[300px]">
          Слоган: У всех бед одно начало – сидела женщина скучала
        </Title>
        <Text className="textMedia max-w-xs">
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
