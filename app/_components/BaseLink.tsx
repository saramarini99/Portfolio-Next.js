"use client";

import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href: string;
  className?: string;
  target?: string;
  rel?: string;
  children: ReactNode;
  onClick?: () => void;
};

export default function BaseLink({
  href,
  className,
  children,
  target,
  rel,
  onClick,
}: Props) {
  return (
    <Link
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
