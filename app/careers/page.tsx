import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { careersPage, company } from "@/data/site";

export const metadata = {
  title: "Careers | Zevora AI Tech",
  description: "Join the Zevora AI Tech team. Explore open roles and build technology that matters.",
};

export default function CareersPage() {
  return (
    <main className="interior-page">
      {/* Hero */}
      <section className="interior-hero">
        <div className="container">
          <p className="eyebrow">{careersPage.eyebrow}</p>
          <h1>{careersPage.title}</h1>
          <p className="interior-description">{careersPage.description}</p>
          <Link className="button" href="#open-roles">View open roles <ArrowRight size={17} /></Link>
        </div>
      </section>

      {/* Culture */}
      <section className="culture-section">
        <div className="container">
          <div className="center-heading">
            <p className="eyebrow">Life at Zevora</p>
            <h2>Why people choose <em>to work here.</em></h2>
          </div>
          <div className="culture-grid">
            {careersPage.culture.map((point) => (
              <div className="culture-card" key={point.title}>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="roles-section" id="open-roles">
        <div className="container">
          <div className="center-heading">
            <p className="eyebrow">Open positions</p>
            <h2>Find your <em>next challenge.</em></h2>
          </div>
          <div className="roles-list">
            {careersPage.roles.map((role) => (
              <div className="role-card" key={role.title}>
                <div className="role-info">
                  <h3>{role.title}</h3>
                  <p>{role.description}</p>
                </div>
                <div className="role-meta">
                  <span className="role-badge">{role.type}</span>
                  <span className="role-location"><MapPin size={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />{role.location}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="careers-note">
            {careersPage.applicationNote}{" "}
            <a href={`mailto:${company.email}`}>Send us your CV at {company.email}</a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <p className="eyebrow">Shape what&apos;s next</p>
            <h2>Bring your skills.<br /><em>We&apos;ll do the rest.</em></h2>
          </div>
          <Link className="button button-light" href="/contact">Get in touch <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </main>
  );
}

