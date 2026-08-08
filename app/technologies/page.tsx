import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { technologiesPage } from "@/data/site";

export const metadata = {
  title: "Technologies | Zevora AI Tech",
  description: "Explore the modern, battle-tested technology stack we use to build intelligent, scalable solutions.",
};

export default function TechnologiesPage() {
  return (
    <main className="interior-page">
      {/* Hero */}
      <section className="interior-hero">
        <div className="container">
          <p className="eyebrow">{technologiesPage.eyebrow}</p>
          <h1>{technologiesPage.title}</h1>
          <p className="interior-description">{technologiesPage.description}</p>
          <Link className="button" href="/contact">Work with us <ArrowRight size={17} /></Link>
        </div>
      </section>

      {/* Tech stack */}
      <section className="tech-section">
        <div className="container">
          <div className="tech-category-grid">
            {technologiesPage.categories.map((cat) => (
              <div className="tech-category" key={cat.title}>
                <h3>{cat.title}</h3>
                <div className="tech-tags">
                  {cat.items.map((item) => (
                    <span className="tech-tag" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="tech-philosophy">
            <h3>{technologiesPage.philosophy.heading}</h3>
            <p>{technologiesPage.philosophy.body}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <p className="eyebrow">Built on solid foundations</p>
            <h2>Let&apos;s build something<br /><em>that lasts.</em></h2>
          </div>
          <Link className="button button-light" href="/contact">Start a conversation <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </main>
  );
}

