import React from "react";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className = "", ...props }: DivProps) {
  return (
    <div
      className={`
        rounded-2xl
        shadow-lg shadow-pink-500/30
        backdrop-blur-md
        transform transition-transform transition-shadow duration-300
        hover:scale-[1.03]
        hover:shadow-xl hover:shadow-pink-400/40
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
      className={`w-full h-[200px] object-cover rounded-t-2xl ${className}`}
    />
  );
}


export function CardTitle({ className = "", ...props }: DivProps) {
  return (
    <h2
      className={`
        text-2xl sm:text-3xl font-extrabold text-center px-3 mt-2 drop-shadow-lg uppercase
        ${className}
      `}
      style={{
        color: "#d00072",
        WebkitTextStroke: "0.5px white",
      }}
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
