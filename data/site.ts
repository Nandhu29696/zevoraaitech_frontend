import {
  BarChart3, BrainCircuit, Cloud, Code2, Cog, ShieldCheck,
  Users, BriefcaseBusiness, Award, Globe2,
  Factory, Heart, ShoppingCart, Building2, Truck, Zap, GraduationCap, Landmark,
  type LucideIcon,
} from "lucide-react";

// ─── Company ──────────────────────────────────────────────────────────────────

export const company = {
  name: "Zevora AI Tech",
  legalName: "Zevora AI Tech ",
  email: "hello@zevora.ai",
  phone: "+91 95978 95084",
  phone2: "+91 63856 92143",
  location: "Coimbatore, India",
  copyright: `© ${new Date().getFullYear()} Zevora AI Tech `,
  footerTagline: "Building practical AI products for growth.",
  social: { linkedin: "#", instagram: "#", facebook: "#" },
};

// ─── Navigation ──────────────────────────────────────────────────────────────

export const navigation = [
  { label: "Home", href: "/", active_status: true },
  { label: "About Us", href: "/about", active_status: true },
  { label: "Services", href: "/services", active_status: true },
  { label: "Industries", href: "/industries", active_status: true },
  { label: "Solutions", href: "/solutions", active_status: true },
  { label: "Technologies", href: "/technologies", active_status: true },
  { label: "Careers", href: "/careers", active_status: false },
  { label: "Contact Us", href: "/contact", active_status: true },
];

// ─── Home Page ───────────────────────────────────────────────────────────────

export const homePage = {
  hero: {
    eyebrow: "Innovate • Automate • Elevate",
    heading: "Innovating Today,",
    headingAccent: "Intelligent ",
    headingAccent_sub: "Tomorrow.",
    description: "We build AI-backed products and modern software that help teams move faster, cut manual effort, and launch with confidence.",
    note: "Working with early-stage and scaling teams across APAC, Europe, and North America.",
    cta1: { label: "Start a project", href: "/contact" },
    cta2: { label: "See our approach", href: "/about" },
  },
  globalDelivery: {
    eyebrow: "Global delivery",
    heading: "Built for teams operating across countries, systems, and growth stages.",
    intro: "From strategy and product design to engineering and deployment, we partner with organizations that need practical digital execution and measurable business impact.",
    items: [
      { number: "01", title: "Cross-border execution", description: "Distributed teams, multi-market workflows, and global delivery standards without the friction." },
      { number: "02", title: "Senior-led delivery", description: "Direct access to strategy, product, and engineering leaders who keep outcomes clear and accountable." },
      { number: "03", title: "Industry-aware thinking", description: "Solutions shaped around compliance, operations, customer experience, and the realities of your sector." },
      { number: "04", title: "Outcome-focused roadmap", description: "Every recommendation is tied to business value, adoption, and a clear path to ROI." },
    ],
  },
  why: {
    eyebrow: "Why Zevora",
    heading: "Complex problems.",
    headingAccent: "Clear business outcomes.",
    body: "We combine product thinking, design, and engineering so you can turn ideas into working software without the usual delays.",
    ctaLabel: "Meet our approach",
    ctaHref: "/about",
  },
  cta: {
    eyebrow: "Ready to grow smarter?",
    heading: "Ready to start building",
    headingAccent: "your next AI advantage together.",
    ctaLabel: "Talk to our team",
    ctaHref: "/contact",
  },
};

// ─── Services ─────────────────────────────────────────────────────────────────

