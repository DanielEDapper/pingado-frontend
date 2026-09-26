import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
 
interface AuthLayoutProps {
    children: ReactNode;
}
 
/**
 * Layout compartilhado por /login e /cadastro.
 * Painel esquerdo: fundo creme com o conteúdo (formulário) passado via children.
 * Painel direito: mesma foto usada na Hero, com moldura fina, criando
 * continuidade visual entre a landing e o fluxo de autenticação.
 */
export function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="flex min-h-screen">

            {/* Painel esquerdo */}
            <div className="flex w-full flex-col justify-center bg-[#f5f1eb] px-10 py-16 md:w-[55%] md:px-20">
                
                <div className="mx-auto w-full max-w-2xl">

                        <Link
                            href="/"
                            className="font-logo text-6xl whitespace-nowrap text-[#34251f]"
                        >
                            Pingado
                        </Link>

                        <div className="mt-12">
                            {children}
                        </div>

                    </div>

            </div>

            {/* Painel direito */}
            <div className="relative hidden md:block md:w-[45%]">

                <Image
                    src="/CoffeePlantationImage.jpg"
                    alt="Plantação de café ao entardecer"
                    fill
                    priority
                    className="z-0 object-cover"
                />

                <div className="absolute inset-0 z-10 bg-black/40" />

                <div className="absolute inset-8 z-20 border-2 border-[#f5f1eb]/80" />

            </div>

        </div>
    );
}
 