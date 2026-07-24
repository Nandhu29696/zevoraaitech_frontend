import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import styles from "./InteriorPage.module.css";

export function InteriorPage({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <main className={styles.page}>
    <section className={styles.hero}>
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className={styles.description}>{description}</p>
        <Link className="button" href="/contact">Start a conversation <ArrowRight size={17} /></Link>
      </div>
    </section>
    <section className={styles.content}>
      <div className={`container ${styles.contentGrid}`}>
        <div>
          <p className="eyebrow">Zevora AI Tech</p>
          <h2>Technology should create <em>momentum.</em></h2>
        </div>
        <div>
          <p className={styles.contentText}>We help ambitious teams turn complex challenges into clear, useful, and measurable digital products. Explore the page sections from the navigation above, then shape this area around the detail your audience needs.</p>
          <Link className="text-link" href="/contact">Talk to our team <ArrowUpRight size={17} /></Link>
        </div>
      </div>
    </section>
  </main>; 
}
