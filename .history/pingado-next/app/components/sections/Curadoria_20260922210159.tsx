"use client";

import { useEffect, useState } from "react";
import { listarCafes } from "../../services/coffeeService";
import { Coffee } from "../../types/Coffee";

export function Curadoria() {

    const [cafes, setCafes] = useState<Coffee[]>([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(false);

    useEffect(() => {

        async function carregarCafes() {

            try {
                const dados = await listarCafes();
                setCafes(dados);
            } catch (error) {
                console.error(error);
                setErro(true);
            } finally {
                setCarregando(false);
            }

        }

        carregarCafes();

    }, []);

    return (
        <section className="bg-black px-8 py-32 text-[#F2EDE3]">

            <div className="mx-auto max-w-7xl">

                {/* Cabeçalho */}
                <header className="text-center">

                    <p
                        className="
                            font-texto
                            text-xs
                            uppercase
                            tracking-[0.3em]
                            text-[#A97845]
                        "
                    >
                        Edição limitada
                    </p>

                    <h2
                        className="
                            mt-5
                            font-titulo
                            text-6xl
                            font-light
                            leading-[0.9]
                            md:text-7xl
                        "
                    >
                        A curadoria do
                        <br />
                        mês
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-6
                            max-w-xl
                            font-texto
                            text-sm
                            text-[#F2EDE3]/70
                        "
                    >
                        Experimente origens brasileiras cuidadosamente
                        selecionadas.
                    </p>

                    <div
                        className="
                            mx-auto
                            mt-12
                            h-px
                            w-24
                            bg-[#A97845]
                        "
                    />

                </header>


                {/* Conteúdo */}

                {carregando && (
                    <p className="mt-20 text-center text-[#F2EDE3]/60">
                        Carregando cafés...
                    </p>
                )}

                {erro && (
                    <p className="mt-20 text-center text-[#F2EDE3]/60">
                        Não foi possível carregar os cafés.
                    </p>
                )}

                {!carregando && !erro && (

                    <div
                        className="
                            mt-16
                            grid
                            gap-8
                            md:grid-cols-2
                            lg:grid-cols-3
                        "
                    >

                        {cafes.map((cafe) => (

                            <article
                                key={cafe.id}
                                className="
                                    flex
                                    min-h-[450px]
                                    flex-col
                                    justify-end
                                    rounded-[24px]
                                    bg-[#F2EDE3]
                                    p-6
                                    text-[#33251F]
                                "
                            >

                                <div>

                                    <p
                                        className="
                                            font-texto
                                            text-xs
                                            uppercase
                                            tracking-[0.15em]
                                            text-[#A97845]
                                        "
                                    >
                                        Café especial
                                    </p>

                                    <h3
                                        className="
                                            mt-4
                                            font-titulo
                                            text-3xl
                                            font-light
                                        "
                                    >
                                        {cafe.name}
                                    </h3>

                                    <p
                                        className="
                                            mt-4
                                            font-texto
                                            text-sm
                                            leading-relaxed
                                            text-[#33251F]/70
                                        "
                                    >
                                        {cafe.sensoryNotes}
                                    </p>

                                    <button
                                        type="button"
                                        className="
                                            mt-6
                                            w-full
                                            rounded-md
                                            border
                                            border-[#33251F]
                                            px-4
                                            py-3
                                            font-texto
                                            text-sm
                                            transition
                                            hover:bg-[#33251F]
                                            hover:text-[#F2EDE3]
                                        "
                                    >
                                        Assinar este café
                                    </button>

                                </div>

                            </article>

                        ))}

                    </div>

                )}

                {/* Rodapé da seção */}
                {!carregando && !erro && cafes.length > 0 && (

                    <div className="mt-16 text-center">

                        <div
                            className="
                                mx-auto
                                mb-12
                                h-px
                                w-24
                                bg-[#A97845]
                            "
                        />

                        <p
                            className="
                                font-texto
                                text-sm
                                text-[#F2EDE3]/70
                            "
                        >
                            Cada lote é torrado poucos dias antes do envio
                            e muda todos os meses.
                        </p>

                        <button
                            type="button"
                            className="
                                mt-6
                                rounded-md
                                border
                                border-[#F2EDE3]
                                px-6
                                py-3
                                font-texto
                                text-sm
                                transition
                                hover:bg-[#F2EDE3]
                                hover:text-black
                            "
                        >
                            Conhecer detalhes
                        </button>

                    </div>

                )}

            </div>

        </section>
    );
}