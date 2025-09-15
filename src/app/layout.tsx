import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reef Support - Professional Reef Aquarium Services",
  description: "Expert reef aquarium maintenance, consulting, and support services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}