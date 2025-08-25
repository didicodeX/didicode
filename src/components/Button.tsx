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
      "bg-primary-100 dark:bg-primary-800 text-primary-900 dark:text-primary-100 hover:bg-primary-200 dark:hover:bg-primary-700 focus-visible:ring-primary-600",
    outline:
      "border border-primary-300 bg-white text-primary-700 hover:bg-primary-50 focus-visible:ring-primary-600 dark:bg-primary-500 dark:text-primary-100 dark:border-primary-700 dark:hover:bg-primary-800",
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
