import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { servicesPage, services, process } from "@/data/site";

export const metadata = {
  title: "Services | Zevora AI Tech",
  description: "Explore our full range of AI, software, cloud, data, automation, and cybersecurity services.",
};

export default function ServicesPage() {
  return (
    <main className="interior-page">
      {/* Hero */}
      <section className="interior-hero">
        <div className="container">
          <p className="eyebrow">{servicesPage.eyebrow}</p>
          <h1>{servicesPage.title}</h1>
          <p className="interior-description">{servicesPage.description}</p>
          <Link className="button" href="/contact">Start a conversation <ArrowRight size={17} /></Link>
        </div>
      </section>

      {/* Services detail */}
      <section className="services-detail">
        <div className="container">
          <div className="service-detail-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div className="service-detail-card" key={service.title}>
                  <Icon size={32} strokeWidth={1.5} />
                  <h3>{service.title}</h3>
                  <p className="service-short-desc">{service.shortDescription}</p>
                  <p className="service-full-desc">{service.fullDescription}</p>
                  <ul className="service-highlights">
                    {service.highlights.map((h) => <li key={h}>{h}</li>)}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section process-section">
        <div className="container">
          <div className="center-heading">
            <p className="eyebrow">How we work</p>
            <h2>From first thought<br /><em>to full flight.</em></h2>
          </div>
          <div className="process-grid">
            {process.map(({ number, title, description }) => (
              <div className="process-step" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <p className="eyebrow">Start today</p>
            <h2>Let&apos;s find the right<br /><em>solution for you.</em></h2>
          </div>
          <Link className="button button-light" href="/contact">Get in touch <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </main>
  );
}

