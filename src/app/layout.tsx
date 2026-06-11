import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Akshat Agnihotri | Data Analyst & AI Solutions Builder",
  description:
    "Portfolio of Akshat Agnihotri – Data Analyst, Business Analyst, and AI Solutions Builder. Specializing in SQL, Python, Power BI, Machine Learning, and LLM-powered analytics.",
  keywords: [
    "Data Analyst",
    "Business Analyst",
    "AI Solutions Builder",
    "Machine Learning",
    "SQL",
    "Python",
    "Power BI",
    "Akshat Agnihotri",
  ],
  authors: [{ name: "Akshat Agnihotri" }],
  creator: "Akshat Agnihotri",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://akshat-agnihotri.vercel.app",
    title: "Akshat Agnihotri | Data Analyst & AI Solutions Builder",
    description:
      "Transforming data into actionable insights through analytics, machine learning, and AI-powered solutions.",
    siteName: "Akshat Agnihotri Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshat Agnihotri | Data Analyst & AI Solutions Builder",
    description:
      "Transforming data into actionable insights through analytics, machine learning, and AI-powered solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
