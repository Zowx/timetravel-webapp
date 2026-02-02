import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TimeTravel Agency | Voyagez dans le temps",
  description:
    "Decouvrez nos destinations temporelles exclusives : Paris 1889, le Cretace, Florence 1504. Votre aventure a travers le temps commence ici.",
  keywords:
    "voyage temporel, time travel, Paris 1889, Cretace, Florence Renaissance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} overflow-x-hidden`}>{children}</body>
    </html>
  );
}
