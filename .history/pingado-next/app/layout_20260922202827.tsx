import {
    Petemoss,
    Cormorant_Garamond,
    Roboto_Flex,
    Bodoni_Moda,
} from "next/font/google";

const logo = Petemoss({
    variable: "--font-logo",
    weight: "400",
});

const titulo = Cormorant_Garamond({
    variable: "--font-titulo",
    subsets: ["latin"],
});

const texto = Roboto_Flex({
    variable: "--font-texto",
    subsets: ["latin"],
});

const numero = Bodoni_Moda({
    variable: "--font-numero",
    subsets: ["latin"],
});
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${logo.variable} ${titulo.variable} ${texto.variable} ${numero.variable}bg-black text-white antialiased`}>
      <body>{children}</body>
    </html>
  );
}