import type { ReactNode } from "react";

interface TextProps {
    children: ReactNode;
    size?: "small" | "medium" | "large";
    muted?: boolean;
    align?: "left" | "center" | "right";
}

export function Text({
    children,
    size = "medium",
    muted = false,
    align = "left",
}: TextProps) {
    const sizes = {
        small: "text-sm",
        medium: "text-base",
        large: "text-lg",
    };

    const aligns = {
        left: "text-left",
        center: "text-center",
        right: "text-right",
    };

    return (
        <p
            className={`
                font-texto
                leading-relaxed
                ${sizes[size]}
                ${aligns[align]}
                ${muted ? "text-black/60" : "text-black"}
            `}
        >
            {children}
        </p>
    );
}