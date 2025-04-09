import React, { memo } from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  href,
}) => {
  const baseClasses =
    'font-["Neue Plak"] text-sm uppercase transition-all duration-300 hover:scale-[1.05] transform';

  const sizeClasses = {
    sm: "py-2 px-4 text-xs",
    md: "py-3 px-6",
    lg: "py-4 px-8",
  };

  const variantClasses = {
    primary: "bg-black text-white hover:bg-stone-700 font-normal",
    secondary: "bg-white text-black hover:bg-gray-100 font-semibold",
    outline:
      "border border-current hover:bg-white hover:text-black font-semibold",
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};

export default memo(Button);
