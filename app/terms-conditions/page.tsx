import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | Suga S AI Tech",
  description: "Terms and conditions for Suga S AI Tech.",
};

export default function TermsConditionsPage() {
  return (
    <main className="interior-page">
      <section className="interior-hero">
        <div className="container">
          <Link className="text-link" href="/">
            <ArrowLeft size={16} /> Back home
          </Link>
          <p className="eyebrow">Terms & Conditions</p>
          <h1>Terms & Conditions</h1>
          <p className="interior-description">
            These terms govern the use of our website and the services we provide to clients and partners.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="legal-content">
            <p>
              By accessing this website, you agree to use it only for lawful purposes and in a way that does not infringe
              on the rights of others or interfere with the operation of the website.
            </p>
            <p>
              Suga S AI Tech provides consulting, software, AI, and digital transformation services subject to agreed scopes,
              timelines, and commercial terms set out in a formal proposal or contract.
            </p>
            <p>
              We reserve the right to update, modify, or discontinue services or website elements at any time without prior
              notice.
            </p>
            <p>
              Any content, branding, or intellectual property displayed on this website remains the property of Suga S AI
              Tech unless otherwise stated.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
