import "./globals.css";
import { Hero } from "./components/";
import { Processo } from "./components/Processo";
import Image from "next/image";

export default function Page()
{
  return(
    
    <main className="relative min-h-screen">

      <div className="fixed inset-0 z-0">
        <Image src="/CoffeePlantationImage.jpg" alt="" fill className="object-cover -z-10" />
        <div className="absolute inset-0 bg-black/60 -z-10" />
      </div>

      <div className="relative z-10">
        <Hero/>
        <Processo/>
      </div>
      
    </main>
  );
}