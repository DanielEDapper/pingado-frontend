import "./globals.css";
import { Hero } from "./components/Hero";
import Image from "next/image";

export default function Page()
{
  return(
    
    <main>
      <section className="relative">
      <Image src="/CoffeePlantationImage.jpg" alt="" fill className="object-cover -z-10" />
      <div className="absolute inset-0 bg-black/60 -z-10" />
      <Hero/>
    </section>
    </main>
  );
}