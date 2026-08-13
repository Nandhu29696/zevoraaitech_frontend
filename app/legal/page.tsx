import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy & Terms | Suga S AI Tech",
  description: "Privacy Policy and Terms & Conditions for Suga S AI Tech.",
};

export default function LegalPage() {
  return (
    <main className="interior-page">
      <section className="interior-hero">
        <div className="container">
          <Link className="text-link" href="/">
            <ArrowLeft size={16} /> Back home
          </Link>
          <p className="eyebrow">Legal</p>
          <h1>Privacy Policy & Terms</h1>
          <p className="interior-description">
            Our commitment to your privacy and the terms governing your use of our services.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 900 }}>
          {/* Privacy Policy Section */}
          <div id="privacy-policy" style={{ marginBottom: 60 }}>
            <h2 style={{ marginBottom: 24, color: "var(--white)" }}>Privacy Policy</h2>
            <div className="legal-content">
              <p>
                Suga S AI Tech collects personal information such as name, email address, phone number, company name,
                and project details when you contact us or use our services.
              </p>
              <p>
                This information is used to respond to inquiries, understand your requirements, and provide the requested
                products and services. We do not sell or rent your personal information to third parties.
              </p>
              <p>
                We may use trusted third-party tools to support communication, analytics, or service delivery, but only
                under appropriate confidentiality obligations.
              </p>
              <p>
                You may contact us at any time to request access, correction, or deletion of your personal information.
              </p>
            </div>
          </div>

          {/* Terms & Conditions Section */}
          <div id="terms-conditions">
            <h2 style={{ marginBottom: 24, color: "var(--white)" }}>Terms & Conditions</h2>
            <div className="legal-content">
              <p>
                By accessing this website, you agree to use it only for lawful purposes and in a way that does not
                infringe on the rights of others or interfere with the operation of the website.
              </p>
              <p>
                Suga S AI Tech provides consulting, software, AI, and digital transformation services subject to agreed
                scopes, timelines, and commercial terms set out in a formal proposal or contract.
              </p>
              <p>
                We reserve the right to update, modify, or discontinue services or website elements at any time without
                prior notice.
              </p>
              <p>
                Any content, branding, or intellectual property displayed on this website remains the property of Suga S
                AI Tech unless otherwise stated.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
