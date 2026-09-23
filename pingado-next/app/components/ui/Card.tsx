import type { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
}

export function Card({
    children,
    className = "",
}: CardProps) {
    return (
        <article
            className={`
                overflow-hidden
                rounded-2xl
                bg-white
                shadow-lg
                transition-all
                duration-200
                hover:-translate-y-1
                hover:shadow-xl
                ${className}
            `}
        >
            {children}
        </article>
    );
}