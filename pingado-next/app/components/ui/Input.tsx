import type { ReactNode } from "react";
 
interface InputProps {
    label?: string;
    placeholder?: string;
    type?: "text" | "email" | "password";
    value?: string;
    onChange?: (
        event: React.ChangeEvent<HTMLInputElement>
    ) => void;
    disabled?: boolean;
    icon?: ReactNode;
}
 
export function Input({
    label,
    placeholder,
    type = "text",
    value,
    onChange,
    disabled = false,
    icon,
}: InputProps) {
    return (
        <div className="flex flex-col gap-2">
            {label && (
                <label className="text-sm font-semibold">
                    {label}
                </label>
            )}
 
            <div className="relative">
                {icon && (
                    <span
                        className="
                            pointer-events-none
                            absolute
                            left-4
                            top-1/2
                            -translate-y-1/2
                            text-stone-400
                        "
                    >
                        {icon}
                    </span>
                )}
 
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    className={`
                        w-full
                        rounded-lg
                        border
                        border-stone-300
                        py-3
                        ${icon ? "pl-11 pr-4" : "px-4"}
                        font-texto
                        outline-none
                        transition
                        placeholder:text-stone-400
                        focus:border-amber-700
                        focus:ring-2
                        focus:ring-amber-700/20
                        disabled:cursor-not-allowed
                        disabled:bg-stone-100
                    `}
                />
            </div>
        </div>
    );
}