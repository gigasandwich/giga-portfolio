import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const fullName = "Yvan Noah RABETOKOTANY";
const job = "Software Developer";
const url = "https://gigalab.tech";
const ogImage = "/og.png";
const icon = "favicon.ico";

const title = `${fullName} - ${job}`;
const description = `${fullName}, a ${job} engaged in producing CLEAN and MAINTAINABLE code`;

export const metadata: Metadata = {
  title: title,
  description: description,
  icons: {
    icon: icon,
    shortcut: icon,
    apple: icon,
  },
  openGraph: {
    type: "website",
    url: url,
    title: title,
    description: description,
    siteName: `${fullName} Portfolio`,
    images: [{
      url: ogImage,
      width: 1200,
      height: 630,
      alt: title,
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: fullName,
              jobTitle: job,
              url: url,
              sameAs: [
                "https://github.com/gigasandwich",
                "https://linkedin.com/in/yvan-noah-rabetokotany-3450543aa",
              ],
            }),
          }}
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={`${inter.variable} ${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
