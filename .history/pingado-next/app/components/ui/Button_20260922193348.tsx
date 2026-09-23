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
    disabled = false
}: ButtonProps) {
    const baseClasses =
        "rounded-full px-6 py-3 font-semibold transition-all duration-200";

    const variantClasses = {
        primary:
            "bg-amber-700 text-white hover:bg-amber-800",
        secondary:
            "border border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white"
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${baseClasses} ${variantClasses[variant]} ${
                disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
            }`}
        >
            {children}
        </button>
    );
}