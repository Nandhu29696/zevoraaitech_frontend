import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Suga S AI Tech",
  description: "Privacy Policy for Suga S AI Tech.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="interior-page">
      <section className="interior-hero">
        <div className="container">
          <Link className="text-link" href="/">
            <ArrowLeft size={16} /> Back home
          </Link>
          <p className="eyebrow">Privacy Policy</p>
          <h1>Privacy Policy</h1>
          <p className="interior-description">
            We value your privacy and are committed to protecting the personal information you share with us.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 900 }}>
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
              We may use trusted third-party tools to support communication, analytics, or service delivery, but only under
              appropriate confidentiality obligations.
            </p>
            <p>
              You may contact us at any time to request access, correction, or deletion of your personal information.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
