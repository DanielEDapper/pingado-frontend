import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-stone-950 text-white">

            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">

                <div className="grid gap-12 md:grid-cols-3">

                    {/* Marca */}
                    <div>
                        <Link
                            href="/"
                            className="
                                font-logo
                                text-4xl
                            "
                        >
                            Pingado
                        </Link>

                        <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
                            Cafés especiais selecionados de pequenos
                            produtores brasileiros e entregues até você.
                        </p>
                    </div>

                    {/* Navegação */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">
                            Navegação
                        </h3>

                        <nav className="flex flex-col gap-3">

                            <Link
                                href="/"
                                className="text-sm text-white/60 transition-colors hover:text-white"
                            >
                                Início
                            </Link>

                            <Link
                                href="#processo"
                                className="text-sm text-white/60 transition-colors hover:text-white"
                            >
                                Nosso processo
                            </Link>

                            <Link
                                href="#cafe-do-mes"
                                className="text-sm text-white/60 transition-colors hover:text-white"
                            >
                                Café do mês
                            </Link>

                            <Link
                                href="#sobre"
                                className="text-sm text-white/60 transition-colors hover:text-white"
                            >
                                Sobre nós
                            </Link>

                        </nav>
                    </div>

                    {/* Contato */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">
                            Contato
                        </h3>

                        <div className="flex flex-col gap-3 text-sm text-white/60">

                            <a
                                href="mailto:contato@pingado.com"
                                className="transition-colors hover:text-white"
                            >
                                contato@pingado.com
                            </a>

                            <a
                                href="#"
                                className="transition-colors hover:text-white"
                            >
                                Instagram
                            </a>

                        </div>
                    </div>

                </div>

                {/* Copyright */}
                <div className="mt-16 border-t border-white/10 pt-6">
                    <p className="text-xs text-white/40">
                        © {new Date().getFullYear()} Pingado. Todos os direitos reservados.
                    </p>
                </div>

            </div>

        </footer>
    );
}