import { Header } from "./components/Header";
import { Hero } from "./components/sections/Hero";
import { Processo } from "./components/sections/Processo";
import { Footer } from "./components/Footer";

export default function Home() {
    return (
        <main className="bg-black">

            <Header />

            <Hero />

            <Processo />

            <Footer />

        </main>
    );
}