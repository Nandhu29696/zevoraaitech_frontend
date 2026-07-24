import Link from "next/link";
import { ArrowUpRight, Linkedin, Instagram, Facebook } from "lucide-react";
import { navigation } from "@/data/site";

export function Footer() {
  return <footer className="site-footer">
    <div className="container footer-grid">
      <div className="footer-intro"><p className="eyebrow">ZEVORA AI TECH</p><h2>Build what matters next.</h2><Link className="text-link" href="/contact">Start a conversation <ArrowUpRight size={17} /></Link></div>
      <div className="footer-links"><p className="footer-label">Explore</p>{navigation.slice(1).map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</div>
      <div className="footer-links"><p className="footer-label">Connect</p><a href="mailto:hello@zevora.ai">hello@zevora.ai</a><a href="tel:+910000000000">+91 00000 00000</a><div className="socials"><a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a><a href="#" aria-label="Instagram"><Instagram size={18} /></a><a href="#" aria-label="Facebook"><Facebook size={18} /></a></div></div>
    </div>
    <div className="container footer-bottom"><span>© 2026 Zevora AI Tech Private Limited</span><span>Innovating the future with AI.</span></div>
  </footer>;
}
