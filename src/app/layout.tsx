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
        className={`bg-primary-800 text-primary-100 relative overflow-hidden ${manrope.variable} ${playfairDisplay.variable} font-manrope`}
      >
        <div
          aria-hidden
          className="bg-primary-900 w-full aspect-square absolute top-1/6 -right-1/3 -z-10 rounded-[100%] hidden md:block"
        ></div>
        {children}
      </body>
    </html>
  );
}
