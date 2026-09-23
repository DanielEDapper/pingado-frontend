export function Dados() {
    const dados = [
        {
            numero: "+3.000",
            descricao: "cafés enviados",
        },
        {
            numero: "12",
            descricao: "estados alcançados",
        },
        {
            numero: "100%",
            descricao: "café especial",
        },
    ];

    return (
        <section
            className="
                min-h-screen
                bg-[#A46148]
                px-10
                py-32
                text-[#F2EDE3]
                md:px-20
            "
        >

            <div className="mx-auto max-w-7xl">

                <div className="mb-24 max-w-xl">

                    <p
                        className="
                            font-texto
                            text-xs
                            uppercase
                            tracking-[0.3em]
                            text-[#F2EDE3]/70
                        "
                    >
                        O Pingado em números
                    </p>

                    <h2
                        className="
                            mt-5
                            font-titulo
                            text-6xl
                            font-light
                            leading-none
                            md:text-8xl
                        "
                    >
                        Feito para
                        <br />
                        quem ama café.
                    </h2>

                </div>

                <div
                    className="
                        grid
                        gap-12
                        border-t
                        border-[#F2EDE3]/30
                        pt-12
                        md:grid-cols-3
                    "
                >

                    {dados.map((dado) => (
                        <div key={dado.descricao}>

                            <p
                                className="
                                    font-numero
                                    text-7xl
                                    font-light
                                    leading-none
                                    md:text-8xl
                                "
                            >
                                {dado.numero}
                            </p>

                            <p
                                className="
                                    mt-4
                                    font-texto
                                    text-sm
                                    uppercase
                                    tracking-[0.2em]
                                    text-[#F2EDE3]/70
                                "
                            >
                                {dado.descricao}
                            </p>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}