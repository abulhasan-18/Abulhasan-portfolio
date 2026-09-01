import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { Providers } from "./Providers";

const ibmPlexSans = IBM_Plex_Sans({ 
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"], 
  variable: "--font-ibm-plex-sans",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Mohammed Abulhasan M — Software Engineer & Analyst",
  description:
    "Software Engineer & Analyst — Flutter & Web App Development, SQL Star Schema Data Modeling, Power BI Analytics, and Data-Driven Business Decisions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ibmPlexSans.variable} font-sans antialiased bg-slate-50 text-slate-900 dark:bg-[#0a0c10] dark:text-slate-100 min-h-screen transition-colors duration-200`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
