
"use client";

import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href: string;
  className?: string;
  children: ReactNode;
};

export default function BaseLink({ href, className, children }: Props) {
  return (
    <Link href={href} className={className}>
        {children}
    </Link>
  );
}
