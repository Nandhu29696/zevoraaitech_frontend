"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronDown, Play, Sparkles } from "lucide-react";
import { services, stats, process, faqs } from "@/data/site";

const reveal = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } };

export default function HomePage() {
  return <main>
    <section className="hero-section">
      <div className="hero-grid-glow" />
      <div className="container hero-content">
        <motion.div className="hero-copy" initial="hidden" animate="visible" transition={{ duration: .7 }} variants={reveal}>
          <p className="eyebrow"><Sparkles size={14} /> Innovate · Automate · Elevate</p>
          <h1>Innovating today,<br /><span>intelligent tomorrow.</span></h1>
          <p className="hero-description">Zevora AI Tech delivers next-gen IT and AI solutions that empower businesses to innovate, automate, and scale in a rapidly evolving digital world.</p>
          <div className="hero-actions"><Link className="button" href="/services">Explore our services <ArrowRight size={17} /></Link><Link className="button button-ghost" href="/about">About our company <ArrowUpRight size={17} /></Link></div>
          <div className="hero-note"><span className="pulse-dot" /> Trusted technology partner for forward-thinking teams</div>
        </motion.div>
        <motion.div className="hero-visual" initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .15 }}>
          <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
          <Image src="/images/hero-image.png" alt="Zevora AI Tech logo" width={720} height={720} priority className="hero-logo" />
          <div className="visual-caption"><span>AI / 01</span><span>Future systems, built now</span></div>
        </motion.div>
      </div>
    </section>

    <section className="section services-section" id="services">
      <div className="container"><div className="section-heading"><div><p className="eyebrow">What we do</p><h2>Intelligent solutions<br /><em>for your business.</em></h2></div><p>We combine technology, creativity, and intelligence to build solutions that drive growth, efficiency, and excellence.</p></div>
        <motion.div className="service-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .15 }} transition={{ staggerChildren: .08 }}>{services.map((service) => { const Icon = service.icon; return <motion.article className="service-card" variants={reveal} key={service.title}><Icon size={29} strokeWidth={1.5} /><h3>{service.title}</h3><p>{service.description}</p><Link href="/services" className="card-link">Learn more <ArrowRight size={16} /></Link></motion.article>; })}</motion.div>
      </div>
    </section>

    <section className="stats-band">
      <div className="container stats-grid">{stats.map((stat) => { const Icon = stat.icon; return <div className="stat" key={stat.label}><Icon size={28} strokeWidth={1.5} /><div><strong>{stat.value}</strong><span>{stat.label}</span></div></div>; })}</div></section>

    <section className="section split-section"><div className="container split-grid"><div><p className="eyebrow">Why Zevora</p><h2>Complex ideas.<br /><em>Clear outcomes.</em></h2><p className="large-copy">The best technology feels simple to the people using it. We bring sharp thinking, practical engineering, and a human point of view to every engagement.</p><Link className="text-link" href="/about">Meet our approach <ArrowUpRight size={17} /></Link></div><div className="principles"><div><span>01</span><h3>Curious by default</h3><p>We ask better questions before we write a line of code.</p></div><div><span>02</span><h3>Built for momentum</h3><p>Small, thoughtful decisions compound into products that last.</p></div><div><span>03</span><h3>Outcomes over noise</h3><p>Every recommendation connects back to the work that matters.</p></div></div></div></section>

    <section className="section process-section"><div className="container"><div className="center-heading"><p className="eyebrow">The way we work</p><h2>From first thought<br /><em>to full flight.</em></h2></div><div className="process-grid">{process.map(([number, title, text]) => <div className="process-step" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>

    <section className="section faq-section"><div className="container faq-grid"><div><p className="eyebrow">A few answers</p><h2>Start with<br /><em>what matters.</em></h2><Link className="button button-ghost" href="/contact">Talk to our team <ArrowRight size={17} /></Link></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown size={18} /></summary><p>{answer}</p></details>)}</div></div></section>

    <section className="cta-section"><div className="container cta-inner"><div><p className="eyebrow">Ready when you are</p><h2>Let’s make the<br /><em>next move intelligent.</em></h2></div><Link className="button button-light" href="/contact">Get in touch <ArrowUpRight size={17} /></Link></div></section>
  </main>;
}
