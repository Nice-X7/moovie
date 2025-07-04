import type { Metadata } from "next";
import '@mantine/core/styles.css';
import '@/styles/globals.scss'
import "@/styles/mobileAdaptive.scss"
import "@/styles/tabletAdaptive.scss"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
