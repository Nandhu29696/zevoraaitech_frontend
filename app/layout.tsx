import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Zevora AI Tech | Innovating Today, Intelligent Tomorrow",
  description: "Zevora AI Tech builds intelligent digital solutions across AI, cloud, software, automation, and data analytics.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en">
    <body>
      <Header />{children}<Footer />
    </body>
  </html>;
}
