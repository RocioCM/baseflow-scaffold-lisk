import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary";
  size?: "normal" | "large";
}
export function Button({ children, onClick, variant = "primary", size = "normal" }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors";
  const sizeStyles = size === "large" ? "px-8 py-4 text-lg" : "px-6 py-3 text-base";
  const variantStyles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50";
  return (
    <button onClick={onClick} className={`${baseStyles} ${sizeStyles} ${variantStyles}`}>
      {children}
    </button>
  );
}
