"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { navigation } from "@/data/site";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);
  const safePathname = pathname ?? "/";  

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Suga S AI Tech home" onClick={closeMenu}>
          <Image src="/images/logo.png" alt="Suga S AI Tech" 
          width={170} height={70} priority />
        </Link>

        <nav className={`main-nav ${isOpen ? "is-open" : ""}`} aria-label="Main navigation">
          {navigation
            .filter((item) => item.active_status !== false)
            .map((item) => {
              const isActive =
                item.href === "/"
                  ? safePathname === "/"
                  : safePathname === item.href || safePathname.startsWith(`${item.href}/`);

              return (
                <Link
                  href={item.href}
                  key={item.href}
                  className={isActive ? "nav-active" : ""}
                  onClick={closeMenu}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
        </nav>

        <Link className="button button-small header-cta" href="/contact" onClick={closeMenu}>
          Get in touch <ArrowUpRight size={16} />
        </Link>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setIsOpen(!isOpen)}>
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
}
