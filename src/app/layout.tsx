import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import ParticleBg from "@/components/ParticleBg";
import CommandPalette from "@/components/CommandPalette";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md. Saiful Islam | DevOps Engineer & Cloud Infrastructure Architect",
  description: "Portfolio of Md. Saiful Islam, featuring AWS/Azure provisioning, CI/CD automation pipelines, Kubernetes clustering, and monitoring telemetry setups.",
  keywords: ["DevOps Engineer", "Cloud Infrastructure", "CI/CD Automation", "Terraform", "Kubernetes", "Docker", "AWS", "Azure"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-slate-50 dark:bg-[#0B1120] text-slate-800 dark:text-slate-200">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <ParticleBg />
          {children}
          <CommandPalette />
        </ThemeProvider>
      </body>
    </html>
  );
}
