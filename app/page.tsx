"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { homePage, services, featuredProjects, stats, process, principles, faqs } from "@/data/site";

const featuredProjectItems = Array.isArray(featuredProjects) ? featuredProjects : [];

const reveal = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } };

export default function HomePage() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-grid-glow" />
        <div className="container hero-content">
          <motion.div className="hero-copy" initial="hidden" animate="visible" transition={{ duration: 0.7 }} variants={reveal}>
            <p className="eyebrow">{homePage.hero.eyebrow}</p>
            <h1>
              <span className="hero-title-main">{homePage.hero.heading}</span><br />
              <div className="hero-title-accent">
                <span className="hero-title-intelligent">{homePage.hero.headingAccent}</span>
                <span className="hero-title-tomorrow">{homePage.hero.headingAccent_sub}</span>
              </div>
            </h1>
            <p className="hero-description">{homePage.hero.description}</p>
            <div className="hero-actions">
              <Link className="button" href={homePage.hero.cta1.href}>{homePage.hero.cta1.label} <ArrowRight size={17} /></Link>
              <Link className="button button-ghost" href={homePage.hero.cta2.href}>{homePage.hero.cta2.label} <ArrowUpRight size={17} /></Link>
            </div>
            <div className="hero-note"><span className="pulse-dot" /> {homePage.hero.note}</div>
            <div className="hero-trust">
              <span>AI strategy</span>
              <span>Cloud systems</span>
              <span>Automation</span>
            </div>
          </motion.div>
          <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.15 }}>
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <Image src="/images/hero-image.png" alt="Zevora AI Tech logo" width={720} height={720} priority className="hero-logo" />
            <div className="visual-caption"><span>AI / 01</span><span>Future systems, built now</span></div>
          </motion.div>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">What we do</p>
              <h2>Intelligent solutions for modern business growth</h2>
            </div>
            <p>We combine strategic thinking, engineering depth, and AI capability to build systems that create measurable operational advantage.</p>
          </div>
          <motion.div className="service-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} transition={{ staggerChildren: 0.08 }}>
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.article className="service-card" variants={reveal} key={service.title}>
                  <div className="service-icon-wrap"><Icon size={38} strokeWidth={1.4} /></div>
                  <h3>{service.title}</h3>
                  <p>{service.shortDescription}</p>
                  <div className="service-meta">
                    {service.highlights.slice(0, 2).map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <Link href="/services" className="card-link">Learn more <ArrowRight size={16} /></Link>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="section delivery-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{homePage.globalDelivery.eyebrow}</p>
              <h2>{homePage.globalDelivery.heading}</h2>
            </div>
            <p>{homePage.globalDelivery.intro}</p>
          </div>

          <div className="delivery-grid">
            {homePage.globalDelivery.items.map((item) => (
              <article className="delivery-card" key={item.title}>
                <span className="delivery-index">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section projects-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Featured work</p>
              <h2>Projects we&apos;ve built and shipped</h2>
            </div>
            <p>We create practical, high-impact solutions that combine product thinking, smart engineering, and real-world deployment.</p>
          </div>

          <div className="project-grid">
            {featuredProjectItems.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-top">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-tags">
                  {project.tech.map((item) => <span key={item}>{item}</span>)}
                </div>
                <a className="card-link" href={project.demoUrl} target={project.demoUrl.startsWith("http") ? "_blank" : undefined} rel={project.demoUrl.startsWith("http") ? "noreferrer" : undefined}>
                  Discuss this engagement <ArrowUpRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="stats-band">
        <div className="container stats-grid">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div className="stat" key={stat.label}>
                <Icon size={28} strokeWidth={1.5} />
                <div><strong>{stat.value}</strong><span>{stat.label}</span></div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section split-section">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">{homePage.why.eyebrow}</p>
            <h2>{homePage.why.heading}<br /><em>{homePage.why.headingAccent}</em></h2>
            <p className="large-copy">{homePage.why.body}</p>
            <Link className="text-link" href={homePage.why.ctaHref}>{homePage.why.ctaLabel} <ArrowUpRight size={17} /></Link>
          </div>
          <div className="principles">
            {principles.map(({ number, title, description }) => (
              <div key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="center-heading">
            <p className="eyebrow">The way we work</p>
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

      <section className="section faq-section">
        <div className="container faq-grid">
          <div>
            <p className="eyebrow">A few answers</p>
            <h2>Start with<br /><em>what matters.</em></h2>
            <Link className="button button-ghost" href="/contact">Talk to our team <ArrowRight size={17} /></Link>
          </div>
          <div className="faq-list">
            {faqs.map(({ question, answer }) => (
              <details key={question}>
                <summary>{question}<ChevronDown size={18} /></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <p className="eyebrow">{homePage.cta.eyebrow}</p>
            <h2>{homePage.cta.heading}<br />
              <em>{homePage.cta.headingAccent}</em></h2>
          </div>
          <Link className="button button-light" href={homePage.cta.ctaHref}>{homePage.cta.ctaLabel} <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </main>
  );
}
