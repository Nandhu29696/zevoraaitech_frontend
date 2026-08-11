"use client";

import { useState } from "react";
import {
  ArrowRight,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";

import { contactPage, company } from "@/data/site";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const name =
      (data.get("name") as string)?.trim() || "";

    const email =
      (data.get("email") as string)?.trim() || "";

    const companyName =
      (data.get("company") as string)?.trim() || "";

    const message =
      (data.get("message") as string)?.trim() || "";

    // Honeypot field
    const website =
      (data.get("website") as string)?.trim() || "";

    // -----------------------------
    // Validation
    // -----------------------------

    if (!name) {
      setError("Please enter your full name.");
      return;
    }

    if (name.length < 2) {
      setError("Please enter a valid name.");
      return;
    }

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!message) {
      setError("Please tell us how we can help.");
      return;
    }

    if (message.length < 10) {
      setError(
        "Please provide a little more detail about your project."
      );
      return;
    }

    // -----------------------------
    // Honeypot spam protection
    // -----------------------------

    if (website) {
      // Silently pretend the request succeeded
      setSubmitted(true);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          company: companyName,
          message,
          website,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error ||
            "Unable to submit your message."
        );
      }

      // -----------------------------
      // Success
      // -----------------------------

      setSubmitted(true);
      form.reset();

    } catch (error) {
      console.error("Contact form error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="interior-page">
      {/* Hero */}
      <section className="interior-hero">
        <div className="container">
          <p className="eyebrow">
            {contactPage.eyebrow}
          </p>

          <h1>{contactPage.title}</h1>

          <p className="interior-description">
            {contactPage.description}
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="contact-section">
        <div className="container contact-layout">

          {/* Form */}
          <div className="contact-form-wrapper">
            <h2>Send us a message</h2>

            {submitted ? (
              /* ---------------------------------
                 SUCCESS MESSAGE
              --------------------------------- */
              <div
                style={{
                  padding: "40px 0",
                }}
              >
                <p
                  className="eyebrow"
                  style={{
                    marginBottom: 12,
                  }}
                >
                  Message received
                </p>

                <p
                  style={{
                    color: "var(--muted)",
                    lineHeight: 1.7,
                    maxWidth: 460,
                  }}
                >
                  Thank you for reaching out. We
                  will review your message and get
                  back to you shortly.
                </p>

                <button
                  type="button"
                  className="button button-ghost"
                  style={{
                    marginTop: 24,
                  }}
                  onClick={() => {
                    setSubmitted(false);
                    setError("");
                  }}
                >
                  Send another message
                  <ArrowRight size={16} />
                </button>
              </div>
            ) : (
              <form
                className="contact-form"
                onSubmit={handleSubmit}
                noValidate
              >

                {/* ---------------------------------
                    HONEYPOT
                    Hidden from real users
                --------------------------------- */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "-9999px",
                    width: 1,
                    height: 1,
                    overflow: "hidden",
                  }}
                >
                  <label htmlFor="website">
                    Website
                  </label>

                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Name + Email */}
                <div className="form-row">

                  <div className="form-group">
                    <label htmlFor="name">
                      Full name *
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-input"
                      placeholder="Jane Smith"
                      autoComplete="name"
                      maxLength={100}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      Work email *
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-input"
                      placeholder="jane@company.com"
                      autoComplete="email"
                      maxLength={254}
                      required
                    />
                  </div>

                </div>

                {/* Company */}
                <div className="form-group">
                  <label htmlFor="company">
                    Company (optional)
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="form-input"
                    placeholder="Your company name"
                    autoComplete="organization"
                    maxLength={150}
                  />
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message">
                    How can we help? *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="Tell us about your project, challenge, or idea..."
                    autoComplete="off"
                    maxLength={5000}
                    rows={7}
                    required
                  />
                </div>

                {/* Error */}
                {error && (
                  <div
                    role="alert"
                    style={{
                      marginBottom: 20,
                      padding: "12px 16px",
                      borderRadius: 8,
                      background: "#fff1f2",
                      color: "#be123c",
                      border: "1px solid #fecdd3",
                      lineHeight: 1.5,
                    }}
                  >
                    {error}
                  </div>
                )}

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    className="button"
                    disabled={loading}
                    aria-busy={loading}
                    style={{
                      opacity: loading ? 0.7 : 1,
                      cursor: loading
                        ? "not-allowed"
                        : "pointer",
                    }}
                  >
                    {loading ? (
                      "Sending..."
                    ) : (
                      <>
                        Send message
                        <ArrowRight size={17} />
                      </>
                    )}
                  </button>
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
                  <p className="contact-item-label">
                    {item.label}
                  </p>

                  <p className="contact-item-value">
                    {item.href ? (
                      <a href={item.href}>
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </p>
                </div>
              ))}
            </div>

            <div className="contact-divider" />

            <p className="contact-social-label">
              Follow us
            </p>

            <div className="socials">
              <a
                href={company.social.linkedin}
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>

              <a
                href={company.social.instagram}
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>

              <a
                href={company.social.facebook}
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}