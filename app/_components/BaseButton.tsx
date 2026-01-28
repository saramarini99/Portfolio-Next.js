"use client";

import type { ReactNode } from "react";

interface Props {
  onClick?: () => void;
  type?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  children: ReactNode;
  isDisabled?: boolean;
  className?: string;
}

export default function BaseButton({
  onClick,
  type = "primary",
  size = "md",
  loading = false,
  isDisabled = false,
  children,
  className = "",
  ...props
}: Props) {
  const typeClasses = {
    primary: "bg-blue-300 text-black hover:bg-blue-700 focus:ring-blue-500",
    secondary:
      "bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    outline:
      "border border-gray-400 text-gray-700 hover:bg-gray-100 focus:ring-gray-400 bg-transparent",
  };

  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer";

  const combinedClasses = [
    baseClasses,
    typeClasses[type] ?? typeClasses.primary,
    sizeClasses[size] ?? sizeClasses.md,
    className,
  ].join(" ");

  return (
    <button
      onClick={onClick}
      disabled={isDisabled || loading || isDisabled}
      className={combinedClasses}
      {...props}
    >
      {loading && (
        <span className="loader mr-2" aria-label="Loading" role="status" />
      )}
      {children}
      <style jsx>{`
        .loader {
          border: 2px solid transparent;
          border-top-color: currentColor;
          border-right-color: currentColor;
          border-radius: 50%;
          width: 1em;
          height: 1em;
          display: inline-block;
          animation: spin 0.7s linear infinite;
          vertical-align: middle;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </button>
  );
}
