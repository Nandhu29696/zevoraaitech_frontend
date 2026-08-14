import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { legalPage } from "@/data/site";

export const metadata = {
  title: "Privacy Policy & Terms | Suga S AI Tech",
  description: "Privacy Policy and Terms & Conditions for Suga S AI Tech.",
};

export default function LegalPage() {
  return (
    <main className="interior-page">
      <section className="interior-hero">
        <div className="container">
           <p className="eyebrow">{legalPage.eyebrow}</p>
          <h1>{legalPage.title}</h1>
          <p className="interior-description">{legalPage.description}</p>
        </div>
      </section>

      {legalPage.sections.map((section) => (
        <section id={section.id} className="section" key={section.id}>
          <div className="container" style={{ maxWidth: 900 }}>
            <div className="legal-content">
              <h2>{section.heading}</h2>
              <ul>
                {section.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
