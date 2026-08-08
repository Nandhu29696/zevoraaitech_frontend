import {
  BarChart3, BrainCircuit, Cloud, Code2, Cog, ShieldCheck,
  Users, BriefcaseBusiness, Award, Globe2,
  Factory, Heart, ShoppingCart, Building2, Truck, Zap, GraduationCap, Landmark,
  type LucideIcon,
} from "lucide-react";

// ─── Company ──────────────────────────────────────────────────────────────────

export const company = {
  name: "Zevora AI Tech",
  legalName: "Zevora AI Tech Private Limited",
  email: "hello@zevora.ai",
  phone: "+91 00000 00000",
  location: "Chennai, India",
  copyright: `© ${new Date().getFullYear()} Zevora AI Tech Private Limited`,
  footerTagline: "Innovating the future with AI.",
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
    description: "Zevora AI Tech delivers next-gen IT and AI solutions that empower businesses to innovate, automate, and scale in a rapidly evolving digital world.",
    note: "Trusted technology partner for forward-thinking teams",
    cta1: { label: "Explore our services", href: "/services" },
    cta2: { label: "About our company", href: "/about" },
  },
  why: {
    eyebrow: "Why Zevora",
    heading: "Complex ideas.",
    headingAccent: "Clear outcomes.",
    body: "The best technology feels simple to the people using it. We bring sharp thinking, practical engineering, and a human point of view to every engagement.",
    ctaLabel: "Meet our approach",
    ctaHref: "/about",
  },
  cta: {
    eyebrow: "Ready when you are",
    heading: "Let's make the",
    headingAccent: "next move intelligent.",
    ctaLabel: "Get in touch",
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
    title: "AI Knowledge Assistant",
    description: "A conversational AI experience that helps teams search internal knowledge instantly and work smarter.",
    tech: ["Next.js", "Azure OpenAI", "RAG"],
    demoUrl: "https://example.com/demo/ai-assistant",
  },
  {
    title: "Smart Operations Dashboard",
    description: "A real-time operations view that combines analytics, alerts, and workflow automation in one place.",
    tech: ["React", "Node.js", "Power BI"],
    demoUrl: "https://example.com/demo/operations-dashboard",
  },
  {
    title: "Customer Experience Platform",
    description: "A polished digital experience designed to simplify onboarding, support, and service delivery for modern clients.",
    tech: ["TypeScript", "Cloud", "Analytics"],
    demoUrl: "https://example.com/demo/customer-platform",
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
  title: "A practical partner for ambitious ideas.",
  description: "We bring strategy, engineering, and intelligence together to help businesses move forward with confidence.",
  motive: {
    eyebrow: "Our mission",
    heading: "We exist to make technology",
    headingAccent: "work for people.",
    paragraphs: [
      "Zevora AI Tech was founded with a single conviction: that the best technology removes friction rather than adding it. We are a team of engineers, strategists, and problem-solvers who believe that AI and modern software, when built thoughtfully, give organisations a meaningful and lasting edge.",
      "Our practice spans the full solution lifecycle — from discovery and architecture through to build, launch, and continuous improvement. Whether you are automating an internal workflow, scaling a consumer product, or navigating a digital transformation, we bring the right combination of tools, talent, and thinking to make it happen.",
    ],
  },
  values: [
    { number: "01", title: "Integrity first", description: "We give honest advice, even when it is not what you hoped to hear." },
    { number: "02", title: "Craft over shortcuts", description: "Every decision we make is measured against what will last." },
    { number: "03", title: "Partnership mindset", description: "Your success is how we measure ours — full stop." },
    { number: "04", title: "Continuous learning", description: "We invest in knowledge so you benefit from what is possible today." },
  ],
  team: [
    {
      name: "Sugasini M",
      initials: "SM",
      role: "Chief Executive Officer",
      bio: "Sugasini leads Zevora AI Tech with a clear vision for the future of intelligent systems. With deep expertise in AI strategy and enterprise transformation, she guides the company's mission to help organisations embrace technology as a competitive advantage. Her leadership philosophy centres on clarity, accountability, and building teams that do meaningful work.",
      linkedin: "#",
    },
    {
      name: "Nandhakumar M",
      initials: "NM",
      role: "Managing Director",
      bio: "Nandhakumar oversees operations, partnerships, and the delivery of every client engagement at Zevora AI Tech. With a strong background in software engineering and business development, he ensures the company's capabilities keep pace with the demands of an evolving market. He is known for bridging the gap between technical possibility and practical outcomes.",
      linkedin: "#",
    },
  ],
};

// ─── Services Page ───────────────────────────────────────────────────────────

export const servicesPage = {
  eyebrow: "Our services",
  title: "Capabilities that turn complexity into clarity.",
  description: "From intelligent automation to modern software systems, we build the capabilities your next chapter needs.",
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
    { title: "AI / ML Engineer", type: "Full-time", location: "Remote / Chennai", description: "Design, train, and deploy machine learning models for our client projects." },
    { title: "Full-Stack Developer", type: "Full-time", location: "Remote / Chennai", description: "Build scalable web applications using React, Node.js, and cloud infrastructure." },
    { title: "Cloud Architect", type: "Full-time", location: "Remote / Chennai", description: "Design resilient, cost-efficient cloud architectures for enterprise clients." },
    { title: "Data Engineer", type: "Full-time", location: "Remote / Chennai", description: "Build and maintain the data pipelines that power our analytics and AI solutions." },
    { title: "Business Analyst", type: "Full-time", location: "Remote / Chennai", description: "Bridge client needs and technical delivery, turning ambiguity into clear requirements." },
  ],
  applicationNote: "Don't see your role listed? We are always open to hearing from exceptional people.",
};

// ─── Contact Page ─────────────────────────────────────────────────────────────

export const contactPage = {
  eyebrow: "Contact",
  title: "Tell us what you want to make possible.",
  description: "Share a little about the challenge, opportunity, or idea on your mind. We will take it from there.",
  infoItems: [
    { label: "Email us", value: "hello@zevora.ai", href: "mailto:hello@zevora.ai" },
    { label: "Call us", value: "+91 00000 00000", href: "tel:+910000000000" },
    { label: "Based in", value: "Chennai, India", href: null },
  ],
};
