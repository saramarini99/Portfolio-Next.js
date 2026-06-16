"use client";

import BaseLink from "@/components/BaseLink";
import dynamic from "next/dynamic";

import { ReactNode } from "react";
const ThemeToggle = dynamic(() => import("./ThemeToggle"), {
  ssr: false,
});

const links = [
  { id: 0, name: "Home", path: "/home" },
  { id: 1, name: "About", path: "/about" },
  { id: 2, name: "Projects", path: "/projects" },
  { id: 3, name: "Contact", path: "/contact" },
];

type NavbarLinkProps = {
  path: string;
  children: ReactNode;
};

function NavbarLinks({ path, children }: NavbarLinkProps) {
  return (
    <BaseLink className="hover:underline" href={path}>
      {children}
    </BaseLink>
  );
}

export default function Navbar() {
  return (
    <nav className="fixed top-0 shadow p-4 w-full mx-auto z-50 backdrop-blur-xl border-b border-violet-500/20">
      <div className="container mx-auto flex justify-between max-w-5xl px-4 md:px-8 items-center">
        {links.map((link) => (
          <NavbarLinks key={link.id} path={link.path}>
            {link.name}
          </NavbarLinks>
        ))}
        <ThemeToggle />
      </div>
    </nav>
  );
}
