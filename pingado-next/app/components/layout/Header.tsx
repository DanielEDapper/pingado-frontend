import Link from "next/link";

export function Header() {
    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <div className="flex items-start justify-between px-10 py-7 md:px-20">

                {/* Logo */}
                <Link
                    href="/"
                    className="
                        font-logo
                        text-5xl
                        leading-none
                        text-white
                        transition-opacity
                        duration-300
                        hover:opacity-70
                    "
                >
                    Pingado
                </Link>

                {/* Login */}
                <Link
                    href="/login"
                    className="
                        flex
                        h-10
                        min-w-[100px]
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-white
                        px-5
                        text-md
                        text-white
                        transition-all
                        duration-300
                        hover:bg-white
                        hover:text-black
                    "
                >
                    Login
                </Link>

            </div>
        </header>
    );
}