export type Service = {
  title: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Artificial Intelligence",
    shortDescription: "AI-powered solutions that help you automate, predict, and make smarter decisions.",
    fullDescription: "We design and deploy machine learning models, natural language processing systems, computer vision pipelines, and intelligent automation workflows that reduce manual effort and surface actionable insights at scale.",
    highlights: ["Custom ML model development", "NLP & conversational AI", "Computer vision systems", "AI-powered analytics dashboards"],
    icon: BrainCircuit,
  },
  {
    title: "Software Development",
    shortDescription: "Custom software, web, and mobile applications built for performance and scale.",
    fullDescription: "From concept to production, we build reliable, scalable software that your team and customers depend on. We work across the full stack — designing APIs, building frontends, and architecting backends that grow with your business.",
    highlights: ["Full-stack web applications", "Mobile apps (iOS & Android)", "API design & integration", "Legacy system modernisation"],
    icon: Code2,
  },
  {
    title: "Cloud Solutions",
    shortDescription: "Scalable, secure, and cost-effective cloud solutions for modern businesses.",
    fullDescription: "We help organisations move to the cloud, optimise their infrastructure, and build cloud-native applications that are resilient, cost-effective, and easy to operate. Our architects work across AWS, Azure, and Google Cloud.",
    highlights: ["Cloud migration strategy", "Infrastructure as code", "Cost optimisation", "Multi-cloud architecture"],
    icon: Cloud,
  },
  {
    title: "Data Analytics",
    shortDescription: "Transform your data into actionable insights and drive better outcomes.",
    fullDescription: "We help you collect, structure, and analyse the data you already have — and build the pipelines to continuously surface insight. From dashboards to predictive models, we turn raw data into clear, usable knowledge.",
    highlights: ["Business intelligence dashboards", "Data pipeline engineering", "Predictive analytics", "Data strategy consulting"],
    icon: BarChart3,
  },
  {
    title: "Automation",
    shortDescription: "Streamline workflows and reduce operational costs with intelligent automation.",
    fullDescription: "We identify the high-volume, repetitive processes in your operation and replace them with intelligent workflows that run faster, with fewer errors, and at any scale. The result is leaner operations and teams focused on higher-value work.",
    highlights: ["Robotic Process Automation (RPA)", "Business workflow automation", "Integration & API orchestration", "Process mining & analysis"],
    icon: Cog,
  },
  {
    title: "Cybersecurity",
    shortDescription: "Protect your business with advanced security solutions and monitoring.",
    fullDescription: "We help organisations understand their security posture, address vulnerabilities, and build the controls needed to protect data, systems, and customers. From assessments to ongoing monitoring, we make security practical and proactive.",
    highlights: ["Security assessments & audits", "Threat monitoring & response", "Identity & access management", "Compliance readiness"],
    icon: ShieldCheck,
  },
];

export const featuredProjects = [
  {
    title: "Healthcare Project",
    description: "Healthcare-focused solution designed to improve patient experience, streamline operations, and support digital care workflows.",
    tech: ["Healthcare", "Web", "Workflow"],
    demoUrl: "/contact",
  },
  {
    title: "Job Portal + Web Scraping",
    description: "A job portal with scraping capabilities that aggregates listings and helps users discover opportunities more efficiently.",
    tech: ["Job Portal", "Scraping", "Automation"],
    demoUrl: "/contact",
  },
  {
    title: "LetsCalm – AI Mobile App",
    description: "AI-powered wellness mobile app focused on calm, productivity, and user engagement with personalized experiences.",
    tech: ["AI", "Mobile", "Wellness"],
    demoUrl: "/contact",
  },
  {
    title: "Tree Planting Website",
    description: "A sustainability-driven website created to promote tree planting efforts, awareness, and community engagement.",
    tech: ["Sustainability", "Web", "Community"],
    demoUrl: "/contact",
  },
  {
    title: "AI Email Bot",
    description: "Intelligent email automation tool built to reduce repetitive communication work and improve response efficiency.",
    tech: ["AI", "Email", "Automation"],
    demoUrl: "/contact",
  },
  {
    title: "ERP – Current Project",
    description: "Ongoing enterprise resource planning initiative designed to centralize operations, reporting, and business process coordination.",
    tech: ["ERP", "Operations", "Business"],
    demoUrl: "/contact",
  },
  {
    title: "Crackers Sales – Current Project",
    description: "Current sales project focused on product distribution, order tracking, and improving retail sales visibility.",
    tech: ["Sales", "Retail", "Dashboard"],
    demoUrl: "/contact",
  },
];

// ─── Stats ────────────────────────────────────────────────────────────────────

export const stats = [
  { value: "5+", label: "Happy Clients", icon: Users },
  { value: "12+", label: "Projects Delivered", icon: BriefcaseBusiness },
  { value: "5+", label: "Expert Professionals", icon: Award },
  { value: "2+", label: "Countries Served", icon: Globe2 },
];

// ─── Process ─────────────────────────────────────────────────────────────────

export const process = [
  { number: "01", title: "Discover", description: "We learn your goals, constraints, and opportunities." },
  { number: "02", title: "Design", description: "We turn the strategy into a clear, scalable solution." },
  { number: "03", title: "Build", description: "Our team develops, tests, and refines every detail." },
  { number: "04", title: "Elevate", description: "We launch, measure, and keep improving with you." },
];

// ─── Principles ──────────────────────────────────────────────────────────────

