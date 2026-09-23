import "./globals.css";

import Image from "next/image";

import { Header } from "./components/layout/Header";
import { Hero } from "./components/sections/Hero";
import { Processo } from "./components/sections/Processo";
import { Footer } from "./components/layout/Footer";

export default function Page() {
    return (
        <main className="relative min-h-screen bg-black">

            {/* Imagem de fundo */}
            <div className="fixed inset-0 z-0">

                <Image
                    src="/CoffeePlantationImage.jpg"
                    alt=""
                    fill
                    priority
                    className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60" />

            </div>

            {/* Conteúdo sobre a imagem */}
            <div className="relative z-10">

                <Header />

                <Hero />

                <Processo />

                <Footer />

            </div>

        </main>
    );
}