import React from "react";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className = "", ...props }: DivProps) {
  return (
    <div
      className={`
        rounded-xl
        bg-black
        border-2 border-[var(--pink-main)]
        shadow-lg
        backdrop-blur
        scene-glow
        ${className}
      `}
      {...props}
    />
  );
}

export function CardHeader({ className = "", ...props }: DivProps) {
  return (
    <div
      className={`
        mb-3
        text-[var(--pink-main)]
        ${className}
      `}
      {...props}
    />
  );
}

export function CardTitle({ className = "", ...props }: DivProps) {
  return (
    <h2
      className={`
        text-lg
        font-bold
        scene-text
        leading-tight
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
        text-[var(--text-light)]
        text-sm
        ${className}
      `}
      {...props}
    />
  );
}
