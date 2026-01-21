type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost" | "buy";
  size?: "sm" | "md" | "lg";
  leadingIcon?: React.ReactNode;
};

const base =
  "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500",
  outline:
    "border border-slate-300 text-slate-800 hover:bg-slate-100 focus:ring-slate-400",
  ghost: "text-slate-800 hover:bg-slate-100 focus:ring-slate-400",
  buy: "bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500",
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-base",
  lg: "h-12 px-6 text-lg",
};

export default function Button({
  variant = "primary",
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
