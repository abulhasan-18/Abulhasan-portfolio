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
  title: "Mohammed Abulhasan M — Portfolio",
  description:
    "Software & Data Engineer — Java (Spring Boot), Flutter, PostgreSQL/Supabase, Next.js, AWS, DBT.",
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
