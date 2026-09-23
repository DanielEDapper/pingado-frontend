import type { ElementType, ReactNode } from "react";

interface TextProps{
    elemento ?: ElementType;
    children : ReactNode;
    variant : "display" | "body-lg" | "body";
    className ?: string;
}

export function Text({elemento: Tag = "p", children, variant, className = ""} : TextProps)
{
    return <Tag className = {`${variant} ${className}`}>
        {children}
    </Tag>
}