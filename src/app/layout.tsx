import type { Metadata } from "next";
import { Orbitron, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dte-solutions.icu"),
  title: "Drew Ernst | Data Analyst & Full-Stack Developer",
  description:
    "Data analyst and full-stack developer building workflow tools, behavioral products, and data-driven web apps.",
  openGraph: {
    title: "Drew Ernst | Data Analyst & Full-Stack Developer",
    description: "Workflow tools, behavioral products, and data-driven web apps.",
    images: ["/DTE-Portfolio/assets/DTE84resume.png"],
  },
  keywords: [
    "Frontend Developer",
    "UI Designer",
    "UX Design",
    "React Developer",
    "Next.js",
    "Healthcare Tech",
    "Product Design",
    "HIPAA-Safe Design",
  ],
  authors: [{ name: "Drew Ernst" }],
  twitter: {
    card: "summary_large_image",
    title: "Drew Ernst | Data Analyst & Full-Stack Developer",
    description:
      "Workflow tools, behavioral products, and data-driven web apps.",
    images: ["/DTE-Portfolio/assets/DTE84resume.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">
        {children}
        <Script
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}


