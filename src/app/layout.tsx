import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Code Challenge - MultiStep Form",
  description: "A multi-step form built with Next.js and React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-radial from-primary-200 to-primary-100 font-sans text-primary-600">
        {children}
      </body>
    </html>
  );
}
