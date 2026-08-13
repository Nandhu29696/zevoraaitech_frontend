import ProtectedImage from "@/components/ProtectedImage";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Linkedin, MessageCircle } from "lucide-react";
import { aboutPage, company, stats } from "@/data/site";

export const metadata = {
    title: "About | Suga S AI Tech",
    description: "Learn about Suga S AI Tech's mission, values, and the leadership team behind our work.",
};

export default function AboutPage() {
    return (
        <main className="interior-page">
            {/* Hero */}
            <section className="interior-hero">
                <div className="container">
                    <p className="eyebrow">{aboutPage.eyebrow}</p>
                    <h1>{aboutPage.title}</h1>
                    <p className="interior-description">{aboutPage.description}</p>
                    <Link className="button" href="/contact">Start a conversation <ArrowRight size={17} /></Link>
                </div>
            </section>

            {/* Mission */}
            <section className="about-mission">
                <div className="container mission-grid">
                    <div className="mission-text">
                        <p className="eyebrow">{aboutPage.motive.eyebrow}</p>
                        <h2>{aboutPage.motive.heading}<br />
                            <em>{aboutPage.motive.headingAccent}</em></h2>
                    </div>
                    <div className="mission-paragraphs">
                        {aboutPage.motive.paragraphs.map((para, i) => (
                            <p key={i}>{para}</p>
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

            {/* Values */}
            <section className="values-section">
                <div className="container">
                    <div className="center-heading">
                        <p className="eyebrow">What guides us</p>
                        <h2>Our values, <em>in practice.</em></h2>
                    </div>
                    <div className="values-grid">
                        {aboutPage.values.map((value) => (
                            <div className="value-card" key={value.number}>
                                <span className="v-number">{value.number}</span>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="team-section">
                <div className="container leadership-grid">
                    {aboutPage.team.map((member, index) => (
                        <article className={`leader-card ${index === 0 ? "leader-card-primary" : "leader-card-secondary"}`} key={member.name}>
                            <div className="leader-portrait">
                                <ProtectedImage
                                    src={member.image}
                                    alt={member.name}
                                    width={620}
                                    height={760}
                                    priority={index === 0}
                                    className="leader-image"
                                />
                            </div>

                            <div className="leader-content">
                                {index === 0 && (
                                    <div className="leader-badge">
                                        <span className="leader-badge-icon">★</span>
                                        <span>Leading the Company</span>
                                    </div>
                                )}

                                <div className="leader-heading">
                                    <h3>{member.name}</h3>

                                    <p className="leader-role">
                                        {member.role}
                                    </p>
                                </div>

                                <p className="leader-copy">
                                    {member.bio}
                                </p>

                                <div className="leader-actions">
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="leader-link"
                                        aria-label={`Connect with ${member.name} on LinkedIn`}
                                    >
                                        <span className="linkedin-mark">in</span>
                                        <span>LinkedIn</span>
                                        <span className="leader-link-arrow">↗</span>
                                    </a>
                                    <a
                                        href={`https://wa.me/${(index === 0 ? company.phone : company.phone2).replace(/\D/g, "")}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="leader-link"
                                        aria-label={`Contact ${member.name} on WhatsApp`}
                                    >
                                        <MessageCircle size={10} className="whatsapp-mark" />
                                        <span>WhatsApp</span>
                                        <span className="leader-link-arrow">↗</span>
                                    </a>
                                </div>

                                {member.features && (
                                    <div className="leader-features">
                                        {member.features.map((f) => {
                                            const Icon = f.icon as any;
                                            return (
                                                <div className="leader-feature" key={f.title}>
                                                    <div className="leader-feature-icon"><Icon size={18} /></div>
                                                    <div className="leader-feature-text">
                                                        <strong>{f.title}</strong>
                                                        <p>{f.description}</p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}

                                {index === 0 && member.summary && (
                                    <div className="leader-summary">
                                        <div className="leader-summary-icon">
                                            ✦
                                        </div>

                                        <div className="leader-summary-content">
                                            <strong>Overall Leadership</strong>
                                            <p>{member.summary}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <div className="container cta-inner">
                    <div>
                        <p className="eyebrow">Work with us</p>
                        <h2>Ready to build<br /><em>something great?</em></h2>
                    </div>
                    <Link className="button button-light" href="/contact">Get in touch <ArrowUpRight size={17} /></Link>
                </div>
            </section>
        </main>
    );
}

