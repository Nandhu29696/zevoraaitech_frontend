import Link from "next/link";
import { ArrowRight, ArrowUpRight, Linkedin } from "lucide-react";
import { aboutPage, stats } from "@/data/site";

export const metadata = {
    title: "About | Zevora AI Tech",
    description: "Learn about Zevora AI Tech's mission, values, and the leadership team behind our work.",
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
                <div className="container">
                    <div className="center-heading">
                        <p className="eyebrow">Leadership</p>
                        <h2>The people <em>behind the work.</em></h2>
                    </div>
                    <div className="team-grid">
                        {aboutPage.team.map((member) => (
                            <div className="team-card" key={member.name}>
                                <div className="member-avatar">{member.initials}</div>
                                <div className="member-info">
                                    <h3>{member.name}</h3>
                                    <p className="member-role">{member.role}</p>
                                    <p className="member-bio">{member.bio}</p>
                                    <a href={member.linkedin} className="member-linkedin" aria-label={`Connect with ${member.name} on LinkedIn`}>
                                        <Linkedin size={15} /> LinkedIn
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
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