export const principles = [
  { number: "01", title: "Curious by default", description: "We ask better questions before we write a line of code." },
  { number: "02", title: "Built for momentum", description: "Small, thoughtful decisions compound into products that last." },
  { number: "03", title: "Outcomes over noise", description: "Every recommendation connects back to the work that matters." },
];

// ─── FAQs ─────────────────────────────────────────────────────────────────────

export const faqs = [
  { question: "What does Zevora AI Tech do?", answer: "We combine AI, cloud, software, automation, and analytics to help ambitious teams work smarter and grow with confidence." },
  { question: "Can you work with an existing product or team?", answer: "Yes. We can join at the strategy, build, modernization, or optimization stage and adapt to your current workflow." },
  { question: "How do we get started?", answer: "Tell us what you are trying to achieve. We will come back with a focused conversation and a practical next step." },
];

// ─── About Page ──────────────────────────────────────────────────────────────

export const aboutPage = {
  eyebrow: "About Zevora",
  title: "Built to turn complexity into momentum.",
  description: "We help startups and ambitious teams build practical AI and software solutions that accelerate growth and simplify operations.",
  motive: {
    eyebrow: "Our mission",
    heading: "Technology should unlock momentum,",
    headingAccent: "not create friction.",
    paragraphs: [
      "Zevora AI Tech was founded to help fast-moving companies turn ambitious ideas into working products. We focus on the work that moves teams forward, not on buzzwords.",
      "Our team blends product thinking, engineering, and operations so we can help you launch faster and iterate with confidence.",
      "We partner with founders and leaders to solve real problems, build meaningful products, and keep the work grounded in value.",
    ],
  },
  values: [
    { number: "01", title: "Integrity first", description: "We give honest advice, even when it challenges the easiest path." },
    { number: "02", title: "Craft over shortcuts", description: "We build durable systems, not temporary fixes that break under pressure." },
    { number: "03", title: "Partnership mindset", description: "Your goals shape our work, and your success is the measure of our value." },
    { number: "04", title: "Continuous learning", description: "We invest in insight, skill, and execution so your business keeps improving." },
  ],
  team: [
    {
      name: "Sugasini M",
      initials: "SM",
      role: "Chief Executive Officer (CEO)",
      summary: "Sets the vision, strategy and direction for Zevora AI Tech.",
      bio: "As the Chief Executive Officer of Zevora AI Tech, Sugasini M drives the company’s vision, business growth, and strategic direction. With a background in business and customer-focused operations, she brings strong capabilities in leadership, team management, client relationship management, and business development. She works closely with the technical leadership team to bridge business needs and technology, ensuring that Zevora delivers practical, scalable, and impactful solutions for its clients.",
      image: "/images/suga.png",
      linkedin: "https://www.linkedin.com/in/sugasini-m-539bab417/",
    },
    {
      name: "Nandhakumar M",
      initials: "NM",
      role: "Managing Director (MD)",
      highlight: "Operations and partnerships",
      summary: "Nandhakumar oversees operations, partnerships, and the delivery of every client engagement at Zevora AI Tech.",
      bio: "Oversees operations, partnerships, and client success, driving sustainable growth and excellence.",
      features: [
        { title: "Operational Excellence", description: "Ensures efficient operations and delivery.", icon: Cog },
        { title: "Strategic Partnerships", description: "Builds and nurtures meaningful business relationships.", icon: Users },
        { title: "Sustainable Growth", description: "Drives long-term value and client success.", icon: Globe2 },
      ],
      image: "/images/nand.png",
      linkedin: "https://www.linkedin.com/in/nandhakumar-m-85344a178/",
    },
  ],
};

// ─── Services Page ───────────────────────────────────────────────────────────

export const servicesPage = {
  eyebrow: "Our services",
  title: "Capabilities designed to move your business forward.",
  description: "We combine AI, software engineering, cloud architecture, data strategy, and automation to help teams simplify operations, improve decision-making, and scale with confidence.",
};

// ─── Industries Page ──────────────────────────────────────────────────────────

export type Industry = { title: string; description: string; icon: LucideIcon };

