interface InputProps {
    label?: string;
    placeholder?: string;
    type?: "text" | "email" | "password";
    value?: string;
    onChange?: (
        event: React.ChangeEvent<HTMLInputElement>
    ) => void;
    disabled?: boolean;
}

export function Input({
    label,
    placeholder,
    type = "text",
    value,
    onChange,
    disabled = false,
}: InputProps) {
    return (
        <div className="flex flex-col gap-2">
            {label && (
                <label className="text-sm font-semibold">
                    {label}
                </label>
            )}

            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
                className="
                    w-full
                    rounded-lg
                    border
                    border-stone-300
                    px-4
                    py-3
                    font-texto
                    outline-none
                    transition
                    placeholder:text-stone-400
                    focus:border-amber-700
                    focus:ring-2
                    focus:ring-amber-700/20
                    disabled:cursor-not-allowed
                    disabled:bg-stone-100
                "
            />
        </div>
    );
}