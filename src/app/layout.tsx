import "../common/styles/mantineBase.css";
import "../common/styles/globals.scss";
import "@mantine/core/styles.css";
import "@splidejs/react-splide/css";
import type { Metadata } from "next";
import { AppProvider } from "@/common/context/AppContext";
import TransitionWrapper from "../components/animations/TransitionWrapper";
import { Roboto } from "next/font/google";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";

export const metadata: Metadata = {
  title: "SENA Portfolio",
  description: "SENA Portfolio 2024",
};

const roboto = Roboto({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={roboto.className}>
        <TransitionWrapper>
          <AppProvider>
            <MantineProvider>{children}</MantineProvider>
          </AppProvider>
        </TransitionWrapper>
      </body>
    </html>
  );
}
