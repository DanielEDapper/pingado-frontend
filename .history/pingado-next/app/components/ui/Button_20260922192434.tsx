import type { ButtonHTMLAttributes, ReactNode } from "react";

const variants = {
    primary: "bg-destaque text-branco border border-transparent hover:bg-destaque-hover",
    secondary: "bg-transparent text-branco border border-branco hover:bg-branco hover:text-fundo",
    terciary: "bg-transparent text-branco border border-cinza hover:border-branco"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    variant ?: keyof typeof variants;
    children: ReactNode;
}

export function Button({
  variant = "primary",
  children,
  className = "",
  ...rest
}: ButtonProps) {   
  return (
    <button
      className={`inline-flex w-fit items-center justify-center rounded-sm
        px-7 py-2.5 font-texto text-base transition-colors duration-300
        cursor-pointer ${variants[variant]} ${className}`.trim()}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;