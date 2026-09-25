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
 
            {/* Painel esquerdo — conteúdo (login ou cadastro) */}
            <div className="flex w-full flex-col justify-center bg-[#f5f1eb] px-10 py-16 md:w-1/2 md:px-20">
                <div className="mx-auto w-full max-w-md">
 
                    <Link href="/" className="font-logo text-3xl text-[#34251f]">
                        Pingado
                    </Link>
 
                    <div className="mt-12">
                        {children}
                    </div>
 
                </div>
            </div>
 
            {/* Painel direito — foto + moldura (some em telas pequenas) */}
            <div className="relative hidden md:block md:w-1/2">
                <Image
                    src="/Assets/Image/plantacao-cafe.jpg"
                    alt="Plantação de café ao entardecer"
                    fill
                    priority
                    className="object-cover"
                />
 
                {/* Overlay escuro sutil, pra garantir contraste da moldura */}
                <div className="absolute inset-0 bg-black/10" />
 
                {/* Moldura fina */}
                <div className="absolute inset-8 border border-[#f5f1eb]/80" />
            </div>
 
        </div>
    );
}
 