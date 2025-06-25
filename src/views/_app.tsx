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
      <footer className="bg-black p-30">
        <Text className="bg-black text-white" fz={30} ta="center" c="#fff">
          Подвал
        </Text>
      </footer>
    </Flex>
  );
}