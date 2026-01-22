import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "buy"; // Solo dejamos el botón de comprar
  size?: "sm" | "md" | "lg";
  leadingIcon?: React.ReactNode;
};

const base =
  "inline-flex items-center justify-center gap-2 font-bold rounded-xl transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none shadow-lg";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  buy: `
    bg-gradient-to-br from-emerald-400 to-emerald-600
    text-white
    hover:from-emerald-500 hover:to-emerald-700
    focus:ring-emerald-500
    transform hover:scale-105 active:scale-95
    shadow-emerald-400/50
  `,
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-base",
  lg: "h-14 px-8 text-lg",
};

export default function Button({
  variant = "buy",
  size = "md",
  className = "",
  leadingIcon,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {leadingIcon}
      {children}
    </button>
  );
}
