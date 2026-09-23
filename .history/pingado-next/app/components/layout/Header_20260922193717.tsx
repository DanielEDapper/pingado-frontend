import Link from "next/link";

export function Header() {
    return (
        <header className="absolute top-0 left-0 z-50 w-full">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">

                {/* Logo */}
                <Link
                    href="/"
                    className="
                        font-logo
                        text-3xl
                        text-white
                        transition-opacity
                        hover:opacity-80
                    "
                >
                    Pingado
                </Link>

                {/* Navegação */}
                <nav className="hidden items-center gap-8 md:flex">

                    <Link
                        href="/"
                        className="
                            text-sm
                            font-medium
                            text-white/80
                            transition-colors
                            hover:text-white
                        "
                    >
                        Início
                    </Link>

                    <Link
                        href="#processo"
                        className="
                            text-sm
                            font-medium
                            text-white/80
                            transition-colors
                            hover:text-white
                        "
                    >
                        Nosso processo
                    </Link>

                    <Link
                        href="#cafe-do-mes"
                        className="
                            text-sm
                            font-medium
                            text-white/80
                            transition-colors
                            hover:text-white
                        "
                    >
                        Café do mês
                    </Link>

                    <Link
                        href="#sobre"
                        className="
                            text-sm
                            font-medium
                            text-white/80
                            transition-colors
                            hover:text-white
                        "
                    >
                        Sobre nós
                    </Link>

                </nav>

                {/* Ação */}
                <Link
                    href="/assinatura"
                    className="
                        hidden
                        rounded-full
                        border
                        border-white/40
                        px-5
                        py-2.5
                        text-sm
                        font-medium
                        text-white
                        transition-all
                        hover:border-white
                        hover:bg-white
                        hover:text-stone-900
                        md:block
                    "
                >
                    Assine
                </Link>

            </div>
        </header>
    );
}