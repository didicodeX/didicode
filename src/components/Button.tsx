import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const baseClasses =
      "inline-flex items-center justify-center rounded-md font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 w-full";

  const variants = {
    primary:
      "bg-primary-700 text-white hover:bg-primary-600 focus-visible:ring-primary-700",
    secondary:
      "bg-secondary-100 text-secondary-900 hover:bg-secondary-200 focus-visible:ring-secondary-600",
    outline:
      "border border-secondary-300 bg-white text-secondary-700 hover:bg-secondary-50 focus-visible:ring-secondary-600 dark:bg-secondary-500 dark:text-secondary-100 dark:border-secondary-700 dark:hover:bg-secondary-800",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
