import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "./globals.css";

const DMSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Avi Bhatnagar",
  description:
    "A Full Stack Developer with a passion for creating innovative and user-friendly web applications.",

  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body
        className={`${DMSans.variable} font-[family-name:var(--font-dm-sans)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
