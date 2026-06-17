"use client";

import { ReactNode, useEffect, useState } from "react";
import BaseLink from "@/components/BaseLink";
import dynamic from "next/dynamic";
import { Menu, X } from "lucide-react";

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
  onClick?: () => void;
};

function NavbarLinks({ path, children, onClick }: NavbarLinkProps) {
  return (
    <BaseLink
      href={path}
      onClick={onClick}
      className="transition-colors hover:text-violet-500"
    >
      {children}
    </BaseLink>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className="fixed top-0 shadow p-4 w-full mx-auto z-50 backdrop-blur-xl border-b border-violet-500/20">
        <div className="container mx-auto flex justify-between max-w-5xl px-4 md:px-8 items-center">
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <NavbarLinks key={link.id} path={link.path}>
                {link.name}
              </NavbarLinks>
            ))}
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden  border rounded-md p-2 transition-colors hover:bg-muted"
          >
            <Menu size={18} />
          </button>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      <aside
        className={`fixed top-0 right-0 z-50 h-screen w-full
    border-l border-violet-500/20
    shadow-2xl
    backdrop-blur-xl

    bg-background/80
    bg-gradient-to-b
    from-violet-500/5
    to-transparent

    dark:from-violet-500/10

    text-foreground

    transition-transform duration-300 ease-out
    md:hidden
    ${isOpen ? "translate-x-0" : "translate-x-full"}
  `}
      >
        <div className="flex h-16 items-center justify-between border-b border-violet-500/20 px-6">
          <button
            aria-label="Close menu"
            onClick={closeMenu}
            className="rounded-md p-2 transition-colors hover:bg-violet-500/10"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col px-6 py-8">
          {links.map((link) => (
            <NavbarLinks key={link.id} path={link.path} onClick={closeMenu}>
              <span
                className="
            block
            rounded-lg
            px-4
            py-4
            text-xl
            font-medium
            transition-all
            duration-200
            hover:bg-violet-500/10
            hover:text-violet-500
          "
              >
                {link.name}
              </span>
            </NavbarLinks>
          ))}

          <div className="my-6 border-t border-violet-500/20" />

          <div className="flex items-center justify-between px-4">
            <span className="text-sm text-muted-foreground">Theme</span>

            <ThemeToggle />
          </div>
        </div>
      </aside>
    </>
  );
}
