import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-black px-10 py-20 text-white md:px-20">

            <div className="mx-auto max-w-7xl">

                <div
                    className="
                        flex
                        flex-col
                        items-center
                        border-t
                        border-white/20
                        pt-16
                        text-center
                    "
                >

                    <Link
                        href="/"
                        className="
                            font-logo
                            text-5xl
                        "
                    >
                        Pingado
                    </Link>

                    <p
                        className="
                            mt-5
                            font-titulo
                            text-xl
                            text-white/70
                        "
                    >
                        Um mundo de café. Enviado.
                    </p>

                    <Link
                        href="#"
                        className="
                            mt-8
                            font-texto
                            text-sm
                            uppercase
                            tracking-[0.2em]
                            text-[#a9793f]
                            transition-opacity
                            hover:opacity-70
                        "
                    >
                        Instagram
                    </Link>

                    <p
                        className="
                            mt-16
                            font-texto
                            text-xs
                            text-white/40
                        "
                    >
                        © {new Date().getFullYear()} Pingado.
                        Todos os direitos reservados.
                    </p>

                </div>

            </div>

        </footer>
    );
}