import type { ReactNode } from "react";

interface TitleProps {
    children: ReactNode;
    size?: "small" | "medium" | "large";
    align?: "left" | "center" | "right";
}

export function Title({
    children,
    size = "medium",
    align = "left",
}: TitleProps) {
    const sizes = {
        small: "text-2xl",
        medium: "text-4xl",
        large: "text-6xl",
    };

    const aligns = {
        left: "text-left",
        center: "text-center",
        right: "text-right",
    };

    return (
        <h2
            className={`
                font-titulo
                font-normal
                ${sizes[size]}
                ${aligns[align]}
            `}
        >
            {children}
        </h2>
    );
}