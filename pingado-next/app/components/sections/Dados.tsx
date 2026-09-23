export function Dados() {
    const dados = [
        {
            numero: "+3.000",
            descricao: "Cafés enviados",
        },
        {
            numero: "12",
            descricao: "Estados alcançados",
        },
        {
            numero: "100%",
            descricao: "Café especial",
        },
    ];

    return (
        <section
            className="
                bg-[#17120F]
                px-8
                py-32
                text-[#F2EDE3]
                md:px-16
                lg:px-20
            "
        >
            <div className="mx-auto max-w-7xl">

                {/* Introdução */}
                <div className="max-w-3xl">

                    <p
                        className="
                            font-texto
                            text-xs
                            uppercase
                            tracking-[0.3em]
                            text-[#A97845]
                        "
                    >
                        O Pingado em números
                    </p>

                    <h2
                        className="
                            mt-6
                            max-w-2xl
                            font-titulo
                            text-6xl
                            font-light
                            leading-[0.9]
                            md:text-7xl
                            lg:text-8xl
                        "
                    >
                        Feito para
                        <br />
                        quem ama café.
                    </h2>

                </div>

                {/* Linha */}
                <div className="mt-24 border-t border-[#F2EDE3]/20" />

                {/* Números */}
                <div className="grid gap-12 pt-12 md:grid-cols-3">

                    {dados.map((dado) => (
                        <article key={dado.descricao}>

                            <p
                                className="
                                    font-titulo
                                    text-6xl
                                    font-light
                                    leading-none
                                    text-[#F2EDE3]
                                    md:text-7xl
                                    lg:text-8xl
                                "
                            >
                                {dado.numero}
                            </p>

                            <p
                                className="
                                    mt-5
                                    font-texto
                                    text-xs
                                    uppercase
                                    tracking-[0.25em]
                                    text-[#F2EDE3]/60
                                "
                            >
                                {dado.descricao}
                            </p>

                        </article>
                    ))}

                </div>

            </div>
        </section>
    );
}