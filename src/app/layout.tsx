import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "gigaportfolio",
  description: "Might be your next software developper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
