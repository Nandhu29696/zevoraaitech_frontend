import {
  BarChart3,
  BrainCircuit,
  Cloud,
  Code2,
  Cog,
  ShieldCheck,
  Users,
  BriefcaseBusiness,
  Award,
  Globe2,
  type LucideIcon,
} from "lucide-react";

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Technologies", href: "/technologies" },
  { label: "Careers", href: "/careers" },
];

export type Service = { title: string; description: string; icon: LucideIcon };

export const services: Service[] = [
  { title: "Artificial Intelligence", description: "AI-powered solutions that help you automate, predict, and make smarter decisions.", icon: BrainCircuit },
  { title: "Software Development", description: "Custom software, web, and mobile applications built for performance and scale.", icon: Code2 },
  { title: "Cloud Solutions", description: "Scalable, secure, and cost-effective cloud solutions for modern businesses.", icon: Cloud },
  { title: "Data Analytics", description: "Transform your data into actionable insights and drive better outcomes.", icon: BarChart3 },
  { title: "Automation", description: "Streamline workflows and reduce operational costs with intelligent automation.", icon: Cog },
  { title: "Cybersecurity", description: "Protect your business with advanced security solutions and monitoring.", icon: ShieldCheck },
];

export const stats = [
  { value: "50+", label: "Happy Clients", icon: Users },
  { value: "120+", label: "Projects Delivered", icon: BriefcaseBusiness },
  { value: "25+", label: "Expert Professionals", icon: Award },
  { value: "5+", label: "Countries Served", icon: Globe2 },
];

export const process = [
  ["01", "Discover", "We learn your goals, constraints, and opportunities."],
  ["02", "Design", "We turn the strategy into a clear, scalable solution."],
  ["03", "Build", "Our team develops, tests, and refines every detail."],
  ["04", "Elevate", "We launch, measure, and keep improving with you."],
];

export const faqs = [
  ["What does Zevora AI Tech do?", "We combine AI, cloud, software, automation, and analytics to help ambitious teams work smarter and grow with confidence."],
  ["Can you work with an existing product or team?", "Yes. We can join at the strategy, build, modernization, or optimization stage and adapt to your current workflow."],
  ["How do we get started?", "Tell us what you are trying to achieve. We will come back with a focused conversation and a practical next step."],
];
