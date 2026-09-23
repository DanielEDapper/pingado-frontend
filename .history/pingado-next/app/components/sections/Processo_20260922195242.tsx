export function Processo() {
    return (
        <section
            id="processo"
            className="
                min-h-screen
                bg-black
                px-10
                py-32
                md:px-20
            "
        >
            <div className="relative mx-auto min-h-[700px] max-w-7xl">

                {/* Número */}
                <span
                    className="
                        absolute
                        left-0
                        top-0
                        font-titulo
                        text-[120px]
                        font-light
                        leading-none
                        text-white/25
                        md:text-[160px]
                    "
                >
                    01
                </span>

                {/* Conteúdo */}
                <div
                    className="
                        mx-auto
                        flex
                        min-h-[650px]
                        max-w-xl
                        flex-col
                        justify-center
                    "
                >

                    <span
                        className="
                            font-texto
                            text-xs
                            uppercase
                            tracking-[0.25em]
                            text-[#a9793f]
                        "
                    >
                        Etapa 01
                    </span>

                    <h2
                        className="
                            mt-4
                            font-titulo
                            text-6xl
                            font-light
                            leading-none
                            text-white
                            md:text-7xl
                        "
                    >
                        Selecionamos
                    </h2>

                    <p
                        className="
                            mt-8
                            max-w-md
                            font-titulo
                            text-xl
                            font-medium
                            leading-relaxed
                            text-white
                        "
                    >
                        Escolhemos cafés especiais de pequenos
                        produtores brasileiros, priorizando
                        qualidade, origem e sustentabilidade.
                    </p>

                </div>

            </div>
        </section>
    );
}