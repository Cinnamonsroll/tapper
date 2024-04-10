import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tapper",
  description: "Fun tapping game",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["tap"],
  icons: [
    { rel: "apple-touch-icon", url: "icon.png" },
    { rel: "icon", url: "icon.png" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}