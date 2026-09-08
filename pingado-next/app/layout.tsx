import { Petemoss, Cormorant_Garamond, Roboto_Flex } from "next/font/google";

const petemoss = Petemoss({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-logo",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-titulo",
});

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-texto",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${petemoss.variable} ${cormorant.variable} ${robotoFlex.variable}`}>
      <body>{children}</body>
    </html>
  );
}