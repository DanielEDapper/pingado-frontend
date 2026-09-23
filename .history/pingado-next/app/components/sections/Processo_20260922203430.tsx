export function Processo() {
    const etapas = [
        {
            numero: "01",
            etapa: "Etapa 01",
            titulo: "Selecionamos",
            descricao:
                "Escolhemos cafés especiais de pequenos produtores brasileiros, priorizando qualidade, origem e sustentabilidade.",
        },
        {
            numero: "02",
            etapa: "Etapa 02",
            titulo: "Torramos",
            descricao:
                "Cada lote recebe uma torra artesanal para preservar aromas e destacar as notas sensoriais do café.",
        },
        {
            numero: "03",
            etapa: "Etapa 03",
            titulo: "Entregamos",
            descricao:
                "Em poucos dias o café chega fresco até você, pronto para transformar sua rotina em um ritual.",
        },
    ];

    return (
        <section className="text-[#F2EDE3]">

            <div className="mx-auto max-w-7xl">

                {etapas.map((etapa) => (
                    <article
                        key={etapa.numero}
                        className="
                            relative
                            flex
                            min-h-screen
                            items-center
                            overflow-hidden
                            px-8
                            py-32
                            md:px-16
                            lg:px-20
                        "
                    >

                        {/* Número gigante */}
                        <span
                            className="
                                font-pingado-numbers
                                text-[300px]
                                font-normal
                                leading-none
                                text-[#F2EDE3]/15
                            "
                        >
                            01
                        </span>

                        {/* Conteúdo */}
                        <div
                            className="
                                relative
                                z-10
                                ml-auto
                                w-full
                                max-w-2xl
                                lg:mr-[8%]
                            "
                        >

                            {/* Etapa */}
                            <p
                                className="
                                    font-texto
                                    text-xs
                                    uppercase
                                    tracking-[0.3em]
                                    text-[#A97845]
                                "
                            >
                                {etapa.etapa}
                            </p>

                            {/* Título */}
                            <h2
                                className="
                                    mt-5
                                    font-titulo
                                    text-6xl
                                    font-light
                                    leading-[0.9]
                                    tracking-tight
                                    text-[#F2EDE3]
                                    md:text-7xl
                                    lg:text-8xl
                                "
                            >
                                {etapa.titulo}
                            </h2>

                            {/* Descrição */}
                            <p
                                className="
                                    mt-8
                                    max-w-lg
                                    font-texto
                                    text-base
                                    leading-relaxed
                                    text-[#F2EDE3]/85
                                    md:text-lg
                                "
                            >
                                {etapa.descricao}
                            </p>

                        </div>

                    </article>
                ))}

            </div>

        </section>
    );
}