import React from "react";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className = "", ...props }: DivProps) {
  return (
    <div
      className={`
        rounded-2xl
        bg-gradient-to-br from-pink-500/30 via-purple-500/20 to-blue-500/20
        shadow-lg shadow-pink-500/50
        backdrop-blur-md
        transform transition-transform duration-300 hover:scale-105 hover:rotate-1
        hover:shadow-2xl hover:shadow-pink-500/70
        cursor-pointer
        overflow-hidden
        ${className}
      `}
      {...props}
    />
  );
}

export function CardImage({ src, alt = "", className = "" }: { src: string; alt?: string; className?: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full object-cover rounded-t-2xl ${className}`}
    />
  );
}

export function CardTitle({ className = "", ...props }: DivProps) {
  return (
    <h2
      className={`
        text-lg sm:text-xl font-extrabold text-white text-center px-3
        drop-shadow-md
        ${className}
      `}
      {...props}
    />
  );
}

export function CardContent({ className = "", ...props }: DivProps) {
  return (
    <div
      className={`
        p-4 text-white/90 text-sm text-center leading-snug
        ${className}
      `}
      {...props}
    />
  );
}
