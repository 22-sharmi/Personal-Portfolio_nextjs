import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";


const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Sharmila's Portfolio",
  description: "Full Stack Web Developer | Next.js, Tailwind CSS, MongoDB",
  openGraph: {
    title: "Sharmila's Portfolio",
    description: "Building dynamic web experiences with Next.js & Tailwind CSS.",
    url: "https://sharmi-personal-portfolio-22.vercel.app/",
    siteName: "Sharmila's Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sharmila's Portfolio - Full Stack Developer",
      },
    ],
    type: "website",
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
      <meta name="google-site-verification" content="lxyoTWT44aX1BWXBYPiCAzCPUyxIgyYmv2WkU88uGFM" />
      </head>
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
