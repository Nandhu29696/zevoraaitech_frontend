import Link from "next/link";
import { ArrowUpRight, Linkedin, Instagram, Facebook, MessageCircle } from "lucide-react";
import { navigation, company } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-intro">
          <p className="eyebrow">{company.name.toUpperCase()}</p>
          <h2>Build what matters next.</h2>
          <Link className="text-link" href="/contact">Start a conversation <ArrowUpRight size={17} /></Link>
        </div>
        <div className="footer-links">
          <p className="footer-label">Explore</p>
          {navigation.filter((item) => item.active_status !== false).slice(1).map((item) => (
            <Link href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </div>
        <div className="footer-links">
          <p className="footer-label">Connect</p>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <div className="footer-phone">
            <a
              href={`https://wa.me/${company.phone.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-whatsapp"
            >
              <MessageCircle size={12} />
              {company.phone}
            </a>
            <a
              href={`https://wa.me/${company.phone2.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-whatsapp"
            >
              <MessageCircle size={12} />
              {company.phone2}
            </a>
          </div>
          <div className="socials">
            <a href={company.social.linkedin} aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href={company.social.instagram} aria-label="Instagram"><Instagram size={18} /></a>
            <a href={company.social.facebook} aria-label="Facebook"><Facebook size={18} /></a>
          </div>
        </div>
        <div className="footer-links footer-legal-links">
          <p className="footer-label">Company</p>
           <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-conditions">Terms & Conditions</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>{company.copyright}</span>
        <span>{company.footerTagline}</span>
      </div>
    </footer>
  );
}

