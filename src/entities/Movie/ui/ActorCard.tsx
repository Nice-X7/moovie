import React from "react";
import { StaticImageData } from "next/image";
import { Box, Flex, Image, Loader, Text } from "@mantine/core";
import { useActor } from "@/shared/api/hooks/useMovieImages";

type actorsType = {
  name: string;
  roleName: string;
  role?: string;
  image: StaticImageData;
};

export const ActorCard: React.FC = () => {
  const { data, isLoading, error } = useActor() as {
    data: actorsType[] | undefined;
    isLoading: boolean;
    error: unknown;
  };

  if (isLoading) return <Loader color="blue" />;
  if (error) return <div>Error</div>;
  return (
    <Flex gap="lg" style={{ display: "flex" }}>
      {data?.slice(0, 10).map((actor, index) => (
        <Box
          key={index}
          style={{
            flexShrink: 0,
            overflow: "hidden",
            boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
          }}
          pb={20}
          className="border-2 border-[#EADEC9] rounded-lg max-[640px]:w-[100px]"
        >
          <Image
            src={actor.image}
            alt={actor.name}
            height={130}
            width={160}
            style={{
              borderRadius: "8px",
              objectFit: "cover",
            }}
            className="max-[640px]:w-[100px] max-[640px]:h-[120px]"
          />
          <Box pl={8} className="inline-block max-w-[160px] sm:max-w-[120px]">
            <Text
              size="sm"
              fw={700}
              mt="sm"
              c="dark"
              style={{ wordBreak: "break-word" }}
              className="actor_name"
            >
              {actor.name}
            </Text>
            <Text
              size="xs"
              mt="xs"
              c="dark"
              style={{ wordBreak: "break-word" }}
              className="role_name"
            >
              {actor.roleName}
            </Text>
          </Box>
        </Box>
      ))}
    </Flex>
  );
};

// {actors.map((actor, index) => (
//   <Box
//     key={index}
//     style={{
//       flexShrink: 0,
//       overflow: "hidden",
//       boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
//     }}
//     pb={20}
//     className="border-2 border-[#EADEC9] rounded-lg max-[640px]:w-[100px]"
//   >
//     <Image
//       src={actor.image}
//       alt={actor.name}
//       height={130}
//       width={160}
//       style={{
//         borderRadius: "8px",
//         objectFit: "cover",
//       }}
//       className="max-[640px]:w-[100px] max-[640px]:h-[120px]"
//     />
//     <Box pl={8} className="inline-block max-w-[160px] sm:max-w-[120px]">
//       <Text
//         size="sm"
//         fw={700}
//         mt="sm"
//         c="dark"
//         style={{ wordBreak: "break-word" }}
//         className="actor_name"
//       >
//         {actor.name}
//       </Text>
//       <Text
//         size="xs"
//         mt="xs"
//         c="dark"
//         style={{ wordBreak: "break-word" }}
//         className="role_name"
//       >
//         {actor.roleName}
//       </Text>
//     </Box>
//   </Box>
// ))}
