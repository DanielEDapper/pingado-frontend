import type { ReactNode } from "react";
 
interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary" | "solid" | "outline-neutral";
    disabled?: boolean;
    fullWidth?: boolean;
}
 
export function Button({
    children,
    onClick,
    type = "button",
    variant = "primary",
    disabled = false,
    fullWidth = false,
}: ButtonProps) {
 
    const variants = {
        // Usado sobre fundos escuros/fotográficos (ex: Hero)
        primary: `
            border-white
            text-white
            hover:bg-white
            hover:text-black
        `,
 
        secondary: `
            bg-[#a9793f]
            text-[#F5F1EB]
            hover:border-[#a9793f]
            hover:bg-[#F5F1EB]
            hover:text-[#a9793f]
        `,
 
        // CTA principal em fundos claros (ex: painel de login)
        solid: `
            border-[--color-destaque-hover]
            bg-[--color-destaque-hover]
            text-[--color-branco]
            hover:bg-[--color-destaque]
            hover:border-[--color-destaque]
        `,
 
        // Ação secundária em fundo claro (ex: "Login com Google")
        "outline-neutral": `
            border-stone-300
            text-[#34251f]
            hover:border-amber-700
            hover:ring-2
            hover:ring-amber-700/20
        `,
    };
 
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
                ${fullWidth ? "w-full" : "min-w-[140px]"}
                rounded-md
                border
                px-6
                py-2.5
                font-texto
                text-sm
                transition-all
                duration-300
                ${variants[variant]}
                ${disabled ? "cursor-not-allowed opacity-40" : "cursor-pointer"}
            `}
        >
            {children}
        </button>
    );
}