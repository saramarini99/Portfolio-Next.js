"use client";

import BaseLink from "@/components/BaseLink";
// import ThemeToggle from "./ThemeToggle";
import dynamic from 'next/dynamic';

import { ReactNode } from "react";
const ThemeToggle = dynamic(() => import('./ThemeToggle'), {
  ssr: false,
});
const links = [
  { id: 0, name: "Home", path: "/home" },
  { id: 1, name: "About", path: "/about" },
  { id: 2, name: "Projects", path: "/projects" },
  { id: 3, name: "Contact", path: "/home" },
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
    <nav className="shadow p-4 fixed w-full max-w-1200px mx-auto">
      <div className="container  px-4 mx-auto flex justify-between items-center">
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
