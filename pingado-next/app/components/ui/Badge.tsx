import type { ReactNode } from "react";

interface BadgeProps {
    children: ReactNode;
    variant?: "default" | "success" | "warning";
}

export function Badge({
    children,
    variant = "default",
}: BadgeProps) {
    const variants = {
        default: "bg-amber-100 text-amber-800",
        success: "bg-green-100 text-green-800",
        warning: "bg-yellow-100 text-yellow-800",
    };

    return (
        <span
            className={`
                inline-flex
                rounded-full
                px-3
                py-1
                text-xs
                font-bold
                uppercase
                tracking-wide
                ${variants[variant]}
            `}
        >
            {children}
        </span>
    );
}