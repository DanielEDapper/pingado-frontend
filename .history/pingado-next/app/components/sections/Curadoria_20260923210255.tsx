"use client";

import { useEffect, useState } from "react";
import { listarCafes } from "../../services/coffeeService";
import type { Coffee } from "../../types/Coffee";
import Image from "next/image";

export function Curadoria() {

    const [cafes, setCafes] = useState<Coffee[]>([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(false);

    async function carregarCafes() {

        try {

            setCarregando(true);

            const dados = await listarCafes();

            setCafes(dados);

        } catch (error) {

            console.error("Erro ao carregar cafés:", error);
            setErro(true);

        } finally {

            setCarregando(false);

        }
    }

    useEffect(() => {
        carregarCafes();
    }, []);

    if (carregando) {
        return (
            <section className="min-h-screen bg-black flex items-center justify-center">
                <p className="text-white">
                    Carregando...
                </p>
            </section>
        );
    }

    if (erro) {
        return (
            <section className="min-h-screen bg-black flex items-center justify-center">
                <p className="text-white">
                    Não foi possível carregar os cafés.
                </p>
            </section>
        );
    }

    return (
        <section className="bg-transparent text-white py-32">

            <div className="mx-auto max-w-6xl px-6">

                {/* CABEÇALHO */}

                <div className="text-center mb-20">

                    <p className="font-texto text-sm uppercase tracking-[0.3em] text-amber-600">
                        Edição limitada
                    </p>

                    <h2 className="font-titulo uppercase text-6xl md:text-7xl mt-4">
                        A curadoria do mês
                    </h2>

                    <p className="font-texto text-white/70 mt-6">
                        Experimente três origens brasileiras cuidadosamente selecionadas.
                    </p>

                    <div className="mx-auto mt-12 h-px w-24 bg-amber-600" />

                </div>


                {/* CAFÉS */}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {cafes.map((cafe) => (

                        <article
                            key={cafe.id}
                            className="overflow-hidden rounded-3xl bg-[#f5f1eb] text-[#34251f]"
                        >

                            {/* IMAGEM */}

                            <div className="relative h-[420px] w-full">

                                <Image
                                    src={cafe.image}
                                    alt={`Café ${cafe.name}`}
                                    fill
                                    className="object-cover"
                                />

                            </div>


                            {/* INFORMAÇÕES */}

                            <div className="p-6">

                                <p className="text-xs uppercase tracking-[0.15em] text-amber-800">
                                    {cafe.regionName}
                                </p>
                                

                                <h3 className="font-titulo text-3xl mt-4">
                                    {cafe.name}
                                </h3>

                                <p className="mt-4 text-sm">
                                    {cafe.sensoryNotes}
                                </p>

                                <button
                                    className="
                                        mt-8
                                        w-full
                                        rounded-lg
                                        border
                                        border-[#34251f]
                                        py-3
                                        text-sm
                                        transition
                                        hover:bg-[#34251f]
                                        hover:text-white
                                    "
                                >
                                    Assinar este café
                                </button>

                            </div>

                        </article>

                    ))}

                </div>

            </div>

        </section>
    );
}