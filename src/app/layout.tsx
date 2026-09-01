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
  title: "Mohammed Abulhasan M — Portfolio | BA • Data & BI • Software Engineer",
  description:
    "End-to-End Technologist: Mobile & Web App Development (Flutter, Next.js, Spring Boot), SQL Star Schema Data Modeling, Power BI & Tableau Analytics, and Business Strategy (BRD, Process Mapping, UAT).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ibmPlexSans.variable} font-sans antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
