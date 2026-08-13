import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { services, stats } from "@/data/site";

export const metadata = {
  title: "Solutions | Suga S AI Tech",
  description: "Explore how Suga S AI Tech combines AI, cloud, software, and data to deliver end-to-end solutions for modern businesses.",
};

const caseAreas = [
  {
    label: "Digital Transformation",
    description: "End-to-end modernisation of legacy systems, workflows, and customer experiences using cloud-native architecture and AI.",
  },
  {
    label: "Intelligent Automation",
    description: "RPA, AI agents, and integration pipelines that eliminate manual effort and run reliably at any scale.",
  },
  {
    label: "Data-Driven Decisions",
    description: "Unified data platforms, BI dashboards, and predictive models that turn raw data into competitive advantage.",
  },
  {
    label: "AI-First Products",
    description: "Conversational AI, recommendation systems, and computer vision built into products your customers interact with every day.",
  },
];

export default function SolutionsPage() {
  return (
    <main className="interior-page">
      {/* Hero */}
      <section className="interior-hero">
        <div className="container">
          <p className="eyebrow">Solutions</p>
          <h1>Outcomes designed<br /><span>around your goals.</span></h1>
          <p className="interior-description">
            We combine our service capabilities into complete, integrated solutions that create real, measurable impact for the organisations we work with.
          </p>
          <Link className="button" href="/contact">Discuss your challenge <ArrowRight size={17} /></Link>
        </div>
      </section>

      {/* Solution areas */}
      <section className="section" style={{ background: "#090f1d" }}>
        <div className="container">
          <div className="center-heading">
            <p className="eyebrow">What we solve</p>
            <h2>Four areas where we<br /><em>deliver the most value.</em></h2>
          </div>
          <div className="values-grid">
            {caseAreas.map((area) => (
              <div className="value-card" key={area.label}>
                <h3>{area.label}</h3>
                <p>{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-band">
        <div className="container stats-grid">
          {stats.map(({ value, label, icon: Icon }) => (
            <div className="stat" key={label}>
              <Icon size={28} strokeWidth={1.5} />
              <div><strong>{value}</strong><span>{label}</span></div>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="services-detail">
        <div className="container">
          <div className="center-heading">
            <p className="eyebrow">Underlying capabilities</p>
            <h2>Built on six<br /><em>core practices.</em></h2>
          </div>
          <div className="service-detail-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div className="service-detail-card" key={service.title}>
                  <Icon size={32} strokeWidth={1.5} />
                  <h3>{service.title}</h3>
                  <p className="service-short-desc">{service.shortDescription}</p>
                  <ul className="service-highlights">
                    {service.highlights.map((h) => <li key={h}>{h}</li>)}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <p className="eyebrow">See it in action</p>
            <h2>Let&apos;s map the right<br /><em>solution for you.</em></h2>
          </div>
          <Link className="button button-light" href="/contact">Get in touch <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </main>
  );
}
