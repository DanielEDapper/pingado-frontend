import "./globals.css";

import Image from "next/image";

import { Header } from "./components/layout/Header";
import { Hero } from "./components/sections/Hero";
import { Processo } from "./components/sections/Processo";
import { Dados } from "./components/sections/Dados";
import { Footer } from "./components/layout/Footer";
import { Curadoria } from "./components/sections/Curadoria";

export default function Page() {
    return (
        <main className="relative bg-black">

            {/* BACKGROUND FIXO */}
            <div className="fixed inset-0 z-0">

                <Image
                    src="/CoffeePlantationImage.jpg"
                    alt=""
                    fill
                    priority
                    className="object-cover"
                />

                {/* Sobreposição */}
                <div className="absolute inset-0 bg-black/65" />

            </div>

            {/* CONTEÚDO */}
            <div className="relative z-10">

                <Header />

                <Hero />

                <Processo />

                <Dados />

                <Curadoria

                <Footer />

            </div>

        </main>
    );
}