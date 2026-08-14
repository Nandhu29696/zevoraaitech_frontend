import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { interiorTemplate } from "@/data/site";
import styles from "./InteriorPage.module.css";

export function InteriorPage({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <main className={styles.page}>
    <section className={styles.hero}>
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className={styles.description}>{description}</p>
        <Link className="button" href={interiorTemplate.ctaHref}>{interiorTemplate.primaryCtaLabel} <ArrowRight size={17} /></Link>
      </div>
    </section>
    <section className={styles.content}>
      <div className={`container ${styles.contentGrid}`}>
        <div>
          <p className="eyebrow">{interiorTemplate.companyEyebrow}</p>
          <h2>{interiorTemplate.heading} <em>{interiorTemplate.headingAccent}</em></h2>
        </div>
        <div>
          <p className={styles.contentText}>{interiorTemplate.body}</p>
          <Link className="text-link" href={interiorTemplate.ctaHref}>{interiorTemplate.secondaryCtaLabel} <ArrowUpRight size={17} /></Link>
        </div>
      </div>
    </section>
  </main>; 
}
