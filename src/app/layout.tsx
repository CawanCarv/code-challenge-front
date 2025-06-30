import type { Metadata } from "next";
import "./globals.css";
import { Manrope, Playfair_Display } from "next/font/google";

export const metadata: Metadata = {
  title: "Code Challenge | MultiStep Form",
  description: "A multi-step form built with Next.js and React",
};

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-primary-800 text-primary-100 relative ${manrope.variable} ${playfairDisplay.variable} font-manrope`}
      >
        <div
          aria-hidden
          className="pointer-events-none overflow-hidden fixed top-0 left-0 w-full h-full -z-10"
        >
          <div className="absolute bg-primary-900 w-screen aspect-square top-1/6 -right-1/3 rounded-full" />
        </div>
        {children}
      </body>
    </html>
  );
}
