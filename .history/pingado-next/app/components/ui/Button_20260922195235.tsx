import type { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary";
    disabled?: boolean;
}

export function Button({
    children,
    onClick,
    type = "button",
    variant = "primary",
    disabled = false,
}: ButtonProps) {

    const variants = {
        primary: `
            border-white
            text-white
            hover:bg-white
            hover:text-black
        `,

        secondary: `
            border-[#a9793f]
            text-[#a9793f]
            hover:bg-[#a9793f]
            hover:text-black
        `,
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
                min-w-[140px]
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