import { CastSection } from "@/widgets/cast-section/cast-section";
import { Header } from "@/widgets/header/header";
import { MoviePage } from "@/widgets/section/MoviePage";
import { Flex, Text } from "@mantine/core";

export function App() {
  return (
    <Flex direction="column" w="full" className="">
      <header className="bg-black px-4 sm:px-3 lg:px-20 py-4">
        <Header />
      </header>
      <section className="bg-[color:#151515] pb-[30px]">
        <MoviePage />
      </section>
      <section className="bg-[color:#FBF9F7] lg:pl-[15%] sm:pl-[3%]">
        <CastSection />
      </section>
      <footer className="bg-black p-30">
        <Text c="white" fz={30} ta="center">
          Подвал
        </Text>
      </footer>
    </Flex>
  );
}
