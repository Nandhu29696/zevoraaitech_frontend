import React from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, BrainCircuit, ChevronDown, Cloud, Code2, Globe2, Menu, Settings2, ShieldCheck, Users, X } from 'lucide-react';
import './styles.css';

const services = [
  [BrainCircuit, 'Artificial Intelligence', 'AI-powered solutions to help you automate, predict, and make smarter decisions.'],
  [Code2, 'Software Development', 'Custom software, web and mobile applications built for performance and scale.'],
  [Cloud, 'Cloud Solutions', 'Scalable, secure, and cost-effective cloud solutions for modern businesses.'],
  [BarChart3, 'Data Analytics', 'Transform your data into actionable insights and drive better outcomes.'],
  [Settings2, 'Automation Solutions', 'Streamline workflows and reduce operational costs with intelligent automation.'],
  [ShieldCheck, 'Cybersecurity', 'Protect your business with advanced security solutions and monitoring.'],
];
const metrics = [['50+', 'Happy Clients', Users], ['120+', 'Projects Delivered', Code2], ['25+', 'Expert Professionals', ShieldCheck], ['5+', 'Countries Served', Globe2]];
const industries = ['Healthcare', 'Financial Services', 'Manufacturing', 'Retail & Commerce', 'Education', 'Public Sector'];

function Brand() {
  return <a className="brand" href="#top" aria-label="Zevora home"><span className="brand-symbol">Z</span><span className="brand-copy"><strong>ZEVORA</strong><small>AI TECH</small></span></a>;
}
function HeroVisual() {
  return <div className="hero-visual" aria-label="Zevora AI technology mark"><div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" /><div className="visual-orbit orbit-three" /><div className="visual-core"><span className="core-pulse" /><strong>Z</strong><span className="core-ai">AI</span></div><div className="visual-label label-top"><span className="status-dot" /> SYSTEMS ONLINE</div><div className="visual-label label-bottom">ZEVORA AI <span>↗</span></div><div className="node node-a"><Code2 size={15} /></div><div className="node node-b"><Globe2 size={15} /></div><div className="node node-c"><BrainCircuit size={15} /></div></div>;
}
function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [activeService, setActiveService] = React.useState(0);
  const closeMenu = () => setMenuOpen(false);
  return <main>
    <div className="ambient-grid" />
    <nav className="nav shell"><Brand /><div className={`nav-links ${menuOpen ? 'is-open' : ''}`}><a className="active" href="#top" onClick={closeMenu}>Home</a><a href="#about" onClick={closeMenu}>About Us</a><a href="#services" onClick={closeMenu}>Services <ChevronDown size={12} /></a><a href="#industries" onClick={closeMenu}>Industries</a><a href="#solutions" onClick={closeMenu}>Solutions</a><a href="#technologies" onClick={closeMenu}>Technologies</a><a href="#contact" onClick={closeMenu}>Careers</a><a href="#contact" onClick={closeMenu}>Contact Us</a><a className="nav-contact" href="#contact" onClick={closeMenu}>Get In Touch <ArrowRight size={15} /></a></div><button className="menu-button" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></nav>
    <section className="hero shell" id="top"><div className="hero-copy"><motion.div className="eyebrow" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>INNOVATE <b>•</b> AUTOMATE <b>•</b> ELEVATE</motion.div><motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 }}>Innovating Today,<br />Intelligent <em>Tomorrow.</em></motion.h1><motion.p className="hero-text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .35 }}>Zevora AI Tech Private Limited delivers next-gen IT & AI solutions that empower businesses to innovate, automate, and scale in a rapidly evolving digital world.</motion.p><motion.div className="hero-actions" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1 }} transition={{ delay: .5 }}><a className="button button-primary" href="#services">Explore Our Services <ArrowRight size={17} /></a><a className="button button-outline" href="#about">About Our Company <ArrowRight size={17} /></a></motion.div></div><HeroVisual /><div className="hero-foot"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /><span>EST. 2024</span></div></section>
    <section className="signal-strip"><div className="shell signal-inner"><span>Trusted technology partner</span><div className="signal-items"><span>● AI-native thinking</span><span>● Human-centered design</span><span>● Built to scale</span></div></div></section>
    <section className="section shell" id="services"><div className="section-heading centered"><div><div className="eyebrow">WHAT WE DO</div><h2>Intelligent Solutions For Your Business</h2><p>We combine technology, creativity, and intelligence to build solutions that drive growth, efficiency, and excellence.</p></div></div><div className="services-grid">{services.map(([Icon, title, text], index) => <motion.article className={`service-card ${activeService === index ? 'active' : ''}`} key={title} onMouseEnter={() => setActiveService(index)} whileHover={{ y: -6 }}><div className="card-top"><Icon size={42} strokeWidth={1.35} /></div><h3>{title}</h3><p>{text}</p><a href="#contact" className="card-link">Learn More <ArrowRight size={15} /></a></motion.article>)}</div><div className="metrics-strip">{metrics.map(([value, label, Icon]) => <div className="metric" key={label}><Icon size={34} strokeWidth={1.4} /><div><strong>{value}</strong><span>{label}</span></div></div>)}</div></section>
    <section className="section section-dark" id="about"><div className="shell about-layout"><div className="about-statement"><div className="eyebrow">WHY ZEVORA</div><h2>Technology that creates <span>real impact.</span></h2></div><div className="about-detail"><p className="large-copy">We help ambitious organizations turn complex challenges into intelligent systems, products, and progress.</p><p className="about-text">From strategy to execution, our team brings deep technical expertise and a practical understanding of business to every engagement.</p></div></div></section>
    <section className="section shell" id="technologies"><div className="section-heading approach-heading"><div><div className="eyebrow">OUR TECHNOLOGIES</div><h2>Built with the <span>best.</span></h2></div><p>We work with proven platforms and modern tools to deliver dependable technology that grows with your business.</p></div><div className="tech-pills"><span>Microsoft Azure</span><span>OpenAI</span><span>Python</span><span>React</span><span>Cloud Native</span><span>Data Platforms</span></div></section>
    <section className="section shell industries" id="industries"><div className="industries-top"><div><div className="eyebrow">INDUSTRIES WE SERVE</div><h2>Solutions for every <span>challenge.</span></h2></div><Globe2 className="globe-icon" size={82} strokeWidth={.7} /></div><div className="industry-grid">{industries.map((industry, index) => <a className="industry-item" href="#contact" key={industry}><span>0{index + 1}</span><strong>{industry}</strong><ArrowRight size={17} /></a>)}</div></section>
    <section className="contact-section" id="contact"><div className="shell contact-inner"><div><div className="eyebrow">YOUR NEXT MOVE</div><h2>Let’s make<br /><em>something matter.</em></h2></div><div className="contact-cta"><p>Have a big question, an early idea, or a problem that refuses to stay small?</p><a className="button button-light" href="mailto:hello@zevora.ai">hello@zevora.ai <ArrowRight size={17} /></a></div></div></section>
    <footer className="footer shell"><Brand /><div className="footer-links"><span>© 2026 Zevora AI Tech</span><a href="#top">LinkedIn ↗</a><a href="#top">Instagram ↗</a><a href="#top">Privacy</a></div><a className="back-top" href="#top">Back to top <ChevronDown size={15} className="up-chevron" /></a></footer>
  </main>;
}
createRoot(document.getElementById('root')).render(<App />);
