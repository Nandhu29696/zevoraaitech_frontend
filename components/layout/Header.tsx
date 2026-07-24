"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { navigation } from "@/data/site";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Zevora AI Tech home" onClick={() => setIsOpen(false)}>
          <Image src="/images/logo.png" alt="Zevora AI Tech" width={170} height={106} priority />
        </Link>
        <nav className={`main-nav ${isOpen ? "is-open" : ""}`} aria-label="Main navigation">
          {navigation.map((item) => <Link href={item.href} key={item.href} onClick={() => setIsOpen(false)}>{item.label}</Link>)}
        </nav>
        <Link className="button button-small header-cta" href="/contact">Get in touch <ArrowUpRight size={16} /></Link>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setIsOpen(!isOpen)}><Menu size={22} /></button>
      </div>
    </header>
  );
}
