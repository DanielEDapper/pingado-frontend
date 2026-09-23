import Image from "next/image";
import { Button } from "../ui/Button";

export function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden">

            {/* Imagem + overlay */}
            <div className="absolute inset-0 z-0">

                <Image
                    src="/CoffeePlantationImage.jpg"
                    alt=""
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/60" />

            </div>

            {/* Conteúdo */}
            <div className="relative z-10 flex min-h-screen items-center px-10 md:px-20">

                <div className="max-w-5xl">

                    <h1
                        className="
                            max-w-9xl
                            font-titulo
                            text-6xl
                            font-light
                            uppercase
                            leading-[0.9]
                            tracking-tight
                            text-white
                            md:text-7xl
                            lg:text-8xl
                        "
                    >
                        Um mundo de café.
                        <br />

                        <span className="ml-[25%]">
                            Enviado.
                        </span>
                    </h1>

                    <p
                        className="
                            mt-8
                            max-w-xl
                            font-texto
                            text-base
                            leading-relaxed
                            text-white
                            md:text-lg
                        "
                    >
                        Conheça cafés especiais selecionados por
                        especialistas e entregues frescos na sua casa.
                    </p>

                    <div className="mt-6">
                        <Button>
                            Assinar agora
                        </Button>
                    </div>

                </div>

            </div>

        </section>
    );
}