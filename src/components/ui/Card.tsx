import React from "react";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className = "", ...props }: DivProps) {
  return (
    <div
      className={`rounded-2xl border border-slate-200/20 bg-white/10 p-6 shadow backdrop-blur ${className}`}
      {...props}
    />
  );
}

export function CardHeader({ className = "", ...props }: DivProps) {
  return <div className={`mb-3 ${className}`} {...props} />;
}

export function CardTitle({ className = "", ...props }: DivProps) {
  return (
    <h2 className={`text-xl font-semibold leading-none ${className}`} {...props} />
  );
}

export function CardContent({ className = "", ...props }: DivProps) {
  return <div className={className} {...props} />;
}
