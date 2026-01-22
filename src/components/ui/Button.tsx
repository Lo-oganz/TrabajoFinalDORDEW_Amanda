import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "buy";
  size?: "sm" | "md" | "lg";
  leadingIcon?: React.ReactNode;
};

const base =
  "inline-flex items-center justify-center gap-2 font-bold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none shadow-lg";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  buy: `
    bg-black
    text-pink-400
    border-2 border-pink-500
    shadow-[0_0_12px_rgba(255,0,128,0.7)]
    hover:text-black
    hover:bg-pink-500
    hover:shadow-[0_0_22px_rgba(255,0,128,1)]
    focus:ring-pink-500
    transform hover:scale-105 active:scale-95
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
