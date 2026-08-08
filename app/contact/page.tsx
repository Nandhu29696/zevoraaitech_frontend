"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Linkedin, Instagram, Facebook } from "lucide-react";
import { contactPage, company } from "@/data/site";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const message = (data.get("message") as string)?.trim();
    if (!name || !email || !message) return;
    setSubmitted(true);
  }

  return (
    <main className="interior-page">
      {/* Hero */}
      <section className="interior-hero">
        <div className="container">
          <p className="eyebrow">{contactPage.eyebrow}</p>
          <h1>{contactPage.title}</h1>
          <p className="interior-description">{contactPage.description}</p>
        </div>
      </section>

      {/* Contact section */}
      <section className="contact-section">
        <div className="container contact-layout">
          {/* Form */}
          <div className="contact-form-wrapper">
            <h2>Send us a message</h2>
            {submitted ? (
              <div style={{ padding: "40px 0" }}>
                <p className="eyebrow" style={{ marginBottom: 12 }}>Message received</p>
                <p style={{ color: "var(--muted)", lineHeight: 1.7, maxWidth: 460 }}>
                  Thank you for reaching out. We will review your message and get back to you shortly.
                </p>
                <button
                  className="button button-ghost"
                  style={{ marginTop: 24 }}
                  onClick={() => setSubmitted(false)}
                >
                  Send another message <ArrowRight size={16} />
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full name *</label>
                    <input id="name" name="name" type="text" className="form-input" placeholder="Jane Smith" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Work email *</label>
                    <input id="email" name="email" type="email" className="form-input" placeholder="jane@company.com" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company (optional)</label>
                  <input id="company" name="company" type="text" className="form-input" placeholder="Your company name" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">How can we help? *</label>
                  <textarea id="message" name="message" className="form-textarea" placeholder="Tell us about your project, challenge, or idea..." required />
                </div>
                <div>
                  <button type="submit" className="button">Send message <ArrowRight size={17} /></button>
                </div>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="contact-info-col">
            <h2>Or reach us directly</h2>
            <div className="contact-items">
              {contactPage.infoItems.map((item) => (
                <div key={item.label}>
                  <p className="contact-item-label">{item.label}</p>
                  <p className="contact-item-value">
                    {item.href ? <a href={item.href}>{item.value}</a> : item.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="contact-divider" />
            <p className="contact-social-label">Follow us</p>
            <div className="socials">
              <a href={company.social.linkedin} aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href={company.social.instagram} aria-label="Instagram"><Instagram size={18} /></a>
              <a href={company.social.facebook} aria-label="Facebook"><Facebook size={18} /></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

