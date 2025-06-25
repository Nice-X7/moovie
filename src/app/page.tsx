import { App } from "@/views/_app";
import { MantineProvider } from "@mantine/core";

export default function Home() {
  return (
    <MantineProvider>
      <App />
    </MantineProvider>
  );
}