export const industriesPage = {
  eyebrow: "Industries",
  title: "Solutions shaped around the real world.",
  description: "We adapt our technology and thinking to the pressures, people, and possibilities of your industry.",
  note: "We have delivered projects across each of these verticals. Get in touch to hear about the specific experience most relevant to you.",
  industries: [
    { title: "Manufacturing", description: "Predictive maintenance, quality control automation, and supply chain optimisation for modern manufacturers.", icon: Factory },
    { title: "Healthcare", description: "Secure patient data systems, diagnostic AI tools, and workflow automation for healthcare providers.", icon: Heart },
    { title: "Retail & E-commerce", description: "Personalisation engines, inventory intelligence, and seamless digital commerce platforms.", icon: ShoppingCart },
    { title: "Financial Services", description: "Risk analytics, fraud detection, and compliant data infrastructure for banks and fintechs.", icon: Landmark },
    { title: "Logistics", description: "Route optimisation, real-time tracking, and warehouse automation for logistics and supply chain teams.", icon: Truck },
    { title: "Energy", description: "Asset monitoring, consumption analytics, and sustainability reporting for energy organisations.", icon: Zap },
    { title: "Education", description: "Adaptive learning platforms, administrative automation, and engagement analytics for educational institutions.", icon: GraduationCap },
    { title: "Real Estate", description: "Property intelligence, document automation, and tenant experience platforms for real estate operators.", icon: Building2 },
  ] as Industry[],
};

// ─── Technologies Page ────────────────────────────────────────────────────────

export const technologiesPage = {
  eyebrow: "Technologies",
  title: "A modern stack, chosen with intent.",
  description: "We use the right tools for the job, creating dependable foundations for intelligent products and operations.",
  categories: [
    { title: "AI & Machine Learning", items: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "LangChain", "OpenAI API", "Hugging Face"] },
    { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Native"] },
    { title: "Backend", items: ["Node.js", "Python (FastAPI / Django)", "Go", "REST & GraphQL APIs", "WebSockets"] },
    { title: "Cloud & Infrastructure", items: ["AWS", "Microsoft Azure", "Google Cloud Platform", "Docker", "Kubernetes", "Terraform"] },
    { title: "Data & Analytics", items: ["PostgreSQL", "MongoDB", "Apache Spark", "Kafka", "dbt", "Power BI", "Tableau"] },
    { title: "Security & DevOps", items: ["GitHub Actions", "CI / CD pipelines", "OWASP practices", "Vault", "Datadog", "Sentry"] },
  ],
  philosophy: {
    heading: "Tools in service of outcomes.",
    body: "We do not chase every new framework. We choose technologies that are mature enough to be reliable, modern enough to remain relevant, and open enough to avoid lock-in. Every choice we make is guided by what gives you the most durable foundation.",
  },
};

// ─── Careers Page ─────────────────────────────────────────────────────────────

export const careersPage = {
  eyebrow: "Careers",
  title: "Bring your sharpest thinking.",
  description: "Join a curious team building useful technology for the businesses shaping tomorrow.",
  culture: [
    { title: "Work that matters", description: "Every project we take on has a real impact on the organisations and people using our work." },
    { title: "Continuous growth", description: "We invest in our team's learning through dedicated time, resources, and mentorship." },
    { title: "Collaborative by nature", description: "We believe the best ideas emerge from diverse perspectives and honest conversation." },
    { title: "Flexible environment", description: "We focus on outcomes, not hours. We trust our team to do great work in the way that suits them." },
  ],
  roles: [
    { title: "AI / ML Engineer", type: "Full-time", location: "Remote / Coimbatore", description: "Design, train, and deploy machine learning models for our client projects." },
    { title: "Full-Stack Developer", type: "Full-time", location: "Remote / Coimbatore", description: "Build scalable web applications using React, Node.js, and cloud infrastructure." },
    { title: "Cloud Architect", type: "Full-time", location: "Remote / Coimbatore", description: "Design resilient, cost-efficient cloud architectures for enterprise clients." },
    { title: "Data Engineer", type: "Full-time", location: "Remote / Coimbatore", description: "Build and maintain the data pipelines that power our analytics and AI solutions." },
    { title: "Business Analyst", type: "Full-time", location: "Remote / Coimbatore", description: "Bridge client needs and technical delivery, turning ambiguity into clear requirements." },
  ],
  applicationNote: "Don't see your role listed? We are always open to hearing from exceptional people.",
};

// ─── Contact Page ─────────────────────────────────────────────────────────────

export const contactPage = {
  eyebrow: "Contact",
  title: "Tell us what you want to build.",
  description: "Share your challenge, idea, or growth goal and we’ll respond with a practical next step.",
  infoItems: [
    { label: "Email us", value: "hello@zevora.ai", href: "mailto:hello@zevora.ai" },
    { label: "Call us", value: "+91 63856 92143", href: "tel:+916385692143" },
    { label: "Mobile", value: "+91 95978 95084", href: "tel:+919597895084" },
    { label: "Based in", value: "Coimbatore, India", href: null },
  ],
};
