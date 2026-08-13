import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { industriesPage } from "@/data/site";

export const metadata = {
  title: "Industries | Suga S AI Tech",
  description: "AI and technology solutions tailored to manufacturing, healthcare, retail, finance, logistics, energy, education, and real estate.",
};

export default function IndustriesPage() {
  return (
    <main className="interior-page">
      {/* Hero */}
      <section className="interior-hero">
        <div className="container">
          <p className="eyebrow">{industriesPage.eyebrow}</p>
          <h1>{industriesPage.title}</h1>
          <p className="interior-description">{industriesPage.description}</p>
          <Link className="button" href="/contact">Talk to us <ArrowRight size={17} /></Link>
        </div>
      </section>

      {/* Industries grid */}
      <section className="industries-section">
        <div className="container">
          <div className="industries-grid">
            {industriesPage.industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <div className="industry-card" key={industry.title}>
                  <Icon size={28} strokeWidth={1.5} />
                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>
                </div>
              );
            })}
          </div>
          <p className="industries-note">{industriesPage.note}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <p className="eyebrow">Your industry, our focus</p>
            <h2>Let&apos;s talk about<br /><em>your specific needs.</em></h2>
          </div>
          <Link className="button button-light" href="/contact">Get in touch <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </main>
  );
}

