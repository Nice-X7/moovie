import { CastSection } from "@/widgets/cast-section/cast-section";
import { Header } from "@/widgets/header/header";
import { Section } from "@/widgets/section/section";
import { Flex, Text } from "@mantine/core";

export function App() {
  return (
    <Flex direction="column">
      <header className="bg-black">
        <Header />
      </header>
      <section className="bg-[color:#151515]">
        <Section />
      </section>
      <section className="bg-[color:#FBF9F7] pl-[15%]">
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