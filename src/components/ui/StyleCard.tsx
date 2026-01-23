import React from "react";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

export function StyleCard({ className = "", children, ...props }: DivProps) {
  return (
    <div
      className={`
        rounded-xl
        bg-gradient-to-br from-pink-600/40 via-pink-500/30 to-pink-400/20
        border-4 border-black
        shadow-lg shadow-pink-600/50
        hover:shadow-[0_0_15px_rgba(255,192,203,0.4)]
        transition-all duration-300
        overflow-hidden
        transform hover:scale-105
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}

export function StyleCardImage({ src, alt = "", className = "" }: { src?: string; alt?: string; className?: string }) {
  return src ? (
    <img
      src={src}
      alt={alt}
      className={`w-full h-36 object-cover rounded-t-xl ${className}`}
    />
  ) : (
    <div className={`w-full h-36 bg-black/70 grid place-items-center text-pink-400 rounded-t-xl`}>
      (Sin imagen)
    </div>
  );
}

export function StyleCardTitle({ className = "", ...props }: DivProps) {
  return (
    <h3
      className={`text-3xl font-extrabold text-center px-2 mt-2 drop-shadow-lg uppercase ${className}`}
      style={{
        color: "#ff0084",
        WebkitTextStroke: "0.6px black",
      }}
      {...props}
    />
  );
}



export function StyleCardContent({ className = "", ...props }: DivProps) {
  return (
    <div
      className={`p-3 text-pink-100/90 text-sm text-center leading-snug ${className}`}
      {...props}
    />
  );
}
