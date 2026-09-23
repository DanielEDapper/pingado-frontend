"use client";

import { useEffect, useState } from "react";
import { listarCafes } from "../../services/coffeeService";
import type { Coffee } from "../../types/Coffee";

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
        <section className="bg-black text-white py-32">

            <div className="mx-auto max-w-6xl px-6">

                <div className="text-center mb-20">

                    <p className="font-texto text-sm uppercase tracking-[0.3em] text-amber-600">
                        Edição limitada
                    </p>

                    <h2 className="font-titulo text-6xl uppercase md:text-7xl mt-4">
                        A curadoria do mês
                    </h2>

                    <p className="font-texto text-white/70 mt-6">
                        Experimente três origens brasileiras cuidadosamente selecionadas.
                    </p>

                    <div className="mx-auto mt-12 h-px w-24 bg-amber-600" />

                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {cafes.map((cafe) => (

                        <article
                            key={cafe.id}
                            className="bg-[#f5f1eb] text-[#34251f] rounded-3xl p-6 min-h-[450px] flex flex-col justify-end"
                        >

                            <div>

                                <p className="text-xs uppercase tracking-[0.15em] text-amber-800">
                                    {cafe.regionId}
                                </p>

                                <h3 className="font-titulo text-3xl mt-4">
                                    {cafe.name}
                                </h3>

                                <p className="mt-4 text-sm">
                                    {cafe.sensoryNotes}
                                </p>

                            </div>

                            <button
                                className="mt-8 w-full border border-[#34251f] rounded-lg py-3 text-sm hover:bg-[#34251f] hover:text-white transition"
                            >
                                Assinar este café
                            </button>

                        </article>

                    ))}

                </div>

            </div>

        </section>
    );
}